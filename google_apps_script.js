// =========================================================================
//                  KASIRKU GOOGLE APPS SCRIPT BACKEND ENGINE
// =========================================================================
// Petunjuk Penggunaan:
// A. CARA REKOMENDASI (Container-bound Script):
//    1. Buka Google Sheet baru Anda.
//    2. Klik menu "Ekstensi" (Extensions) > "Apps Script".
//    3. Hapus seluruh kode default di editor, lalu paste script di bawah ini.
//    4. Biarkan variabel SPREADSHEET_ID kosong ("") karena spreadsheet akan otomatis terdeteksi.
//
// B. CARA ALTERNATIF (Standalone Script dari script.google.com):
//    1. Jika Anda membuat script di script.google.com langsung (bukan dari dalam sheet):
//    2. Buka Google Sheet Anda, salin ID dari URL-nya (bagian antara /d/ dan /edit, misal: "1aBcDe...").
//    3. Tempelkan ID tersebut ke variabel SPREADSHEET_ID di bawah ini (misal: const SPREADSHEET_ID = "1aBcDe...").
//
// PROSES PENERAPAN (DEPLOYMENT):
// 1. Klik ikon Save (Disket) di editor Apps Script.
// 2. Klik "Terapkan" (Deploy) > "Penerapan Baru" (New Deployment).
// 3. Klik ikon gear (Jenis Penerapan) > pilih "Aplikasi Web" (Web App).
// 4. Konfigurasi:
//    - Jalankan sebagai: "Saya" (akun Google Anda).
//    - Siapa yang memiliki akses: "Siapa saja" (Anyone - agar POS lokal dapat mengakses).
// 5. Klik "Terapkan" (Deploy). Berikan otorisasi izin akun Google Anda jika diminta.
// 6. Salin URL Aplikasi Web yang diberikan, lalu paste ke menu Pengaturan di kasirKu.
// =========================================================================

// JIKA Anda membuat Script ini secara Standalone (tidak dari dalam Google Sheet),
// masukkan ID Google Sheet Anda di bawah ini (bisa diambil dari URL spreadsheet Anda):
// Contoh: const SPREADSHEET_ID = "1aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890";
const SPREADSHEET_ID = "";

function getSpreadsheet() {
  let ss = null;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch(e) {}
  
  if (!ss && SPREADSHEET_ID) {
    try {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch(e) {}
  }
  
  if (!ss) {
    throw new Error("Spreadsheet tidak terdeteksi. Silakan buka Google Sheet Anda, pilih menu 'Ekstensi' > 'Apps Script' lalu salin kode ke sana. Jika menggunakan Script Standalone, pastikan isi SPREADSHEET_ID di bagian atas kode.");
  }
  return ss;
}

function doGet(e) {
  // Mengunduh seluruh tabel database di cloud untuk sinkronisasi lokal
  try {
    const data = {
      products: getSheetData("produk"),
      orders: getSheetData("transaksi"),
      crm: getSheetData("crm_member"),
      ingredients: getSheetData("bahan_baku"),
      voidLogs: getSheetData("log_void"),
      ppob: getSheetData("ppob_transaksi"),
      ppobAccounts: getSheetData("ppob_akun"),
      ppobTransfers: getSheetData("ppob_transfer")
    };
    return ContentService.createTextOutput(JSON.stringify({ status: "success", data: data }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const action = payload.action;
    const data = payload.data;
    
    if (action === "sync_all") {
      // Menimpa / inisialisasi awal seluruh lembar data dari lokal ke cloud
      if (data.products) overwriteSheet("produk", data.products);
      if (data.orders) overwriteSheet("transaksi", data.orders);
      if (data.crm) overwriteSheet("crm_member", data.crm);
      if (data.ingredients) overwriteSheet("bahan_baku", data.ingredients);
      if (data.voidLogs) overwriteSheet("log_void", data.voidLogs);
      if (data.ppob) overwriteSheet("ppob_transaksi", data.ppob);
      if (data.ppobAccounts) overwriteSheet("ppob_akun", data.ppobAccounts);
      if (data.ppobTransfers) overwriteSheet("ppob_transfer", data.ppobTransfers);
      
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Inisialisasi database cloud sukses" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === "add_order") {
      appendRowToSheet("transaksi", data.order);
      
      // Update stok produk
      if (data.productsStockUpdate) {
        data.productsStockUpdate.forEach(u => updateProductStock(u.id, u.qty));
      }
      // Update stok bahan baku resep
      if (data.ingredientsStockUpdate) {
        data.ingredientsStockUpdate.forEach(u => updateIngredientStock(u.id, u.qty));
      }
      // Update poin CRM Member jika ada
      if (data.crmUpdate) {
        updateCrmMember(data.crmUpdate);
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Transaksi berhasil tercatat di Cloud" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === "add_ppob") {
      appendRowToSheet("ppob_transaksi", data);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Transaksi PPOB berhasil tercatat di Cloud" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === "void_order") {
      updateOrderStatus(data.orderId, "Dibatalkan");
      appendRowToSheet("log_void", data.voidLog);
      
      // Memulihkan kembali stok produk
      if (data.productsStockUpdate) {
        data.productsStockUpdate.forEach(u => updateProductStock(u.id, u.qty)); // qty positif mengembalikan stok
      }
      // Memulihkan kembali stok bahan baku
      if (data.ingredientsStockUpdate) {
        data.ingredientsStockUpdate.forEach(u => updateIngredientStock(u.id, u.qty));
      }
      // Mengurangi / memotong kembali poin CRM Member
      if (data.crmUpdate) {
        updateCrmMember(data.crmUpdate);
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Void berhasil disinkronisasi ke Cloud" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === "update_crm") {
      updateCrmMember(data);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "CRM Member berhasil disinkronisasi" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === "update_products") {
      overwriteSheet("produk", data);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Katalog produk cloud berhasil diperbarui" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (action === "update_ingredients") {
      overwriteSheet("bahan_baku", data);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Stok bahan baku cloud berhasil diperbarui" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === "update_ppob_accounts") {
      overwriteSheet("ppob_akun", data.accounts);
      overwriteSheet("ppob_transfer", data.transfers);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Saldo akun dan transfer cloud berhasil diperbarui" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Aksi tidak dikenal: " + action }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// --- FUNGSI HELPER DATABASE ---

function getSheetData(sheetName) {
  const sheet = getOrCreateSheet(sheetName);
  const rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return [];
  
  const headers = rows[0];
  const data = [];
  
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const obj = {};
    headers.forEach((h, colIdx) => {
      let val = row[colIdx];
      // Parse string JSON jika merupakan object/array
      if (typeof val === "string" && (val.startsWith("{") || val.startsWith("["))) {
        try { val = JSON.parse(val); } catch(e) {}
      }
      obj[h] = val;
    });
    data.push(obj);
  }
  return data;
}

// Membuat sheet dan baris header jika belum tersedia
function getOrCreateSheet(name) {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    let headers = [];
    if (name === "produk") headers = ["id", "name", "category", "price", "stock", "unit", "barcode", "businessMode", "modifiers"];
    if (name === "transaksi") headers = ["orderId", "timestamp", "customerName", "subtotal", "serviceCharge", "tax", "rounding", "discount", "grandTotal", "paymentMethod", "cashAmount", "cashChange", "status", "items"];
    if (name === "crm_member") headers = ["id", "name", "phone", "points", "tier", "visitCount", "totalSpent"];
    if (name === "bahan_baku") headers = ["id", "name", "stock", "unit", "minStock"];
    if (name === "log_void") headers = ["voidId", "orderId", "timestamp", "amount", "items", "reason"];
    if (name === "ppob_transaksi") headers = ["id", "timestamp", "type", "provider", "target", "amount", "fee", "cost", "profit", "qrisSurcharge", "paymentMethod", "sourceAccountId"];
    if (name === "ppob_akun") headers = ["id", "name", "balance"];
    if (name === "ppob_transfer") headers = ["id", "timestamp", "type", "fromAccountId", "toAccountId", "amount", "note"];
    
    if (headers.length > 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
  }
  return sheet;
}

function overwriteSheet(sheetName, arrayData) {
  const sheet = getOrCreateSheet(sheetName);
  sheet.clearContents();
  
  let headers = [];
  if (sheetName === "produk") headers = ["id", "name", "category", "price", "stock", "unit", "barcode", "businessMode", "modifiers"];
  if (sheetName === "transaksi") headers = ["orderId", "timestamp", "customerName", "subtotal", "serviceCharge", "tax", "rounding", "discount", "grandTotal", "paymentMethod", "cashAmount", "cashChange", "status", "items"];
  if (sheetName === "crm_member") headers = ["id", "name", "phone", "points", "tier", "visitCount", "totalSpent"];
  if (sheetName === "bahan_baku") headers = ["id", "name", "stock", "unit", "minStock"];
  if (sheetName === "log_void") headers = ["voidId", "orderId", "timestamp", "amount", "items", "reason"];
  if (sheetName === "ppob_transaksi") headers = ["id", "timestamp", "type", "provider", "target", "amount", "fee", "cost", "profit", "qrisSurcharge", "paymentMethod", "sourceAccountId"];
  if (sheetName === "ppob_akun") headers = ["id", "name", "balance"];
  if (sheetName === "ppob_transfer") headers = ["id", "timestamp", "type", "fromAccountId", "toAccountId", "amount", "note"];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  if (!arrayData || arrayData.length === 0) return;
  
  const values = arrayData.map(item => {
    return headers.map(h => {
      let val = item[h];
      if (val === undefined || val === null) return "";
      if (typeof val === "object") return JSON.stringify(val);
      return val;
    });
  });
  
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}

function appendRowToSheet(sheetName, item) {
  const sheet = getOrCreateSheet(sheetName);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  const row = headers.map(h => {
    let val = item[h];
    if (val === undefined || val === null) return "";
    if (typeof val === "object") return JSON.stringify(val);
    return val;
  });
  
  sheet.appendRow(row);
}

function updateProductStock(id, diff) {
  const sheet = getOrCreateSheet("produk");
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      const currentStock = parseFloat(data[i][4]) || 0;
      sheet.getRange(i + 1, 5).setValue(currentStock + diff);
      break;
    }
  }
}

function updateIngredientStock(id, diff) {
  const sheet = getOrCreateSheet("bahan_baku");
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      const currentStock = parseFloat(data[i][2]) || 0;
      sheet.getRange(i + 1, 3).setValue(currentStock + diff);
      break;
    }
  }
}

function updateCrmMember(member) {
  const sheet = getOrCreateSheet("crm_member");
  const data = sheet.getDataRange().getValues();
  let found = false;
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == member.id) {
      sheet.getRange(i + 1, 2).setValue(member.name);
      sheet.getRange(i + 1, 3).setValue(member.phone);
      sheet.getRange(i + 1, 4).setValue(member.points);
      sheet.getRange(i + 1, 5).setValue(member.tier);
      sheet.getRange(i + 1, 6).setValue(member.visitCount);
      sheet.getRange(i + 1, 7).setValue(member.totalSpent);
      found = true;
      break;
    }
  }
  
  if (!found) {
    appendRowToSheet("crm_member", member);
  }
}

function updateOrderStatus(orderId, status) {
  const sheet = getOrCreateSheet("transaksi");
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == orderId) {
      sheet.getRange(i + 1, 13).setValue(status);
      break;
    }
  }
}
