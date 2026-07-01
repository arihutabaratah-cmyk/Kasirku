/**
 * kasirKu - Modern Cashier POS Frontend
 * Core Application Logic, LocalStorage State, and Web Audio Sound FX
 */

// --- Default Modifiers Data ---
const FOOD_MODIFIERS = [
    {
        id: "mod-cheese",
        name: "Extra Cheese",
        type: "checkbox",
        price: 5000
    },
    {
        id: "mod-egg",
        name: "Extra Telur",
        type: "checkbox",
        price: 4000
    },
    {
        id: "mod-spicy",
        name: "Level Pedas",
        type: "radio",
        options: [
            { name: "Level 0 (Tidak Pedas)", price: 0 },
            { name: "Level 1 (Sedang)", price: 0 },
            { name: "Level 2 (Pedas)", price: 0 },
            { name: "Level 3 (Sangat Pedas)", price: 0 }
        ]
    }
];

const DRINK_MODIFIERS = [
    {
        id: "mod-boba",
        name: "Extra Boba",
        type: "checkbox",
        price: 3000
    },
    {
        id: "mod-jelly",
        name: "Extra Grass Jelly",
        type: "checkbox",
        price: 3000
    },
    {
        id: "mod-ice",
        name: "Opsi Es",
        type: "radio",
        options: [
            { name: "Normal Ice", price: 0 },
            { name: "Less Ice", price: 0 },
            { name: "No Ice", price: 0 }
        ]
    },
    {
        id: "mod-sugar",
        name: "Level Gula",
        type: "radio",
        options: [
            { name: "Normal Sugar", price: 0 },
            { name: "Less Sugar", price: 0 }
        ]
    }
];

// --- Default Data Initialization ---
const DEFAULT_PRODUCTS = [
    {
        id: "prod-1",
        name: "Nasi Goreng Special Senja",
        category: "makanan",
        price: 35000,
        stock: 15,
        sku: "8991234001",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop&q=60",
        modifiers: FOOD_MODIFIERS
    },
    {
        id: "prod-2",
        name: "Ayam Geprek Mozzarella",
        category: "makanan",
        price: 28000,
        stock: 8,
        sku: "8991234002",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&auto=format&fit=crop&q=60",
        modifiers: FOOD_MODIFIERS
    },
    {
        id: "prod-3",
        name: "Es Kopi Susu Aren",
        category: "minuman",
        price: 18000,
        stock: 45,
        sku: "8991234003",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&auto=format&fit=crop&q=60",
        modifiers: DRINK_MODIFIERS
    },
    {
        id: "prod-4",
        name: "Matcha Latte Premium",
        category: "minuman",
        price: 22000,
        stock: 30,
        sku: "8991234004",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&auto=format&fit=crop&q=60",
        modifiers: DRINK_MODIFIERS
    },
    {
        id: "prod-5",
        name: "Croissant Butter Almond",
        category: "penutup",
        price: 20000,
        stock: 4,
        sku: "8991234005",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-6",
        name: "Waffle Chocolate Fudge",
        category: "penutup",
        price: 25000,
        stock: 12,
        sku: "8991234006",
        image: "https://images.unsplash.com/photo-1585502418236-df034d316160?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-7",
        name: "Kentang Goreng Truffle",
        category: "cemilan",
        price: 18000,
        stock: 20,
        sku: "8991234007",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-8",
        name: "Cireng Rujak Pedas",
        category: "cemilan",
        price: 12000,
        stock: 0,
        sku: "8991234008",
        image: "https://images.unsplash.com/photo-1616645258469-ec681c17f3ee?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-9",
        name: "Beef Teriyaki Rice Bowl",
        category: "makanan",
        price: 40000,
        stock: 18,
        sku: "8991234009",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=60",
        modifiers: FOOD_MODIFIERS
    },
    {
        id: "prod-10",
        name: "Classic Iced Lemon Tea",
        category: "minuman",
        price: 15000,
        stock: 50,
        sku: "8991234010",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop&q=60",
        modifiers: DRINK_MODIFIERS
    }
];

const DEFAULT_ORDERS = [
    {
        id: "TX-1002901",
        date: "2026-06-27T10:15:30Z",
        customer: "Meja 02",
        items: [
            { id: "prod-3", name: "Es Kopi Susu Aren", price: 18000, quantity: 2, notes: "Kurang manis" },
            { id: "prod-5", name: "Croissant Butter Almond", price: 20000, quantity: 1 }
        ],
        subtotal: 56000,
        tax: 5600,
        discount: 0,
        total: 61600,
        paymentMethod: "Tunai",
        amountPaid: 100000,
        change: 38400
    },
    {
        id: "TX-1002902",
        date: "2026-06-27T14:45:00Z",
        customer: "Meja 04",
        items: [
            { id: "prod-9", name: "Beef Teriyaki Rice Bowl", price: 40000, quantity: 2 },
            { id: "prod-4", name: "Matcha Latte Premium", price: 22000, quantity: 2 }
        ],
        subtotal: 124000,
        tax: 12400,
        discount: 24800, // 20% promo
        total: 111600,
        paymentMethod: "QRIS",
        amountPaid: 111600,
        change: 0
    },
    {
        id: "TX-1002903",
        date: "2026-06-28T09:20:12Z",
        customer: "Pelanggan Umum",
        items: [
            { id: "prod-3", name: "Es Kopi Susu Aren", price: 18000, quantity: 1 }
        ],
        subtotal: 18000,
        tax: 1800,
        discount: 0,
        total: 19800,
        paymentMethod: "Debit",
        amountPaid: 19800,
        change: 0
    }
];

const DEFAULT_CUSTOMERS = [
    { id: "C-101", name: "Ahmad Dahlan", phone: "081211112222", points: 120, totalSpend: 450000 },
    { id: "C-102", name: "Dewi Lestari", phone: "087833334444", points: 45, totalSpend: 150000 },
    { id: "C-103", name: "Rian Hidayat", phone: "085299998888", points: 8, totalSpend: 35000 }
];

const DEFAULT_INGREDIENTS = [
    { id: "I-001", name: "Biji Kopi Arabica", stock: 2500, unit: "g", category: "Kopi" },
    { id: "I-002", name: "Susu UHT Full Cream", stock: 5000, unit: "ml", category: "Susu" },
    { id: "I-003", name: "Sirup Gula Aren", stock: 1200, unit: "ml", category: "Sirup" },
    { id: "I-004", name: "Minyak Goreng Sawit", stock: 3000, unit: "ml", category: "Retail" },
    { id: "I-005", name: "Beras Pandan Wangi", stock: 25, unit: "kg", category: "Retail" },
    { id: "I-006", name: "Telur Ayam", stock: 60, unit: "pcs", category: "Retail" }
];

const DEFAULT_RECIPES = {
    "prod-1": [{ ingredientId: "I-004", quantity: 20 }, { ingredientId: "I-005", quantity: 0.15 }, { ingredientId: "I-006", quantity: 1 }],
    "prod-3": [{ ingredientId: "I-001", quantity: 18 }, { ingredientId: "I-002", quantity: 120 }, { ingredientId: "I-003", quantity: 25 }]
};

const RETAIL_PRODUCTS = [
    { id: "ret-1", name: "Beras Pandan Wangi 1kg", category: "sembako", price: 18000, stock: 50, sku: "8991001", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=60" },
    { id: "ret-2", name: "Minyak Goreng Sania 1L", category: "sembako", price: 21500, stock: 35, sku: "8991002", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=60" },
    { id: "ret-3", name: "Mie Instan Indomie Goreng", category: "sembako", price: 3500, stock: 240, sku: "8991003", image: "https://images.unsplash.com/photo-1612966608997-3000df9acb8e?w=400&auto=format&fit=crop&q=60" },
    { id: "ret-4", name: "Sabun Mandi Lifebuoy 85g", category: "sabun", price: 4200, stock: 90, sku: "8991004", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&auto=format&fit=crop&q=60" },
    { id: "ret-5", name: "Gula Pasir Gulaku 1kg", category: "sembako", price: 17500, stock: 60, sku: "8991005", image: "https://images.unsplash.com/photo-1581781870027-04212e234db0?w=400&auto=format&fit=crop&q=60" },
    { id: "ret-6", name: "Teh Celup Sariwangi 25s", category: "minuman", price: 7800, stock: 40, sku: "8991006", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&auto=format&fit=crop&q=60" },
    { id: "ret-7", name: "Korek Api Kayu Tokai", category: "rokok", price: 1500, stock: 150, sku: "8991007", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=60" },
    { id: "ret-8", name: "Rokok Sampoerna Mild 16", category: "rokok", price: 32000, stock: 80, sku: "8991008", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=400&auto=format&fit=crop&q=60" }
];

const DEFAULT_SETTINGS = {
    storeName: "Kopi Senja",
    tagline: "Premium Cafe & Eatery",
    address: "Jl. Boulevard Senopati No. 42, Kebayoran Baru, Jakarta Selatan",
    phone: "+62 812-3456-7890",
    currency: "IDR",
    taxEnabled: true,
    taxRate: 10,
    serviceChargeEnabled: true,
    serviceChargeRate: 5,
    roundingMode: "nearest-100",
    soundEnabled: true,
    businessMode: "f&b",
    googleAppsScriptUrl: "",
    customCategories: []
};

const MODE_DEFAULT_CATEGORIES = {
    "f&b": [
        { id: "makanan", name: "Makanan" },
        { id: "minuman", name: "Minuman" },
        { id: "cemilan", name: "Cemilan" },
        { id: "penutup", name: "Dessert" }
    ],
    "retail": [
        { id: "sembako", name: "Sembako" },
        { id: "sabun", name: "Sabun & Mandi" },
        { id: "minuman", name: "Minuman" },
        { id: "rokok", name: "Rokok & Korek" },
        { id: "kebutuhan-rt", name: "Kebutuhan Rumah Tangga" },
        { id: "cemilan", name: "Cemilan" }
    ],
    "sparepart": [
        { id: "mesin", name: "Mesin" },
        { id: "kelistrikan", name: "Kelistrikan" },
        { id: "oli", name: "Oli & Pelumas" },
        { id: "aksesoris", name: "Aksesoris" },
        { id: "ban", name: "Ban & Rantai" }
    ],
    "laundry": [
        { id: "kiloan", name: "Kiloan" },
        { id: "satuan", name: "Satuan" },
        { id: "dry-cleaning", name: "Dry Cleaning" },
        { id: "setrika", name: "Setrika Saja" }
    ]
};

function getActiveCategories() {
    const defaultCats = MODE_DEFAULT_CATEGORIES[settings.businessMode || "f&b"] || MODE_DEFAULT_CATEGORIES["f&b"];
    const activeCats = [...defaultCats];
    
    if (settings.customCategories && Array.isArray(settings.customCategories)) {
        settings.customCategories.forEach(cat => {
            const cleanName = cat.trim();
            if (cleanName) {
                const cleanId = cleanName.toLowerCase().replace(/[^a-z0-9]/g, "-");
                if (!activeCats.some(c => c.id === cleanId)) {
                    activeCats.push({ id: cleanId, name: cleanName });
                }
            }
        });
    }
    return activeCats;
}

const PROMO_CODES = {
    "SENJA20": 20,
    "KAWANBARU": 10,
    "FRESH5K": 5000
};

// --- App State ---
let products = [];
let cart = [];
let orders = [];
let settings = {};
let activePage = "cashier";
let activeCategory = "all";
let searchKeyword = "";
let appliedPromo = null;
let currentCheckoutMethod = "Tunai";
let voidLogs = [];

// New advanced state
let customersLoyalty = [];
let ingredients = [];
let recipes = {};
let offlineQueue = [];
let selectedMemberId = "";
let isOfflineSimulated = false;
let activeShift = { isOpen: false, startingCash: 0, cashSales: 0, totalSales: 0 };
let loyaltyRedeemApplied = false;
let heldOrders = [];
let ppobTransactions = [];
let ppobAccounts = [];
let ppobTransfers = [];

// New features state
let tables = [];
let promos = [];
let auditLogs = [];
let selectedTableId = "";
let activeUser = "owner";
let attendanceLogs = [];
const DEFAULT_EMPLOYEES = ["Budi", "Siti", "Andi", "Dewi"];
let opexAmount = 20000;

const DEFAULT_TABLES = [
    { id: "T01", name: "Meja 01", capacity: 2, status: "kosong", currentOrderId: null },
    { id: "T02", name: "Meja 02", capacity: 2, status: "kosong", currentOrderId: null },
    { id: "T03", name: "Meja 03", capacity: 4, status: "kosong", currentOrderId: null },
    { id: "T04", name: "Meja 04", capacity: 4, status: "kosong", currentOrderId: null },
    { id: "T05", name: "Meja 05", capacity: 6, status: "kosong", currentOrderId: null },
    { id: "T06", name: "Meja 06", capacity: 6, status: "kosong", currentOrderId: null },
    { id: "T07", name: "Meja 07 (Vip)", capacity: 8, status: "kosong", currentOrderId: null }
];

const DEFAULT_PROMOS = [
    { id: "P01", type: "bogo", name: "Beli 1 Gratis 1 (Es Kopi Susu Aren)", productId: "prod-3", active: true },
    { id: "P02", type: "happyhour", name: "Happy Hour 10% (14:00 - 17:00)", discountPercent: 10, startHour: 14, endHour: 17, active: true },
    { id: "P03", type: "voucher", name: "SENJA20 (20% Off)", code: "SENJA20", discountPercent: 20, active: true }
];

function logActivity(action, details) {
    const user = activeShift.isOpen ? "Kasir/Staf" : "Owner/Manager";
    const logEntry = {
        id: generateId("LOG"),
        timestamp: new Date().toISOString(),
        user: user,
        action: action,
        details: details
    };
    auditLogs.unshift(logEntry);
    if (auditLogs.length > 500) auditLogs.pop();
    localStorage.setItem("kasirKu_audit_logs", JSON.stringify(auditLogs));
}

const DEFAULT_PPOB_ACCOUNTS = [
    { id: "dana", name: "Saldo DANA", balance: 500000 },
    { id: "ovo", name: "Saldo OVO", balance: 300000 },
    { id: "brilink", name: "Saldo BRILink / BRI", balance: 2000000 },
    { id: "mandiri", name: "Saldo Bank Mandiri", balance: 1500000 },
    { id: "tunai", name: "Kas Laci (Tunai)", balance: 1000000 }
];

// --- DOM elements cache ---
const pages = {
    cashier: document.getElementById("page-cashier"),
    history: document.getElementById("page-history"),
    inventory: document.getElementById("page-inventory"),
    analytics: document.getElementById("page-analytics"),
    settings: document.getElementById("page-settings"),
    kds: document.getElementById("page-kds"),
    recipes: document.getElementById("page-recipes"),
    crm: document.getElementById("page-crm"),
    ppob: document.getElementById("page-ppob"),
    tables: document.getElementById("page-tables"),
    attendance: document.getElementById("page-attendance")
};

const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
const themeToggle = document.getElementById("theme-toggle");

// --- Audio Effects System (Web Audio API) ---
class AudioFX {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    playBeep() {
        if (!settings.soundEnabled) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5 note
        
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }

    playSuccess() {
        if (!settings.soundEnabled) return;
        this.init();
        
        const osc = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, this.ctx.currentTime + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, this.ctx.currentTime + 0.16); // G5
        
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(1046.50, this.ctx.currentTime + 0.16); // C6
        
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
        
        osc.start();
        osc2.start();
        osc.stop(this.ctx.currentTime + 0.4);
        osc2.stop(this.ctx.currentTime + 0.4);
    }

    playError() {
        if (!settings.soundEnabled) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(80, this.ctx.currentTime + 0.25);
        
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.25);
    }
}

const sfx = new AudioFX();

// --- Core Helper Functions ---
function formatPrice(amount) {
    const symbol = settings.currency === "USD" ? "$" : (settings.currency === "SGD" ? "S$" : "Rp ");
    
    if (settings.currency === "IDR") {
        // Format thousands separated by dot
        return symbol + amount.toLocaleString("id-ID");
    } else {
        return symbol + amount.toFixed(2);
    }
}

function generateId(prefix = "TX") {
    const chars = "0123456789";
    let suffix = "";
    for (let i = 0; i < 7; i++) {
        suffix += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${prefix}-${suffix}`;
}

function getRoundedAmount(amount) {
    if (!settings.roundingMode || settings.roundingMode === "none") {
        return { roundedAmount: amount, adjustment: 0 };
    }
    
    let factor = 100;
    let modeType = "nearest"; // "nearest", "floor", "ceil"
    
    const parts = settings.roundingMode.split("-");
    if (parts.length === 2) {
        modeType = parts[0];
        factor = parseInt(parts[1]) || 100;
    }
    
    let roundedAmount = amount;
    if (modeType === "floor") {
        roundedAmount = Math.floor(amount / factor) * factor;
    } else if (modeType === "ceil") {
        roundedAmount = Math.ceil(amount / factor) * factor;
    } else {
        roundedAmount = Math.round(amount / factor) * factor;
    }
    
    return {
        roundedAmount: roundedAmount,
        adjustment: roundedAmount - amount
    };
}

// --- App State Management ---
function loadDatabase() {
    settings = JSON.parse(localStorage.getItem("kasirKu_settings")) || DEFAULT_SETTINGS;
    
    // Select base catalog based on settings business mode
    if (settings.businessMode === "retail") {
        products = JSON.parse(localStorage.getItem("kasirKu_products_retail")) || RETAIL_PRODUCTS;
    } else if (settings.businessMode === "sparepart") {
        products = JSON.parse(localStorage.getItem("kasirKu_products_sparepart")) || [];
    } else if (settings.businessMode === "laundry") {
        products = JSON.parse(localStorage.getItem("kasirKu_products_laundry")) || [];
    } else {
        products = JSON.parse(localStorage.getItem("kasirKu_products_fb")) || DEFAULT_PRODUCTS;
    }
    
    orders = JSON.parse(localStorage.getItem("kasirKu_orders")) || DEFAULT_ORDERS;
    customersLoyalty = JSON.parse(localStorage.getItem("kasirKu_crm")) || DEFAULT_CUSTOMERS;
    ingredients = JSON.parse(localStorage.getItem("kasirKu_ingredients")) || DEFAULT_INGREDIENTS;
    recipes = JSON.parse(localStorage.getItem("kasirKu_recipes")) || DEFAULT_RECIPES;
    activeShift = JSON.parse(localStorage.getItem("kasirKu_shift")) || { isOpen: false, startingCash: 0, cashSales: 0, totalSales: 0 };
    offlineQueue = JSON.parse(localStorage.getItem("kasirKu_offline_queue")) || [];
    heldOrders = JSON.parse(localStorage.getItem("kasirKu_held_orders")) || [];
    voidLogs = JSON.parse(localStorage.getItem("kasirKu_void_logs")) || [];
    ppobTransactions = JSON.parse(localStorage.getItem("kasirKu_ppob_transactions")) || [];
    ppobAccounts = JSON.parse(localStorage.getItem("kasirKu_ppob_accounts")) || DEFAULT_PPOB_ACCOUNTS;
    ppobTransfers = JSON.parse(localStorage.getItem("kasirKu_ppob_transfers")) || [];
    
    tables = JSON.parse(localStorage.getItem("kasirKu_tables")) || DEFAULT_TABLES;
    promos = JSON.parse(localStorage.getItem("kasirKu_promos")) || DEFAULT_PROMOS;
    auditLogs = JSON.parse(localStorage.getItem("kasirKu_audit_logs")) || [];
    attendanceLogs = JSON.parse(localStorage.getItem("kasirKu_attendance_logs")) || [];
    opexAmount = parseFloat(localStorage.getItem("kasirKu_opex")) || 20000;
    
    // Save defaults back to storage if empty
    if (!localStorage.getItem("kasirKu_settings")) localStorage.setItem("kasirKu_settings", JSON.stringify(settings));
    if (settings.businessMode === "retail") {
        if (!localStorage.getItem("kasirKu_products_retail")) localStorage.setItem("kasirKu_products_retail", JSON.stringify(products));
    } else if (settings.businessMode === "sparepart") {
        if (!localStorage.getItem("kasirKu_products_sparepart")) localStorage.setItem("kasirKu_products_sparepart", JSON.stringify(products));
    } else if (settings.businessMode === "laundry") {
        if (!localStorage.getItem("kasirKu_products_laundry")) localStorage.setItem("kasirKu_products_laundry", JSON.stringify(products));
    } else {
        if (!localStorage.getItem("kasirKu_products_fb")) localStorage.setItem("kasirKu_products_fb", JSON.stringify(products));
    }
    if (!localStorage.getItem("kasirKu_orders")) localStorage.setItem("kasirKu_orders", JSON.stringify(orders));
    if (!localStorage.getItem("kasirKu_crm")) localStorage.setItem("kasirKu_crm", JSON.stringify(customersLoyalty));
    if (!localStorage.getItem("kasirKu_ingredients")) localStorage.setItem("kasirKu_ingredients", JSON.stringify(ingredients));
    if (!localStorage.getItem("kasirKu_recipes")) localStorage.setItem("kasirKu_recipes", JSON.stringify(recipes));
    if (!localStorage.getItem("kasirKu_shift")) localStorage.setItem("kasirKu_shift", JSON.stringify(activeShift));
    if (!localStorage.getItem("kasirKu_offline_queue")) localStorage.setItem("kasirKu_offline_queue", JSON.stringify(offlineQueue));
    if (!localStorage.getItem("kasirKu_held_orders")) localStorage.setItem("kasirKu_held_orders", JSON.stringify(heldOrders));
    if (!localStorage.getItem("kasirKu_void_logs")) localStorage.setItem("kasirKu_void_logs", JSON.stringify(voidLogs));
    if (!localStorage.getItem("kasirKu_ppob_transactions")) localStorage.setItem("kasirKu_ppob_transactions", JSON.stringify(ppobTransactions));
    if (!localStorage.getItem("kasirKu_ppob_accounts")) localStorage.setItem("kasirKu_ppob_accounts", JSON.stringify(ppobAccounts));
    if (!localStorage.getItem("kasirKu_ppob_transfers")) localStorage.setItem("kasirKu_ppob_transfers", JSON.stringify(ppobTransfers));
    if (!localStorage.getItem("kasirKu_tables")) localStorage.setItem("kasirKu_tables", JSON.stringify(tables));
    if (!localStorage.getItem("kasirKu_promos")) localStorage.setItem("kasirKu_promos", JSON.stringify(promos));
    if (!localStorage.getItem("kasirKu_audit_logs")) localStorage.setItem("kasirKu_audit_logs", JSON.stringify(auditLogs));
    if (!localStorage.getItem("kasirKu_attendance_logs")) localStorage.setItem("kasirKu_attendance_logs", JSON.stringify(attendanceLogs));
    if (!localStorage.getItem("kasirKu_opex")) localStorage.setItem("kasirKu_opex", opexAmount.toString());
}

function saveProductsToStorage(skipGas = false) {
    localStorage.setItem("kasirKu_products", JSON.stringify(products));
    const mode = settings.businessMode || "f&b";
    if (mode === "retail") {
        localStorage.setItem("kasirKu_products_retail", JSON.stringify(products));
    } else if (mode === "sparepart") {
        localStorage.setItem("kasirKu_products_sparepart", JSON.stringify(products));
    } else if (mode === "laundry") {
        localStorage.setItem("kasirKu_products_laundry", JSON.stringify(products));
    } else {
        localStorage.setItem("kasirKu_products_fb", JSON.stringify(products));
    }
    syncState();

    if (settings.googleAppsScriptUrl && !skipGas) {
        sendToGasBackend("update_products", products)
            .then(res => {
                if (res && res.status === "success") {
                    showSyncToast("Katalog produk disinkronkan ke Cloud!");
                }
            })
            .catch(err => console.warn("Gagal menyelaraskan katalog ke Cloud:", err));
    }
}

function saveOrdersToStorage() {
    localStorage.setItem("kasirKu_orders", JSON.stringify(orders));
    syncState();
}

function saveSettingsToStorage() {
    localStorage.setItem("kasirKu_settings", JSON.stringify(settings));
    syncState();
}

function saveCrmToStorage() {
    localStorage.setItem("kasirKu_crm", JSON.stringify(customersLoyalty));
    syncState();
}

function savePpobAccountsToStorage(skipGas = false) {
    localStorage.setItem("kasirKu_ppob_accounts", JSON.stringify(ppobAccounts));
    localStorage.setItem("kasirKu_ppob_transfers", JSON.stringify(ppobTransfers));
    syncState();
    
    if (settings.googleAppsScriptUrl && !skipGas) {
        sendToGasBackend("update_ppob_accounts", { accounts: ppobAccounts, transfers: ppobTransfers })
            .then(res => {
                if (res && res.status === "success") {
                    showSyncToast("Saldo akun diselaraskan ke Cloud!");
                }
            })
            .catch(err => console.warn("Failed to sync PPOB accounts to Cloud:", err));
    }
}

function saveIngredientsToStorage(skipGas = false) {
    localStorage.setItem("kasirKu_ingredients", JSON.stringify(ingredients));
    syncState();

    if (settings.googleAppsScriptUrl && !skipGas) {
        sendToGasBackend("update_ingredients", ingredients)
            .then(res => {
                if (res && res.status === "success") {
                    showSyncToast("Inventori disinkronkan ke Cloud!");
                }
            })
            .catch(err => console.warn("Gagal menyelaraskan bahan baku ke Cloud:", err));
    }
}

function saveRecipesToStorage() {
    localStorage.setItem("kasirKu_recipes", JSON.stringify(recipes));
    syncState();
}

function saveShiftToStorage() {
    localStorage.setItem("kasirKu_shift", JSON.stringify(activeShift));
    syncState();
}

function saveOfflineQueueToStorage() {
    localStorage.setItem("kasirKu_offline_queue", JSON.stringify(offlineQueue));
    syncState();
}

function saveHeldOrdersToStorage() {
    localStorage.setItem("kasirKu_held_orders", JSON.stringify(heldOrders));
    syncState();
}

function saveVoidLogsToStorage() {
    localStorage.setItem("kasirKu_void_logs", JSON.stringify(voidLogs));
    syncState();
}

function updateHeldOrdersCountBadge() {
    const badge = document.getElementById("held-orders-count");
    if (badge) {
        badge.textContent = heldOrders.length;
    }
}

// --- Page Navigation ---
function navigateToPage(pageName, isQuiet = false) {
    if (activeUser === "staff" && ["inventory", "analytics", "settings"].includes(pageName)) {
        if (!isQuiet) alert("Akses Ditolak: Halaman ini terkunci untuk peran Staff Kasir. Silakan hubungi Owner/Manager.");
        return;
    }
    
    activePage = pageName;
    
    // Auto collapse sidebar drawer on mobile
    if (typeof closeSidebar === "function") {
        closeSidebar();
    }
    
    // Toggle active classes on sidebar
    navItems.forEach(item => {
        if (item.getAttribute("data-page") === pageName) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Toggle pages visibility
    Object.keys(pages).forEach(key => {
        if (!pages[key]) return;
        if (key === pageName) {
            pages[key].classList.add("active");
        } else {
            pages[key].classList.remove("active");
        }
    });

    // Run page specific loaders
    if (pageName === "inventory") {
        renderInventoryTable();
    } else if (pageName === "history") {
        renderHistoryTable();
    } else if (pageName === "analytics") {
        renderAnalytics();
    } else if (pageName === "settings") {
        populateSettingsForm();
    } else if (pageName === "crm") {
        renderCrmTable();
    } else if (pageName === "ppob") {
        renderPpobDashboard();
    } else if (pageName === "kds") {
        renderKdsBoard();
    } else if (pageName === "tables") {
        renderTablesGrid();
    } else if (pageName === "recipes") {
        renderRecipesPage();
    } else if (pageName === "attendance") {
        populateAttendanceEmployees();
        updateEmployeeStatusUI();
        renderAttendanceLogs();
    }
    
    sfx.playBeep();
}

// --- Cashier Panel Handlers (Catalog) ---
function renderCatalog() {
    const catalogGrid = document.getElementById("catalog-grid");
    if (!catalogGrid) return;
    catalogGrid.innerHTML = "";
    
    // Filter and search
    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === "all" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchKeyword.toLowerCase()) || 
                              (p.sku && p.sku.includes(searchKeyword));
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        catalogGrid.innerHTML = `
            <div class="empty-cart-state" style="grid-column: span 100%;">
                <div class="empty-icon"><i data-lucide="package-search"></i></div>
                <p>Produk tidak ditemukan</p>
                <span class="empty-sub">Coba masukkan pencarian lain atau ketik SKU yang benar.</span>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filteredProducts.forEach(product => {
        const isOutOfStock = product.stock <= 0;
        const isLowStock = product.stock > 0 && product.stock <= 5;
        
        let stockBadgeHtml = "";
        if (isOutOfStock) {
            stockBadgeHtml = `<span class="stock-badge badge-outstock">Habis</span>`;
        } else if (isLowStock) {
            stockBadgeHtml = `<span class="stock-badge badge-lowstock">Limit: ${product.stock}</span>`;
        } else {
            stockBadgeHtml = `<span class="stock-badge badge-instock">Stok: ${product.stock}</span>`;
        }

        const card = document.createElement("div");
        card.className = `product-card ${isOutOfStock ? 'out-of-stock-card' : ''}`;
        card.setAttribute("data-id", product.id);
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'">
                ${stockBadgeHtml}
            </div>
            <div class="product-info">
                <span class="product-cat">${product.category}</span>
                <h4 class="product-name">${product.name}</h4>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="btn-add-shortcut" ${isOutOfStock ? 'disabled' : ''}>
                        <i data-lucide="plus"></i>
                    </button>
                </div>
            </div>
        `;

        // Click handler for entire card (adding item)
        card.addEventListener("click", (e) => {
            if (isOutOfStock) {
                sfx.playError();
                alert("Produk ini sedang kosong!");
                return;
            }
            // If clicked on "+" or anything on the card
            addToCart(product.id);
        });

        catalogGrid.appendChild(card);
    });

    lucide.createIcons();
}

// --- Cart Operations ---
function addToCart(productId, selectedModifiers = null, quantity = 1, notes = "", cartIndex = -1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check if product has modifiers and no modifiers are selected yet
    if (product.modifiers && product.modifiers.length > 0 && selectedModifiers === null) {
        openModifierModal(productId, cartIndex);
        return;
    }

    const finalModifiers = selectedModifiers || [];

    if (cartIndex >= 0) {
        // We are updating an existing cart item from the modifier modal edit mode
        const cartItem = cart[cartIndex];
        cartItem.selectedModifiers = finalModifiers;
        cartItem.notes = notes;
        cartItem.quantity = quantity;
    } else {
        // We are adding a new cart item
        // Find existing item with exact same product and exact same modifiers
        const existingCartItem = cart.find(item => 
            item.product.id === productId && 
            JSON.stringify(item.selectedModifiers) === JSON.stringify(finalModifiers)
        );

        if (existingCartItem) {
            if (existingCartItem.quantity >= product.stock) {
                sfx.playError();
                alert(`Stok tidak mencukupi! Hanya tersisa ${product.stock} item.`);
                return;
            }
            existingCartItem.quantity += 1;
        } else {
            if (product.stock <= 0) {
                sfx.playError();
                alert("Produk ini sedang kosong!");
                return;
            }
            cart.push({
                product: product,
                quantity: quantity,
                notes: notes,
                selectedModifiers: finalModifiers
            });
        }
    }

    sfx.playBeep();
    updateCartUI();
}

function changeCartQty(cartIndex, amount) {
    if (cartIndex < 0 || cartIndex >= cart.length) return;
    
    const cartItem = cart[cartIndex];
    const product = cartItem.product;

    const newQty = cartItem.quantity + amount;

    if (newQty <= 0) {
        // Delete item
        cart.splice(cartIndex, 1);
        sfx.playBeep();
    } else {
        if (newQty > product.stock) {
            sfx.playError();
            alert(`Batas stok tercapai! Stok saat ini: ${product.stock}`);
            return;
        }
        cartItem.quantity = newQty;
        sfx.playBeep();
    }

    updateCartUI();
}

function removeCartItem(cartIndex) {
    if (cartIndex >= 0 && cartIndex < cart.length) {
        cart.splice(cartIndex, 1);
        sfx.playBeep();
        updateCartUI();
    }
}

function openAddNoteModal(productId) {
    const cartItem = cart.find(item => item.product.id === productId);
    if (!cartItem) return;

    document.getElementById("note-prod-id").value = productId;
    document.getElementById("note-label-name").textContent = `Catatan untuk: ${cartItem.product.name}`;
    document.getElementById("note-text").value = cartItem.notes || "";

    document.getElementById("modal-note").classList.add("active");
    sfx.playBeep();
    
    setTimeout(() => document.getElementById("note-text").focus(), 150);
}

function clearCart() {
    if (cart.length === 0) return;
    if (confirm("Apakah Anda yakin ingin membatalkan semua pesanan di keranjang?")) {
        cart = [];
        appliedPromo = null;
        selectedMemberId = "";
        loyaltyRedeemApplied = false;
        
        const memberLookup = document.getElementById("cart-member-lookup");
        if (memberLookup) memberLookup.value = "";
        
        document.getElementById("promo-code").value = "";
        document.getElementById("promo-applied-badge").classList.add("hidden");
        document.getElementById("discount-row").classList.add("hidden");
        
        const redeemSection = document.getElementById("loyalty-redeem-section");
        if (redeemSection) redeemSection.classList.add("hidden");
        
        updateCartUI();
        sfx.playBeep();
    }
}

function updateCartUI() {
    const container = document.getElementById("cart-items-container");
    if (!container) return;
    container.innerHTML = "";
    
    const cartCountBadge = document.getElementById("cart-count");
    const activeCountBadge = document.getElementById("cart-tab-active-count");
    const heldCountBadge = document.getElementById("cart-tab-held-count");
    const heldHeaderCount = document.getElementById("held-orders-count");
    
    const numHeld = heldOrders.length;
    if (heldHeaderCount) heldHeaderCount.textContent = numHeld;
    if (heldCountBadge) heldCountBadge.textContent = numHeld;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-state">
                <div class="empty-icon"><i data-lucide="shopping-bag"></i></div>
                <p>Keranjang kosong</p>
                <span class="empty-sub">Pilih produk dari menu untuk menambahkan</span>
            </div>
        `;
        if (cartCountBadge) cartCountBadge.textContent = "0";
        if (activeCountBadge) activeCountBadge.textContent = "0";
        
        const mobileCartFooter = document.getElementById("mobile-cart-footer");
        if (mobileCartFooter) mobileCartFooter.style.display = "none";
        toggleMobileCartView(false);

        const sumSubtotal = document.getElementById("sum-subtotal");
        if (sumSubtotal) sumSubtotal.textContent = formatPrice(0);
        
        const sumServiceRow = document.getElementById("sum-service-row");
        if (sumServiceRow) sumServiceRow.classList.add("hidden");
        
        const sumTaxRow = document.getElementById("sum-tax-row");
        if (sumTaxRow) sumTaxRow.classList.add("hidden");
        
        const sumRoundingRow = document.getElementById("sum-rounding-row");
        if (sumRoundingRow) sumRoundingRow.classList.add("hidden");
        
        const sumTotal = document.getElementById("sum-total");
        if (sumTotal) sumTotal.textContent = formatPrice(0);
        
        // Hide discount row and reset discount text
        const discountRow = document.getElementById("discount-row");
        if (discountRow) {
            discountRow.classList.add("hidden");
            document.getElementById("sum-discount").textContent = "-Rp 0";
        }
        
        // Hide promo code badge
        const promoBadge = document.getElementById("promo-applied-badge");
        if (promoBadge) promoBadge.classList.add("hidden");
        const promoInput = document.getElementById("promo-code");
        if (promoInput) promoInput.value = "";
        appliedPromo = null;

        // Hide loyalty redeem section and reset loyalty selection
        const redeemSection = document.getElementById("loyalty-redeem-section");
        if (redeemSection) redeemSection.classList.add("hidden");
        loyaltyRedeemApplied = false;
        
        selectedMemberId = "";
        const memberLookup = document.getElementById("cart-member-lookup");
        if (memberLookup) memberLookup.value = "";

        lucide.createIcons();
        return;
    }

    // Set item count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountBadge) cartCountBadge.textContent = totalItems;
    if (activeCountBadge) activeCountBadge.textContent = totalItems;

    let subtotal = 0;

    cart.forEach((item, index) => {
        let modifierPriceSum = 0;
        let modifierDescriptions = [];
        if (item.selectedModifiers && item.selectedModifiers.length > 0) {
            item.selectedModifiers.forEach(mod => {
                modifierPriceSum += mod.price;
                modifierDescriptions.push(mod.name + (mod.price > 0 ? ` (+${formatPrice(mod.price)})` : ''));
            });
        }
        
        const basePrice = item.product.price;
        const finalItemPrice = basePrice + modifierPriceSum;
        const itemTotal = finalItemPrice * item.quantity;
        subtotal += itemTotal;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
            <div class="cart-item-info">
                <h4 class="cart-item-name" style="cursor:pointer;" onclick="openModifierModal('${item.product.id}', ${index})">${item.product.name}</h4>
                <div class="cart-item-price">${formatPrice(finalItemPrice)}</div>
                ${modifierDescriptions.length > 0 ? `<div class="cart-item-modifiers-display" onclick="openModifierModal('${item.product.id}', ${index})">${modifierDescriptions.map(d => `<span>${d}</span>`).join('')}</div>` : ''}
                <div class="cart-item-notes" onclick="openAddNoteModal('${item.product.id}')">
                    <i data-lucide="edit-3" style="width:12px;height:12px;"></i>
                    <span>${item.notes ? 'Catatan: ' + item.notes : 'Tambah Catatan...'}</span>
                </div>
            </div>
            <div class="cart-item-controls">
                <button class="btn-delete-item" onclick="removeCartItem(${index})">
                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
                <div class="qty-controls">
                    <button class="btn-qty" onclick="changeCartQty(${index}, -1)">-</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="btn-qty" onclick="changeCartQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
        container.appendChild(cartItemDiv);
    });

    // Recalculate billing
    let discount = 0;
    
    // Member CRM Loyalty Check
    const redeemSection = document.getElementById("loyalty-redeem-section");
    const redeemBtn = document.getElementById("redeem-points-btn");
    
    if (selectedMemberId && redeemSection) {
        const mem = customersLoyalty.find(c => c.id === selectedMemberId);
        if (mem) {
            redeemSection.classList.remove("hidden");
            document.getElementById("loyalty-points-summary").textContent = `Poin Member: ${mem.points} Poin`;
            
            // Disable redeem if points < 50
            if (mem.points < 50) {
                redeemBtn.setAttribute("disabled", "true");
                redeemBtn.textContent = "Poin Kurang (Min 50)";
                loyaltyRedeemApplied = false;
            } else {
                redeemBtn.removeAttribute("disabled");
                if (loyaltyRedeemApplied) {
                    discount += 5000; // Flat Rp 5.000 loyalty point discount
                    redeemBtn.textContent = "Gunakan Poin ✓";
                    redeemBtn.className = "btn btn-warning";
                } else {
                    redeemBtn.textContent = "Tukar Poin";
                    redeemBtn.className = "btn btn-warning-outline";
                }
            }
        }
    } else {
        if (redeemSection) redeemSection.classList.add("hidden");
        loyaltyRedeemApplied = false;
    }

    if (appliedPromo) {
        if (appliedPromo.type === "percent") {
            discount += subtotal * (appliedPromo.value / 100);
        } else {
            discount += appliedPromo.value; // Flat rupiah discount
        }
    }

    // Automatic Promos calculations
    let activePromoNames = [];
    promos.forEach(p => {
        if (!p.active) return;
        
        if (p.type === "bogo") {
            const bogoItem = cart.find(item => item.product.id === p.productId);
            if (bogoItem && bogoItem.quantity >= 2) {
                const freeQty = Math.floor(bogoItem.quantity / 2);
                let modifierPriceSum = 0;
                if (bogoItem.selectedModifiers && bogoItem.selectedModifiers.length > 0) {
                    bogoItem.selectedModifiers.forEach(m => modifierPriceSum += m.price);
                }
                const bogoDiscount = (bogoItem.product.price + modifierPriceSum) * freeQty;
                discount += bogoDiscount;
                activePromoNames.push(`${p.name} (-${formatPrice(bogoDiscount)})`);
            }
        }
        
        if (p.type === "happyhour") {
            const currentHour = new Date().getHours();
            if (currentHour >= p.startHour && currentHour < p.endHour) {
                const hhDiscount = subtotal * (p.discountPercent / 100);
                discount += hhDiscount;
                activePromoNames.push(`${p.name} (-${formatPrice(hhDiscount)})`);
            }
        }
    });

    // Handle display of active automated promos
    const promoBadge = document.getElementById("promo-applied-badge");
    const promoBadgeText = document.getElementById("promo-badge-text");
    if (promoBadge && promoBadgeText) {
        if (activePromoNames.length > 0 || appliedPromo) {
            promoBadge.classList.remove("hidden");
            const allPromos = [
                ...(appliedPromo ? [`Voucher ${appliedPromo.code}`] : []),
                ...activePromoNames
            ];
            promoBadgeText.textContent = `Promo: ${allPromos.join(" | ")}`;
        } else {
            promoBadge.classList.add("hidden");
        }
    }

    // Ensure discount is not greater than subtotal
    if (discount > subtotal) discount = subtotal;

    const baseTaxSubtotal = subtotal - discount;
    
    // Service charge calculation
    const serviceCharge = settings.serviceChargeEnabled ? baseTaxSubtotal * (settings.serviceChargeRate / 100) : 0;
    
    // Tax calculation (PPN applied on subtotal - discount + service charge)
    const taxedAmount = settings.taxEnabled ? (baseTaxSubtotal + serviceCharge) * (settings.taxRate / 100) : 0;
    
    const preRoundTotal = baseTaxSubtotal + serviceCharge + taxedAmount;
    
    // Rounding calculation (only if enabled)
    const rounding = getRoundedAmount(preRoundTotal);
    const roundedTotal = rounding.roundedAmount;
    const roundingAdjustment = rounding.adjustment;

    // Render totals
    document.getElementById("sum-subtotal").textContent = formatPrice(subtotal);
    
    // Render Service Charge
    const sumServiceRow = document.getElementById("sum-service-row");
    if (sumServiceRow) {
        if (settings.serviceChargeEnabled) {
            sumServiceRow.classList.remove("hidden");
            document.getElementById("sum-service").textContent = formatPrice(serviceCharge);
        } else {
            sumServiceRow.classList.add("hidden");
        }
    }

    // Render Tax
    const sumTaxRow = document.getElementById("sum-tax-row");
    if (sumTaxRow) {
        if (settings.taxEnabled) {
            sumTaxRow.classList.remove("hidden");
            document.getElementById("sum-tax").textContent = formatPrice(taxedAmount);
            document.getElementById("tax-rate-display").textContent = settings.taxRate;
        } else {
            sumTaxRow.classList.add("hidden");
        }
    }
    
    // Render Rounding
    const sumRoundingRow = document.getElementById("sum-rounding-row");
    if (sumRoundingRow) {
        if (settings.roundingMode !== "none" && roundingAdjustment !== 0) {
            sumRoundingRow.classList.remove("hidden");
            document.getElementById("sum-rounding").textContent = (roundingAdjustment > 0 ? "+" : "") + formatPrice(roundingAdjustment);
        } else {
            sumRoundingRow.classList.add("hidden");
        }
    }
    
    if (discount > 0) {
        document.getElementById("sum-discount").textContent = `-${formatPrice(discount)}`;
        document.getElementById("discount-row").classList.remove("hidden");
    } else {
        document.getElementById("discount-row").classList.add("hidden");
    }
    
    document.getElementById("sum-total").textContent = formatPrice(roundedTotal);
    
    // Update mobile cart sticky footer elements
    const mobileCartFooter = document.getElementById("mobile-cart-footer");
    const mobileCartQty = document.getElementById("mobile-cart-qty");
    const mobileCartSum = document.getElementById("mobile-cart-sum");

    if (mobileCartFooter) {
        if (totalItems > 0) {
            mobileCartFooter.style.display = "block";
            if (mobileCartQty) mobileCartQty.textContent = totalItems;
            if (mobileCartSum) mobileCartSum.textContent = formatPrice(roundedTotal);
        } else {
            mobileCartFooter.style.display = "none";
            toggleMobileCartView(false);
        }
    }
    
    lucide.createIcons();
}

// --- Promo Codes ---
function applyPromoCode() {
    const codeInput = document.getElementById("promo-code");
    const code = codeInput.value.trim().toUpperCase();
    
    if (!code) return;
    
    if (PROMO_CODES[code] !== undefined) {
        const val = PROMO_CODES[code];
        if (val > 100) {
            // Flat currency discount
            appliedPromo = { code: code, type: "flat", value: val };
        } else {
            // Percent discount
            appliedPromo = { code: code, type: "percent", value: val };
        }
        
        document.getElementById("promo-applied-badge").classList.remove("hidden");
        document.querySelector(".promo-text").textContent = `${code} Aktif (${val > 100 ? formatPrice(val) : val + '%'} OFF)`;
        codeInput.value = "";
        
        updateCartUI();
        sfx.playSuccess();
    } else {
        sfx.playError();
        alert("Kode promo tidak valid atau kadaluwarsa!");
    }
}

function removePromoCode() {
    appliedPromo = null;
    document.getElementById("promo-applied-badge").classList.add("hidden");
    document.getElementById("discount-row").classList.add("hidden");
    updateCartUI();
    sfx.playBeep();
}

// --- Checkout Modal Handlers ---
function openCheckoutModal() {
    if (cart.length === 0) {
        sfx.playError();
        alert("Keranjang masih kosong!");
        return;
    }

    const modal = document.getElementById("modal-checkout");
    
    // Calculate values
    let subtotal = 0;
    cart.forEach(item => {
        let modifierPriceSum = 0;
        if (item.selectedModifiers && item.selectedModifiers.length > 0) {
            item.selectedModifiers.forEach(mod => modifierPriceSum += mod.price);
        }
        subtotal += (item.product.price + modifierPriceSum) * item.quantity;
    });
    
    let discount = 0;
    if (appliedPromo) {
        discount = appliedPromo.type === "percent" ? subtotal * (appliedPromo.value / 100) : appliedPromo.value;
    }
    if (loyaltyRedeemApplied) {
        discount += 5000;
    }
    if (discount > subtotal) discount = subtotal;

    const baseTaxSubtotal = subtotal - discount;
    const serviceCharge = settings.serviceChargeEnabled ? baseTaxSubtotal * (settings.serviceChargeRate / 100) : 0;
    const tax = settings.taxEnabled ? (baseTaxSubtotal + serviceCharge) * (settings.taxRate / 100) : 0;
    const preRoundTotal = baseTaxSubtotal + serviceCharge + tax;

    const rounding = getRoundedAmount(preRoundTotal);
    let grandTotal = rounding.roundedAmount;
    let roundingAdjustment = rounding.adjustment;

    // Fill Modal Information
    let customerName = document.getElementById("cart-customer-type").value;
    if (selectedMemberId) {
        const mem = customersLoyalty.find(c => c.id === selectedMemberId);
        if (mem) {
            customerName = `${mem.name} (Member - ${mem.id})`;
        }
    }
    document.getElementById("chk-customer").textContent = customerName;
    document.getElementById("chk-subtotal").textContent = formatPrice(subtotal);
    document.getElementById("chk-discount").textContent = `-${formatPrice(discount)}`;
    
    // Service Charge
    const chkServiceRow = document.getElementById("chk-service-row");
    if (chkServiceRow) {
        if (settings.serviceChargeEnabled) {
            chkServiceRow.classList.remove("hidden");
            document.getElementById("chk-service").textContent = formatPrice(serviceCharge);
        } else {
            chkServiceRow.classList.add("hidden");
        }
    }

    // Tax
    const chkTaxRow = document.getElementById("chk-tax-row");
    if (chkTaxRow) {
        if (settings.taxEnabled) {
            chkTaxRow.classList.remove("hidden");
            document.getElementById("chk-tax").textContent = formatPrice(tax);
        } else {
            chkTaxRow.classList.add("hidden");
        }
    }

    // Rounding
    const chkRoundingRow = document.getElementById("chk-rounding-row");
    if (chkRoundingRow) {
        if (settings.roundingMode !== "none" && roundingAdjustment !== 0) {
            chkRoundingRow.classList.remove("hidden");
            document.getElementById("chk-rounding").textContent = (roundingAdjustment > 0 ? "+" : "") + formatPrice(roundingAdjustment);
        } else {
            chkRoundingRow.classList.add("hidden");
        }
    }

    document.getElementById("chk-grand-total").textContent = formatPrice(grandTotal);

    // Default payment method
    switchPaymentTab("Tunai");
    
    // Cash interface reset
    const cashInput = document.getElementById("cash-received");
    cashInput.value = "";
    document.getElementById("cash-change").textContent = formatPrice(0);
    document.getElementById("submit-payment-btn").disabled = true;

    // Reset Split Payment state
    const splitToggle = document.getElementById("split-payment-toggle");
    if (splitToggle) {
        splitToggle.checked = false;
        document.getElementById("split-payment-fields").classList.add("hidden");
        document.getElementById("split-amount-cash").value = "";
        document.getElementById("split-amount-digital").value = "";
    }

    modal.classList.add("active");
    sfx.playBeep();
    
    // Auto focus cash input
    setTimeout(() => cashInput.focus(), 150);
}

function switchPaymentTab(method) {
    currentCheckoutMethod = method;
    
    // Update tabs active state
    document.querySelectorAll(".payment-tab").forEach(tab => {
        if (tab.getAttribute("data-method") === method) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    // Update form visibility
    document.getElementById("pane-tunai").classList.remove("active");
    document.getElementById("pane-qris").classList.remove("active");
    document.getElementById("pane-debit").classList.remove("active");

    if (method === "Tunai") {
        document.getElementById("pane-tunai").classList.add("active");
        validateCashPayment();
    } else if (method === "QRIS") {
        document.getElementById("pane-qris").classList.add("active");
        document.getElementById("submit-payment-btn").disabled = true;
        document.getElementById("qris-status-text").textContent = "Menunggu Pembayaran...";
        document.getElementById("qris-status-text").className = "";
        
        // Mock QR Code scanner status cycle
        setTimeout(() => {
            if (currentCheckoutMethod === "QRIS") {
                document.getElementById("qris-status-text").textContent = "Menerima Data Pembayaran...";
            }
        }, 3000);
    } else {
        document.getElementById("pane-debit").classList.add("active");
        // For Debit/Credit, enable button immediately for demo
        document.getElementById("submit-payment-btn").disabled = false;
    }
}

function validateCashPayment() {
    const grandTotalText = document.getElementById("chk-grand-total").textContent;
    // Strip characters to get clean number
    const totalAmount = parseFloat(grandTotalText.replace(/[^0-9,-]/g, '').replace(/,00$/, ''));
    
    const cashInput = document.getElementById("cash-received");
    const receivedAmount = parseFloat(cashInput.value) || 0;

    const change = receivedAmount - totalAmount;

    if (receivedAmount >= totalAmount) {
        document.getElementById("cash-change").textContent = formatPrice(change);
        document.getElementById("submit-payment-btn").disabled = false;
    } else {
        document.getElementById("cash-change").textContent = formatPrice(0);
        document.getElementById("submit-payment-btn").disabled = true;
    }
}

function handleQuickCash(amount) {
    const cashInput = document.getElementById("cash-received");
    const grandTotalText = document.getElementById("chk-grand-total").textContent;
    const totalAmount = parseFloat(grandTotalText.replace(/[^0-9,-]/g, '').replace(/,00$/, ''));

    let currentVal = parseFloat(cashInput.value) || 0;
    
    if (amount === "exact") {
        cashInput.value = totalAmount;
    } else {
        cashInput.value = currentVal + amount;
    }
    
    validateCashPayment();
    sfx.playBeep();
}

function simulateQrisSuccess() {
    if (currentCheckoutMethod !== "QRIS") return;
    
    document.getElementById("qris-status-text").textContent = "Transaksi Berhasil Terverifikasi!";
    document.getElementById("qris-status-text").className = "text-success";
    document.getElementById("submit-payment-btn").disabled = false;
    sfx.playSuccess();
}

// --- Submit & Save Transaction ---
function processPayment() {
    const submitBtn = document.getElementById("submit-payment-btn");
    let originalText = "Konfirmasi & Bayar";
    if (submitBtn) {
        originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = "<i class='spinner-icon' style='display:inline-block; animation:spin 1s linear infinite; margin-right:6px;'></i>Memproses...";
    }
    
    const restoreBtn = () => {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    };

    const grandTotalText = document.getElementById("chk-grand-total").textContent;
    const totalAmount = parseFloat(grandTotalText.replace(/[^0-9,-]/g, '').replace(/,00$/, ''));

    let subtotal = 0;
    cart.forEach(item => {
        let modifierPriceSum = 0;
        if (item.selectedModifiers && item.selectedModifiers.length > 0) {
            item.selectedModifiers.forEach(mod => modifierPriceSum += mod.price);
        }
        subtotal += (item.product.price + modifierPriceSum) * item.quantity;
    });
    
    let discount = 0;
    if (appliedPromo) {
        discount = appliedPromo.type === "percent" ? subtotal * (appliedPromo.value / 100) : appliedPromo.value;
    }
    if (loyaltyRedeemApplied) {
        discount += 5000;
    }
    if (discount > subtotal) discount = subtotal;

    const baseTaxSubtotal = subtotal - discount;
    const serviceCharge = settings.serviceChargeEnabled ? baseTaxSubtotal * (settings.serviceChargeRate / 100) : 0;
    const tax = settings.taxEnabled ? (baseTaxSubtotal + serviceCharge) * (settings.taxRate / 100) : 0;
    const preRoundTotal = baseTaxSubtotal + serviceCharge + tax;

    const rounding = getRoundedAmount(preRoundTotal);
    let grandTotal = rounding.roundedAmount;
    let roundingAdjustment = rounding.adjustment;

    const customer = document.getElementById("chk-customer").textContent;
    const transactionId = generateId("TX");

    let received = totalAmount;
    let change = 0;
    let paymentMethod = currentCheckoutMethod;

    // Check Split Payment
    const splitToggle = document.getElementById("split-payment-toggle");
    const isSplit = splitToggle && splitToggle.checked;
    let splitCashPaid = 0;
    let splitDigitalPaid = 0;

    if (isSplit) {
        splitCashPaid = parseFloat(document.getElementById("split-amount-cash").value) || 0;
        splitDigitalPaid = totalAmount - splitCashPaid;
        paymentMethod = "Split (Tunai + Non-Tunai)";
        received = totalAmount;
        change = 0;
    } else {
        if (currentCheckoutMethod === "Tunai") {
            received = parseFloat(document.getElementById("cash-received").value) || totalAmount;
            change = received - totalAmount;
        }
    }

    // 1. Deduct Product Inventory stock
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.product.id);
        if (product) {
            product.stock = Math.max(0, product.stock - cartItem.quantity);
        }
    });
    saveProductsToStorage(true);

    // 2. Deduct Recipes Ingredients raw stock (composite stock)
    let recipesTriggered = false;
    let lowIngAlerts = [];
    cart.forEach(cartItem => {
        const formula = recipes[cartItem.product.id];
        if (formula && formula.length > 0) {
            recipesTriggered = true;
            formula.forEach(item => {
                const ing = ingredients.find(i => i.id === item.ingredientId);
                if (ing) {
                    ing.stock = Math.max(0, ing.stock - (item.quantity * cartItem.quantity));
                    // Alert check (stock drops below low threshold)
                    if (ing.stock < 200 && (ing.unit === 'g' || ing.unit === 'ml')) {
                        lowIngAlerts.push(ing.name);
                    }
                }
            });
        }
    });
    if (recipesTriggered) {
        saveIngredientsToStorage(true);
        if (activePage === "recipes") renderRecipesPage();
    }

    // Notify low raw stock ingredients
    if (lowIngAlerts.length > 0) {
        setTimeout(() => {
            alert(`PERINGATAN STOK TIPIS: Bahan Baku berikut hampir habis:\n- ${lowIngAlerts.join("\n- ")}`);
        }, 1200);
    }

    // 3. Loyalty Program CRM update
    if (selectedMemberId) {
        const member = customersLoyalty.find(c => c.id === selectedMemberId);
        if (member) {
            const pointsEarned = Math.floor(totalAmount / 1000);
            member.points += pointsEarned;
            member.totalSpend += totalAmount;
            
            if (loyaltyRedeemApplied) {
                member.points = Math.max(0, member.points - 50); // deduct 50 points
            }
            saveCrmToStorage();
            
            // Notify customer
            setTimeout(() => {
                alert(`Loyalty Poin Member [${member.name}]:\n+${pointsEarned} Poin didapatkan.\nTotal Poin sekarang: ${member.points} Poin.`);
            }, 1000);
        }
        selectedMemberId = "";
        loyaltyRedeemApplied = false;
        document.getElementById("loyalty-redeem-section").classList.add("hidden");
        document.getElementById("cart-member-lookup").value = "";
    }

    // 4. Shift Drawer tracking
    if (activeShift.isOpen) {
        activeShift.totalSales += totalAmount;
        if (paymentMethod === "Tunai") {
            activeShift.cashSales += totalAmount;
        } else if (isSplit) {
            activeShift.cashSales += splitCashPaid;
        }
        saveShiftToStorage();
        updateShiftOverlayUI();
    }

    // 5. Kitchen Display System (KDS) order routing
    if (settings.businessMode === "f&b") {
        const kdsQueue = JSON.parse(localStorage.getItem("kasirKu_kds_queue")) || [];
        kdsQueue.push({
            customer: customer,
            date: new Date().toISOString(),
            items: cart.map(item => ({
                name: item.product.name,
                quantity: item.quantity,
                notes: item.notes || "",
                selectedModifiers: item.selectedModifiers || []
            }))
        });
        localStorage.setItem("kasirKu_kds_queue", JSON.stringify(kdsQueue));
        if (activePage === "kds") renderKdsBoard();
    }

    // Compile transaction details
    const newOrder = {
        id: transactionId,
        date: new Date().toISOString(),
        customer: customer,
        items: cart.map(item => ({
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            notes: item.notes || "",
            selectedModifiers: item.selectedModifiers || []
        })),
        subtotal: subtotal,
        discount: discount,
        serviceCharge: serviceCharge,
        tax: tax,
        roundingAdjustment: roundingAdjustment,
        total: totalAmount,
        paymentMethod: paymentMethod,
        amountPaid: received,
        change: change,
        status: "Selesai"
    };

    // 6. Offline Mode saving queue
    if (isOfflineSimulated) {
        offlineQueue.push(newOrder);
        saveOfflineQueueToStorage();
        
        // Visual offline queue count update on badge
        const badge = document.getElementById("sync-status");
        const lbl = document.getElementById("sync-status-lbl");
        badge.className = "sync-status-badge offline";
        lbl.textContent = `Offline (${offlineQueue.length} Pending)`;
    } else {
        orders.unshift(newOrder);
        saveOrdersToStorage();
    }

    // Sync to GAS Backend if configured
    if (settings.googleAppsScriptUrl) {
        const productsStockUpdate = cart.map(item => ({
            id: item.product.id,
            qty: -item.quantity
        }));
        
        const ingredientsStockUpdate = [];
        cart.forEach(item => {
            const recipe = recipes[item.product.id];
            if (recipe) {
                recipe.forEach(ing => {
                    ingredientsStockUpdate.push({
                        id: ing.id,
                        qty: -(ing.quantity * item.quantity)
                    });
                });
            }
        });
        
        let crmUpdate = null;
        if (selectedMemberId) {
            const member = customersLoyalty.find(c => c.id === selectedMemberId);
            if (member) {
                crmUpdate = member;
            }
        }
        
        const gasOrderPayload = {
            order: {
                orderId: newOrder.id,
                timestamp: newOrder.date,
                customerName: newOrder.customer,
                subtotal: newOrder.subtotal,
                serviceCharge: newOrder.serviceCharge,
                tax: newOrder.tax,
                rounding: newOrder.roundingAdjustment,
                discount: newOrder.discount,
                grandTotal: newOrder.total,
                paymentMethod: newOrder.paymentMethod,
                cashAmount: newOrder.amountPaid,
                cashChange: newOrder.change,
                status: newOrder.status,
                items: newOrder.items
            },
            productsStockUpdate: productsStockUpdate,
            ingredientsStockUpdate: ingredientsStockUpdate,
            crmUpdate: crmUpdate
        };
        
        if (isOfflineSimulated) {
            addToOfflineQueue("add_order", gasOrderPayload);
        } else {
            sendToGasBackend("add_order", gasOrderPayload)
                .then(res => {
                    if (res && res.status === "success") {
                        showSyncToast("Transaksi tersinkron ke Sheets!");
                    }
                })
                .catch(err => {
                    console.warn("GAS sync queued offline", err);
                });
        }
    }

    // Broadcast sync to other tabs
    syncState();

    // Log activity
    logActivity("Penjualan POS", `Transaksi ${newOrder.id} selesai. Total: ${formatPrice(newOrder.total)} (${newOrder.paymentMethod})`);

    // Update table status if linked
    if (selectedTableId) {
        const tbl = tables.find(t => t.id === selectedTableId);
        if (tbl) {
            tbl.status = "kotor";
            tbl.currentOrderId = newOrder.id;
            saveTablesToStorage();
        }
        selectedTableId = "";
        const custSelector = document.getElementById("cart-customer-type");
        if (custSelector) custSelector.value = "Pelanggan Umum";
    }

    // Close checkout modal
    document.getElementById("modal-checkout").classList.remove("active");

    // Play Success sound
    sfx.playSuccess();

    // Open receipt visual mockup
    openReceiptModal(newOrder);
    
    // Restore button
    restoreBtn();
}

// --- Thermal Receipt Barcode Generator ---
function drawReceiptBarcode(svgElement, text) {
    if (!svgElement) return;
    svgElement.innerHTML = "";
    
    let seed = 0;
    for (let i = 0; i < text.length; i++) {
        seed += text.charCodeAt(i);
    }
    
    const width = 160;
    const height = 40;
    svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`);
    
    let x = 12;
    const drawBar = (w, space) => {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", 0);
        rect.setAttribute("width", w);
        rect.setAttribute("height", height);
        rect.setAttribute("fill", "#111111");
        svgElement.appendChild(rect);
        x += w + space;
    };

    // Draw start marker (thin-thin)
    drawBar(1.5, 1);
    drawBar(1.5, 1.5);
    
    // Generate bars from hash
    let hash = seed;
    for (let i = 0; i < 24; i++) {
        hash = (hash * 37) & 0xFFFFFFFF;
        const barWidth = (Math.abs(hash) % 3) + 1.5; // 1.5 to 4.5 width
        const spaceWidth = (Math.abs(hash >> 3) % 3) + 1; // 1 to 3 space
        if (x + barWidth + spaceWidth > width - 15) break;
        drawBar(barWidth, spaceWidth);
    }
    
    // Draw end marker
    drawBar(1.5, 1);
    drawBar(1.5, 1);
}

// --- Thermal Receipt Modal ---
function openReceiptModal(order) {
    activeReceiptOrder = order;
    
    // Store Logo
    const logoContainer = document.querySelector("#modal-receipt .receipt-logo");
    if (logoContainer) {
        if (settings.storeLogo) {
            logoContainer.innerHTML = `<img src="${settings.storeLogo}" style="max-height: 48px; max-width: 120px; object-fit: contain; filter: grayscale(100%);">`;
        } else {
            logoContainer.innerHTML = `<i data-lucide="store" style="width: 24px; height: 24px; color: #111;"></i>`;
            if (window.lucide) lucide.createIcons();
        }
    }

    document.getElementById("rec-store-name").textContent = settings.storeName;
    document.getElementById("rec-store-tagline").textContent = settings.tagline;
    document.getElementById("rec-store-address").textContent = settings.address;
    document.getElementById("rec-store-phone").textContent = "Telp: " + settings.phone;

    document.getElementById("rec-transaction-id").textContent = `#${order.id}`;
    
    // Formatting date
    const dateObj = new Date(order.date);
    const dateFormatted = dateObj.toLocaleDateString("id-ID") + " " + dateObj.toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'});
    document.getElementById("rec-date").textContent = dateFormatted;
    document.getElementById("rec-customer").textContent = order.customer;

    const elCashier = document.getElementById("rec-cashier");
    if (elCashier) {
        elCashier.textContent = activeUser === "owner" ? "Owner (Admin)" : "Staff";
    }

    // Items list
    const itemsList = document.getElementById("rec-items-list");
    itemsList.innerHTML = "";
    
    order.items.forEach(item => {
        let modifierPriceSum = 0;
        let modifierDescriptions = [];
        if (item.selectedModifiers && item.selectedModifiers.length > 0) {
            item.selectedModifiers.forEach(mod => {
                modifierPriceSum += mod.price;
                modifierDescriptions.push(mod.name + (mod.price > 0 ? ` (+${formatPrice(mod.price)})` : ''));
            });
        }
        const itemPrice = item.price + modifierPriceSum;

        const itemRow = document.createElement("div");
        itemRow.className = "rec-item";
        itemRow.innerHTML = `
            <div class="rec-item-header">
                <span>${item.name}</span>
            </div>
            ${modifierDescriptions.length > 0 ? `<div class="rec-item-modifiers-display" style="font-size:10px; color:var(--text-secondary); padding-left:10px; margin-bottom:2px; display:flex; flex-direction:column; gap:2px;">${modifierDescriptions.map(d => `<span>${d}</span>`).join('')}</div>` : ''}
            <div class="rec-item-details">
                <span>  ${item.quantity} x ${formatPrice(itemPrice)}</span>
                <span>${formatPrice(itemPrice * item.quantity)}</span>
            </div>
            ${item.notes ? `<div class="rec-item-notes">  // ${item.notes}</div>` : ""}
        `;
        itemsList.appendChild(itemRow);
    });

    // Totals details
    document.getElementById("rec-subtotal").textContent = formatPrice(order.subtotal);
    
    if (order.discount > 0) {
        document.getElementById("rec-discount-row").style.display = "flex";
        document.getElementById("rec-discount").textContent = `-${formatPrice(order.discount)}`;
    } else {
        document.getElementById("rec-discount-row").style.display = "none";
    }

    // Service Charge
    const recServiceRow = document.getElementById("rec-service-row");
    if (recServiceRow) {
        if (order.serviceCharge > 0) {
            recServiceRow.style.display = "flex";
            document.getElementById("rec-service").textContent = formatPrice(order.serviceCharge);
        } else {
            recServiceRow.style.display = "none";
        }
    }

    // Tax
    const recTaxRow = document.getElementById("rec-tax-row");
    if (recTaxRow) {
        if (order.tax > 0) {
            recTaxRow.style.display = "flex";
            document.getElementById("rec-tax").textContent = formatPrice(order.tax);
        } else {
            recTaxRow.style.display = "none";
        }
    }

    // Rounding
    const recRoundingRow = document.getElementById("rec-rounding-row");
    if (recRoundingRow) {
        if (order.roundingAdjustment && order.roundingAdjustment !== 0) {
            recRoundingRow.style.display = "flex";
            document.getElementById("rec-rounding").textContent = (order.roundingAdjustment > 0 ? "+" : "") + formatPrice(order.roundingAdjustment);
        } else {
            recRoundingRow.style.display = "none";
        }
    }

    document.getElementById("rec-grand-total").textContent = formatPrice(order.total);
    
    document.getElementById("rec-pay-method").textContent = order.paymentMethod;
    document.getElementById("rec-pay-amount").textContent = formatPrice(order.amountPaid);
    
    if (order.paymentMethod === "Tunai") {
        document.getElementById("rec-change-row").style.display = "flex";
        document.getElementById("rec-change").textContent = formatPrice(order.change);
    } else {
        document.getElementById("rec-change-row").style.display = "none";
    }

    // Draw Dynamic SVG Barcode
    drawReceiptBarcode(document.getElementById("rec-barcode-svg"), order.id);
    document.getElementById("rec-barcode-num").textContent = order.id;

    const modal = document.getElementById("modal-receipt");
    modal.classList.add("active");
}

function handleReceiptFinished() {
    // Reset Cart
    cart = [];
    appliedPromo = null;
    document.getElementById("promo-code").value = "";
    document.getElementById("promo-applied-badge").classList.add("hidden");
    document.getElementById("discount-row").classList.add("hidden");
    updateCartUI();
    
    // Re-render cashier catalog
    renderCatalog();
    
    // Close modal
    document.getElementById("modal-receipt").classList.remove("active");
    sfx.playBeep();
}

function printReceipt() {
    window.print();
}

// --- History Page Handlers ---
function renderHistoryTable() {
    const tableBody = document.getElementById("history-table-body");
    tableBody.innerHTML = "";

    const searchKeyword = document.getElementById("search-history").value.toLowerCase();
    const filterPayment = document.getElementById("filter-history-payment").value;

    const filteredOrders = orders.filter(o => {
        const matchesSearch = o.id.toLowerCase().includes(searchKeyword) || 
                              o.customer.toLowerCase().includes(searchKeyword);
        const matchesPayment = filterPayment === "all" || o.paymentMethod === filterPayment;
        return matchesSearch && matchesPayment;
    });

    if (filteredOrders.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; color: var(--text-muted); padding: 40px 0;">
                    <i data-lucide="inbox" style="margin-bottom: 8px;"></i>
                    <p>Tidak ada transaksi yang cocok</p>
                </td>
            </tr>
        `;
        lucide.createIcons();
        return;
    }

    filteredOrders.forEach(order => {
        const dateObj = new Date(order.date);
        const dateStr = dateObj.toLocaleDateString("id-ID") + " " + dateObj.toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'});
        const totalItems = order.items.reduce((sum, i) => sum + i.quantity, 0);
        const isVoided = order.status === "Dibatalkan";

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>#${order.id}</strong></td>
            <td>${dateStr}</td>
            <td>${order.customer}</td>
            <td>
                <span style="display:flex;align-items:center;gap:6px;font-size:12px;">
                    <i data-lucide="${order.paymentMethod === 'Tunai' ? 'banknote' : (order.paymentMethod === 'QRIS' ? 'qr-code' : 'credit-card')}" style="width:14px;height:14px;color:var(--primary-color);"></i>
                    ${order.paymentMethod}
                </span>
            </td>
            <td>${totalItems} Item</td>
            <td><strong>${formatPrice(order.total)}</strong></td>
            <td><span class="status-pill ${isVoided ? 'status-void' : 'status-paid'}">${isVoided ? 'Dibatalkan' : 'Selesai'}</span></td>
            <td>
                <div style="display:flex; gap:6px;">
                    <button class="btn-icon" title="Lihat Struk" onclick="reprintReceipt('${order.id}')">
                        <i data-lucide="printer" style="width:14px;height:14px;"></i>
                    </button>
                    ${!isVoided ? `
                    <button class="btn-icon" title="Batalkan (Void) Transaksi" onclick="voidOrder('${order.id}')" style="color:var(--danger-color);">
                        <i data-lucide="x-circle" style="width:14px;height:14px;"></i>
                    </button>
                    ` : ''}
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });

    lucide.createIcons();
}

function reprintReceipt(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        openReceiptModal(order);
    }
}

// --- Inventory Page Handlers ---
function renderInventoryTable() {
    const tableBody = document.getElementById("inventory-table-body");
    tableBody.innerHTML = "";

    const searchKeyword = document.getElementById("search-inventory").value.toLowerCase();
    
    const filteredProducts = products.filter(p => {
        return p.name.toLowerCase().includes(searchKeyword) || (p.sku && p.sku.includes(searchKeyword));
    });

    if (filteredProducts.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 40px 0;">
                    <p>Produk tidak ditemukan</p>
                </td>
            </tr>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const isOutOfStock = product.stock <= 0;
        const isLowStock = product.stock > 0 && product.stock <= 5;
        
        let stockHtml = "";
        let statusHtml = "";
        
        if (isOutOfStock) {
            stockHtml = `<span class="text-danger" style="font-weight:700;">0</span>`;
            statusHtml = `<span class="status-pill status-hold">Habis</span>`;
        } else if (isLowStock) {
            stockHtml = `<span class="text-warning" style="font-weight:700;">${product.stock}</span>`;
            statusHtml = `<span class="status-pill status-hold">Stok Tipis</span>`;
        } else {
            stockHtml = `<span>${product.stock}</span>`;
            statusHtml = `<span class="status-pill status-paid">Tersedia</span>`;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <img src="${product.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100'}" class="prod-table-img" alt="${product.name}">
            </td>
            <td>
                <strong>${product.name}</strong>
                ${product.sku ? `<br><small class="text-secondary" style="font-size:11px;">SKU: ${product.sku}</small>` : ""}
            </td>
            <td style="text-transform: capitalize;">${product.category}</td>
            <td><strong>${formatPrice(product.price)}</strong></td>
            <td>${stockHtml}</td>
            <td>${statusHtml}</td>
            <td>
                <div style="display:flex;gap:6px;">
                    <button class="btn-icon" title="Edit Produk" onclick="openEditProductModal('${product.id}')">
                        <i data-lucide="edit" style="width:14px;height:14px;"></i>
                    </button>
                    <button class="btn-icon btn-icon-danger" title="Hapus Produk" onclick="deleteProduct('${product.id}')">
                        <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });

    lucide.createIcons();
    if (typeof checkLowStockAlerts === "function") {
        checkLowStockAlerts();
    }
}

// --- Visual Product Modifier Builder Handlers ---
function addProductModifierGroup(groupData = null) {
    const container = document.getElementById("product-modifiers-container");
    if (!container) return;

    const groupDiv = document.createElement("div");
    groupDiv.className = "modifier-group-builder-card";
    
    const groupName = groupData ? groupData.name : "";
    const groupType = groupData ? groupData.type : "radio";
    const groupPrice = groupData && groupData.type === "checkbox" ? (groupData.price || 0) : 0;
    
    groupDiv.innerHTML = `
        <button type="button" class="btn-delete-group" title="Hapus Grup" onclick="this.parentElement.remove()"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
        <div class="form-row" style="margin-bottom: 0; display: flex; gap: 8px;">
            <div class="form-group col-7" style="margin-bottom: 0; flex: 1;">
                <label style="font-size: 11px;">Nama Grup / Modifier*</label>
                <input type="text" class="mod-group-name" required placeholder="Contoh: Level Pedas, Extra Keju" value="${groupName}" style="padding: 6px 10px; font-size: 12px; margin-bottom: 0;">
            </div>
            <div class="form-group col-5" style="margin-bottom: 0; width: 150px;">
                <label style="font-size: 11px;">Tipe Pilihan*</label>
                <select class="mod-group-type" onchange="toggleModifierGroupBuilderType(this)" style="padding: 6px 10px; font-size: 12px; margin-bottom: 0;">
                    <option value="radio" ${groupType === 'radio' ? 'selected' : ''}>Pilihan Tunggal (Radio)</option>
                    <option value="checkbox" ${groupType === 'checkbox' ? 'selected' : ''}>Pilihan Ganda (Checkbox)</option>
                </select>
            </div>
        </div>
        
        <!-- Price input for checkbox modifier -->
        <div class="mod-group-checkbox-price-wrapper" style="display: ${groupType === 'checkbox' ? 'block' : 'none'}; margin-top: 8px;">
            <div class="form-group" style="margin-bottom: 0;">
                <label style="font-size: 11px;">Harga Tambahan (Rp)</label>
                <input type="number" class="mod-group-checkbox-price" min="0" placeholder="0" value="${groupPrice}" style="padding: 6px 10px; font-size: 12px; margin-bottom: 0;">
            </div>
        </div>
        
        <!-- Options list for radio modifier -->
        <div class="mod-group-radio-options-wrapper" style="display: ${groupType === 'radio' ? 'block' : 'none'}; margin-top: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 11px; font-weight: 600; color: var(--text-secondary);">Daftar Pilihan:</span>
                <button type="button" class="btn btn-sm btn-secondary-outline" onclick="addModifierBuilderOptionRow(this)" style="font-size: 10px; padding: 2px 6px;">+ Pilihan</button>
            </div>
            <div class="modifier-builder-options-container">
                <!-- Dynamically loaded options rows -->
            </div>
        </div>
    `;
    
    container.appendChild(groupDiv);
    lucide.createIcons();
    
    const optionsContainer = groupDiv.querySelector(".modifier-builder-options-container");
    if (groupType === "radio" && groupData && groupData.options) {
        groupData.options.forEach(opt => {
            addModifierBuilderOptionRow(optionsContainer, opt);
        });
    } else if (groupType === "radio") {
        // Add one default blank option row
        addModifierBuilderOptionRow(optionsContainer);
    }
}

function toggleModifierGroupBuilderType(selectEl) {
    const card = selectEl.parentElement.parentElement.parentElement;
    const checkboxWrapper = card.querySelector(".mod-group-checkbox-price-wrapper");
    const radioWrapper = card.querySelector(".mod-group-radio-options-wrapper");
    const optionsContainer = card.querySelector(".modifier-builder-options-container");
    
    if (selectEl.value === "checkbox") {
        checkboxWrapper.style.display = "block";
        radioWrapper.style.display = "none";
    } else {
        checkboxWrapper.style.display = "none";
        radioWrapper.style.display = "block";
        if (optionsContainer.children.length === 0) {
            addModifierBuilderOptionRow(optionsContainer);
        }
    }
}

function addModifierBuilderOptionRow(target, optionData = null) {
    let container;
    if (target.classList && target.classList.contains("btn")) {
        // Clicked from button
        container = target.parentElement.nextElementSibling;
    } else {
        container = target;
    }
    
    const optName = optionData ? optionData.name : "";
    const optPrice = optionData ? optionData.price : 0;
    
    const row = document.createElement("div");
    row.className = "modifier-builder-option-row";
    row.innerHTML = `
        <input type="text" class="mod-opt-name" required placeholder="Nama pilihan (misal: Sedang)" value="${optName}" style="flex: 1; padding: 6px 10px; font-size: 11px; margin-bottom: 0;">
        <input type="number" class="mod-opt-price" min="0" placeholder="Harga (+Rp)" value="${optPrice}" style="width: 100px; padding: 6px 10px; font-size: 11px; margin-bottom: 0;">
        <button type="button" class="btn-delete-option" title="Hapus Pilihan" onclick="this.parentElement.remove()"><i data-lucide="minus-circle" style="width: 14px; height: 14px;"></i></button>
    `;
    
    container.appendChild(row);
    lucide.createIcons();
}

function renderProductModifiersBuilder(modifiers) {
    const container = document.getElementById("product-modifiers-container");
    if (!container) return;
    container.innerHTML = "";
    
    if (modifiers && modifiers.length > 0) {
        modifiers.forEach(group => {
            addProductModifierGroup(group);
        });
    }
}

function getProductModifiersFromBuilder() {
    const container = document.getElementById("product-modifiers-container");
    if (!container) return [];
    
    const modifiers = [];
    const cards = container.querySelectorAll(".modifier-group-builder-card");
    
    cards.forEach((card, idx) => {
        const groupName = card.querySelector(".mod-group-name").value.trim();
        const groupType = card.querySelector(".mod-group-type").value;
        
        if (!groupName) return;
        
        const groupObj = {
            id: `mod-${generateId('grp').toLowerCase()}`,
            name: groupName,
            type: groupType
        };
        
        if (groupType === "checkbox") {
            const price = parseFloat(card.querySelector(".mod-group-checkbox-price").value) || 0;
            groupObj.price = price;
        } else {
            const optionRows = card.querySelectorAll(".modifier-builder-option-row");
            const options = [];
            optionRows.forEach(row => {
                const optName = row.querySelector(".mod-opt-name").value.trim();
                const optPrice = parseFloat(row.querySelector(".mod-opt-price").value) || 0;
                if (optName) {
                    options.push({ name: optName, price: optPrice });
                }
            });
            groupObj.options = options;
        }
        
        modifiers.push(groupObj);
    });
    
    return modifiers;
}

window.addProductModifierGroup = addProductModifierGroup;
window.toggleModifierGroupBuilderType = toggleModifierGroupBuilderType;
window.addModifierBuilderOptionRow = addModifierBuilderOptionRow;
window.renderProductModifiersBuilder = renderProductModifiersBuilder;
window.getProductModifiersFromBuilder = getProductModifiersFromBuilder;

function openAddProductModal() {
    populateProductCategoryDropdown();
    document.getElementById("modal-product-title").textContent = "Tambah Produk Baru";
    document.getElementById("product-form").reset();
    document.getElementById("prod-id").value = "";
    const container = document.getElementById("product-modifiers-container");
    if (container) container.innerHTML = "";
    
    // Reset image preview state
    const previewImg = document.getElementById("prod-image-preview");
    const previewPlaceholder = document.getElementById("prod-image-preview-placeholder");
    const btnRemove = document.getElementById("btn-remove-prod-image");
    if (previewImg) previewImg.style.display = "none";
    if (previewPlaceholder) previewPlaceholder.style.display = "block";
    if (btnRemove) btnRemove.style.display = "none";

    document.getElementById("modal-product").classList.add("active");
    sfx.playBeep();
}

function openEditProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    populateProductCategoryDropdown();
    document.getElementById("modal-product-title").textContent = "Edit Data Produk";
    document.getElementById("prod-id").value = product.id;
    document.getElementById("prod-name").value = product.name;
    document.getElementById("prod-category").value = product.category;
    document.getElementById("prod-price").value = product.price;
    document.getElementById("prod-stock").value = product.stock;
    document.getElementById("prod-sku").value = product.sku || "";
    document.getElementById("prod-image").value = product.image || "";

    // Set image preview state
    const previewImg = document.getElementById("prod-image-preview");
    const previewPlaceholder = document.getElementById("prod-image-preview-placeholder");
    const btnRemove = document.getElementById("btn-remove-prod-image");
    if (product.image) {
        if (previewImg) {
            previewImg.src = product.image;
            previewImg.style.display = "block";
        }
        if (previewPlaceholder) previewPlaceholder.style.display = "none";
        if (btnRemove) btnRemove.style.display = "inline-flex";
    } else {
        if (previewImg) {
            previewImg.src = "";
            previewImg.style.display = "none";
        }
        if (previewPlaceholder) previewPlaceholder.style.display = "block";
        if (btnRemove) btnRemove.style.display = "none";
    }

    renderProductModifiersBuilder(product.modifiers || []);

    document.getElementById("modal-product").classList.add("active");
    sfx.playBeep();
}

function handleProductFormSubmit(e) {
    e.preventDefault();

    const id = document.getElementById("prod-id").value;
    const name = document.getElementById("prod-name").value;
    const category = document.getElementById("prod-category").value;
    const price = parseFloat(document.getElementById("prod-price").value) || 0;
    const stock = parseInt(document.getElementById("prod-stock").value) || 0;
    const sku = document.getElementById("prod-sku").value.trim();
    
    let image = document.getElementById("prod-image").value.trim();
    if (!image) {
        // Fallback placeholder based on category
        if (category === "makanan") image = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400";
        else if (category === "minuman") image = "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400";
        else if (category === "cemilan") image = "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400";
        else image = "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400";
    }

    const modifiers = getProductModifiersFromBuilder();

    if (id) {
        // Edit Mode
        const productIndex = products.findIndex(p => p.id === id);
        if (productIndex !== -1) {
            const oldProduct = products[productIndex];
            products[productIndex] = { ...products[productIndex], name, category, price, stock, sku, image, modifiers };
            logActivity("Edit Produk", `Mengubah data produk ${name} (Stok: ${oldProduct.stock} -> ${stock}, Harga: Rp ${oldProduct.price} -> Rp ${price})`);
        }
    } else {
        // Add Mode
        const newProduct = {
            id: generateId("prod"),
            name, category, price, stock, sku, image, modifiers
        };
        products.push(newProduct);
        logActivity("Tambah Produk", `Menambahkan produk baru ${name} (Kategori: ${category}, Stok: ${stock}, Harga: Rp ${price})`);
    }

    saveProductsToStorage();
    document.getElementById("modal-product").classList.remove("active");
    
    renderCatalog();
    renderInventoryTable();
    sfx.playSuccess();
}

function deleteProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (confirm(`Apakah Anda yakin ingin menghapus produk "${product.name}" dari katalog?`)) {
        products = products.filter(p => p.id !== productId);
        logActivity("Hapus Produk", `Menghapus produk "${product.name}" (Kategori: ${product.category}, ID: ${productId})`);
        saveProductsToStorage();
        renderInventoryTable();
        renderCatalog();
        sfx.playBeep();
    }
}

// --- Analytics Page Charts & Metrics ---
function renderAnalytics() {
    // 1. Calculate General Metrics
    let totalRevenue = 0;
    let totalOrders = orders.length;
    let lowStockCount = products.filter(p => p.stock <= 5).length;
    
    orders.forEach(o => totalRevenue += o.total);
    const avgTicket = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    document.getElementById("stat-total-revenue").textContent = formatPrice(totalRevenue);
    document.getElementById("stat-total-orders").textContent = totalOrders;
    document.getElementById("stat-avg-ticket").textContent = formatPrice(avgTicket);
    document.getElementById("stat-low-stock").textContent = lowStockCount;

    if (lowStockCount > 0) {
        document.getElementById("stat-low-stock-sub").textContent = `${lowStockCount} produk segera habis!`;
        document.getElementById("stat-low-stock-sub").className = "stat-trend trend-down";
    } else {
        document.getElementById("stat-low-stock-sub").textContent = "Semua stok aman";
        document.getElementById("stat-low-stock-sub").className = "stat-trend trend-up";
    }

    // 2. Render Custom Dynamic SVG Line Chart (Revenue trend last 7 transactions)
    const lineChart = document.getElementById("sales-line-chart");
    const chartPath = document.getElementById("chart-path");
    const chartArea = document.getElementById("chart-area");
    const chartDots = document.getElementById("chart-dots");
    const chartLabels = document.getElementById("chart-labels");
    
    chartDots.innerHTML = "";
    chartLabels.innerHTML = "";

    // Take last 7 orders, reversed to represent chronological order
    const recentOrders = [...orders].slice(0, 7).reverse();
    
    if (recentOrders.length < 2) {
        // Put simulated data if not enough real orders for visual UX
        recentOrders.push(
            { id: "MOCK-1", total: 45000, date: "2026-06-25T00:00:00Z" },
            { id: "MOCK-2", total: 68000, date: "2026-06-26T00:00:00Z" },
            { id: "MOCK-3", total: 95000, date: "2026-06-27T00:00:00Z" },
            { id: "MOCK-4", total: totalRevenue || 120000, date: "2026-06-28T00:00:00Z" }
        );
    }

    const maxVal = Math.max(...recentOrders.map(o => o.total)) * 1.2 || 10000;
    const minVal = 0;

    const chartWidth = 440; // available X space from 40 to 480
    const chartHeight = 150; // available Y space from 20 to 170
    
    let pathD = "";
    let areaD = "";
    
    recentOrders.forEach((order, index) => {
        const percentX = index / (recentOrders.length - 1);
        const x = 40 + percentX * chartWidth;
        const percentY = (order.total - minVal) / (maxVal - minVal);
        const y = 170 - percentY * chartHeight;

        if (index === 0) {
            pathD = `M ${x} ${y}`;
            areaD = `M ${x} 170 L ${x} ${y}`;
        } else {
            pathD += ` L ${x} ${y}`;
            areaD += ` L ${x} ${y}`;
        }

        if (index === recentOrders.length - 1) {
            areaD += ` L ${x} 170 Z`;
        }

        // Add dots
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", 5);
        circle.setAttribute("fill", "#ffffff");
        circle.setAttribute("stroke", "#6366f1");
        circle.setAttribute("stroke-width", 3);
        
        // Add tooltip mock behavior or title
        const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.textContent = `Order #${order.id || 'Simulasi'}: ${formatPrice(order.total)}`;
        circle.appendChild(title);
        chartDots.appendChild(circle);

        // Add text labels underneath
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x);
        text.setAttribute("y", 190);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "var(--text-secondary)");
        text.setAttribute("font-size", 10);
        
        const labelId = order.id ? order.id.substring(3) : "Sim";
        text.textContent = "#" + labelId;
        chartLabels.appendChild(text);
    });

    chartPath.setAttribute("d", pathD);
    chartArea.setAttribute("d", areaD);

    // 3. Render Best-Selling Categories Bar Chart
    const categoriesSales = { makanan: 0, minuman: 0, cemilan: 0, penutup: 0 };
    
    // Accumulate sales of each category from orders
    orders.forEach(o => {
        o.items.forEach(item => {
            const prod = products.find(p => p.id === item.id);
            const cat = prod ? prod.category : "makanan"; // fallback
            if (categoriesSales[cat] !== undefined) {
                categoriesSales[cat] += item.price * item.quantity;
            }
        });
    });

    // If total sales are zero, fill with simulated values for design beauty
    const salesSum = Object.values(categoriesSales).reduce((a, b) => a + b, 0);
    if (salesSum === 0) {
        categoriesSales.makanan = 150000;
        categoriesSales.minuman = 250000;
        categoriesSales.cemilan = 80000;
        categoriesSales.penutup = 120000;
    }

    const categoriesContainer = document.getElementById("category-bars-container");
    categoriesContainer.innerHTML = "";

    const maxSales = Math.max(...Object.values(categoriesSales));

    Object.keys(categoriesSales).forEach(cat => {
        const salesVal = categoriesSales[cat];
        const percent = maxSales > 0 ? (salesVal / maxSales) * 100 : 0;
        
        const row = document.createElement("div");
        row.className = "category-bar-row";
        row.innerHTML = `
            <div class="bar-meta">
                <span class="bar-name" style="text-transform: capitalize;">${cat}</span>
                <span class="bar-value">${formatPrice(salesVal)}</span>
            </div>
            <div class="bar-track">
                <div class="bar-fill" style="width: 0%;"></div>
            </div>
        `;
        categoriesContainer.appendChild(row);

        // Smooth fill animation
        setTimeout(() => {
            row.querySelector(".bar-fill").style.width = `${percent}%`;
        }, 100);
    });

    // Render new analytical elements
    renderHourlySalesChart();
    renderPaymentComparison();
    renderTop5Menu();
    renderVoidLogsTable();
    if (typeof renderAuditLogs === "function") {
        renderAuditLogs();
    }
    if (typeof renderPandL === "function") {
        renderPandL();
    }
}

// --- Settings Form Handlers ---
function populateSettingsForm() {
    const elStoreName = document.getElementById("set-store-name");
    if (!elStoreName) return; // Elements not yet in DOM
    elStoreName.value = settings.storeName || "";
    
    const elTagline = document.getElementById("set-store-tagline");
    if (elTagline) elTagline.value = settings.tagline || "";
    
    const elAddress = document.getElementById("set-store-address");
    if (elAddress) elAddress.value = settings.address || "";
    
    const elPhone = document.getElementById("set-store-phone");
    if (elPhone) elPhone.value = settings.phone || "";
    
    // Preview store logo
    updateStoreLogoPreview();
    
    const elBusinessMode = document.getElementById("set-business-mode");
    if (elBusinessMode) elBusinessMode.value = settings.businessMode || "f&b";
    const elCurrency = document.getElementById("set-currency");
    if (elCurrency) elCurrency.value = settings.currency;
    const elTaxEnabled = document.getElementById("set-tax-enabled");
    if (elTaxEnabled) elTaxEnabled.checked = settings.taxEnabled !== false;
    const elTaxRate = document.getElementById("set-tax-rate");
    if (elTaxRate) elTaxRate.value = settings.taxRate;
    const elServiceEnabled = document.getElementById("set-service-enabled");
    if (elServiceEnabled) elServiceEnabled.checked = !!settings.serviceChargeEnabled;
    const elServiceRate = document.getElementById("set-service-rate");
    if (elServiceRate) elServiceRate.value = settings.serviceChargeRate || 5;
    const elRoundingMode = document.getElementById("set-rounding-mode");
    if (elRoundingMode) elRoundingMode.value = settings.roundingMode || "nearest-100";
    const elSoundEnabled = document.getElementById("set-sound-enabled");
    if (elSoundEnabled) elSoundEnabled.checked = settings.soundEnabled;

    const setCustomCategories = document.getElementById("set-custom-categories");
    if (setCustomCategories) {
        setCustomCategories.value = (settings.customCategories || []).join(", ");
    }

    const setGasUrl = document.getElementById("set-gas-url");
    if (setGasUrl) setGasUrl.value = settings.googleAppsScriptUrl || "";

    const gasStatus = document.getElementById("gas-sync-status");
    if (gasStatus) {
        if (settings.googleAppsScriptUrl) {
            gasStatus.textContent = "Terhubung";
            gasStatus.style.background = "var(--success-glow)";
            gasStatus.style.color = "var(--success-color)";
        } else {
            gasStatus.textContent = "Belum Terhubung";
            gasStatus.style.background = "var(--bg-tertiary)";
            gasStatus.style.color = "var(--text-secondary)";
        }
    }
}

function handleGasSettingsSubmit(e) {
    e.preventDefault();
    settings.googleAppsScriptUrl = document.getElementById("set-gas-url").value.trim();
    saveSettingsToStorage();
    populateSettingsForm();
    sfx.playSuccess();
    alert("URL Google Apps Script berhasil disimpan!");
}

function handleStoreSettingsSubmit(e) {
    e.preventDefault();
    
    settings.storeName = document.getElementById("set-store-name").value.trim();
    settings.tagline = document.getElementById("set-store-tagline").value.trim();
    settings.address = document.getElementById("set-store-address").value.trim();
    settings.phone = document.getElementById("set-store-phone").value.trim();

    saveSettingsToStorage();
    updateStoreInfoUI();
    sfx.playSuccess();
    alert("Profil Toko berhasil diperbarui!");
}

function updateStoreLogoPreview() {
    const preview = document.getElementById("set-store-logo-preview");
    const removeBtn = document.getElementById("btn-remove-store-logo");
    if (preview) {
        if (settings.storeLogo) {
            preview.innerHTML = `<img src="${settings.storeLogo}" style="width: 100%; height: 100%; object-fit: contain;">`;
            if (removeBtn) removeBtn.style.display = "block";
        } else {
            preview.innerHTML = `<i data-lucide="image" style="width: 20px; height: 20px; color: var(--text-secondary);"></i>`;
            if (removeBtn) removeBtn.style.display = "none";
            if (window.lucide) lucide.createIcons();
        }
    }
}

function handleSystemSettingsSubmit(e) {
    e.preventDefault();

    const prevMode = settings.businessMode;
    const newMode = document.getElementById("set-business-mode").value;
    
    settings.currency = document.getElementById("set-currency").value;
    settings.taxEnabled = document.getElementById("set-tax-enabled").checked;
    settings.taxRate = parseFloat(document.getElementById("set-tax-rate").value) || 0;
    settings.serviceChargeEnabled = document.getElementById("set-service-enabled").checked;
    settings.serviceChargeRate = parseFloat(document.getElementById("set-service-rate").value) || 0;
    settings.roundingMode = document.getElementById("set-rounding-mode").value;
    settings.soundEnabled = document.getElementById("set-sound-enabled").checked;
    settings.businessMode = newMode;

    const customCatsInput = document.getElementById("set-custom-categories").value;
    settings.customCategories = customCatsInput.split(",")
        .map(c => c.trim())
        .filter(c => c.length > 0);

    saveSettingsToStorage();
    renderCategoryPills();

    if (newMode !== prevMode) {
        switchBusinessMode(newMode);
    } else {
        updateCartUI();
        renderCatalog();
        sfx.playSuccess();
        alert("Konfigurasi Sistem berhasil disimpan!");
    }
}

function updateStoreInfoUI() {
    const elName = document.getElementById("sidebar-store-name");
    const elType = document.getElementById("sidebar-store-type");
    if (elName) elName.textContent = settings.storeName;
    if (elType) elType.textContent = settings.tagline;
}

function switchBusinessMode(mode, silent = false) {
    const prevMode = settings.businessMode || "f&b";
    
    // Save current active products list to storage under previous mode cache key
    localStorage.setItem(`kasirKu_products_${prevMode}`, JSON.stringify(products));
    
    // Load products list for the new mode, fallback to default lists if cache is empty
    let loadedProducts = [];
    if (mode === "f&b") {
        loadedProducts = JSON.parse(localStorage.getItem("kasirKu_products_fb")) || DEFAULT_PRODUCTS;
    } else if (mode === "retail") {
        loadedProducts = JSON.parse(localStorage.getItem("kasirKu_products_retail")) || RETAIL_PRODUCTS;
    } else if (mode === "sparepart") {
        loadedProducts = JSON.parse(localStorage.getItem("kasirKu_products_sparepart")) || [];
    } else if (mode === "laundry") {
        loadedProducts = JSON.parse(localStorage.getItem("kasirKu_products_laundry")) || [];
    }
    
    products = loadedProducts;
    localStorage.setItem("kasirKu_products", JSON.stringify(products));
    settings.businessMode = mode;
    
    // Show/Hide KDS and Recipes sidebar navigation item
    const kdsNav = document.getElementById("nav-kds");
    const recipesNav = document.getElementById("nav-recipes");
    if (kdsNav) kdsNav.style.display = (mode === "f&b") ? "flex" : "none";
    if (recipesNav) recipesNav.style.display = (mode === "f&b") ? "flex" : "none";
    
    // Render dynamic category filter pills
    renderCategoryPills();
    
    // Update customer types dropdown based on mode
    const custType = document.getElementById("cart-customer-type");
    if (custType) {
        if (mode === "f&b") {
            custType.innerHTML = `
                <option value="Pelanggan Umum">Pelanggan Umum</option>
                <option value="Meja 01">Meja 01</option>
                <option value="Meja 02">Meja 02</option>
                <option value="Meja 03">Meja 03</option>
                <option value="Meja 04">Meja 04</option>
                <option value="Take Away">Bawa Pulang (Takeaway)</option>
            `;
        } else if (mode === "retail") {
            custType.innerHTML = `
                <option value="Pelanggan Umum">Pelanggan Umum</option>
                <option value="Delivery / Kurir">Pengiriman (Delivery)</option>
                <option value="Take Away">Ambil di Toko</option>
            `;
        } else if (mode === "sparepart") {
            custType.innerHTML = `
                <option value="Pelanggan Umum">Pelanggan Umum</option>
                <option value="Bengkel Rekanan">Bengkel Rekanan</option>
                <option value="Instansi / Kantor">Instansi / Kantor</option>
            `;
        } else if (mode === "laundry") {
            custType.innerHTML = `
                <option value="Pelanggan Umum">Pelanggan Umum</option>
                <option value="Paket Langganan">Paket Langganan</option>
                <option value="Ekspres 3 Jam">Ekspres 3 Jam</option>
            `;
        }
    }
    
    // Change profile info defaults if they are the default ones
    const isDefaultStore = settings.storeName === "Kopi Senja" || settings.storeName === "Warung Sembako Madura" || settings.storeName === "Senja Motor Bengkel" || settings.storeName === "Rapi Laundry";
    if (isDefaultStore) {
        if (mode === "f&b") {
            settings.storeName = "Kopi Senja";
            settings.tagline = "Premium Cafe & Eatery";
            settings.address = "Jl. Boulevard Senopati No. 42, Kebayoran Baru, Jakarta Selatan";
        } else if (mode === "retail") {
            settings.storeName = "Warung Sembako Madura";
            settings.tagline = "Toko Kelontong & Ritel Modern";
            settings.address = "Jl. Raya Senopati No. 88, Kebayoran Baru, Jakarta Selatan";
        } else if (mode === "sparepart") {
            settings.storeName = "Senja Motor Bengkel";
            settings.tagline = "Suku Cadang & Service Center";
            settings.address = "Jl. Otomotif Raya No. 101, Kebayoran Baru, Jakarta Selatan";
        } else if (mode === "laundry") {
            settings.storeName = "Rapi Laundry";
            settings.tagline = "Jasa Cuci & Setrika Kilat";
            settings.address = "Jl. Wangi Melati No. 7, Kebayoran Baru, Jakarta Selatan";
        }
    }
    
    saveSettingsToStorage();
    saveProductsToStorage(true); // Skip GAS upload during mode switch to avoid catalog overwrite
    updateStoreInfoUI();
    
    activeCategory = "all";
    renderCatalog();
    updateCartUI();
    populateSettingsForm();
    
    sfx.playSuccess();
    if (!silent) {
        let modeLabel = "F&B Cafe";
        if (mode === "retail") modeLabel = "Kelontong / Retail";
        if (mode === "sparepart") modeLabel = "Toko Sparepart";
        if (mode === "laundry") modeLabel = "Laundry Jasa";
        alert(`Aplikasi sukses dialihkan ke Mode ${modeLabel}!`);
    }
}

function renderCategoryPills() {
    const catFilter = document.querySelector(".categories-filter");
    if (!catFilter) return;
    
    const activeCats = getActiveCategories();
    let html = `<button class="category-pill ${activeCategory === 'all' ? 'active' : ''}" data-category="all">Semua</button>`;
    
    activeCats.forEach(cat => {
        html += `<button class="category-pill ${activeCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">${cat.name}</button>`;
    });
    
    catFilter.innerHTML = html;
    
    // Bind click events on the new category pills
    const pills = catFilter.querySelectorAll(".category-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", (e) => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            activeCategory = pill.getAttribute("data-category");
            renderCatalog();
            sfx.playBeep();
        });
    });
}

function populateProductCategoryDropdown() {
    const dropdown = document.getElementById("prod-category");
    if (!dropdown) return;
    
    const activeCats = getActiveCategories();
    dropdown.innerHTML = "";
    activeCats.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat.id;
        opt.textContent = cat.name;
        dropdown.appendChild(opt);
    });
}

function resetSystemData() {
    if (confirm("PERINGATAN: Tindakan ini akan menghapus seluruh data transaksi kustom dan mengembalikan katalog produk ke data default. Lanjutkan?")) {
        localStorage.removeItem("kasirKu_products");
        localStorage.removeItem("kasirKu_orders");
        localStorage.removeItem("kasirKu_settings");
        
        loadDatabase();
        updateStoreInfoUI();
        renderCatalog();
        updateCartUI();
        
        if (activePage === "inventory") renderInventoryTable();
        else if (activePage === "history") renderHistoryTable();
        else if (activePage === "analytics") renderAnalytics();
        
        sfx.playSuccess();
        alert("Database aplikasi berhasil direset!");
    }
}

// --- Customer Relationship Management (CRM) Handlers ---
function renderCrmTable() {
    const tbody = document.getElementById("crm-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    customersLoyalty.forEach(cust => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${cust.id}</strong></td>
            <td>${cust.name}</td>
            <td>${cust.phone}</td>
            <td><span class="badge-status success">${cust.points} Poin</span></td>
            <td>${formatPrice(cust.totalSpend)}</td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="editCrmMember('${cust.id}')">Edit</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function updateMemberLookupDropdown() {
    const dropdown = document.getElementById("cart-member-lookup");
    if (!dropdown) return;
    dropdown.innerHTML = '<option value="">-- Pilih Member --</option>';
    customersLoyalty.forEach(cust => {
        const opt = document.createElement("option");
        opt.value = cust.id;
        opt.textContent = `${cust.name} (${cust.phone})`;
        if (cust.id === selectedMemberId) {
            opt.selected = true;
        }
        dropdown.appendChild(opt);
    });
}

window.editCrmMember = function(id) {
    const cust = customersLoyalty.find(c => c.id === id);
    if (cust) {
        document.getElementById("crm-id").value = cust.id;
        document.getElementById("crm-name").value = cust.name;
        document.getElementById("crm-phone").value = cust.phone;
        document.getElementById("crm-modal-title").textContent = "Edit Member";
        document.getElementById("modal-crm").classList.add("active");
    }
};

function handleCrmFormSubmit(e) {
    e.preventDefault();
    const idInput = document.getElementById("crm-id").value;
    const name = document.getElementById("crm-name").value.trim();
    const phone = document.getElementById("crm-phone").value.trim();
    
    let syncedMember = null;
    if (idInput) {
        const cust = customersLoyalty.find(c => c.id === idInput);
        if (cust) {
            cust.name = name;
            cust.phone = phone;
            syncedMember = cust;
        }
    } else {
        const newCust = {
            id: "C-" + Math.floor(100 + Math.random() * 900),
            name: name,
            phone: phone,
            points: 0,
            totalSpend: 0,
            visitCount: 0
        };
        customersLoyalty.push(newCust);
        selectedMemberId = newCust.id;
        syncedMember = newCust;
    }
    
    saveCrmToStorage();

    // Sync CRM member to Google Sheets in real-time
    if (settings.googleAppsScriptUrl && syncedMember) {
        const payloadMember = {
            id: syncedMember.id,
            name: syncedMember.name,
            phone: syncedMember.phone,
            points: syncedMember.points || 0,
            tier: syncedMember.tier || "Bronze",
            visitCount: syncedMember.visitCount || 0,
            totalSpent: syncedMember.totalSpend || 0
        };
        
        if (isOfflineSimulated) {
            addToOfflineQueue("update_crm", payloadMember);
        } else {
            sendToGasBackend("update_crm", payloadMember)
                .then(res => {
                    if (res && res.status === "success") {
                        showSyncToast("CRM Member tersinkron ke Sheets!");
                    }
                })
                .catch(err => console.warn("Failed to sync CRM member, queued offline", err));
        }
    }
    updateMemberLookupDropdown();
    updateCartUI();
    document.getElementById("modal-crm").classList.remove("active");
    if (activePage === "crm") renderCrmTable();
    sfx.playSuccess();
}

// --- Recipes & Raw Stocks Handlers ---
function renderRecipesPage() {
    const tbody = document.getElementById("ingredients-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    ingredients.forEach(ing => {
        let status = "success";
        let statusLbl = "Cukup";
        if (ing.stock <= 0) {
            status = "danger";
            statusLbl = "Habis";
        } else if (ing.stock < 500 && (ing.unit === "g" || ing.unit === "ml")) {
            status = "warning";
            statusLbl = "Menipis";
        } else if (ing.stock < 10 && ing.unit === "pcs") {
            status = "warning";
            statusLbl = "Menipis";
        }
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${ing.name}</strong></td>
            <td>${ing.category || '-'}</td>
            <td>${ing.stock.toFixed(1)}</td>
            <td>${ing.unit}</td>
            <td><span class="badge-status ${status}">${statusLbl}</span></td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="editIngredient('${ing.id}')" style="padding:4px 8px;"><i data-lucide="edit-3" style="width:14px;height:14px;"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    const mapContainer = document.getElementById("recipe-mapping-container");
    if (!mapContainer) return;
    mapContainer.innerHTML = "";
    
    products.forEach(prod => {
        const prodRecipe = recipes[prod.id] || [];
        let recipeDesc = "Tidak ada bahan terkait";
        if (prodRecipe.length > 0) {
            recipeDesc = prodRecipe.map(r => {
                const ing = ingredients.find(i => i.id === r.ingredientId);
                return ing ? `${ing.name} (${r.quantity}${ing.unit})` : "";
            }).filter(Boolean).join(", ");
        }
        
        const card = document.createElement("div");
        card.className = "recipe-mapping-card";
        card.innerHTML = `
            <div class="recipe-prod-info">
                <h4>${prod.name}</h4>
                <p style="font-size:12px;color:var(--text-muted);">${recipeDesc}</p>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="openRecipeMappingModal('${prod.id}')">Atur Resep</button>
        `;
        mapContainer.appendChild(card);
    });
    lucide.createIcons();
}

window.editIngredient = function(id) {
    const ing = ingredients.find(i => i.id === id);
    if (ing) {
        document.getElementById("ing-id").value = ing.id;
        document.getElementById("ing-name").value = ing.name;
        document.getElementById("ing-stock").value = ing.stock;
        document.getElementById("ing-unit").value = ing.unit;
        document.getElementById("ing-category").value = ing.category || "";
        document.getElementById("ing-modal-title").textContent = "Edit Bahan Baku";
        document.getElementById("modal-ingredient").classList.add("active");
    }
};

function handleIngredientFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("ing-id").value;
    const name = document.getElementById("ing-name").value.trim();
    const stock = parseFloat(document.getElementById("ing-stock").value) || 0;
    const unit = document.getElementById("ing-unit").value;
    const category = document.getElementById("ing-category").value.trim();
    
    if (id) {
        const ing = ingredients.find(i => i.id === id);
        if (ing) {
            ing.name = name;
            ing.stock = stock;
            ing.unit = unit;
            ing.category = category;
        }
    } else {
        const newIng = {
            id: "I-" + Math.floor(100 + Math.random() * 900),
            name: name,
            stock: stock,
            unit: unit,
            category: category
        };
        ingredients.push(newIng);
    }
    
    saveIngredientsToStorage();
    renderRecipesPage();
    document.getElementById("modal-ingredient").classList.remove("active");
    sfx.playSuccess();
}

window.openRecipeMappingModal = function(prodId) {
    const prod = products.find(p => p.id === prodId);
    if (!prod) return;
    
    document.getElementById("rec-map-prod-id").value = prodId;
    document.getElementById("rec-map-prod-desc").innerHTML = `Pilih bahan baku dan takaran untuk produk: <strong>${prod.name}</strong>`;
    
    const container = document.getElementById("recipe-ingredients-rows-container");
    if (!container) return;
    container.innerHTML = "";
    
    const prodRecipe = recipes[prodId] || [];
    
    ingredients.forEach(ing => {
        const mapping = prodRecipe.find(r => r.ingredientId === ing.id);
        const isChecked = !!mapping;
        const qty = mapping ? mapping.quantity : "";
        
        const row = document.createElement("div");
        row.className = "ing-row-item";
        row.innerHTML = `
            <input type="checkbox" id="chk-ing-${ing.id}" ${isChecked ? 'checked' : ''} style="transform: scale(1.2);">
            <label for="chk-ing-${ing.id}" style="font-weight:600;font-size:13px;cursor:pointer;margin:0 8px;">${ing.name}</label>
            <input type="number" id="qty-ing-${ing.id}" value="${qty}" placeholder="0" min="0" step="any" style="width:70px;height:24px;text-align:right;">
            <span class="unit-lbl" style="font-size:12px;color:var(--text-muted);">${ing.unit}</span>
        `;
        container.appendChild(row);
    });
    
    document.getElementById("modal-recipe-mapping").classList.add("active");
};

function handleRecipeMappingSubmit(e) {
    e.preventDefault();
    const prodId = document.getElementById("rec-map-prod-id").value;
    
    const newRecipe = [];
    ingredients.forEach(ing => {
        const chk = document.getElementById(`chk-ing-${ing.id}`);
        const qtyInput = document.getElementById(`qty-ing-${ing.id}`);
        
        if (chk && chk.checked) {
            const qty = parseFloat(qtyInput.value) || 0;
            if (qty > 0) {
                newRecipe.push({
                    ingredientId: ing.id,
                    quantity: qty
                });
            }
        }
    });
    
    recipes[prodId] = newRecipe;
    saveRecipesToStorage();
    renderRecipesPage();
    document.getElementById("modal-recipe-mapping").classList.remove("active");
    sfx.playSuccess();
}

// --- Kitchen Display System (KDS) Queue ---
function renderKdsBoard() {
    const board = document.getElementById("kds-board");
    if (!board) return;
    board.innerHTML = "";
    
    const kdsQueue = JSON.parse(localStorage.getItem("kasirKu_kds_queue")) || [];
    
    if (kdsQueue.length === 0) {
        board.innerHTML = `
            <div class="empty-cart-state" style="grid-column: span 100%; padding: 60px 0;">
                <i data-lucide="chef-hat" style="width:48px;height:48px;margin-bottom:8px;opacity:0.4;"></i>
                <p>Tidak ada antrean pesanan aktif di dapur</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    kdsQueue.forEach((order, index) => {
        const minutesAgo = Math.floor((new Date() - new Date(order.date)) / 60000);
        const ticket = document.createElement("div");
        ticket.className = "kds-ticket cooking";
        
        let itemsHtml = "";
        order.items.forEach(item => {
            itemsHtml += `
                <div class="kds-ticket-item">
                    <div class="kds-item-qty-name">
                        <span class="kds-item-qty">${item.quantity}x</span>
                        <span>${item.name}</span>
                    </div>
                </div>
                ${item.notes ? `<div class="kds-item-notes">// ${item.notes}</div>` : ""}
            `;
        });
        
        ticket.innerHTML = `
            <div class="kds-ticket-header">
                <span class="kds-ticket-title">${order.customer}</span>
                <span class="kds-ticket-time"><i data-lucide="clock" style="width:12px;height:12px;"></i> ${minutesAgo}m lalu</span>
            </div>
            <div class="kds-ticket-body">
                ${itemsHtml}
            </div>
            <div class="kds-ticket-footer">
                <button class="btn btn-primary btn-block btn-sm" onclick="completeKdsTicket(${index})">SELESAI</button>
            </div>
        `;
        board.appendChild(ticket);
    });
    lucide.createIcons();
}

window.completeKdsTicket = function(index) {
    let kdsQueue = JSON.parse(localStorage.getItem("kasirKu_kds_queue")) || [];
    kdsQueue.splice(index, 1);
    localStorage.setItem("kasirKu_kds_queue", JSON.stringify(kdsQueue));
    sfx.playSuccess();
    renderKdsBoard();
};

// --- Held Orders (Hold & Recall) Management ---
function holdOrder() {
    if (cart.length === 0) return;
    
    sfx.playBeep();
    const customer = document.getElementById("cart-customer-type").value;
    
    let displayCustomerName = customer;
    if (selectedMemberId) {
        const mem = customersLoyalty.find(c => c.id === selectedMemberId);
        if (mem) {
            displayCustomerName = `${mem.name} (${customer})`;
        }
    }
    
    const heldOrder = {
        id: generateId("HOLD"),
        date: new Date().toISOString(),
        customer: displayCustomerName,
        memberId: selectedMemberId,
        appliedPromo: appliedPromo,
        loyaltyRedeemApplied: loyaltyRedeemApplied,
        items: [...cart]
    };
    
    heldOrders.push(heldOrder);
    saveHeldOrdersToStorage();
    updateHeldOrdersCountBadge();
    
    // Clear cart state completely
    cart = [];
    appliedPromo = null;
    selectedMemberId = "";
    loyaltyRedeemApplied = false;
    
    const memberLookup = document.getElementById("cart-member-lookup");
    if (memberLookup) memberLookup.value = "";
    
    document.getElementById("promo-code").value = "";
    document.getElementById("promo-applied-badge").classList.add("hidden");
    document.getElementById("discount-row").classList.add("hidden");
    
    const redeemSection = document.getElementById("loyalty-redeem-section");
    if (redeemSection) redeemSection.classList.add("hidden");
    
    updateCartUI();
    alert(`Pesanan berhasil ditahan dengan nama "${displayCustomerName}".`);
}

function renderHeldOrdersList() {
    // 1. Render Table in modal (keeping fallback compatibility)
    const tbody = document.getElementById("held-orders-table-body");
    if (tbody) {
        tbody.innerHTML = "";
        if (heldOrders.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 30px; color: var(--text-muted);">
                        Tidak ada pesanan yang sedang ditahan.
                    </td>
                </tr>
            `;
        } else {
            heldOrders.forEach((o, index) => {
                const time = new Date(o.date).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
                let subtotal = 0;
                o.items.forEach(item => {
                    let modifierPriceSum = 0;
                    if (item.selectedModifiers && item.selectedModifiers.length > 0) {
                        item.selectedModifiers.forEach(mod => modifierPriceSum += mod.price);
                    }
                    subtotal += (item.product.price + modifierPriceSum) * item.quantity;
                });
                
                let discount = 0;
                if (o.appliedPromo) {
                    discount = o.appliedPromo.type === "percent" ? subtotal * (o.appliedPromo.value / 100) : o.appliedPromo.value;
                }
                if (o.loyaltyRedeemApplied) {
                    discount += 5000;
                }
                if (discount > subtotal) discount = subtotal;
                const baseTaxSubtotal = subtotal - discount;
                const serviceCharge = settings.serviceChargeEnabled ? baseTaxSubtotal * (settings.serviceChargeRate / 100) : 0;
                const tax = settings.taxEnabled ? (baseTaxSubtotal + serviceCharge) * (settings.taxRate / 100) : 0;
                const preRoundTotal = baseTaxSubtotal + serviceCharge + tax;
                const rounding = getRoundedAmount(preRoundTotal);
                let total = rounding.roundedAmount;
                
                const itemsDesc = o.items.map(item => `${item.quantity}x ${item.product.name}`).join(", ");
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong>${o.customer}</strong></td>
                    <td>${time}</td>
                    <td><span style="font-size: 12px; color: var(--text-secondary); max-width: 250px; display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${itemsDesc}">${itemsDesc}</span></td>
                    <td><strong>${formatPrice(total)}</strong></td>
                    <td>
                        <div style="display: flex; gap: 6px;">
                            <button class="btn btn-primary btn-sm" onclick="recallHeldOrder('${o.id}')" style="padding: 4px 10px; font-size: 11px;">Panggil</button>
                            <button class="btn btn-danger-outline btn-sm" onclick="deleteHeldOrder('${o.id}')" style="padding: 4px 10px; font-size: 11px;"><i data-lucide="trash-2" style="width:12px;height:12px;"></i></button>
                        </div>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }
    }

    // 2. Render Sidebar list for easy access (Tabs-system)
    const sidebarContainer = document.getElementById("sidebar-held-orders-container");
    if (sidebarContainer) {
        sidebarContainer.innerHTML = "";
        
        if (heldOrders.length === 0) {
            sidebarContainer.innerHTML = `
                <div class="empty-cart-state" style="padding: 40px 0;">
                    <div class="empty-icon"><i data-lucide="folder-sync"></i></div>
                    <p>Tidak ada pesanan tertahan</p>
                </div>
            `;
        } else {
            heldOrders.forEach(o => {
                const diffMs = (new Date() - new Date(o.date));
                const diffMin = Math.max(0, Math.floor(diffMs / 60000));
                
                let subtotal = 0;
                o.items.forEach(item => {
                    let modifierPriceSum = 0;
                    if (item.selectedModifiers && item.selectedModifiers.length > 0) {
                        item.selectedModifiers.forEach(mod => modifierPriceSum += mod.price);
                    }
                    subtotal += (item.product.price + modifierPriceSum) * item.quantity;
                });
                
                let discount = 0;
                if (o.appliedPromo) {
                    discount = o.appliedPromo.type === "percent" ? subtotal * (o.appliedPromo.value / 100) : o.appliedPromo.value;
                }
                if (o.loyaltyRedeemApplied) {
                    discount += 5000;
                }
                if (discount > subtotal) discount = subtotal;
                const baseTaxSubtotal = subtotal - discount;
                const serviceCharge = settings.serviceChargeEnabled ? baseTaxSubtotal * (settings.serviceChargeRate / 100) : 0;
                const tax = settings.taxEnabled ? (baseTaxSubtotal + serviceCharge) * (settings.taxRate / 100) : 0;
                const preRoundTotal = baseTaxSubtotal + serviceCharge + tax;
                const rounding = getRoundedAmount(preRoundTotal);
                let total = rounding.roundedAmount;

                const itemsDesc = o.items.map(item => {
                    let modDesc = "";
                    if (item.selectedModifiers && item.selectedModifiers.length > 0) {
                        modDesc = ` (${item.selectedModifiers.map(m => m.name).join(', ')})`;
                    }
                    return `${item.quantity}x ${item.product.name}${modDesc}`;
                }).join(", ");

                const card = document.createElement("div");
                card.className = "held-order-sidebar-card";
                card.style.cssText = "background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); padding: 12px; display: flex; flex-direction: column; gap: 8px;";
                card.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <span style="font-weight: 600; font-size: 13px; color: var(--text-primary);">${o.customer}</span>
                        <span style="font-size: 11px; color: var(--text-secondary); display: flex; align-items: center; gap: 4px;"><i data-lucide="clock" style="width:10px;height:10px;"></i> ${diffMin}m lalu</span>
                    </div>
                    <div style="font-size: 11px; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsDesc}">
                        ${itemsDesc}
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                        <span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 600; color: var(--success-color);">${formatPrice(total)}</span>
                        <div style="display: flex; gap: 6px;">
                            <button class="btn btn-danger-outline btn-sm" style="padding: 2px 8px; font-size: 11px; min-height: 28px;" onclick="deleteHeldOrder('${o.id}')">Hapus</button>
                            <button class="btn btn-primary btn-sm" style="padding: 2px 8px; font-size: 11px; min-height: 28px;" onclick="recallHeldOrder('${o.id}')">Ambil</button>
                        </div>
                    </div>
                `;
                sidebarContainer.appendChild(card);
            });
        }
    }
    
    // Update badge count
    const activeCountBadge = document.getElementById("cart-tab-active-count");
    const heldCountBadge = document.getElementById("cart-tab-held-count");
    const heldHeaderCount = document.getElementById("held-orders-count");
    
    if (heldHeaderCount) heldHeaderCount.textContent = heldOrders.length;
    if (heldCountBadge) heldCountBadge.textContent = heldOrders.length;
    if (activeCountBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        activeCountBadge.textContent = totalItems;
    }

    lucide.createIcons();
}

window.recallHeldOrder = function(id) {
    const o = heldOrders.find(item => item.id === id);
    if (!o) return;
    
    if (cart.length > 0) {
        if (!confirm("Keranjang saat ini tidak kosong. Ganti isi keranjang dengan pesanan ini?")) {
            return;
        }
    }
    
    // Restore held state
    cart = [...o.items];
    selectedMemberId = o.memberId;
    appliedPromo = o.appliedPromo;
    loyaltyRedeemApplied = o.loyaltyRedeemApplied;
    
    // Restore inputs UI
    const memberLookup = document.getElementById("cart-member-lookup");
    if (memberLookup) memberLookup.value = selectedMemberId;
    
    const customerSelect = document.getElementById("cart-customer-type");
    if (customerSelect) {
        let baseVal = o.customer;
        if (o.customer.includes(" (")) {
            baseVal = o.customer.substring(o.customer.indexOf(" (") + 2, o.customer.length - 1);
        }
        customerSelect.value = baseVal;
    }
    
    if (appliedPromo) {
        document.getElementById("promo-code").value = appliedPromo.code || "";
        document.getElementById("promo-applied-badge").classList.remove("hidden");
        document.getElementById("promo-applied-badge").querySelector(".promo-text").textContent = 
            `${appliedPromo.code} Aktif (${appliedPromo.type === "percent" ? appliedPromo.value + "%" : formatPrice(appliedPromo.value)} OFF)`;
    }
    
    // Remove from held list
    heldOrders = heldOrders.filter(item => item.id !== id);
    saveHeldOrdersToStorage();
    updateHeldOrdersCountBadge();
    
    // Close modal
    document.getElementById("modal-held-orders").classList.remove("active");
    
    updateCartUI();
    sfx.playSuccess();
};

window.deleteHeldOrder = function(id) {
    if (confirm("Apakah Anda yakin ingin menghapus pesanan ditahan ini?")) {
        heldOrders = heldOrders.filter(item => item.id !== id);
        saveHeldOrdersToStorage();
        updateHeldOrdersCountBadge();
        renderHeldOrdersList();
        sfx.playBeep();
    }
};

// --- Shift Drawer Management & Access Restrictions ---
function updateShiftOverlayUI() {
    let overlay = document.getElementById("shift-lock-overlay");
    if (!activeShift.isOpen) {
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = "shift-lock-overlay";
            overlay.style.position = "absolute";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(10, 10, 16, 0.7)";
            overlay.style.backdropFilter = "blur(12px)";
            overlay.style.webkitBackdropFilter = "blur(12px)";
            overlay.style.zIndex = "999";
            overlay.style.display = "flex";
            overlay.style.flexDirection = "column";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.borderRadius = "12px";
            
            overlay.innerHTML = `
                <div style="text-align:center;padding:32px;background:var(--card-bg);border:1px solid var(--border-color);border-radius:16px;box-shadow:var(--shadow-xl);max-width:360px;margin: 20px;">
                    <i data-lucide="lock" style="width:48px;height:48px;color:var(--primary-color);margin-bottom:16px;display:inline-block;"></i>
                    <h3 style="margin-bottom:8px;font-size:18px;">Shift Kasir Belum Dibuka</h3>
                    <p style="font-size:13px;color:var(--text-secondary);margin-bottom:24px;">Silakan buka shift kasir baru dan masukkan modal laci awal untuk memulai transaksi.</p>
                    <button class="btn btn-primary btn-block" id="overlay-open-shift-btn">Buka Shift Sekarang</button>
                </div>
            `;
            
            const container = document.getElementById("page-cashier");
            if (container) {
                container.style.position = "relative";
                container.appendChild(overlay);
                lucide.createIcons();
                
                document.getElementById("overlay-open-shift-btn").addEventListener("click", () => {
                    openShiftModal();
                });
            }
        }
    } else {
        if (overlay) overlay.remove();
    }
    
    // Update Shift Indicator Button in Header
    const btn = document.getElementById("shift-status-btn");
    if (btn) {
        if (activeShift.isOpen) {
            btn.className = "btn btn-success btn-sm";
            btn.innerHTML = `<i data-lucide="lock" style="width:14px;height:14px;margin-right:6px;"></i><span id="shift-status-text">Shift: Aktif</span>`;
        } else {
            btn.className = "btn btn-secondary btn-sm";
            btn.innerHTML = `<i data-lucide="unlock" style="width:14px;height:14px;margin-right:6px;"></i><span id="shift-status-text">Shift: Tutup</span>`;
        }
        lucide.createIcons();
    }
}

function openShiftModal() {
    document.getElementById("shift-modal-title").textContent = "Buka Shift Kasir";
    document.getElementById("shift-opening-group").classList.remove("hidden");
    document.getElementById("shift-closing-report").classList.add("hidden");
    document.getElementById("shift-submit-btn").textContent = "Buka Shift";
    document.getElementById("shift-starting-cash").value = "";
    document.getElementById("modal-shift").classList.add("active");
}

function closeShiftModal() {
    document.getElementById("shift-modal-title").textContent = "Tutup Shift Kasir";
    document.getElementById("shift-opening-group").classList.add("hidden");
    document.getElementById("shift-closing-report").classList.remove("hidden");
    document.getElementById("shift-submit-btn").textContent = "Tutup Shift & Cetak";
    
    document.getElementById("shift-rep-start").textContent = formatPrice(activeShift.startingCash);
    document.getElementById("shift-rep-cash").textContent = formatPrice(activeShift.cashSales);
    document.getElementById("shift-rep-sales").textContent = formatPrice(activeShift.totalSales);
    
    const expected = activeShift.startingCash + activeShift.cashSales;
    document.getElementById("shift-rep-expected").textContent = formatPrice(expected);
    document.getElementById("shift-actual-cash").value = "";
    document.getElementById("modal-shift").classList.add("active");
}

function handleShiftSubmit(e) {
    e.preventDefault();
    sfx.playBeep();
    
    if (!activeShift.isOpen) {
        const starting = parseFloat(document.getElementById("shift-starting-cash").value) || 0;
        activeShift = {
            isOpen: true,
            startingCash: starting,
            cashSales: 0,
            totalSales: 0
        };
        logActivity("Buka Shift", `Membuka shift kasir dengan modal awal ${formatPrice(starting)}`);
        saveShiftToStorage();
        document.getElementById("modal-shift").classList.remove("active");
        updateShiftOverlayUI();
        sfx.playSuccess();
        alert(`Shift kasir berhasil dibuka dengan modal awal ${formatPrice(starting)}!`);
    } else {
        const actual = parseFloat(document.getElementById("shift-actual-cash").value) || 0;
        const expected = activeShift.startingCash + activeShift.cashSales;
        const selisih = actual - expected;
        
        let reportMsg = `\n=================================\n`;
        reportMsg += `   LAPORAN CLOSING SHIFT KASIR\n`;
        reportMsg += `=================================\n`;
        reportMsg += `Modal Awal: ${formatPrice(activeShift.startingCash)}\n`;
        reportMsg += `Penjualan Tunai: ${formatPrice(activeShift.cashSales)}\n`;
        reportMsg += `Uang Teoritis: ${formatPrice(expected)}\n`;
        reportMsg += `Uang Aktual: ${formatPrice(actual)}\n`;
        reportMsg += `Selisih Laci: ${formatPrice(selisih)}\n`;
        reportMsg += `=================================\n`;
        
        console.log(reportMsg);
        logActivity("Tutup Shift", `Menutup shift kasir. Uang Aktual: ${formatPrice(actual)}, Uang Diharapkan: ${formatPrice(expected)} (Selisih Laci: ${formatPrice(selisih)})`);
        alert(`Shift kasir ditutup!\n\nSelisih Laci: ${formatPrice(selisih)}\nLaporan detail telah dicetak di konsol pengembang.`);
        
        activeShift = {
            isOpen: false,
            startingCash: 0,
            cashSales: 0,
            totalSales: 0
        };
        saveShiftToStorage();
        document.getElementById("modal-shift").classList.remove("active");
        updateShiftOverlayUI();
        sfx.playSuccess();
    }
}

function handleUserRoleChange(e, isInit = false) {
    activeUser = e.target.value;
    if (!isInit) sfx.playBeep();
    
    const priceInputs = document.querySelectorAll("#product-form input, #product-form select");
    const saveProdBtn = document.getElementById("save-product-btn");
    const deleteBtn = document.getElementById("reset-system-data");
    
    // Sidebar nav elements
    const inventoryNav = document.getElementById("nav-inventory");
    const analyticsNav = document.getElementById("nav-analytics");
    const settingsNav = document.getElementById("nav-settings");
    
    if (activeUser === "staff") {
        // Hide restricted sidebar menus
        if (inventoryNav) inventoryNav.style.display = "none";
        if (analyticsNav) analyticsNav.style.display = "none";
        if (settingsNav) settingsNav.style.display = "none";
        
        // Redirect if on restricted pages
        if (["inventory", "analytics", "settings"].includes(activePage)) {
            navigateToPage("cashier", isInit);
        }

        // Limit staff capability in inventory edit price
        const priceField = document.getElementById("prod-price");
        if (priceField) {
            priceField.classList.add("locked-field");
            priceField.setAttribute("disabled", "true");
        }
        
        // Hide Reset system block in Settings
        if (deleteBtn) {
            deleteBtn.style.display = "none";
        }
        
        // Add lock indicators
        document.querySelectorAll(".inventory-actions button, #add-product-btn").forEach(b => {
            b.classList.add("locked-field");
        });
        
        if (!isInit) alert("Akses Terbatas: Anda login sebagai Staff Kasir. Halaman Kelola Produk, Analisis, dan Pengaturan dinonaktifkan.");
    } else {
        // Show all sidebar menus
        if (inventoryNav) inventoryNav.style.display = "flex";
        if (analyticsNav) analyticsNav.style.display = "flex";
        if (settingsNav) settingsNav.style.display = "flex";

        const priceField = document.getElementById("prod-price");
        if (priceField) {
            priceField.classList.remove("locked-field");
            priceField.removeAttribute("disabled");
        }
        if (deleteBtn) {
            deleteBtn.style.display = "block";
        }
        document.querySelectorAll(".inventory-actions button, #add-product-btn").forEach(b => {
            b.classList.remove("locked-field");
        });
        if (!isInit) alert("Akses Penuh: Anda login sebagai Owner / Manager.");
    }
}

// --- Network status & Offline mode simulations ---
function handleNetworkToggleChange(e) {
    isOfflineSimulated = !e.target.checked;
    const badge = document.getElementById("sync-status");
    const lbl = document.getElementById("sync-status-lbl");
    
    if (isOfflineSimulated) {
        badge.className = "sync-status-badge offline";
        lbl.textContent = `Offline (${offlineQueue.length} Pending)`;
        sfx.playError();
    } else {
        badge.className = "sync-status-badge syncing";
        lbl.textContent = "Syncing...";
        sfx.playBeep();
        
        const totalToSync = offlineQueue.length;
        let currentSync = 0;
        
        if (totalToSync > 0) {
            const interval = setInterval(() => {
                currentSync++;
                lbl.textContent = `Syncing... (${currentSync}/${totalToSync})`;
                sfx.playBeep();
                
                if (currentSync >= totalToSync) {
                    clearInterval(interval);
                    
                    // Flush offline items to orders database
                    offlineQueue.forEach(order => {
                        orders.unshift(order);
                    });
                    saveOrdersToStorage();
                    
                    offlineQueue = [];
                    saveOfflineQueueToStorage();
                    
                    badge.className = "sync-status-badge online";
                    lbl.textContent = "Online - Terkoneksi";
                    sfx.playSuccess();
                    
                    if (activePage === "history") renderHistoryTable();
                    if (activePage === "analytics") renderAnalytics();
                    
                    alert(`Sinkronisasi sukses! ${totalToSync} transaksi offline telah diunggah ke server database.`);
                }
            }, 600);
        } else {
            setTimeout(() => {
                badge.className = "sync-status-badge online";
                lbl.textContent = "Online - Terkoneksi";
                sfx.playSuccess();
            }, 800);
        }
    }
}

// --- Barcode Scanner Simulation (UI/UX Extra Feature) ---
function simulateBarcodeScan() {
    // Pick a random product that has stock
    const inStockProducts = products.filter(p => p.stock > 0);
    
    if (inStockProducts.length === 0) {
        sfx.playError();
        alert("Seluruh produk habis stok!");
        return;
    }
    
    const randomProduct = inStockProducts[Math.floor(Math.random() * inStockProducts.length)];
    
    // Animate overlay scan feedback
    const scanBar = document.getElementById("search-product");
    const originalPlaceholder = scanBar.placeholder;
    
    scanBar.value = "";
    scanBar.placeholder = `Scanning... [SKU:${randomProduct.sku}]`;
    scanBar.style.borderColor = "var(--success-color)";
    
    sfx.playBeep();

    setTimeout(() => {
        scanBar.placeholder = originalPlaceholder;
        scanBar.style.borderColor = "";
        
        addToCart(randomProduct.id);
        
        // Dynamic notification toast element creation
        const toast = document.createElement("div");
        toast.style.position = "fixed";
        toast.style.bottom = "24px";
        toast.style.right = "24px";
        toast.style.background = "var(--success-gradient)";
        toast.style.color = "white";
        toast.style.padding = "12px 24px";
        toast.style.borderRadius = "var(--border-radius-md)";
        toast.style.boxShadow = "var(--card-shadow)";
        toast.style.zIndex = "9999";
        toast.style.display = "flex";
        toast.style.alignItems = "center";
        toast.style.gap = "8px";
        toast.style.fontSize = "14px";
        toast.style.fontWeight = "600";
        toast.innerHTML = `<i data-lucide="check-circle"></i><span>Barcode Scanned: ${randomProduct.name}</span>`;
        
        document.body.appendChild(toast);
        lucide.createIcons();
        
        // Fade out toast after 2.5s
        setTimeout(() => {
            toast.style.transition = "opacity 0.5s ease";
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 2000);
        
    }, 800);
}

// --- Global Event Listeners ---
function registerEventListeners() {
    // 1. Sidebar Nav
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const page = item.getAttribute("data-page");
            navigateToPage(page);
        });
    });

    // 2. Dark/Light Theme Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
        sfx.playBeep();
    });

    // 3. Render Category filter pills initially
    renderCategoryPills();

    // 4. Product Search Input
    document.getElementById("search-product").addEventListener("input", (e) => {
        searchKeyword = e.target.value;
        renderCatalog();
    });

    // Helpers to switch categories programmatically
    function selectCategoryByFKey(categoryName) {
        const pills = document.querySelectorAll(".category-pill");
        pills.forEach(pill => {
            if (pill.getAttribute("data-category") === categoryName) {
                document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
                pill.classList.add("active");
                activeCategory = categoryName;
                renderCatalog();
                sfx.playBeep();
            }
        });
    }

    // Hotkey and Shortcut listeners
    window.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            document.getElementById("search-product").focus();
        } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
            e.preventDefault();
            const checkoutModal = document.getElementById("modal-checkout");
            if (checkoutModal && checkoutModal.classList.contains("active")) {
                const submitBtn = document.getElementById("submit-payment-btn");
                if (submitBtn && !submitBtn.disabled) {
                    submitBtn.click();
                }
            } else {
                const checkoutBtn = document.getElementById("checkout-btn");
                if (checkoutBtn) {
                    checkoutBtn.click();
                }
            }
        } else if (e.key === "Escape") {
            document.querySelectorAll(".modal.active").forEach(m => {
                m.classList.remove("active");
                sfx.playBeep();
            });
        } else if (e.key === "F1") {
            e.preventDefault();
            selectCategoryByFKey("all");
        } else if (e.key === "F2") {
            e.preventDefault();
            selectCategoryByFKey(settings.businessMode === "retail" ? "sembako" : "makanan");
        } else if (e.key === "F3") {
            e.preventDefault();
            selectCategoryByFKey(settings.businessMode === "retail" ? "sabun" : "minuman");
        } else if (e.key === "F4") {
            e.preventDefault();
            selectCategoryByFKey(settings.businessMode === "retail" ? "minuman" : "cemilan");
        }
    });

    // 5. Cart Actions
    document.getElementById("clear-cart-btn").addEventListener("click", clearCart);
    document.getElementById("apply-promo-btn").addEventListener("click", applyPromoCode);
    document.getElementById("remove-promo-btn").addEventListener("click", removePromoCode);
    
    // Hold order action
    document.getElementById("hold-order-btn").addEventListener("click", holdOrder);

    // Recall orders modal trigger
    const recallBtn = document.getElementById("recall-orders-btn");
    if (recallBtn) {
        recallBtn.addEventListener("click", () => {
            renderHeldOrdersList();
            document.getElementById("modal-held-orders").classList.add("active");
            sfx.playBeep();
        });
    }

    // Checkout Modal open
    document.getElementById("checkout-btn").addEventListener("click", openCheckoutModal);

    // Custom Note Form submit
    document.getElementById("note-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const productId = document.getElementById("note-prod-id").value;
        const noteText = document.getElementById("note-text").value.trim();
        const cartItem = cart.find(item => item.product.id === productId);
        if (cartItem) {
            cartItem.notes = noteText;
            updateCartUI();
        }
        document.getElementById("modal-note").classList.remove("active");
        sfx.playSuccess();
    });

    // 6. Checkout Payment controls
    document.querySelectorAll(".payment-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            const method = tab.getAttribute("data-method");
            switchPaymentTab(method);
            sfx.playBeep();
        });
    });

    // Cash received updates change
    document.getElementById("cash-received").addEventListener("input", validateCashPayment);
    
    // Quick cash buttons
    document.querySelectorAll(".btn-quick-cash").forEach(btn => {
        btn.addEventListener("click", () => {
            const amtAttr = btn.getAttribute("data-amount");
            if (amtAttr) {
                handleQuickCash(parseInt(amtAttr));
            } else if (btn.id === "quick-cash-exact") {
                handleQuickCash("exact");
            }
        });
    });

    // QRIS Simulator Buttons
    document.getElementById("mock-qris-success-btn").addEventListener("click", simulateQrisSuccess);

    // Submit payment process
    document.getElementById("submit-payment-btn").addEventListener("click", processPayment);

    // 7. Modals close triggers
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".modal").forEach(m => m.classList.remove("active"));
            sfx.playBeep();
        });
    });

    // Closes modal if user clicks outside of modal dialog content
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                // If it is the receipt modal, reset cart since the receipt has been finalized
                if (modal.id === "modal-receipt") {
                    handleReceiptFinished();
                } else {
                    modal.classList.remove("active");
                }
                sfx.playBeep();
            }
        });
    });

    // Receipt close / Transaction finish actions
    document.getElementById("finish-transaction-btn").addEventListener("click", handleReceiptFinished);
    document.getElementById("print-receipt-btn").addEventListener("click", printReceipt);

    // Barcode scanner trigger
    document.getElementById("barcode-scan-mock-btn").addEventListener("click", simulateBarcodeScan);

    // 8. Inventory listeners
    document.getElementById("add-product-btn").addEventListener("click", openAddProductModal);
    document.getElementById("search-inventory").addEventListener("input", renderInventoryTable);
    document.getElementById("product-form").addEventListener("submit", handleProductFormSubmit);

    // 9. History list listeners
    document.getElementById("search-history").addEventListener("input", renderHistoryTable);
    document.getElementById("filter-history-payment").addEventListener("change", renderHistoryTable);

    // 10. Settings listeners
    document.getElementById("settings-store-form").addEventListener("submit", handleStoreSettingsSubmit);
    document.getElementById("settings-system-form").addEventListener("submit", handleSystemSettingsSubmit);
    document.getElementById("reset-system-data").addEventListener("click", resetSystemData);
    
    // Store Logo Uploader Listeners
    const logoFileInput = document.getElementById("set-store-logo-file");
    if (logoFileInput) {
        logoFileInput.addEventListener("change", function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    settings.storeLogo = event.target.result;
                    updateStoreLogoPreview();
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    const removeLogoBtn = document.getElementById("btn-remove-store-logo");
    if (removeLogoBtn) {
        removeLogoBtn.addEventListener("click", function() {
            settings.storeLogo = "";
            const fileInput = document.getElementById("set-store-logo-file");
            if (fileInput) fileInput.value = "";
            updateStoreLogoPreview();
        });
    }
    
    const gasForm = document.getElementById("settings-gas-form");
    if (gasForm) gasForm.addEventListener("submit", handleGasSettingsSubmit);
    
    const gasDlBtn = document.getElementById("btn-gas-download");
    if (gasDlBtn) gasDlBtn.addEventListener("click", (e) => { e.preventDefault(); downloadFromCloud(); });
    
    const gasUlBtn = document.getElementById("btn-gas-upload");
    if (gasUlBtn) gasUlBtn.addEventListener("click", (e) => { e.preventDefault(); uploadToCloud(); });

    const gasCodeLink = document.getElementById("link-view-gas-code");
    if (gasCodeLink) gasCodeLink.addEventListener("click", openGasCodeModal);
    
    const copyGasCodeBtn = document.getElementById("btn-copy-gas-code");
    if (copyGasCodeBtn) copyGasCodeBtn.addEventListener("click", handleCopyGasCode);

    // PPOB & Finansial Form listeners
    const ppobForm = document.getElementById("ppob-transaction-form");
    if (ppobForm) ppobForm.addEventListener("submit", handlePpobFormSubmit);

    const ppobAmountInput = document.getElementById("ppob-amount");
    const ppobFeeInput = document.getElementById("ppob-fee");
    const ppobCostInput = document.getElementById("ppob-cost");

    if (ppobAmountInput) ppobAmountInput.addEventListener("input", updatePpobLiveCalcs);
    if (ppobFeeInput) ppobFeeInput.addEventListener("input", updatePpobLiveCalcs);
    if (ppobCostInput) ppobCostInput.addEventListener("input", updatePpobLiveCalcs);

    const ppobPaymentInput = document.getElementById("ppob-payment");
    if (ppobPaymentInput) {
        ppobPaymentInput.addEventListener("change", function() {
            const destGroup = document.getElementById("ppob-dest-account-group");
            if (destGroup) {
                if (this.value === "Tunai") {
                    destGroup.classList.add("hidden");
                } else {
                    destGroup.classList.remove("hidden");
                    // Set default destination account based on payment method
                    const destSelect = document.getElementById("ppob-dest-account");
                    if (destSelect) {
                        if (this.value === "Transfer Bank") {
                            destSelect.value = "brilink";
                        } else if (this.value === "QRIS") {
                            destSelect.value = "dana";
                        }
                    }
                }
            }
            updatePpobLiveCalcs();
        });
    }

    // Toggle PLN token visibility based on type select change
    const ppobTypeSelect = document.getElementById("ppob-type");
    if (ppobTypeSelect) {
        ppobTypeSelect.addEventListener("change", function() {
            const tokenGroup = document.getElementById("ppob-token-group");
            if (tokenGroup) {
                if (this.value === "pln") {
                    tokenGroup.classList.remove("hidden");
                } else {
                    tokenGroup.classList.add("hidden");
                    const tokenInput = document.getElementById("ppob-token");
                    if (tokenInput) tokenInput.value = "";
                }
            }
            updatePpobLiveCalcs();
        });
    }

    // Auto-format PLN token input (chunk of 4 digits separated by spaces)
    const ppobTokenInput = document.getElementById("ppob-token");
    if (ppobTokenInput) {
        ppobTokenInput.addEventListener("input", function() {
            let val = this.value.replace(/[^\d]/g, "");
            if (val.length > 20) val = val.substring(0, 20);
            
            let formatted = [];
            for (let i = 0; i < val.length; i += 4) {
                formatted.push(val.substring(i, i + 4));
            }
            this.value = formatted.join(" ");
        });
    }

    // OCR Drag & Drop Zone listeners
    const dropzone = document.getElementById("ppob-ocr-dropzone");
    const fileInput = document.getElementById("ppob-ocr-file");
    
    if (dropzone && fileInput) {
        dropzone.addEventListener("click", () => fileInput.click());
        
        fileInput.addEventListener("change", (e) => {
            if (e.target.files.length > 0) {
                processOcrImage(e.target.files[0]);
            }
        });
        
        dropzone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropzone.classList.add("dragover");
        });
        
        dropzone.addEventListener("dragleave", () => {
            dropzone.classList.remove("dragover");
        });
        
        dropzone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropzone.classList.remove("dragover");
            if (e.dataTransfer.files.length > 0) {
                processOcrImage(e.dataTransfer.files[0]);
            }
        });
        
        // Listen to paste events globally on PPOB page
        window.addEventListener("paste", (e) => {
            const activePage = document.querySelector(".page-section.active");
            if (activePage && activePage.id === "page-ppob") {
                const items = (e.clipboardData || e.originalEvent.clipboardData).items;
                for (let index in items) {
                    const item = items[index];
                    if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                        const blob = item.getAsFile();
                        processOcrImage(blob);
                        break;
                    }
                }
            }
        });
    }

    const ppobProofParser = document.getElementById("ppob-proof-parser");
    if (ppobProofParser) {
        ppobProofParser.addEventListener("input", (e) => {
            const text = e.target.value.trim();
            if (!text) {
                e.target.style.borderColor = "";
                return;
            }
            const parsed = parsePpobProofText(text);
            if (parsed && (parsed.amount || parsed.target || parsed.provider)) {
                if (parsed.amount) document.getElementById("ppob-amount").value = parsed.amount;
                if (parsed.target) document.getElementById("ppob-target").value = parsed.target;
                if (parsed.provider) document.getElementById("ppob-provider").value = parsed.provider;
                if (parsed.type) document.getElementById("ppob-type").value = parsed.type;
                
                const tokenGroup = document.getElementById("ppob-token-group");
                if (tokenGroup) {
                    if (parsed.type === "pln") {
                        tokenGroup.classList.remove("hidden");
                    } else {
                        tokenGroup.classList.add("hidden");
                    }
                }
                
                if (parsed.token) {
                    const tokenInput = document.getElementById("ppob-token");
                    if (tokenInput) tokenInput.value = parsed.token;
                }
                
                e.target.style.borderColor = "var(--success-color)";
                sfx.playSuccess();
                updatePpobLiveCalcs();
            }
        });
    }

    const clearPpobBtn = document.getElementById("btn-clear-ppob");
    if (clearPpobBtn) clearPpobBtn.addEventListener("click", clearPpobTransactions);

    // 11. Advanced POS Event Bindings
    
    // Offline simulation toggle
    const netToggle = document.getElementById("network-toggle");
    if (netToggle) netToggle.addEventListener("change", handleNetworkToggleChange);
    
    // Shift drawer actions
    const shiftBtn = document.getElementById("shift-status-btn");
    if (shiftBtn) {
        shiftBtn.addEventListener("click", () => {
            if (activeShift.isOpen) closeShiftModal();
            else openShiftModal();
        });
    }
    const shiftForm = document.getElementById("shift-form");
    if (shiftForm) shiftForm.addEventListener("submit", handleShiftSubmit);
    
    // Access role RBAC dropdown
    const roleSel = document.getElementById("user-role-selector");
    if (roleSel) roleSel.addEventListener("change", handleUserRoleChange);
    
    // Member dropdown in cart
    const memLookup = document.getElementById("cart-member-lookup");
    if (memLookup) {
        memLookup.addEventListener("change", (e) => {
            selectedMemberId = e.target.value;
            updateCartUI();
        });
    }
    
    // Redeem points action
    const redeemBtn = document.getElementById("redeem-points-btn");
    if (redeemBtn) {
        redeemBtn.addEventListener("click", () => {
            loyaltyRedeemApplied = !loyaltyRedeemApplied;
            updateCartUI();
            sfx.playBeep();
        });
    }
    
    // Register member open modals
    const crmOpener = () => {
        document.getElementById("crm-id").value = "";
        document.getElementById("crm-name").value = "";
        document.getElementById("crm-phone").value = "";
        document.getElementById("crm-modal-title").textContent = "Daftar Member Baru";
        document.getElementById("modal-crm").classList.add("active");
    };
    const quickMem = document.getElementById("quick-add-member-btn");
    if (quickMem) quickMem.addEventListener("click", crmOpener);
    
    const crmAdd = document.getElementById("crm-add-member-btn");
    if (crmAdd) crmAdd.addEventListener("click", crmOpener);
    
    // CRM signup submit
    const crmForm = document.getElementById("crm-form");
    if (crmForm) crmForm.addEventListener("submit", handleCrmFormSubmit);
    
    // Ingredient create modals & forms
    const addIngBtn = document.getElementById("add-ingredient-btn");
    if (addIngBtn) {
        addIngBtn.addEventListener("click", () => {
            document.getElementById("ing-id").value = "";
            document.getElementById("ing-name").value = "";
            document.getElementById("ing-stock").value = "";
            document.getElementById("ing-unit").value = "g";
            document.getElementById("ing-category").value = "";
            document.getElementById("ing-modal-title").textContent = "Tambah Bahan Baku";
            document.getElementById("modal-ingredient").classList.add("active");
        });
    }
    const ingForm = document.getElementById("ingredient-form");
    if (ingForm) ingForm.addEventListener("submit", handleIngredientFormSubmit);
    
    // Recipe formula mapping
    const recMapForm = document.getElementById("recipe-mapping-form");
    if (recMapForm) recMapForm.addEventListener("submit", handleRecipeMappingSubmit);
    
    // Split Payment checkout modal controls
    const splitTog = document.getElementById("split-payment-toggle");
    if (splitTog) {
        splitTog.addEventListener("change", (e) => {
            const fields = document.getElementById("split-payment-fields");
            if (e.target.checked) {
                fields.classList.remove("hidden");
                document.getElementById("split-amount-cash").value = "";
                document.getElementById("split-amount-digital").value = "";
                document.getElementById("submit-payment-btn").disabled = true;
            } else {
                fields.classList.add("hidden");
                switchPaymentTab(currentCheckoutMethod);
            }
        });
    }
    const splitCash = document.getElementById("split-amount-cash");
    if (splitCash) {
        splitCash.addEventListener("input", (e) => {
            const grandTotalText = document.getElementById("chk-grand-total").textContent;
            const totalAmount = parseFloat(grandTotalText.replace(/[^0-9,-]/g, '').replace(/,00$/, ''));
            const cashVal = parseFloat(e.target.value) || 0;
            const sisa = Math.max(0, totalAmount - cashVal);
            document.getElementById("split-amount-digital").value = sisa;
            document.getElementById("submit-payment-btn").disabled = (cashVal <= 0 || cashVal >= totalAmount);
        });
    }

    // 12. Global Barcode Keyboard Sequence Listener (capturing rapid physical input sequences)
    let barcodeAccumulator = "";
    let lastKeyTime = Date.now();
    window.addEventListener("keydown", (e) => {
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
        
        const now = Date.now();
        if (now - lastKeyTime > 35) {
            barcodeAccumulator = "";
        }
        lastKeyTime = now;
        
        if (e.key === "Enter") {
            if (barcodeAccumulator.length >= 4) {
                const prod = products.find(p => p.sku === barcodeAccumulator);
                if (prod) {
                    if (prod.stock > 0) {
                        addToCart(prod.id);
                        sfx.playSuccess();
                        
                        const toast = document.createElement("div");
                        toast.style.position = "fixed";
                        toast.style.bottom = "24px";
                        toast.style.right = "24px";
                        toast.style.background = "var(--success-gradient)";
                        toast.style.color = "white";
                        toast.style.padding = "12px 24px";
                        toast.style.borderRadius = "var(--border-radius-md)";
                        toast.style.zIndex = "9999";
                        toast.innerHTML = `<span>Barcode Scanner Terpindai: ${prod.name}</span>`;
                        document.body.appendChild(toast);
                        setTimeout(() => toast.remove(), 1500);
                    } else {
                        sfx.playError();
                        alert(`${prod.name} habis stok!`);
                    }
                }
                barcodeAccumulator = "";
                e.preventDefault();
            }
        } else if (e.key.length === 1 && /[0-9a-zA-Z]/.test(e.key)) {
            barcodeAccumulator += e.key;
        }
    });

    // Cart / Held Tabs switching
    const btnTabCart = document.getElementById("btn-tab-cart");
    const btnTabHeld = document.getElementById("btn-tab-held");
    if (btnTabCart && btnTabHeld) {
        btnTabCart.addEventListener("click", () => {
            btnTabCart.classList.add("active");
            btnTabHeld.classList.remove("active");
            document.getElementById("tab-content-cart").classList.remove("hidden");
            document.getElementById("tab-content-held").classList.add("hidden");
            sfx.playBeep();
        });
        btnTabHeld.addEventListener("click", () => {
            btnTabHeld.classList.add("active");
            btnTabCart.classList.remove("active");
            document.getElementById("tab-content-held").classList.remove("hidden");
            document.getElementById("tab-content-cart").classList.add("hidden");
            renderHeldOrdersList();
            sfx.playBeep();
        });
    }

    // Modifier form submit listener
    const modifierForm = document.getElementById("modifier-form");
    if (modifierForm) {
        modifierForm.addEventListener("submit", handleModifierFormSubmit);
    }
}

// --- Real-time Tab Synchronization using BroadcastChannel ---
const syncChannel = new BroadcastChannel("kasirku_channel");

function syncState() {
    syncChannel.postMessage({ action: "sync_all" });
}

syncChannel.onmessage = (event) => {
    if (document.readyState === "loading") return; // Avoid running sync before DOM is fully parsed
    if (event.data.action === "sync_all") {
        try {
            loadDatabase();
            updateCartUI();
            renderCatalog();
            if (activePage === "inventory") renderInventoryTable();
            if (activePage === "history") renderHistoryTable();
            if (activePage === "analytics") renderAnalytics();
            if (activePage === "kds") renderKdsBoard();
            if (activePage === "crm") renderCrmTable();
            if (activePage === "recipes") renderRecipesPage();
            if (activePage === "ppob") renderPpobDashboard();
        } catch (err) {
            console.warn("Sync channel handler error:", err);
        }
    }
};

// --- Product Modifier Handlers ---
function openModifierModal(productId, cartIndex = -1) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.modifiers) return;

    document.getElementById("modifier-prod-id").value = productId;
    document.getElementById("modifier-cart-index").value = cartIndex;
    
    document.getElementById("modifier-modal-title").textContent = `Kustomisasi ${product.name}`;
    
    let cartItem = null;
    let preselectedMods = [];
    let initialNote = "";
    
    if (cartIndex >= 0) {
        cartItem = cart[cartIndex];
        preselectedMods = cartItem.selectedModifiers || [];
        initialNote = cartItem.notes || "";
    }
    
    document.getElementById("modifier-item-note").value = initialNote;
    
    const container = document.getElementById("modifier-groups-container");
    container.innerHTML = "";
    
    product.modifiers.forEach((group, gIdx) => {
        const groupDiv = document.createElement("div");
        groupDiv.className = "modifier-group";
        
        let titleHtml = `<div class="modifier-group-title">${group.name}`;
        if (group.type === "radio") {
            titleHtml += ` <span class="required-tag">Pilih Salah Satu</span>`;
        }
        titleHtml += `</div>`;
        
        let optionsHtml = `<div class="modifier-options-list">`;
        
        if (group.type === "checkbox") {
            const optionId = `mod-opt-${productId}-${gIdx}`;
            const isChecked = preselectedMods.some(m => m.id === group.id);
            optionsHtml += `
                <div class="modifier-option-item ${isChecked ? 'selected' : ''}" onclick="toggleModifierCheckbox(this, '${group.id}', '${group.name.replace(/'/g, "\\'")}', ${group.price})">
                    <div class="modifier-option-left">
                        <input type="checkbox" id="${optionId}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); toggleModifierCheckbox(this.parentElement.parentElement, '${group.id}', '${group.name.replace(/'/g, "\\'")}', ${group.price});">
                        <label for="${optionId}" onclick="event.stopPropagation();">${group.name}</label>
                    </div>
                    <span class="modifier-option-price">${group.price > 0 ? '+' + formatPrice(group.price) : 'Gratis'}</span>
                </div>
            `;
        } else if (group.type === "radio" && group.options) {
            group.options.forEach((opt, oIdx) => {
                const optionId = `mod-opt-${productId}-${gIdx}-${oIdx}`;
                const isSelected = preselectedMods.some(m => m.id === group.id && m.name === opt.name) || (preselectedMods.length === 0 && oIdx === 0);
                optionsHtml += `
                    <div class="modifier-option-item ${isSelected ? 'selected' : ''}" onclick="selectModifierRadio(this, '${group.id}', '${group.name.replace(/'/g, "\\'")}', '${opt.name.replace(/'/g, "\\'")}', ${opt.price})">
                        <div class="modifier-option-left">
                            <input type="radio" name="mod-grp-${productId}-${gIdx}" id="${optionId}" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); selectModifierRadio(this.parentElement.parentElement, '${group.id}', '${group.name.replace(/'/g, "\\'")}', '${opt.name.replace(/'/g, "\\'")}', ${opt.price});">
                            <label for="${optionId}" onclick="event.stopPropagation();">${opt.name}</label>
                        </div>
                        <span class="modifier-option-price">${opt.price > 0 ? '+' + formatPrice(opt.price) : 'Gratis'}</span>
                    </div>
                `;
            });
        }
        
        optionsHtml += `</div>`;
        groupDiv.innerHTML = titleHtml + optionsHtml;
        container.appendChild(groupDiv);
    });

    updateModifierModalPrice();
    document.getElementById("modal-modifier").classList.add("active");
    sfx.playBeep();
}

function toggleModifierCheckbox(element, id, groupName, price) {
    const input = element.querySelector('input[type="checkbox"]');
    input.checked = !input.checked;
    if (input.checked) {
        element.classList.add("selected");
    } else {
        element.classList.remove("selected");
    }
    updateModifierModalPrice();
    sfx.playBeep();
}

function selectModifierRadio(element, id, groupName, optionName, price) {
    const radio = element.querySelector('input[type="radio"]');
    radio.checked = true;
    
    const nameAttr = radio.getAttribute("name");
    document.querySelectorAll(`input[name="${nameAttr}"]`).forEach(r => {
        const card = r.parentElement.parentElement;
        if (r.checked) {
            card.classList.add("selected");
        } else {
            card.classList.remove("selected");
        }
    });
    updateModifierModalPrice();
    sfx.playBeep();
}

function updateModifierModalPrice() {
    let modifierPriceSum = 0;
    
    document.querySelectorAll('#modifier-groups-container input[type="checkbox"]:checked').forEach(cb => {
        const card = cb.parentElement.parentElement;
        const priceText = card.querySelector('.modifier-option-price').textContent;
        const price = priceText.includes('Gratis') ? 0 : parseFloat(priceText.replace(/[^0-9]/g, ''));
        modifierPriceSum += price;
    });
    
    document.querySelectorAll('#modifier-groups-container input[type="radio"]:checked').forEach(r => {
        const card = r.parentElement.parentElement;
        const priceText = card.querySelector('.modifier-option-price').textContent;
        const price = priceText.includes('Gratis') ? 0 : parseFloat(priceText.replace(/[^0-9]/g, ''));
        modifierPriceSum += price;
    });
    
    document.getElementById("modifier-total-price-display").textContent = `+${formatPrice(modifierPriceSum)}`;
}

function handleModifierFormSubmit(e) {
    e.preventDefault();
    const productId = document.getElementById("modifier-prod-id").value;
    const cartIndex = parseInt(document.getElementById("modifier-cart-index").value);
    const noteText = document.getElementById("modifier-item-note").value.trim();
    
    const selectedMods = [];
    
    document.querySelectorAll('#modifier-groups-container input[type="checkbox"]:checked').forEach(cb => {
        const card = cb.parentElement.parentElement;
        const label = card.querySelector('label').textContent;
        const priceText = card.querySelector('.modifier-option-price').textContent;
        const price = priceText.includes('Gratis') ? 0 : parseFloat(priceText.replace(/[^0-9]/g, ''));
        
        selectedMods.push({
            id: cb.id.split('-').slice(0, -1).join('-'),
            name: label,
            price: price
        });
    });
    
    document.querySelectorAll('#modifier-groups-container input[type="radio"]:checked').forEach(r => {
        const card = r.parentElement.parentElement;
        const label = card.querySelector('label').textContent;
        const priceText = card.querySelector('.modifier-option-price').textContent;
        const price = priceText.includes('Gratis') ? 0 : parseFloat(priceText.replace(/[^0-9]/g, ''));
        
        selectedMods.push({
            id: r.getAttribute("name").replace('mod-grp-', ''),
            name: label,
            price: price
        });
    });
    
    let finalQty = 1;
    if (cartIndex >= 0) {
        finalQty = cart[cartIndex].quantity;
    }
    
    addToCart(productId, selectedMods, finalQty, noteText, cartIndex);
    document.getElementById("modal-modifier").classList.remove("active");
    sfx.playSuccess();
}

// --- Void / Transaction Cancellation ---
function voidOrder(orderId) {
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;
    const order = orders[orderIndex];
    if (order.status === "Dibatalkan") {
        sfx.playError();
        alert("Transaksi ini sudah dibatalkan!");
        return;
    }

    const reason = prompt("Masukkan alasan pembatalan transaksi (Void):");
    if (reason === null) return;
    const finalReason = reason.trim() || "Pembatalan oleh Kasir";

    if (confirm(`Apakah Anda yakin ingin membatalkan transaksi #${orderId}?\nTotal: ${formatPrice(order.total)}\nStok produk dan bahan baku akan dikembalikan.`)) {
        // 1. Restore Product stock
        order.items.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                product.stock += item.quantity;
            }
        });
        saveProductsToStorage(true);

        // 2. Restore Recipe ingredients stock
        let recipesRestored = false;
        order.items.forEach(item => {
            const formula = recipes[item.id];
            if (formula && formula.length > 0) {
                recipesRestored = true;
                formula.forEach(fItem => {
                    const ing = ingredients.find(i => i.id === fItem.ingredientId);
                    if (ing) {
                        ing.stock += fItem.quantity * item.quantity;
                    }
                });
            }
        });
        if (recipesRestored) {
            saveIngredientsToStorage(true);
            if (activePage === "recipes") renderRecipesPage();
        }

        // 3. Update shift sales if shift is open
        if (activeShift.isOpen) {
            activeShift.totalSales = Math.max(0, activeShift.totalSales - order.total);
            if (order.paymentMethod === "Tunai") {
                activeShift.cashSales = Math.max(0, activeShift.cashSales - order.total);
            } else if (order.paymentMethod && order.paymentMethod.startsWith("Split")) {
                activeShift.cashSales = Math.max(0, activeShift.cashSales - (order.total * 0.4));
            }
            saveShiftToStorage();
            updateShiftOverlayUI();
        }

        // 4. Update Loyalty points if member
        if (order.customer && order.customer.includes("Member - ")) {
            const match = order.customer.match(/Member - ([A-Za-z0-9_]+)/);
            if (match && match[1]) {
                const memberId = match[1];
                const member = customersLoyalty.find(c => c.id === memberId);
                if (member) {
                    const pointsDeducted = Math.floor(order.total / 1000);
                    member.points = Math.max(0, member.points - pointsDeducted);
                    member.totalSpend = Math.max(0, member.totalSpend - order.total);
                    saveCrmToStorage();
                }
            }
        }

        // 5. Change order status to "Dibatalkan"
        order.status = "Dibatalkan";
        saveOrdersToStorage();

        // 6. Log to activity audit trail
        voidLogs.unshift({
            id: generateId("VD"),
            date: new Date().toISOString(),
            orderId: orderId,
            amount: order.total,
            items: order.items,
            reason: finalReason
        });
        saveVoidLogsToStorage();

        // Sync to GAS Backend if configured
        if (settings.googleAppsScriptUrl) {
            const productsStockUpdate = order.items.map(item => ({
                id: item.id,
                qty: item.quantity
            }));
            
            const ingredientsStockUpdate = [];
            order.items.forEach(item => {
                const formula = recipes[item.id];
                if (formula && formula.length > 0) {
                    formula.forEach(fItem => {
                        ingredientsStockUpdate.push({
                            id: fItem.ingredientId,
                            qty: fItem.quantity * item.quantity
                        });
                    });
                }
            });
            
            let crmUpdate = null;
            if (order.customer && order.customer.includes("Member - ")) {
                const match = order.customer.match(/Member - ([A-Za-z0-9_]+)/);
                if (match && match[1]) {
                    const memberId = match[1];
                    const member = customersLoyalty.find(c => c.id === memberId);
                    if (member) {
                        crmUpdate = member;
                    }
                }
            }
            
            const gasVoidPayload = {
                orderId: orderId,
                voidLog: voidLogs[0],
                productsStockUpdate: productsStockUpdate,
                ingredientsStockUpdate: ingredientsStockUpdate,
                crmUpdate: crmUpdate
            };
            
            if (isOfflineSimulated) {
                addToOfflineQueue("void_order", gasVoidPayload);
            } else {
                sendToGasBackend("void_order", gasVoidPayload)
                    .then(res => {
                        if (res && res.status === "success") {
                            showSyncToast("Void berhasil disinkronisasi ke Cloud!");
                        }
                    })
                    .catch(err => {
                        console.warn("GAS void sync queued offline", err);
                    });
            }
        }

        // Re-render
        renderHistoryTable();
        if (activePage === "analytics") renderAnalytics();
        
        sfx.playSuccess();
        alert(`Transaksi #${orderId} berhasil dibatalkan (void)!`);
    }
}

// --- Analytical Charts Sub-renderers ---
function renderHourlySalesChart() {
    const hourlySalesObj = { "08:00": 0, "10:00": 0, "12:00": 0, "14:00": 0, "16:00": 0, "18:00": 0, "20:00": 0, "22:00": 0 };
    
    orders.forEach(o => {
        if (o.status !== "Dibatalkan") {
            const hour = new Date(o.date).getHours();
            let closestBracket = "08:00";
            if (hour >= 22) closestBracket = "22:00";
            else if (hour >= 20) closestBracket = "20:00";
            else if (hour >= 18) closestBracket = "18:00";
            else if (hour >= 16) closestBracket = "16:00";
            else if (hour >= 14) closestBracket = "14:00";
            else if (hour >= 12) closestBracket = "12:00";
            else if (hour >= 10) closestBracket = "10:00";
            else closestBracket = "08:00";
            
            hourlySalesObj[closestBracket] += o.total;
        }
    });

    const hourlySum = Object.values(hourlySalesObj).reduce((a, b) => a + b, 0);
    if (hourlySum === 0) {
        hourlySalesObj["08:00"] = 120000;
        hourlySalesObj["10:00"] = 180000;
        hourlySalesObj["12:00"] = 450000;
        hourlySalesObj["14:00"] = 230000;
        hourlySalesObj["16:00"] = 190000;
        hourlySalesObj["18:00"] = 520000;
        hourlySalesObj["20:00"] = 610000;
        hourlySalesObj["22:00"] = 280000;
    }

    const hourlyContainer = document.getElementById("hourly-chart-container");
    if (hourlyContainer) {
        hourlyContainer.innerHTML = "";
        const maxHourly = Math.max(...Object.values(hourlySalesObj)) || 1;
        Object.keys(hourlySalesObj).forEach(h => {
            const val = hourlySalesObj[h];
            const heightPercent = (val / maxHourly) * 100;
            
            const col = document.createElement("div");
            col.className = "hourly-chart-col";
            col.style.cssText = "display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; height: 100%; justify-content: flex-end; position: relative;";
            col.innerHTML = `
                <div class="hourly-chart-bar-tooltip" style="font-size: 9px; font-family: 'JetBrains Mono', monospace; background: var(--bg-secondary); padding: 2px 6px; border-radius: var(--border-radius-xs); border: 1px solid var(--border-color); color: var(--text-primary); margin-bottom: 2px; opacity: 0; transition: opacity 0.2s; position: absolute; bottom: calc(${heightPercent}% + 20px); pointer-events: none; z-index: 10;">${formatPrice(val)}</div>
                <div class="hourly-chart-bar" style="width: 100%; height: 0%; max-height: 120px; background: var(--primary-gradient); border-radius: var(--border-radius-xs) var(--border-radius-xs) 0 0; transition: height 0.8s ease-out; cursor: pointer;"></div>
                <span style="font-size: 10px; color: var(--text-secondary); margin-top: 4px;">${h}</span>
            `;
            hourlyContainer.appendChild(col);
            
            const bar = col.querySelector(".hourly-chart-bar");
            const tooltip = col.querySelector(".hourly-chart-bar-tooltip");
            bar.addEventListener("mouseover", () => tooltip.style.opacity = 1);
            bar.addEventListener("mouseout", () => tooltip.style.opacity = 0);

            setTimeout(() => {
                bar.style.height = `${heightPercent}%`;
            }, 100);
        });
    }
}

function renderPaymentComparison() {
    let cashTotal = 0;
    let digitalTotal = 0;
    orders.forEach(o => {
        if (o.status !== "Dibatalkan") {
            if (o.paymentMethod === "Tunai") {
                cashTotal += o.total;
            } else if (o.paymentMethod && o.paymentMethod.startsWith("Split")) {
                cashTotal += o.total * 0.4;
                digitalTotal += o.total * 0.6;
            } else {
                digitalTotal += o.total;
            }
        }
    });
    
    if (cashTotal === 0 && digitalTotal === 0) {
        cashTotal = 1500000;
        digitalTotal = 2500000;
    }
    
    const totalPay = cashTotal + digitalTotal;
    const cashPercent = totalPay > 0 ? (cashTotal / totalPay) * 100 : 0;
    const digitalPercent = totalPay > 0 ? (digitalTotal / totalPay) * 100 : 0;
    
    const paymentComp = document.getElementById("payment-comparison-metrics");
    if (paymentComp) {
        paymentComp.innerHTML = `
            <div style="display:flex; flex-direction:column; gap: 8px;">
                <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-secondary);">
                    <span>Tunai (Cash)</span>
                    <span style="font-weight:600; color:var(--text-primary);">${formatPrice(cashTotal)} (${cashPercent.toFixed(1)}%)</span>
                </div>
                <div style="width:100%; height:8px; background:var(--border-color); border-radius:4px; overflow:hidden;">
                    <div style="width:0%; height:100%; background:var(--primary-color); border-radius:4px; transition: width 0.8s;" class="cash-fill"></div>
                </div>
            </div>
            <div style="display:flex; flex-direction:column; gap: 8px;">
                <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-secondary);">
                    <span>Non-Tunai (QRIS/Card/Split)</span>
                    <span style="font-weight:600; color:var(--text-primary);">${formatPrice(digitalTotal)} (${digitalPercent.toFixed(1)}%)</span>
                </div>
                <div style="width:100%; height:8px; background:var(--border-color); border-radius:4px; overflow:hidden;">
                    <div style="width:0%; height:100%; background:var(--warning-color); border-radius:4px; transition: width 0.8s;" class="digital-fill"></div>
                </div>
            </div>
        `;
        setTimeout(() => {
            paymentComp.querySelector(".cash-fill").style.width = `${cashPercent}%`;
            paymentComp.querySelector(".digital-fill").style.width = `${digitalPercent}%`;
        }, 100);
    }
}

function renderTop5Menu() {
    const productQuantitySold = {};
    orders.forEach(o => {
        if (o.status !== "Dibatalkan") {
            o.items.forEach(item => {
                if (!productQuantitySold[item.name]) {
                    productQuantitySold[item.name] = { qty: 0, image: "", price: item.price, id: item.id };
                }
                productQuantitySold[item.name].qty += item.quantity;
                
                const pObj = products.find(p => p.id === item.id);
                if (pObj && pObj.image) {
                    productQuantitySold[item.name].image = pObj.image;
                }
            });
        }
    });

    let top5 = Object.keys(productQuantitySold).map(name => ({
        name: name,
        qty: productQuantitySold[name].qty,
        price: productQuantitySold[name].price,
        image: productQuantitySold[name].image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100"
    })).sort((a, b) => b.qty - a.qty).slice(0, 5);

    if (top5.length === 0) {
        top5 = [
            { name: "Kopi Susu Gula Aren", qty: 42, price: 18000, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=100" },
            { name: "Nasi Goreng Kampung", qty: 28, price: 28000, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=100" },
            { name: "Kentang Goreng (Fries)", qty: 22, price: 15000, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=100" },
            { name: "Es Teh Manis", qty: 19, price: 6000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=100" },
            { name: "Roti Bakar Coklat", qty: 15, price: 18000, image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=100" }
        ];
    }

    const topMenuContainer = document.getElementById("top-menu-list");
    if (topMenuContainer) {
        topMenuContainer.innerHTML = "";
        top5.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "top-menu-item";
            div.style.cssText = "display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 0; border-bottom: 1px solid var(--border-color);";
            div.innerHTML = `
                <div style="display:flex; align-items:center; gap: 12px;">
                    <span style="font-weight: 700; color: var(--text-muted); font-size: 14px; width: 16px;">#${index + 1}</span>
                    <img src="${item.image}" style="width:40px; height:40px; border-radius:var(--border-radius-xs); object-fit:cover;">
                    <div style="display:flex; flex-direction:column;">
                        <span style="font-weight:600; font-size:12px; color:var(--text-primary);">${item.name}</span>
                        <span style="font-size:11px; color:var(--text-secondary);">${formatPrice(item.price)}</span>
                    </div>
                </div>
                <span style="font-weight:600; font-size:12px; color:var(--primary-color);">${item.qty} Terjual</span>
            `;
            topMenuContainer.appendChild(div);
        });
    }
}

function renderVoidLogsTable() {
    const voidTbody = document.getElementById("void-audit-tbody");
    if (voidTbody) {
        voidTbody.innerHTML = "";
        if (voidLogs.length === 0) {
            voidTbody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 12px;">
                        Tidak ada aktivitas pembatalan (void) transaksi.
                    </td>
                </tr>
            `;
        } else {
            voidLogs.forEach(log => {
                const dt = new Date(log.date).toLocaleString("id-ID", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" });
                const itemDesc = log.items.map(i => `${i.quantity}x ${i.name}`).join(", ");
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong style="font-family:'JetBrains Mono', monospace; font-size: 11px;">${log.id}</strong></td>
                    <td>${dt}</td>
                    <td><span style="font-family:'JetBrains Mono', monospace; font-size: 11px; color: var(--text-secondary);">${log.orderId}</span></td>
                    <td><span style="font-size: 11px; display:inline-block; max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${itemDesc}">${itemDesc}</span></td>
                    <td><span class="badge badge-danger" style="background:#ef4444; color:white; padding: 2px 6px; border-radius: var(--border-radius-xs); font-size:10px;">${log.reason}</span></td>
                    <td><strong>${formatPrice(log.amount)}</strong></td>
                `;
                voidTbody.appendChild(tr);
            });
        }
    }
}

// --- Google Sheets Sync Engine (GAS Backend) ---
function showSyncToast(message, isError = false) {
    const existing = document.querySelector(".sync-toast");
    if (existing) existing.remove();
    
    const toast = document.createElement("div");
    toast.className = "sync-toast";
    if (isError) {
        toast.style.background = "var(--danger-color)";
    }
    toast.innerHTML = `<i data-lucide="${isError ? 'alert-triangle' : 'refresh-cw'}"></i> <span>${message}</span>`;
    document.body.appendChild(toast);
    lucide.createIcons();
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

async function sendToGasBackend(action, payloadData) {
    if (!settings.googleAppsScriptUrl) return null;
    
    try {
        const response = await fetch(settings.googleAppsScriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                action: action,
                data: payloadData
            })
        });
        
        if (!response.ok) throw new Error("Gagal terhubung ke backend Cloud");
        const result = await response.json();
        return result;
    } catch (err) {
        console.error("GAS Sync error:", err);
        if (action === "add_order" || action === "void_order" || action === "update_crm") {
            addToOfflineQueue(action, payloadData);
        }
        throw err;
    }
}

function addToOfflineQueue(action, data) {
    offlineQueue.push({
        id: "OQ-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        action: action,
        data: data,
        timestamp: new Date().toISOString()
    });
    saveOfflineQueueToStorage();
    showSyncToast("Terdeteksi offline. Dimasukkan antrean sinkronisasi.", true);
}

async function processOfflineQueue() {
    if (offlineQueue.length === 0 || !navigator.onLine || !settings.googleAppsScriptUrl) return;
    
    console.log("Memproses antrean sinkronisasi offline, jumlah item:", offlineQueue.length);
    const queueCopy = [...offlineQueue];
    
    for (let i = 0; i < queueCopy.length; i++) {
        const item = queueCopy[i];
        try {
            const response = await fetch(settings.googleAppsScriptUrl, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify({ action: item.action, data: item.data })
            });
            if (response.ok) {
                const resJson = await response.json();
                if (resJson.status === "success") {
                    offlineQueue = offlineQueue.filter(q => q.id !== item.id);
                    saveOfflineQueueToStorage();
                }
            }
        } catch(err) {
            console.error("Gagal menyelaraskan antrean item " + item.id, err);
            break; 
        }
    }
    
    if (offlineQueue.length === 0) {
        showSyncToast("Seluruh antrean offline berhasil disinkronisasi ke Cloud!");
    }
}

async function downloadFromCloud() {
    if (!settings.googleAppsScriptUrl) {
        alert("Silakan atur dan simpan URL Apps Script terlebih dahulu di Pengaturan!");
        return;
    }
    
    if (!confirm("Peringatan: Tindakan ini akan menimpa database lokal Anda (Katalog, Transaksi, CRM, Bahan Baku) dengan data dari Google Sheets. Lanjutkan?")) {
        return;
    }
    
    showSyncToast("Mengunduh data dari Cloud...");
    
    try {
        const response = await fetch(settings.googleAppsScriptUrl, {
            method: "GET"
        });
        
        if (!response.ok) throw new Error("Gagal mengambil data dari Google Sheets");
        const result = await response.json();
        
        if (result.status === "success" && result.data) {
            const data = result.data;
            
            if (data.products && data.products.length > 0) products = data.products;
            if (data.orders && data.orders.length > 0) orders = data.orders;
            if (data.crm && data.crm.length > 0) customersLoyalty = data.crm;
            if (data.ingredients && data.ingredients.length > 0) ingredients = data.ingredients;
            if (data.voidLogs && data.voidLogs.length > 0) voidLogs = data.voidLogs;
            if (data.ppob && data.ppob.length > 0) ppobTransactions = data.ppob;
            if (data.ppobAccounts && data.ppobAccounts.length > 0) ppobAccounts = data.ppobAccounts;
            if (data.ppobTransfers && data.ppobTransfers.length > 0) ppobTransfers = data.ppobTransfers;
            
            localStorage.setItem("kasirKu_products", JSON.stringify(products));
            localStorage.setItem("kasirKu_orders", JSON.stringify(orders));
            localStorage.setItem("kasirKu_crm", JSON.stringify(customersLoyalty));
            localStorage.setItem("kasirKu_ingredients", JSON.stringify(ingredients));
            localStorage.setItem("kasirKu_void_logs", JSON.stringify(voidLogs));
            localStorage.setItem("kasirKu_ppob_transactions", JSON.stringify(ppobTransactions));
            localStorage.setItem("kasirKu_ppob_accounts", JSON.stringify(ppobAccounts));
            localStorage.setItem("kasirKu_ppob_transfers", JSON.stringify(ppobTransfers));
            
            syncState();
            switchBusinessMode(settings.businessMode || "f&b", true);
            
            showSyncToast("Unduh database sukses!");
            alert("Database lokal berhasil disinkronkan dengan data Google Sheets terbaru!");
        } else {
            throw new Error(result.message || "Data kosong");
        }
    } catch (err) {
        showSyncToast("Gagal mengunduh data", true);
        alert("Gagal mengunduh data dari Google Sheets: " + err.toString());
    }
}

async function uploadToCloud() {
    if (!settings.googleAppsScriptUrl) {
        alert("Silakan atur dan simpan URL Apps Script terlebih dahulu di Pengaturan!");
        return;
    }
    
    if (!confirm("Peringatan: Tindakan ini akan menimpa seluruh data di Google Sheets dengan data lokal Anda saat ini. Lanjutkan?")) {
        return;
    }
    
    showSyncToast("Mengunggah data ke Cloud...");
    
    const payload = {
        products: products,
        orders: orders,
        crm: customersLoyalty,
        ingredients: ingredients,
        voidLogs: voidLogs,
        ppob: ppobTransactions,
        ppobAccounts: ppobAccounts,
        ppobTransfers: ppobTransfers
    };
    
    try {
        const response = await fetch(settings.googleAppsScriptUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({
                action: "sync_all",
                data: payload
            })
        });
        
        if (!response.ok) throw new Error("HTTP error " + response.status);
        const result = await response.json();
        if (result.status === "success") {
            showSyncToast("Unggah database sukses!");
            alert("Database lokal berhasil diunggah sepenuhnya ke Google Sheets!");
        } else {
            throw new Error(result.message);
        }
    } catch (err) {
        showSyncToast("Gagal mengunggah data", true);
        alert("Gagal mengunggah data ke Google Sheets: " + err.toString());
    }
}

// --- PPOB & Jasa Keuangan Manager ---
function renderPpobDashboard() {
    const tableBody = document.getElementById("ppob-table-body");
    if (!tableBody) return;
    
    // Reverse chronological order for history table
    const sortedTx = [...ppobTransactions].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    tableBody.innerHTML = "";
    let totalVolume = 0;
    let totalProfit = 0;
    
    sortedTx.forEach(tx => {
        // Grand total customer paid = nominal + admin fee + any qris surcharge
        const qrisSurcharge = tx.qrisSurcharge || 0;
        const grandTotal = (tx.amount || 0) + (tx.fee || 0) + qrisSurcharge;
        totalVolume += grandTotal;
        totalProfit += (tx.profit || 0);
        
        const timeStr = new Date(tx.timestamp).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
        const dateStr = new Date(tx.timestamp).toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit" });
        
        let badgeType = "badge-success";
        let serviceLabel = "PPOB";
        if (tx.type === "ewallet") { serviceLabel = "E-Wallet"; badgeType = "badge-primary"; }
        else if (tx.type === "transfer") { serviceLabel = "Transfer Bank"; badgeType = "badge-warning"; }
        else if (tx.type === "tarik") { serviceLabel = "Tarik Tunai"; badgeType = "badge-danger"; }
        else if (tx.type === "pulsa") { serviceLabel = "Pulsa / Paket"; badgeType = "badge-info"; }
        else if (tx.type === "pln") { serviceLabel = "Token PLN"; badgeType = "badge-primary"; }
        
        const sourceAccName = ppobAccounts.find(a => a.id === tx.sourceAccountId)?.name || "Lokal";
        const destAccName = ppobAccounts.find(a => a.id === tx.destAccountId)?.name || (tx.paymentMethod === "Tunai" ? "Kas Laci (Tunai)" : "Lokal");
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <div style="font-weight: 600; color: var(--text-primary);">${timeStr}</div>
                <div style="font-size: 10px; color: var(--text-secondary);">${dateStr}</div>
            </td>
            <td>
                <span class="badge ${badgeType}">${serviceLabel}</span>
                <div style="font-size: 11px; font-weight: 500; margin-top: 4px; color: var(--text-primary);">${tx.provider || ""}</div>
            </td>
            <td>
                <code style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--text-primary);">${tx.target || "-"}</code>
                <div style="font-size: 9px; color: var(--text-secondary); margin-top: 2px;">${sourceAccName} &rarr; ${destAccName}</div>
            </td>
            <td style="font-weight: 600; color: var(--text-primary);">${formatPrice(tx.amount)}</td>
            <td style="color: var(--text-secondary);">
                ${formatPrice(tx.fee)}
                ${qrisSurcharge > 0 ? `<div style="font-size: 9px; color: var(--warning-color);">QRIS: +${formatPrice(qrisSurcharge)}</div>` : ''}
            </td>
            <td style="color: var(--success-color); font-weight: 600;">${formatPrice(tx.profit)}</td>
            <td><span class="badge badge-success">Sukses</span></td>
            <td>
                <button class="btn-icon" title="Cetak Struk" onclick="printPpobReceipt('${tx.id}')" style="color: var(--primary-color);">
                    <i data-lucide="printer" style="width: 14px; height: 14px;"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
    
    // Update summary metrics cards
    document.getElementById("ppob-total-volume").textContent = formatPrice(totalVolume);
    document.getElementById("ppob-total-profit").textContent = formatPrice(totalProfit);
    document.getElementById("ppob-total-count").textContent = ppobTransactions.length + " Transaksi";
    
    // Render the Accounts UI cards and drop-down list items
    renderPpobAccountsUI();
    
    if (window.lucide) {
        lucide.createIcons();
    }
}

function renderPpobAccountsUI() {
    const listContainer = document.getElementById("ppob-accounts-list-container");
    if (!listContainer) return;
    
    // Render lists of balances
    listContainer.innerHTML = "";
    ppobAccounts.forEach(acc => {
        let bgGradient = "linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))";
        let iconBg = "var(--primary-glow)";
        let iconColor = "var(--primary-color)";
        let borderStyle = "border: 1px solid var(--border-color);";
        
        if (acc.id === "dana") {
            bgGradient = "linear-gradient(135deg, rgba(14, 165, 233, 0.12), rgba(14, 165, 233, 0.02))";
            iconBg = "rgba(14, 165, 233, 0.2)";
            iconColor = "#0ea5e9";
            borderStyle = "border: 1px solid rgba(14, 165, 233, 0.25);";
        } else if (acc.id === "ovo") {
            bgGradient = "linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(168, 85, 247, 0.02))";
            iconBg = "rgba(168, 85, 247, 0.2)";
            iconColor = "#a855f7";
            borderStyle = "border: 1px solid rgba(168, 85, 247, 0.25);";
        } else if (acc.id === "brilink") {
            bgGradient = "linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(59, 130, 246, 0.02))";
            iconBg = "rgba(59, 130, 246, 0.2)";
            iconColor = "#3b82f6";
            borderStyle = "border: 1px solid rgba(59, 130, 246, 0.25);";
        } else if (acc.id === "mandiri") {
            bgGradient = "linear-gradient(135deg, rgba(234, 179, 8, 0.12), rgba(234, 179, 8, 0.02))";
            iconBg = "rgba(234, 179, 8, 0.2)";
            iconColor = "#eab308";
            borderStyle = "border: 1px solid rgba(234, 179, 8, 0.25);";
        } else if (acc.id === "tunai") {
            bgGradient = "linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(34, 197, 94, 0.02))";
            iconBg = "rgba(34, 197, 94, 0.2)";
            iconColor = "#22c55e";
            borderStyle = "border: 1px solid rgba(34, 197, 94, 0.25);";
        }
        
        const div = document.createElement("div");
        div.style.cssText = `background: ${bgGradient}; ${borderStyle} border-radius: var(--border-radius-md); padding: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--card-shadow); transition: all 0.2s ease;`;
        div.innerHTML = `
            <div>
                <span style="font-size: 11px; color: var(--text-secondary); display: block; font-weight: 600; text-transform: uppercase;">${acc.name}</span>
                <strong style="font-size: 14px; color: var(--text-primary); font-family: 'JetBrains Mono', monospace; font-weight: 700;">${formatPrice(acc.balance)}</strong>
            </div>
            <div style="background: ${iconBg}; color: ${iconColor}; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <i data-lucide="wallet" style="width: 14px; height: 14px;"></i>
            </div>
        `;
        listContainer.appendChild(div);
    });
    
    // Populate Source Account Dropdown
    const sourceSelect = document.getElementById("ppob-source-account");
    if (sourceSelect) {
        const currentVal = sourceSelect.value;
        sourceSelect.innerHTML = ppobAccounts.map(a => `<option value="${a.id}">${a.name} (${formatPrice(a.balance)})</option>`).join("");
        if (currentVal) sourceSelect.value = currentVal;
    }

    // Populate Destination Account Dropdown
    const destSelect = document.getElementById("ppob-dest-account");
    if (destSelect) {
        const currentVal = destSelect.value;
        destSelect.innerHTML = ppobAccounts.map(a => `<option value="${a.id}">${a.name} (${formatPrice(a.balance)})</option>`).join("");
        if (currentVal) destSelect.value = currentVal;
    }
    
    // Populate Adjust Form selector
    const adjSelect = document.getElementById("ppob-adj-account");
    if (adjSelect) {
        adjSelect.innerHTML = ppobAccounts.map(a => `<option value="${a.id}">${a.name}</option>`).join("");
    }
    
    // Populate Transfer From/To Form selectors
    const tfFrom = document.getElementById("ppob-tf-from");
    const tfTo = document.getElementById("ppob-tf-to");
    if (tfFrom && tfTo) {
        const fromVal = tfFrom.value;
        const toVal = tfTo.value;
        tfFrom.innerHTML = ppobAccounts.map(a => `<option value="${a.id}">${a.name}</option>`).join("");
        tfTo.innerHTML = ppobAccounts.map(a => `<option value="${a.id}">${a.name}</option>`).join("");
        if (fromVal) tfFrom.value = fromVal;
        if (toVal) tfTo.value = toVal;
    }
}

function openPpobBalanceModal(mode = "adjust") {
    document.getElementById("modal-ppob-balance").classList.add("active");
    switchPpobBalanceTab(mode);
    sfx.playBeep();
}

function closePpobBalanceModal() {
    document.getElementById("modal-ppob-balance").classList.remove("active");
    sfx.playBeep();
}

function switchPpobBalanceTab(tab) {
    const tabAdjust = document.getElementById("ppob-tab-adjust");
    const tabTransfer = document.getElementById("ppob-tab-transfer");
    const formAdjust = document.getElementById("ppob-balance-adjust-form");
    const formTransfer = document.getElementById("ppob-balance-transfer-form");
    
    if (tab === "adjust") {
        tabAdjust.className = "btn btn-sm btn-primary";
        tabTransfer.className = "btn btn-sm btn-secondary-outline";
        formAdjust.style.display = "block";
        formTransfer.style.display = "none";
    } else {
        tabAdjust.className = "btn btn-sm btn-secondary-outline";
        tabTransfer.className = "btn btn-sm btn-primary";
        formAdjust.style.display = "none";
        formTransfer.style.display = "block";
    }
}

function handlePpobBalanceAdjust(e) {
    e.preventDefault();
    const accId = document.getElementById("ppob-adj-account").value;
    const amount = parseFloat(document.getElementById("ppob-adj-amount").value) || 0;
    
    const account = ppobAccounts.find(a => a.id === accId);
    if (!account) return;
    
    const oldBalance = account.balance;
    account.balance = amount;
    
    // Log mutasi
    ppobTransfers.push({
        id: "MUT-" + Date.now(),
        timestamp: new Date().toISOString(),
        type: "adjustment",
        fromAccountId: "",
        toAccountId: accId,
        amount: amount - oldBalance,
        note: `Penyesuaian manual saldo ${account.name}`
    });
    
    savePpobAccountsToStorage();
    renderPpobDashboard();
    closePpobBalanceModal();
    sfx.playSuccess();
    
    document.getElementById("ppob-balance-adjust-form").reset();
    showSyncToast(`Saldo ${account.name} disesuaikan!`);
}

function handlePpobBalanceTransfer(e) {
    e.preventDefault();
    const fromId = document.getElementById("ppob-tf-from").value;
    const toId = document.getElementById("ppob-tf-to").value;
    const amount = parseFloat(document.getElementById("ppob-tf-amount").value) || 0;
    const note = document.getElementById("ppob-tf-note").value.trim();
    
    if (fromId === toId) {
        alert("Akun asal dan akun tujuan tidak boleh sama!");
        return;
    }
    
    if (amount <= 0) {
        alert("Nominal transfer harus lebih besar dari 0!");
        return;
    }
    
    const fromAcc = ppobAccounts.find(a => a.id === fromId);
    const toAcc = ppobAccounts.find(a => a.id === toId);
    
    if (!fromAcc || !toAcc) return;
    
    if (fromAcc.balance < amount) {
        if (!confirm(`Saldo ${fromAcc.name} tidak mencukupi (Saldo: ${formatPrice(fromAcc.balance)}). Tetap lanjutkan transfer saldo?`)) {
            return;
        }
    }
    
    fromAcc.balance -= amount;
    toAcc.balance += amount;
    
    // Log mutasi
    ppobTransfers.push({
        id: "MUT-" + Date.now(),
        timestamp: new Date().toISOString(),
        type: "transfer",
        fromAccountId: fromId,
        toAccountId: toId,
        amount: amount,
        note: note || `Transfer dari ${fromAcc.name} ke ${toAcc.name}`
    });
    
    savePpobAccountsToStorage();
    renderPpobDashboard();
    closePpobBalanceModal();
    sfx.playSuccess();
    
    document.getElementById("ppob-balance-transfer-form").reset();
    showSyncToast(`Sukses transfer ${formatPrice(amount)}!`);
}

function parsePpobProofText(text) {
    if (!text) return null;
    
    let amount = 0;
    let target = "";
    let provider = "";
    let type = "ewallet";
    let token = "";
    
    // 1. Extract Amount
    const amountRegex = /(?:Rp\.?|sebesar|nominal|jumlah|nominal\stransaksi)[\s]*([\d\.,]+)/i;
    const amountMatch = text.match(amountRegex);
    if (amountMatch) {
        const cleanNum = amountMatch[1].replace(/[^\d]/g, "");
        amount = parseFloat(cleanNum) || 0;
        if (amountMatch[1].endsWith(",00")) {
            amount = amount / 100;
        }
    } else {
        const fallbackAmountRegex = /\b\d{1,3}(?:\.\d{3})+\b/;
        const fallbackMatch = text.match(fallbackAmountRegex);
        if (fallbackMatch) {
            amount = parseFloat(fallbackMatch[0].replace(/[^\d]/g, "")) || 0;
        }
    }
    
    // 2. Extract Target Number (Phone or Account)
    const phoneRegex = /\b(08\d{8,12})\b/;
    const phoneMatch = text.match(phoneRegex);
    if (phoneMatch) {
        target = phoneMatch[1];
    } else {
        const rekRegex = /(?:rek|rekening|ke|no\.?|tujuan)[\s\:\-]*(\d{8,18})/i;
        const rekMatch = text.match(rekRegex);
        if (rekMatch) {
            target = rekMatch[1];
        } else {
            const genericMatch = text.match(/\b(\d{9,18})\b/);
            if (genericMatch) {
                target = genericMatch[1];
            }
        }
    }
    
    // 3. Extract Provider & Type
    const textUpper = text.toUpperCase();
    if (textUpper.includes("PLN") || textUpper.includes("TOKEN") || textUpper.includes("LISTRIK")) {
        type = "pln";
        provider = "PLN";
    } else if (textUpper.includes("DANA")) {
        type = "ewallet";
        provider = "DANA";
    } else if (textUpper.includes("OVO")) {
        type = "ewallet";
        provider = "OVO";
    } else if (textUpper.includes("GOPAY") || textUpper.includes("GO-PAY") || textUpper.includes("GOJEK")) {
        type = "ewallet";
        provider = "GOPAY";
    } else if (textUpper.includes("SHOPEEPAY") || textUpper.includes("SHOPEE")) {
        type = "ewallet";
        provider = "SHOPEEPAY";
    } else if (textUpper.includes("PULSA") || textUpper.includes("TELKOMSEL") || textUpper.includes("INDOSAT") || textUpper.includes("ISAT") || textUpper.includes("XL") || textUpper.includes("AXIS") || textUpper.includes("THREE") || textUpper.includes("TRI") || textUpper.includes("SMARTFREN")) {
        type = "pulsa";
        if (textUpper.includes("TELKOMSEL")) provider = "TELKOMSEL";
        else if (textUpper.includes("INDOSAT")) provider = "INDOSAT";
        else if (textUpper.includes("XL")) provider = "XL";
        else if (textUpper.includes("AXIS")) provider = "AXIS";
        else if (textUpper.includes("TRI")) provider = "TRI";
        else if (textUpper.includes("SMARTFREN")) provider = "SMARTFREN";
        else provider = "PULSA";
    } else {
        type = "transfer";
        if (textUpper.includes("BRI") || textUpper.includes("BRILINK")) provider = "BRI";
        else if (textUpper.includes("BCA")) provider = "BCA";
        else if (textUpper.includes("MANDIRI")) provider = "MANDIRI";
        else if (textUpper.includes("BNI")) provider = "BNI";
        else if (textUpper.includes("CIMB")) provider = "CIMB";
        else provider = "TRANSFER";
    }

    // 4. Extract PLN Token if type is PLN or if text contains a 20-digit number
    const tokenRegex = /\b(\d{4})[\s-]*(\d{4})[\s-]*(\d{4})[\s-]*(\d{4})[\s-]*(\d{4})\b/;
    const tokenMatch = text.match(tokenRegex);
    if (tokenMatch) {
        token = `${tokenMatch[1]} ${tokenMatch[2]} ${tokenMatch[3]} ${tokenMatch[4]} ${tokenMatch[5]}`;
        type = "pln";
        provider = "PLN";
    } else {
        const contiguousTokenRegex = /\b(\d{20})\b/;
        const contiguousMatch = text.match(contiguousTokenRegex);
        if (contiguousMatch) {
            const tokenStr = contiguousMatch[1];
            token = `${tokenStr.substring(0,4)} ${tokenStr.substring(4,8)} ${tokenStr.substring(8,12)} ${tokenStr.substring(12,16)} ${tokenStr.substring(16,20)}`;
            type = "pln";
            provider = "PLN";
        }
    }
    
    return { amount, target, provider, type, token };
}

function updatePpobLiveCalcs() {
    const amountInput = document.getElementById("ppob-amount");
    const feeInput = document.getElementById("ppob-fee");
    const costInput = document.getElementById("ppob-cost");
    const paymentSelect = document.getElementById("ppob-payment");
    const typeSelect = document.getElementById("ppob-type");
    
    if (!amountInput || !feeInput || !costInput || !paymentSelect || !typeSelect) return;
    
    const amount = parseFloat(amountInput.value) || 0;
    const fee = parseFloat(feeInput.value) || 0;
    const cost = parseFloat(costInput.value) || 0;
    const paymentMethod = paymentSelect.value;
    const type = typeSelect.value;
    
    const baseTotal = amount + fee;
    let finalTotal = baseTotal;
    let qrisSurcharge = 0;
    
    // QRIS Auto Surcharge rounding calculation
    const qrisRow = document.getElementById("ppob-calc-qris-row");
    const qrisSurchargeText = document.getElementById("ppob-calc-qris-surcharge");
    
    if (paymentMethod === "QRIS") {
        if (baseTotal >= 10000 && baseTotal <= 100000) {
            finalTotal = Math.ceil(baseTotal / 5000) * 5000;
        } else if (baseTotal > 100000 && baseTotal <= 1000000) {
            finalTotal = Math.ceil(baseTotal / 10000) * 10000;
        }
        
        qrisSurcharge = finalTotal - baseTotal;
        
        if (qrisRow && qrisSurchargeText) {
            if (qrisSurcharge > 0) {
                qrisRow.classList.remove("hidden");
                qrisSurchargeText.textContent = `+${formatPrice(qrisSurcharge)}`;
            } else {
                qrisRow.classList.add("hidden");
            }
        }
    } else {
        if (qrisRow) qrisRow.classList.add("hidden");
    }
    
    // Conditional profit calculation:
    // Pulsa & PLN: (Nominal + Admin + QRIS Surcharge) - Cost
    // Others: (Admin + QRIS Surcharge) - Cost
    let profit = 0;
    if (type === "pulsa" || type === "pln") {
        profit = (amount + fee + qrisSurcharge) - cost;
    } else {
        profit = (fee + qrisSurcharge) - cost;
    }
    
    document.getElementById("ppob-calc-base").textContent = formatPrice(baseTotal);
    document.getElementById("ppob-calc-total").textContent = formatPrice(finalTotal);
    document.getElementById("ppob-calc-profit").textContent = formatPrice(profit);
}

function handlePpobFormSubmit(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById("ppob-submit-btn");
    let originalText = "Simpan Transaksi";
    if (submitBtn) {
        originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = "<i class='spinner-icon' style='display:inline-block; animation:spin 1s linear infinite; margin-right:6px;'></i>Memproses...";
    }
    
    const restoreSubmitBtn = () => {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    };
    
    const type = document.getElementById("ppob-type").value;
    const provider = document.getElementById("ppob-provider").value.trim();
    const target = document.getElementById("ppob-target").value.trim();
    const amount = parseFloat(document.getElementById("ppob-amount").value) || 0;
    const fee = parseFloat(document.getElementById("ppob-fee").value) || 0;
    const cost = parseFloat(document.getElementById("ppob-cost").value) || 0;
    const paymentMethod = document.getElementById("ppob-payment").value;
    const sourceAccountId = document.getElementById("ppob-source-account").value;
    
    // PLN token if available
    const tokenInput = document.getElementById("ppob-token");
    const tokenVal = tokenInput ? tokenInput.value.trim() : "";
    
    if (amount <= 0) {
        alert("Nominal transaksi harus lebih besar dari 0!");
        restoreSubmitBtn();
        return;
    }
    
    const sourceAcc = ppobAccounts.find(a => a.id === sourceAccountId);
    if (!sourceAcc) {
        restoreSubmitBtn();
        return;
    }
    
    const totalDeduction = amount + cost;
    if (sourceAcc.balance < totalDeduction) {
        if (!confirm(`Saldo ${sourceAcc.name} tidak mencukupi untuk biaya modal transaksi (Dibutuhkan: ${formatPrice(totalDeduction)}, Saldo: ${formatPrice(sourceAcc.balance)}). Tetap lanjutkan?`)) {
            restoreSubmitBtn();
            return;
        }
    }
    
    // QRIS surcharge calculations
    const baseTotal = amount + fee;
    let finalTotal = baseTotal;
    let qrisSurcharge = 0;
    if (paymentMethod === "QRIS") {
        if (baseTotal >= 10000 && baseTotal <= 100000) {
            finalTotal = Math.ceil(baseTotal / 5000) * 5000;
        } else if (baseTotal > 100000 && baseTotal <= 1000000) {
            finalTotal = Math.ceil(baseTotal / 10000) * 10000;
        }
        qrisSurcharge = finalTotal - baseTotal;
    }
    
    // Conditional profit calculation:
    // Pulsa & PLN: (Nominal + Admin + QRIS Surcharge) - Cost
    // Others: (Admin + QRIS Surcharge) - Cost
    let profit = 0;
    if (type === "pulsa" || type === "pln") {
        profit = (amount + fee + qrisSurcharge) - cost;
    } else {
        profit = (fee + qrisSurcharge) - cost;
    }
    
    // Deduct cost from source account
    sourceAcc.balance -= totalDeduction;
    
    // Add customer payment to destination account
    let destAccId = "tunai"; // Cash drawer by default
    if (paymentMethod !== "Tunai") {
        const destSelect = document.getElementById("ppob-dest-account");
        if (destSelect) {
            destAccId = destSelect.value;
        }
    }
    const destAcc = ppobAccounts.find(a => a.id === destAccId);
    if (destAcc) {
        destAcc.balance += finalTotal;
    }
    
    const tx = {
        id: "PPOB-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        timestamp: new Date().toISOString(),
        type: type,
        provider: provider,
        target: target,
        amount: amount,
        fee: fee,
        cost: cost,
        profit: profit,
        qrisSurcharge: qrisSurcharge,
        paymentMethod: paymentMethod,
        sourceAccountId: sourceAccountId,
        destAccountId: destAccId,
        token: tokenVal
    };
    
    ppobTransactions.push(tx);
    localStorage.setItem("kasirKu_ppob_transactions", JSON.stringify(ppobTransactions));
    
    // Save account balances
    savePpobAccountsToStorage();
    
    sfx.playSuccess();
    showSyncToast("Transaksi PPOB berhasil disimpan!");
    
    // Store the new transaction ID in the hidden field for Step 4 success screen
    const successTxIdInput = document.getElementById("ppob-success-tx-id");
    if (successTxIdInput) {
        successTxIdInput.value = tx.id;
    }
    
    // Reset form fields
    document.getElementById("ppob-transaction-form").reset();
    const parserBox = document.getElementById("ppob-proof-parser");
    if (parserBox) {
        parserBox.value = "";
        parserBox.style.borderColor = "";
    }
    
    // Hide token input group
    const tokenGroup = document.getElementById("ppob-token-group");
    if (tokenGroup) tokenGroup.classList.add("hidden");
    
    // Sync to Cloud
    syncPpobTransaction(tx);
    
    // Refresh calculations and lists
    updatePpobLiveCalcs();
    renderPpobDashboard();
    
    // Change wizard to success step (Step 4)
    changePpobStep(4);
    restoreSubmitBtn();
}

function clearPpobTransactions() {
    if (confirm("Apakah Anda yakin ingin menghapus seluruh riwayat transaksi PPOB lokal? Data di Google Sheets tidak akan terhapus secara otomatis.")) {
        ppobTransactions = [];
        localStorage.setItem("kasirKu_ppob_transactions", JSON.stringify(ppobTransactions));
        sfx.playSuccess();
        renderPpobDashboard();
    }
}

function printPpobReceipt(txId) {
    const tx = ppobTransactions.find(t => t.id === txId);
    if (!tx) {
        alert("Transaksi tidak ditemukan!");
        return;
    }
    
    // Store Logo
    const logoContainer = document.querySelector("#modal-ppob-receipt .receipt-logo");
    if (logoContainer) {
        if (settings.storeLogo) {
            logoContainer.innerHTML = `<img src="${settings.storeLogo}" style="max-height: 48px; max-width: 120px; object-fit: contain; filter: grayscale(100%);">`;
        } else {
            logoContainer.innerHTML = `<i data-lucide="wallet" style="width: 24px; height: 24px; color: #111;"></i>`;
            if (window.lucide) lucide.createIcons();
        }
    }

    // Populate receipt header from settings
    document.getElementById("ppob-rec-store-name").textContent = settings.storeName || "kasirKu Store";
    document.getElementById("ppob-rec-store-tagline").textContent = settings.tagline || "";
    document.getElementById("ppob-rec-store-address").textContent = settings.address || "";
    document.getElementById("ppob-rec-store-phone").textContent = settings.phone ? "Telp: " + settings.phone : "";
    
    // Populate transaction metadata
    document.getElementById("ppob-rec-tx-id").textContent = `#${tx.id}`;
    
    const dateObj = new Date(tx.timestamp);
    const dateFormatted = dateObj.toLocaleDateString("id-ID") + " " + dateObj.toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'});
    document.getElementById("ppob-rec-date").textContent = dateFormatted;
    document.getElementById("ppob-rec-cashier").textContent = activeUser === "owner" ? "Owner (Admin)" : "Staff";
    
    // Populate service type labels
    let serviceLabel = "PPOB";
    if (tx.type === "ewallet") serviceLabel = "Top Up E-Wallet";
    else if (tx.type === "transfer") serviceLabel = "Transfer Bank";
    else if (tx.type === "tarik") serviceLabel = "Tarik Tunai";
    else if (tx.type === "pulsa") serviceLabel = "Pulsa / Paket Data";
    else if (tx.type === "pln") serviceLabel = "Listrik PLN";
    else if (tx.type === "lainnya") serviceLabel = "Tagihan Lainnya";
    
    document.getElementById("ppob-rec-type").textContent = serviceLabel;
    document.getElementById("ppob-rec-provider").textContent = tx.provider || "";
    document.getElementById("ppob-rec-target").textContent = tx.target || "-";
    
    // Populate pricing
    document.getElementById("ppob-rec-amount").textContent = formatPrice(tx.amount || 0);
    document.getElementById("ppob-rec-fee").textContent = formatPrice(tx.fee || 0);
    
    // Surcharge QRIS
    const surchargeRow = document.getElementById("ppob-rec-qris-surcharge-row");
    const surchargeVal = tx.qrisSurcharge || 0;
    if (surchargeVal > 0) {
        if (surchargeRow) surchargeRow.classList.remove("hidden");
        document.getElementById("ppob-rec-qris-surcharge").textContent = formatPrice(surchargeVal);
    } else {
        if (surchargeRow) surchargeRow.classList.add("hidden");
    }
    
    // Grand total
    const grandTotal = (tx.amount || 0) + (tx.fee || 0) + surchargeVal;
    document.getElementById("ppob-rec-total-pay").textContent = formatPrice(grandTotal);
    document.getElementById("ppob-rec-payment-method").textContent = tx.paymentMethod || "Tunai";
    
    // Token box for PLN
    const tokenSection = document.getElementById("ppob-rec-token-section");
    if (tx.type === "pln" && tx.token) {
        if (tokenSection) tokenSection.classList.remove("hidden");
        document.getElementById("ppob-rec-token-box").textContent = tx.token;
    } else {
        if (tokenSection) tokenSection.classList.add("hidden");
    }
    
    // Open the modal
    const modal = document.getElementById("modal-ppob-receipt");
    if (modal) {
        modal.classList.add("active");
    }
    
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Automatically trigger printing
    setTimeout(() => {
        window.print();
    }, 300);
}

function closePpobReceiptModal() {
    const modal = document.getElementById("modal-ppob-receipt");
    if (modal) {
        modal.classList.remove("active");
    }
}

function openAddPpobAccountModal() {
    const modal = document.getElementById("modal-ppob-add-account");
    if (modal) {
        modal.classList.add("active");
        document.getElementById("add-acc-name").value = "";
        document.getElementById("add-acc-balance").value = 0;
    }
    sfx.playBeep();
}

function closeAddPpobAccountModal() {
    const modal = document.getElementById("modal-ppob-add-account");
    if (modal) modal.classList.remove("active");
}

function handlePpobAddAccount(e) {
    e.preventDefault();
    const nameInput = document.getElementById("add-acc-name");
    const balanceInput = document.getElementById("add-acc-balance");
    if (!nameInput || !balanceInput) return;

    const name = nameInput.value.trim();
    const balance = parseFloat(balanceInput.value) || 0;

    if (!name) {
        alert("Nama akun tidak boleh kosong!");
        return;
    }

    const id = "acc-" + Date.now();
    ppobAccounts.push({
        id: id,
        name: name,
        balance: balance
    });

    savePpobAccountsToStorage();
    renderPpobAccountsUI();
    closeAddPpobAccountModal();
    sfx.playSuccess();
    showSyncToast("Akun baru berhasil ditambahkan!");
}

function resetPpobWizard() {
    // Clear forms
    document.getElementById("ppob-transaction-form").reset();
    
    // Hide token group
    const tokenGroup = document.getElementById("ppob-token-group");
    if (tokenGroup) tokenGroup.classList.add("hidden");
    
    const parserBox = document.getElementById("ppob-proof-parser");
    if (parserBox) {
        parserBox.value = "";
        parserBox.style.borderColor = "";
    }
    
    // Reset wizard back to Step 1
    changePpobStep(1);
    updatePpobLiveCalcs();
}

function processOcrImage(file) {
    if (!file) return;
    
    const loadingOverlay = document.getElementById("ppob-ocr-loading");
    const progressBar = document.getElementById("ppob-ocr-progress");
    const progressPercent = document.getElementById("ppob-ocr-percent");
    
    if (loadingOverlay) loadingOverlay.classList.remove("hidden");
    if (progressBar) progressBar.style.width = "0%";
    if (progressPercent) progressPercent.textContent = "0%";
    
    Tesseract.recognize(
        file,
        'eng',
        {
            logger: m => {
                if (m.status === 'recognizing text') {
                    const percent = Math.round(m.progress * 100);
                    if (progressBar) progressBar.style.width = `${percent}%`;
                    if (progressPercent) progressPercent.textContent = `${percent}%`;
                }
            }
        }
    ).then(({ data: { text } }) => {
        console.log("OCR parsed text:", text);
        const parsed = parsePpobProofText(text);
        if (parsed) {
            // Fill fields
            if (parsed.type) document.getElementById("ppob-type").value = parsed.type;
            if (parsed.provider) document.getElementById("ppob-provider").value = parsed.provider;
            if (parsed.target) document.getElementById("ppob-target").value = parsed.target;
            if (parsed.amount) document.getElementById("ppob-amount").value = parsed.amount;
            
            // Toggle token visibility
            const tokenGroup = document.getElementById("ppob-token-group");
            if (tokenGroup) {
                if (parsed.type === "pln") {
                    tokenGroup.classList.remove("hidden");
                } else {
                    tokenGroup.classList.add("hidden");
                }
            }
            
            if (parsed.token) {
                const tokenInput = document.getElementById("ppob-token");
                if (tokenInput) tokenInput.value = parsed.token;
            }
            
            showSyncToast("Bukti struk berhasil dipindai!");
            sfx.playSuccess();
            updatePpobLiveCalcs();
            
            // Auto advance to Step 2
            changePpobStep(2);
        } else {
            alert("Gagal mengekstrak data dari struk. Pastikan gambar cukup jelas.");
        }
    }).catch(err => {
        console.error("OCR Image Parse Error:", err);
        alert("Terjadi kesalahan saat memproses gambar OCR: " + err.message);
    }).finally(() => {
        if (loadingOverlay) loadingOverlay.classList.add("hidden");
    });
}

async function syncPpobTransaction(tx) {
    if (!settings.googleAppsScriptUrl) {
        showSyncToast("Lokal (GAS tidak terhubung)");
        return;
    }
    
    if (isOfflineSimulated || !navigator.onLine) {
        addToOfflineQueue("add_ppob", tx);
        return;
    }
    
    showSyncToast("Menyinkronkan transaksi PPOB...");
    try {
        const response = await fetch(settings.googleAppsScriptUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                action: "add_ppob",
                data: tx
            })
        });
        
        if (!response.ok) throw new Error("HTTP error " + response.status);
        const result = await response.json();
        if (result.status === "success") {
            showSyncToast("PPOB Cloud sinkron!");
        } else {
            throw new Error(result.message);
        }
    } catch (err) {
        console.error("Gagal sinkronisasi PPOB ke GAS:", err);
        addToOfflineQueue("add_ppob", tx);
    }
}

function openGasCodeModal(e) {
    if (e) e.preventDefault();
    
    const codePre = document.getElementById("gas-code-content");
    if (!codePre) return;
    
    codePre.textContent = "Sedang mengambil data script...";
    document.getElementById("modal-gas-code").classList.add("active");
    sfx.playBeep();
    
    fetch("./dev/google_apps_script.js")
        .then(response => {
            if (!response.ok) throw new Error("Gagal memuat file");
            return response.text();
        })
        .then(text => {
            codePre.textContent = text;
        })
        .catch(err => {
            console.error(err);
            codePre.textContent = "Gagal memuat kode Apps Script. Pastikan server lokal Anda menyala dan Anda membuka aplikasi dari http://localhost:8080/";
        });
}

function handleCopyGasCode() {
    const codePre = document.getElementById("gas-code-content");
    if (!codePre) return;
    
    const code = codePre.textContent;
    if (!code || code.startsWith("Sedang mengambil") || code.startsWith("Gagal memuat")) {
        return;
    }
    
    navigator.clipboard.writeText(code)
        .then(() => {
            sfx.playSuccess();
            const btn = document.getElementById("btn-copy-gas-code");
            const btnSpan = btn.querySelector("span");
            
            btnSpan.textContent = "Tersalin!";
            btn.style.background = "var(--success-glow)";
            btn.style.color = "var(--success-color)";
            
            setTimeout(() => {
                btnSpan.textContent = "Salin Kode";
                btn.style.background = "";
                btn.style.color = "";
            }, 2000);
        })
        .catch(err => {
            alert("Gagal menyalin kode secara otomatis: " + err.toString());
        });
}

// Tambahkan event listener online
window.addEventListener("online", () => {
    showSyncToast("Koneksi kembali online. Sinkronisasi antrean...");
    processOfflineQueue();
});

// Bind to window to allow HTML onclick templates to call them
window.openModifierModal = openModifierModal;
window.toggleModifierCheckbox = toggleModifierCheckbox;
window.selectModifierRadio = selectModifierRadio;
window.updateModifierModalPrice = updateModifierModalPrice;
window.handleModifierFormSubmit = handleModifierFormSubmit;
window.voidOrder = voidOrder;
window.renderHourlySalesChart = renderHourlySalesChart;
window.renderPaymentComparison = renderPaymentComparison;
window.renderTop5Menu = renderTop5Menu;
window.renderVoidLogsTable = renderVoidLogsTable;
window.downloadFromCloud = downloadFromCloud;
window.uploadToCloud = uploadToCloud;
window.openGasCodeModal = openGasCodeModal;
window.handleCopyGasCode = handleCopyGasCode;
window.renderPpobDashboard = renderPpobDashboard;
window.handlePpobFormSubmit = handlePpobFormSubmit;
window.clearPpobTransactions = clearPpobTransactions;
window.updatePpobLiveCalcs = updatePpobLiveCalcs;
window.openPpobBalanceModal = openPpobBalanceModal;
window.closePpobBalanceModal = closePpobBalanceModal;
window.switchPpobBalanceTab = switchPpobBalanceTab;
window.handlePpobBalanceAdjust = handlePpobBalanceAdjust;
window.handlePpobBalanceTransfer = handlePpobBalanceTransfer;
window.parsePpobProofText = parsePpobProofText;
window.printPpobReceipt = printPpobReceipt;
window.closePpobReceiptModal = closePpobReceiptModal;
window.resetPpobWizard = resetPpobWizard;
window.processOcrImage = processOcrImage;
window.openAddPpobAccountModal = openAddPpobAccountModal;
window.closeAddPpobAccountModal = closeAddPpobAccountModal;
window.handlePpobAddAccount = handlePpobAddAccount;

// --- Mobile Layout Helpers ---
function openSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (sidebar) sidebar.classList.add("active");
    if (backdrop) backdrop.classList.add("active");
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (sidebar) sidebar.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
}

function toggleMobileCartView(showCart) {
    const cashierLayout = document.querySelector(".cashier-layout");
    if (cashierLayout) {
        if (showCart) {
            cashierLayout.classList.add("cart-active");
        } else {
            cashierLayout.classList.remove("cart-active");
        }
    }
}

window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;
window.toggleMobileCartView = toggleMobileCartView;

// --- Real Camera Barcode Scanner ---
let html5QrScannerInstance = null;
let camerasList = [];
let activeCameraIndex = 0;

function startCameraScan() {
    sfx.playBeep();
    const modal = document.getElementById("modal-barcode-scanner");
    if (modal) modal.classList.add("active");

    const statusEl = document.getElementById("barcode-scanner-status");
    if (statusEl) statusEl.textContent = "Meminta izin kamera...";

    // Cleanup previous instance if any
    if (html5QrScannerInstance) {
        html5QrScannerInstance.clear();
        html5QrScannerInstance = null;
    }

    // Initialize scanner
    html5QrScannerInstance = new Html5Qrcode("barcode-scanner-reader");

    Html5Qrcode.getCameras().then(devices => {
        if (devices && devices.length > 0) {
            camerasList = devices;
            // Use last camera by default (usually rear/back camera on phones)
            activeCameraIndex = devices.length - 1;
            const targetCameraId = devices[activeCameraIndex].id;
            
            startScannerWithCamera(targetCameraId);
        } else {
            if (statusEl) statusEl.textContent = "Kamera tidak ditemukan.";
            sfx.playError();
        }
    }).catch(err => {
        console.error("Gagal mendapatkan daftar kamera:", err);
        if (statusEl) statusEl.textContent = "Izin kamera ditolak atau terblokir.";
        sfx.playError();
    });
}

function startScannerWithCamera(cameraId) {
    const statusEl = document.getElementById("barcode-scanner-status");
    if (statusEl) statusEl.textContent = "Kamera aktif - Arahkan ke Barcode...";

    // Set high-performance barcode scanning configuration
    const config = {
        fps: 15,
        qrbox: { width: 260, height: 160 } // Rectangular box optimized for traditional horizontal barcodes
    };

    html5QrScannerInstance.start(
        cameraId,
        config,
        (decodedText, decodedResult) => {
            // Success handler
            handleScannedBarcode(decodedText);
        },
        (errorMessage) => {
            // Silence camera frame read errors to prevent spamming logs
        }
    ).catch(err => {
        console.error("Gagal mengaktifkan kamera scanner:", err);
        if (statusEl) statusEl.textContent = "Gagal memulai kamera scanner.";
    });
}

function handleScannedBarcode(barcodeText) {
    sfx.playSuccess();
    stopCameraScan();

    // Look up scanned barcode in product database
    const matchingProduct = products.find(p => p.barcode === barcodeText || p.sku === barcodeText);

    if (matchingProduct) {
        if (matchingProduct.stock <= 0) {
            sfx.playError();
            alert(`Produk ${matchingProduct.name} sedang habis stok!`);
            return;
        }
        
        addToCart(matchingProduct.id);

        // Show success notification toast
        const toast = document.createElement("div");
        toast.style.position = "fixed";
        toast.style.bottom = "24px";
        toast.style.right = "24px";
        toast.style.background = "var(--success-gradient)";
        toast.style.color = "white";
        toast.style.padding = "12px 24px";
        toast.style.borderRadius = "var(--border-radius-md)";
        toast.style.boxShadow = "var(--card-shadow)";
        toast.style.zIndex = "9999";
        toast.style.display = "flex";
        toast.style.alignItems = "center";
        toast.style.gap = "8px";
        toast.style.fontSize = "14px";
        toast.style.fontWeight = "600";
        toast.innerHTML = `<i data-lucide="check-circle"></i><span>Terimbas: ${matchingProduct.name}</span>`;
        
        document.body.appendChild(toast);
        lucide.createIcons();
        
        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transition = "opacity 0.5s ease";
            setTimeout(() => toast.remove(), 500);
        }, 2500);
    } else {
        sfx.playError();
        // If not found, check if we are currently on inventory page. If yes, fill barcode field!
        if (activePage === "inventory") {
            const barcodeInput = document.getElementById("prod-sku");
            if (barcodeInput) {
                barcodeInput.value = barcodeText;
                alert(`Barcode [${barcodeText}] tidak terdaftar. Nilai telah diisi ke form input barcode produk.`);
                return;
            }
        }
        alert(`Barcode [${barcodeText}] tidak ditemukan dalam database produk.`);
    }
}

function stopCameraScan() {
    const modal = document.getElementById("modal-barcode-scanner");
    if (modal) modal.classList.remove("active");

    if (html5QrScannerInstance) {
        html5QrScannerInstance.stop().then(() => {
            console.log("[Scanner] Camera stream stopped.");
            html5QrScannerInstance.clear();
            html5QrScannerInstance = null;
        }).catch(err => {
            console.error("Gagal menghentikan aliran kamera:", err);
            html5QrScannerInstance = null;
        });
    }
}

function switchScannerCamera() {
    if (camerasList.length <= 1 || !html5QrScannerInstance) {
        sfx.playBeep();
        return;
    }

    sfx.playBeep();
    activeCameraIndex = (activeCameraIndex + 1) % camerasList.length;
    const newCameraId = camerasList[activeCameraIndex].id;

    // Stop current scanning, then restart
    html5QrScannerInstance.stop().then(() => {
        startScannerWithCamera(newCameraId);
    }).catch(err => {
        console.error("Gagal mematikan kamera saat ganti:", err);
    });
}

window.startCameraScan = startCameraScan;
window.stopCameraScan = stopCameraScan;
window.switchScannerCamera = switchScannerCamera;

// --- Product Camera Capture & Image Utility Functions ---
let productCameraStream = null;
let productCameras = [];
let activeProductCameraIndex = 0;

async function openProductCamera() {
    sfx.playBeep();
    const modal = document.getElementById("modal-product-camera");
    if (modal) modal.classList.add("active");

    const statusEl = document.getElementById("product-camera-status");
    if (statusEl) statusEl.textContent = "Meminta izin kamera...";

    try {
        // Stop any active stream first
        if (productCameraStream) {
            productCameraStream.getTracks().forEach(track => track.stop());
        }

        // Get video devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        productCameras = devices.filter(device => device.kind === 'videoinput');

        if (productCameras.length === 0) {
            if (statusEl) statusEl.textContent = "Kamera tidak terdeteksi.";
            return;
        }

        // Select the back camera if available, otherwise the first camera
        let backCamIndex = productCameras.findIndex(device => 
            device.label.toLowerCase().includes('back') || 
            device.label.toLowerCase().includes('environment')
        );
        activeProductCameraIndex = backCamIndex !== -1 ? backCamIndex : 0;

        await startProductCameraWithId(productCameras[activeProductCameraIndex].deviceId);

    } catch (err) {
        console.error("Gagal mengakses kamera:", err);
        if (statusEl) statusEl.textContent = "Akses kamera ditolak atau tidak didukung.";
        sfx.playError();
    }
}

async function startProductCameraWithId(deviceId) {
    const statusEl = document.getElementById("product-camera-status");
    const video = document.getElementById("product-camera-video");

    const constraints = {
        video: {
            deviceId: deviceId ? { exact: deviceId } : undefined,
            width: { ideal: 640 },
            height: { ideal: 640 },
            facingMode: deviceId ? undefined : "environment"
        }
    };

    try {
        if (productCameraStream) {
            productCameraStream.getTracks().forEach(track => track.stop());
        }

        productCameraStream = await navigator.mediaDevices.getUserMedia(constraints);
        if (video) {
            video.srcObject = productCameraStream;
            video.onloadedmetadata = () => {
                if (statusEl) statusEl.textContent = "Kamera Aktif - Ketuk 'Ambil Foto'";
            };
        }
    } catch (err) {
        console.error("Gagal mengaktifkan device kamera:", err);
        if (statusEl) statusEl.textContent = "Gagal memulai video kamera.";
    }
}

function closeProductCamera() {
    const modal = document.getElementById("modal-product-camera");
    if (modal) modal.classList.remove("active");

    if (productCameraStream) {
        productCameraStream.getTracks().forEach(track => track.stop());
        productCameraStream = null;
    }
}

async function switchProductCamera() {
    if (productCameras.length <= 1) {
        sfx.playBeep();
        return;
    }
    sfx.playBeep();
    activeProductCameraIndex = (activeProductCameraIndex + 1) % productCameras.length;
    await startProductCameraWithId(productCameras[activeProductCameraIndex].deviceId);
}

function captureProductPhoto() {
    const video = document.getElementById("product-camera-video");
    const canvas = document.getElementById("product-camera-canvas");
    
    if (!video || !canvas || !productCameraStream) return;

    sfx.playSuccess();

    const ctx = canvas.getContext("2d");
    const videoWidth = video.videoWidth || video.clientWidth;
    const videoHeight = video.videoHeight || video.clientHeight;
    
    // Crop center square
    const size = Math.min(videoWidth, videoHeight);
    const startX = (videoWidth - size) / 2;
    const startY = (videoHeight - size) / 2;

    canvas.width = 400;
    canvas.height = 400;

    ctx.drawImage(video, startX, startY, size, size, 0, 0, 400, 400);

    // Compress as JPEG base64 (60% quality)
    const base64Image = canvas.toDataURL("image/jpeg", 0.6);

    // Update form
    document.getElementById("prod-image").value = base64Image;
    updateProductImagePreview(base64Image);

    closeProductCamera();
}

function handleProductFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    sfx.playBeep();
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            
            // Crop center square and resize
            const size = Math.min(img.width, img.height);
            const startX = (img.width - size) / 2;
            const startY = (img.height - size) / 2;

            canvas.width = 400;
            canvas.height = 400;

            ctx.drawImage(img, startX, startY, size, size, 0, 0, 400, 400);
            
            const compressedBase64 = canvas.toDataURL("image/jpeg", 0.6);
            document.getElementById("prod-image").value = compressedBase64;
            updateProductImagePreview(compressedBase64);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function updateProductImagePreview(src) {
    const previewImg = document.getElementById("prod-image-preview");
    const previewPlaceholder = document.getElementById("prod-image-preview-placeholder");
    const btnRemove = document.getElementById("btn-remove-prod-image");

    if (src) {
        if (previewImg) {
            previewImg.src = src;
            previewImg.style.display = "block";
        }
        if (previewPlaceholder) previewPlaceholder.style.display = "none";
        if (btnRemove) btnRemove.style.display = "inline-flex";
    } else {
        if (previewImg) {
            previewImg.src = "";
            previewImg.style.display = "none";
        }
        if (previewPlaceholder) previewPlaceholder.style.display = "block";
        if (btnRemove) btnRemove.style.display = "none";
    }
}

function removeProductImage() {
    sfx.playBeep();
    document.getElementById("prod-image").value = "";
    document.getElementById("prod-image-file").value = "";
    updateProductImagePreview("");
}

function handleProductImageUrlChange() {
    const url = document.getElementById("prod-image").value.trim();
    updateProductImagePreview(url);
}

function handleProductImageUrlChange() {
    const url = document.getElementById("prod-image").value.trim();
    updateProductImagePreview(url);
}

// --- Table Management, Audit Trail, WhatsApp & CSV Export Functions ---
function saveTablesToStorage() {
    localStorage.setItem("kasirKu_tables", JSON.stringify(tables));
    syncState();
}

function populateCartCustomerSelector() {
    const selector = document.getElementById("cart-customer-type");
    if (!selector) return;
    
    let html = `
        <option value="Pelanggan Umum">Pelanggan Umum</option>
        <option value="Take Away">Bawa Pulang (Takeaway)</option>
        <option value="GoFood / GrabFood (Online Delivery)">Online Delivery (Gojek/Grab)</option>
    `;
    
    tables.forEach(t => {
        const statusLbl = t.status === "terisi" ? " (Terisi)" : (t.status === "kotor" ? " (Kotor/Selesai)" : "");
        html += `<option value="${t.id}" ${selectedTableId === t.id ? 'selected' : ''}>${t.name} (Cap: ${t.capacity})${statusLbl}</option>`;
    });
    
    selector.innerHTML = html;
}

function handleCartCustomerTypeChange() {
    const val = document.getElementById("cart-customer-type").value;
    if (val.startsWith("T")) {
        selectedTableId = val;
        // Check if table is occupied, and warn
        const tbl = tables.find(t => t.id === val);
        if (tbl && tbl.status === "terisi") {
            alert(`Peringatan: ${tbl.name} saat ini sedang Terisi. Menyelesaikan pesanan baru pada meja ini akan memperbarui tagihan.`);
        }
    } else {
        selectedTableId = "";
    }
}

function renderTablesGrid() {
    const container = document.getElementById("tables-grid-container");
    if (!container) return;
    container.innerHTML = "";

    let total = tables.length;
    let empty = 0;
    let occupied = 0;
    let dirty = 0;

    tables.forEach(t => {
        if (t.status === "kosong") empty++;
        else if (t.status === "terisi") occupied++;
        else if (t.status === "kotor") dirty++;

        let statusClass = "status-empty";
        let statusText = "Kosong";
        let cardBg = "var(--bg-secondary)";
        let actionBtnHtml = "";

        if (t.status === "kosong") {
            statusClass = "status-empty";
            statusText = "Kosong";
            actionBtnHtml = `<button class="btn btn-sm btn-primary" onclick="openPosForTable('${t.id}')" style="font-size:11px; width:100%;"><i data-lucide="shopping-cart" style="width:12px; height:12px; margin-right:4px;"></i>Buka POS</button>`;
        } else if (t.status === "terisi") {
            statusClass = "status-occupied";
            statusText = "Terisi";
            cardBg = "rgba(225, 112, 85, 0.15)";
            actionBtnHtml = `
                <div style="display:flex; gap:6px; width:100%;">
                    <button class="btn btn-sm btn-warning" onclick="openPosForTable('${t.id}')" style="font-size:11px; flex:1;"><i data-lucide="edit" style="width:12px; height:12px;"></i>Edit</button>
                    <button class="btn btn-sm btn-secondary-outline" onclick="cleanTable('${t.id}')" style="font-size:11px; flex:1;"><i data-lucide="brush" style="width:12px; height:12px;"></i>Kosongkan</button>
                </div>
            `;
        } else if (t.status === "kotor") {
            statusClass = "status-dirty";
            statusText = "Butuh Dibersihkan";
            cardBg = "rgba(253, 203, 110, 0.15)";
            actionBtnHtml = `<button class="btn btn-sm btn-warning-outline" onclick="cleanTable('${t.id}')" style="font-size:11px; width:100%;"><i data-lucide="brush" style="width:12px; height:12px; margin-right:4px;"></i>Bersihkan Meja</button>`;
        }

        const card = document.createElement("div");
        card.style.background = cardBg;
        card.style.border = "1px solid var(--border-color)";
        card.style.borderRadius = "var(--border-radius-lg)";
        card.style.padding = "16px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "space-between";
        card.style.gap = "12px";
        card.style.boxShadow = "var(--card-shadow)";
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h4 style="margin:0; font-size:15px; font-weight:700;">${t.name}</h4>
                <span class="status-badge ${statusClass}" style="font-size:10px; padding:3px 8px; border-radius:4px; font-weight:700; text-transform:uppercase;">${statusText}</span>
            </div>
            <div style="font-size:12px; color:var(--text-secondary);">
                <div>Kapasitas: ${t.capacity} Kursi</div>
                ${t.currentOrderId ? `<div style="margin-top:4px; font-family:monospace; color:var(--primary-color);">Order: #${t.currentOrderId}</div>` : ''}
            </div>
            <div style="margin-top:auto;">
                ${actionBtnHtml}
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById("stat-total-tables").textContent = total;
    document.getElementById("stat-empty-tables").textContent = empty;
    document.getElementById("stat-occupied-tables").textContent = occupied;
    document.getElementById("stat-dirty-tables").textContent = dirty;

    lucide.createIcons();
}

function openPosForTable(tableId) {
    const tbl = tables.find(t => t.id === tableId);
    if (!tbl) return;
    
    selectedTableId = tableId;
    
    // Automatically set table to occupied
    if (tbl.status === "kosong") {
        tbl.status = "terisi";
        saveTablesToStorage();
    }
    
    populateCartCustomerSelector();
    navigateToPage("cashier");
}

function cleanTable(tableId) {
    const tbl = tables.find(t => t.id === tableId);
    if (tbl) {
        tbl.status = "kosong";
        tbl.currentOrderId = null;
        logActivity("Bersihkan Meja", `Membersihkan dan mengosongkan ${tbl.name}`);
        saveTablesToStorage();
        renderTablesGrid();
        populateCartCustomerSelector();
    }
}

function openAddTableModal() {
    sfx.playBeep();
    document.getElementById("modal-table-title").textContent = "Tambah Meja Baru";
    document.getElementById("table-id").value = "";
    document.getElementById("table-name").value = "";
    document.getElementById("table-capacity").value = "4";
    document.getElementById("modal-table").classList.add("active");
}

function closeTableModal() {
    document.getElementById("modal-table").classList.remove("active");
}

function saveTable(e) {
    e.preventDefault();
    sfx.playSuccess();
    const id = document.getElementById("table-id").value;
    const name = document.getElementById("table-name").value.trim();
    const capacity = parseInt(document.getElementById("table-capacity").value) || 4;

    if (id) {
        const idx = tables.findIndex(t => t.id === id);
        if (idx !== -1) {
            tables[idx].name = name;
            tables[idx].capacity = capacity;
            logActivity("Edit Konfigurasi Meja", `Mengubah kapasitas/nama meja ${name} (ID: ${id})`);
        }
    } else {
        const newT = {
            id: generateId("T"),
            name: name,
            capacity: capacity,
            status: "kosong",
            currentOrderId: null
        };
        tables.push(newT);
        logActivity("Tambah Meja", `Menambahkan meja baru ${name} (Kapasitas: ${capacity})`);
    }

    saveTablesToStorage();
    closeTableModal();
    renderTablesGrid();
    populateCartCustomerSelector();
}

function renderAuditLogs() {
    const body = document.getElementById("activity-audit-logs-table-body");
    if (!body) return;
    body.innerHTML = "";

    if (auditLogs.length === 0) {
        body.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:20px;">Tidak ada rekaman aktivitas keamanan.</td></tr>`;
        return;
    }

    auditLogs.forEach(log => {
        const date = new Date(log.timestamp).toLocaleString("id-ID");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${date}</td>
            <td><strong style="color:var(--text-primary);">${log.user}</strong></td>
            <td><span style="font-weight:600; color:var(--primary-color);">${log.action}</span></td>
            <td style="color:var(--text-secondary);">${log.details}</td>
        `;
        body.appendChild(row);
    });
}

let activeReceiptOrder = null;

function sendReceiptToWhatsApp() {
    if (!activeReceiptOrder) return;
    sfx.playBeep();
    
    // Format text message
    let text = `*${settings.storeName}*\n`;
    text += `${settings.tagline || ''}\n`;
    text += `${settings.address || ''}\n`;
    text += `Telp: ${settings.phone || ''}\n`;
    text += `------------------------------------------\n`;
    text += `ID Transaksi: #${activeReceiptOrder.id}\n`;
    text += `Waktu: ${new Date(activeReceiptOrder.date).toLocaleString("id-ID")}\n`;
    text += `Pelanggan: ${activeReceiptOrder.customer}\n`;
    text += `------------------------------------------\n`;
    
    activeReceiptOrder.items.forEach(item => {
        let modifierPriceSum = 0;
        let modifierDetails = [];
        if (item.selectedModifiers && item.selectedModifiers.length > 0) {
            item.selectedModifiers.forEach(m => {
                modifierPriceSum += m.price;
                modifierDetails.push(`  + ${m.name}`);
            });
        }
        const itemPrice = item.price + modifierPriceSum;
        text += `• ${item.name} (${item.quantity}x)\n`;
        if (modifierDetails.length > 0) {
            text += `${modifierDetails.join("\n")}\n`;
        }
        text += `  ${formatPrice(itemPrice * item.quantity)}\n`;
    });
    
    text += `------------------------------------------\n`;
    text += `Subtotal: ${formatPrice(activeReceiptOrder.subtotal)}\n`;
    if (activeReceiptOrder.discount > 0) {
        text += `Diskon: -${formatPrice(activeReceiptOrder.discount)}\n`;
    }
    if (activeReceiptOrder.serviceCharge > 0) {
        text += `Biaya Layanan: ${formatPrice(activeReceiptOrder.serviceCharge)}\n`;
    }
    if (activeReceiptOrder.tax > 0) {
        text += `Pajak: ${formatPrice(activeReceiptOrder.tax)}\n`;
    }
    if (activeReceiptOrder.roundingAdjustment !== 0) {
        text += `Pembulatan: ${formatPrice(activeReceiptOrder.roundingAdjustment)}\n`;
    }
    text += `*TOTAL AKHIR: ${formatPrice(activeReceiptOrder.total)}*\n`;
    text += `Metode Bayar: ${activeReceiptOrder.paymentMethod}\n`;
    text += `Bayar: ${formatPrice(activeReceiptOrder.amountPaid)}\n`;
    text += `Kembalian: ${formatPrice(activeReceiptOrder.change)}\n`;
    text += `------------------------------------------\n`;
    text += `Terima Kasih atas Kunjungan Anda!\n`;
    text += `Powered by kasirKu POS`;

    // Prompt user for customer's WhatsApp number (optional, e.g. starting with 62 or 08)
    const phoneInput = prompt("Masukkan nomor WhatsApp pelanggan (contoh: 628123456789 atau 08123456789):", "");
    if (phoneInput === null) return; // Cancelled
    
    let cleanPhone = phoneInput.replace(/[^0-9]/g, "");
    if (cleanPhone.startsWith("0")) {
        cleanPhone = "62" + cleanPhone.slice(1);
    }
    if (!cleanPhone) {
        cleanPhone = ""; // Send to general chat selection
    }
    
    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
}

function downloadCSV(csvContent, fileName) {
    const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function exportSalesReportCSV() {
    sfx.playBeep();
    let csv = "ID Transaksi,Tanggal,Pelanggan,Subtotal,Diskon,Biaya Layanan,Pajak,Total,Metode Pembayaran,Status\n";
    
    orders.forEach(o => {
        const formattedDate = new Date(o.date).toLocaleString("id-ID").replace(/,/g, "");
        csv += `"${o.id}","${formattedDate}","${o.customer.replace(/"/g, '""')}",${o.subtotal},${o.discount},${o.serviceCharge},${o.tax},${o.total},"${o.paymentMethod}","${o.status}"\n`;
    });
    
    downloadCSV(csv, `Laporan_Penjualan_Kasirku_${new Date().toISOString().slice(0,10)}.csv`);
    logActivity("Ekspor Data", "Mengekspor laporan penjualan POS ke file CSV");
}

function exportInventoryReportCSV() {
    sfx.playBeep();
    let csv = "ID Produk,Nama Produk,Kategori,Harga Jual,Stok,SKU Barcode,Status\n";
    
    products.forEach(p => {
        const status = p.stock <= 0 ? "Habis" : (p.stock <= 5 ? "Stok Rendah" : "Tersedia");
        csv += `"${p.id}","${p.name.replace(/"/g, '""')}","${p.category}",${p.price},${p.stock},"${p.sku || ''}","${status}"\n`;
    });
    
    downloadCSV(csv, `Laporan_Stok_Kasirku_${new Date().toISOString().slice(0,10)}.csv`);
    logActivity("Ekspor Data", "Mengekspor laporan katalog inventaris produk ke file CSV");
}

function checkLowStockAlerts() {
    const lowStockItems = products.filter(p => p.stock <= 5);
    const lowStockIngredients = ingredients.filter(ing => {
        if (ing.unit === "g" || ing.unit === "ml") return ing.stock < 500;
        return ing.stock < 10;
    });

    const totalLow = lowStockItems.length + lowStockIngredients.length;
    const statLowStock = document.getElementById("stat-low-stock");
    const statLowStockSub = document.getElementById("stat-low-stock-sub");
    
    if (statLowStock) {
        statLowStock.textContent = totalLow;
    }
    
    if (statLowStockSub) {
        if (totalLow > 0) {
            let detailMsg = [];
            if (lowStockItems.length > 0) detailMsg.push(`${lowStockItems.length} produk`);
            if (lowStockIngredients.length > 0) detailMsg.push(`${lowStockIngredients.length} bahan baku`);
            statLowStockSub.textContent = `${detailMsg.join(" & ")} di bawah batas aman!`;
            statLowStockSub.style.color = "var(--danger-color)";
        } else {
            statLowStockSub.textContent = "Semua stok aman";
            statLowStockSub.style.color = "var(--success-color)";
        }
    }
}

// --- PPOB Wizard Stepper Logic ---
let currentPpobStep = 1;

function changePpobStep(step) {
    sfx.playBeep();
    
    // Validate inputs before going forward
    if (step > currentPpobStep) {
        if (currentPpobStep === 1) {
            // Step 1: Type selection & parser. No strict validation.
        } else if (currentPpobStep === 2) {
            const provider = document.getElementById("ppob-provider").value.trim();
            const target = document.getElementById("ppob-target").value.trim();
            const amount = parseFloat(document.getElementById("ppob-amount").value) || 0;
            if (!provider || !target || amount <= 0) {
                alert("Harap lengkapi semua bidang detail transaksi (Penyedia, No Rekening, dan Nominal) dengan benar!");
                return;
            }
            
            // PLN validation: if pln, check token if filled
            const type = document.getElementById("ppob-type").value;
            if (type === "pln") {
                const tokenInput = document.getElementById("ppob-token");
                if (tokenInput && tokenInput.value.replace(/[^\d]/g, "").length > 0 && tokenInput.value.replace(/[^\d]/g, "").length !== 20) {
                    alert("Token Listrik PLN harus 20 digit!");
                    return;
                }
            }
        }
    }
    
    currentPpobStep = step;
    
    // Show/hide step groups
    document.querySelectorAll(".ppob-step-group").forEach(el => {
        el.classList.add("hidden");
    });
    const activeGroup = document.getElementById(`ppob-step-${step}`);
    if (activeGroup) activeGroup.classList.remove("hidden");
    
    // Update stepper visual indicators
    document.querySelectorAll(".stepper-node").forEach((node, idx) => {
        const nodeIdx = idx + 1;
        node.classList.remove("active", "completed");
        if (nodeIdx < step) {
            node.classList.add("completed");
        } else if (nodeIdx === step) {
            node.classList.add("active");
        }
    });
    
    // Update step line
    const progressPercent = ((step - 1) / 3) * 100;
    const stepLine = document.getElementById("ppob-step-line");
    if (stepLine) stepLine.style.width = `${progressPercent}%`;
}

// --- Employee Attendance (Absensi) Logic ---
function populateAttendanceEmployees() {
    const select = document.getElementById("attendance-employee-select");
    if (!select) return;
    select.innerHTML = "";
    
    DEFAULT_EMPLOYEES.forEach(emp => {
        const option = document.createElement("option");
        option.value = emp;
        option.textContent = emp;
        select.appendChild(option);
    });
}

function clockInEmployee() {
    sfx.playBeep();
    const select = document.getElementById("attendance-employee-select");
    if (!select) return;
    const empName = select.value;
    
    // Check if already clocked in today (where clockOut is null)
    const activeLog = attendanceLogs.find(l => l.employee === empName && l.clockOut === null);
    if (activeLog) {
        alert(`Peringatan: Karyawan "${empName}" sudah melakukan Clock In pada pukul ${new Date(activeLog.clockIn).toLocaleTimeString("id-ID")}`);
        return;
    }
    
    const newLog = {
        id: generateId("ATT"),
        employee: empName,
        clockIn: new Date().toISOString(),
        clockOut: null,
        duration: "",
        status: "Aktif Bekerja"
    };
    
    attendanceLogs.unshift(newLog);
    localStorage.setItem("kasirKu_attendance_logs", JSON.stringify(attendanceLogs));
    logActivity("Absensi Karyawan", `Clock In Karyawan: ${empName}`);
    
    sfx.playSuccess();
    alert(`Sukses: ${empName} berhasil melakukan Clock In!`);
    updateEmployeeStatusUI();
    renderAttendanceLogs();
}

function clockOutEmployee() {
    sfx.playBeep();
    const select = document.getElementById("attendance-employee-select");
    if (!select) return;
    const empName = select.value;
    
    // Find active clock-in log
    const activeLog = attendanceLogs.find(l => l.employee === empName && l.clockOut === null);
    if (!activeLog) {
        alert(`Kesalahan: Karyawan "${empName}" belum melakukan Clock In hari ini!`);
        return;
    }
    
    const clockOutTime = new Date().toISOString();
    activeLog.clockOut = clockOutTime;
    activeLog.status = "Selesai Shift";
    
    // Calculate duration
    const diffMs = new Date(clockOutTime) - new Date(activeLog.clockIn);
    const diffMins = Math.floor(diffMs / 60000);
    const hrs = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    activeLog.duration = `${hrs} jam ${mins} menit`;
    
    localStorage.setItem("kasirKu_attendance_logs", JSON.stringify(attendanceLogs));
    logActivity("Absensi Karyawan", `Clock Out Karyawan: ${empName} (Durasi Kerja: ${activeLog.duration})`);
    
    sfx.playSuccess();
    alert(`Sukses: ${empName} berhasil melakukan Clock Out! Durasi kerja: ${activeLog.duration}`);
    updateEmployeeStatusUI();
    renderAttendanceLogs();
}

function updateEmployeeStatusUI() {
    const select = document.getElementById("attendance-employee-select");
    const statusCard = document.getElementById("attendance-current-status");
    if (!select || !statusCard) return;
    
    const empName = select.value;
    const activeLog = attendanceLogs.find(l => l.employee === empName && l.clockOut === null);
    
    if (activeLog) {
        const timeStr = new Date(activeLog.clockIn).toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'});
        statusCard.innerHTML = `<span style="color:#10b981; font-weight:700;"><i data-lucide="check" style="width:14px; height:14px; display:inline-block; vertical-align:middle; margin-right:4px;"></i>Aktif Bekerja</span><br><small style="color:var(--text-secondary); margin-top:4px; display:block;">Clock In sejak ${timeStr}</small>`;
    } else {
        // Find last checkout log for today
        const lastLog = attendanceLogs.find(l => l.employee === empName && l.clockOut !== null);
        if (lastLog) {
            const inTime = new Date(lastLog.clockIn).toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'});
            const outTime = new Date(lastLog.clockOut).toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'});
            statusCard.innerHTML = `<span style="color:var(--text-secondary);"><i data-lucide="minus-circle" style="width:14px; height:14px; display:inline-block; vertical-align:middle; margin-right:4px;"></i>Selesai Shift</span><br><small style="color:var(--text-secondary); margin-top:4px; display:block;">Shift: ${inTime} - ${outTime} (${lastLog.duration})</small>`;
        } else {
            statusCard.innerHTML = `<span style="color:var(--text-secondary); font-weight:600;"><i data-lucide="user-x" style="width:14px; height:14px; display:inline-block; vertical-align:middle; margin-right:4px;"></i>Belum Hadir</span><br><small style="color:var(--text-secondary); margin-top:4px; display:block;">Tidak ada catatan kehadiran hari ini</small>`;
        }
    }
    lucide.createIcons();
}

function renderAttendanceLogs() {
    const tbody = document.getElementById("attendance-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    // Group attendance logs by today
    const today = new Date().toDateString();
    const todayLogs = attendanceLogs.filter(l => new Date(l.clockIn).toDateString() === today);
    
    if (todayLogs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:20px;">Tidak ada riwayat kehadiran hari ini.</td></tr>`;
        return;
    }
    
    todayLogs.forEach(l => {
        const inTime = new Date(l.clockIn).toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'});
        const outTime = l.clockOut ? new Date(l.clockOut).toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'}) : "-";
        
        let statusStyle = "color:#10b981; font-weight:700;";
        if (l.status === "Selesai Shift") {
            statusStyle = "color:var(--text-secondary);";
        }
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${l.employee}</strong></td>
            <td>${inTime}</td>
            <td>${outTime}</td>
            <td>${l.duration || "-"}</td>
            <td><span style="${statusStyle}">${l.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// --- Profit & Loss Dashboard Real-time Calculations ---
function getIngredientUnitCost(ingId) {
    // Arabica: 150/g, Susu: 20/ml, Sirup: 15/ml, Minyak: 15/ml, Beras: 15/g, Telur: 2000/pcs
    const costs = {
        "I-001": 150, // Arabica
        "I-002": 20,  // Susu UHT
        "I-003": 15,  // Sirup Gula Aren
        "I-004": 15,  // Minyak Goreng
        "I-005": 15,  // Beras
        "I-006": 2000 // Telur
    };
    return costs[ingId] || 10; // default 10 per unit
}

function getProductCOGS(productId) {
    const recipe = recipes[productId];
    if (!recipe || recipe.length === 0) {
        const prod = products.find(p => p.id === productId);
        return prod ? prod.price * 0.45 : 0; // fallback HPP: 45%
    }
    
    let totalCogs = 0;
    recipe.forEach(r => {
        const costPerUnit = getIngredientUnitCost(r.ingredientId);
        totalCogs += r.quantity * costPerUnit;
    });
    return totalCogs;
}

function renderPandL() {
    const plRevenueEl = document.getElementById("pl-revenue");
    const plCogsEl = document.getElementById("pl-cogs");
    const plOpexEl = document.getElementById("pl-opex");
    const plNetProfitEl = document.getElementById("pl-net-profit");
    
    if (!plRevenueEl) return;
    
    let totalRev = 0;
    let totalCogs = 0;
    
    orders.forEach(o => {
        if (o.status !== "Dibatalkan") {
            totalRev += o.total;
            o.items.forEach(item => {
                const itemCogs = getProductCOGS(item.id);
                totalCogs += itemCogs * item.quantity;
            });
        }
    });

    if (totalRev === 0) {
        totalRev = 1950000;
        totalCogs = 780000; // ~40% HPP
    }
    
    const netProfit = totalRev - totalCogs - opexAmount;
    
    plRevenueEl.textContent = formatPrice(totalRev);
    plCogsEl.textContent = formatPrice(totalCogs);
    plOpexEl.textContent = formatPrice(opexAmount);
    plNetProfitEl.textContent = formatPrice(netProfit);
    
    // Update progress bars
    const plBarNet = document.getElementById("pl-bar-net-profit");
    const plBarCogs = document.getElementById("pl-bar-cogs");
    const plBarOpex = document.getElementById("pl-bar-opex");
    
    if (plBarNet && plBarCogs && plBarOpex) {
        const totalSum = totalRev || 1;
        const percentNet = Math.max(0, (netProfit / totalSum) * 100);
        const percentCogs = (totalCogs / totalSum) * 100;
        const percentOpex = (opexAmount / totalSum) * 100;
        
        plBarNet.style.width = `${percentNet}%`;
        plBarNet.textContent = percentNet > 10 ? `Laba Bersih (${percentNet.toFixed(0)}%)` : "";
        
        plBarCogs.style.width = `${percentCogs}%`;
        plBarCogs.textContent = percentCogs > 10 ? `HPP (${percentCogs.toFixed(0)}%)` : "";
        
        plBarOpex.style.width = `${percentOpex}%`;
        plBarOpex.textContent = percentOpex > 10 ? `Ops (${percentOpex.toFixed(0)}%)` : "";
    }
}

function adjustOpex() {
    const current = opexAmount;
    const input = prompt("Masukkan nilai Biaya Operasional bulanan (Rp):", current);
    if (input === null) return;
    const parsed = parseFloat(input) || 0;
    opexAmount = parsed;
    localStorage.setItem("kasirKu_opex", opexAmount.toString());
    logActivity("Ubah Konfigurasi", `Mengubah biaya operasional menjadi ${formatPrice(opexAmount)}`);
    renderPandL();
}

// Expose camera, file and utility functions globally
window.openProductCamera = openProductCamera;
window.closeProductCamera = closeProductCamera;
window.switchProductCamera = switchProductCamera;
window.captureProductPhoto = captureProductPhoto;
window.handleProductFileSelect = handleProductFileSelect;
window.removeProductImage = removeProductImage;
window.handleProductImageUrlChange = handleProductImageUrlChange;
window.openAddTableModal = openAddTableModal;
window.closeTableModal = closeTableModal;
window.saveTable = saveTable;
window.cleanTable = cleanTable;
window.openPosForTable = openPosForTable;
window.sendReceiptToWhatsApp = sendReceiptToWhatsApp;
window.exportSalesReportCSV = exportSalesReportCSV;
window.exportInventoryReportCSV = exportInventoryReportCSV;
window.handleCartCustomerTypeChange = handleCartCustomerTypeChange;
window.changePpobStep = changePpobStep;
window.clockInEmployee = clockInEmployee;
window.clockOutEmployee = clockOutEmployee;
window.updateEmployeeStatusUI = updateEmployeeStatusUI;
window.adjustOpex = adjustOpex;
window.renderPandL = renderPandL;
window.populateAttendanceEmployees = populateAttendanceEmployees;
window.renderAttendanceLogs = renderAttendanceLogs;

// --- App Initialization ---
window.addEventListener("DOMContentLoaded", () => {
    loadDatabase();
    updateStoreInfoUI();
    
    // Auto initialize proper business mode parameters silently
    switchBusinessMode(settings.businessMode || "f&b", true);
    
    updateShiftOverlayUI();
    updateMemberLookupDropdown();
    updateHeldOrdersCountBadge();
    
    if (typeof populateCartCustomerSelector === "function") {
        populateCartCustomerSelector();
    }
    if (typeof checkLowStockAlerts === "function") {
        checkLowStockAlerts();
    }
    
    registerEventListeners();
    
    // Initial user role setup
    const roleSel = document.getElementById("user-role-selector");
    if (roleSel) {
        roleSel.value = activeUser;
        handleUserRoleChange({ target: { value: activeUser } }, true);
    }
    
    // Register PWA Service Worker for offline support
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js")
            .then(reg => console.log("[PWA] Service Worker registered successfully with scope:", reg.scope))
            .catch(err => console.error("[PWA] Service Worker registration failed:", err));
    }
});
