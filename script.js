document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("fincom-logo");
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const weekday = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Special Events
    const events = {
        "1-1": { name: "New Year", color: "gold", effect: "🎆" },
        "2-14": { name: "Valentine's Day", color: "red", effect: "💖" },
        "6-1": { name: "Madaraka Day", color: "green", effect: "🇰🇪" },
        "6-15": { name: "Pride Month", color: "rainbow", effect: "🏳️‍🌈" },
        "10-10": { name: "Huduma Day", color: "blue", effect: "🤝" },
        "10-20": { name: "Mashujaa Day", color: "red", effect: "🔥" },
        "12-12": { name: "Jamhuri Day", color: "black", effect: "🦁" },
        "12-25": { name: "Christmas", color: "red-green", effect: "🎄" }
    };

    // Daily Font & Color Rotations
    const dailyStyles = [
        { font: "font-bold", color: "text-blue-600" },  // Monday
        { font: "italic", color: "text-red-600" },      // Tuesday
        { font: "underline", color: "text-green-600" }, // Wednesday
        { font: "font-serif", color: "text-orange-600" }, // Thursday
        { font: "font-sans", color: "text-purple-600" }, // Friday
        { font: "font-cursive", color: "text-yellow-600" }, // Saturday
        { font: "font-extrabold", color: "text-pink-600" } // Sunday
    ];

    const eventKey = `${month}-${day}`;

    if (events[eventKey]) {
        applyEventStyling(events[eventKey]);
    } else {
        applyDailyStyling(dailyStyles[weekday]);
    }

    function applyEventStyling(event) {
        if (event.color === "rainbow") {
            logo.style.background = "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)";
            logo.style.webkitBackgroundClip = "text";
            logo.style.color = "transparent";
        } else if (event.color.includes("-")) {
            let colors = event.color.split("-");
            logo.style.background = `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`;
            logo.style.webkitBackgroundClip = "text";
            logo.style.color = "transparent";
        } else {
            logo.style.color = event.color;
        }
        logo.innerHTML = `Fincom Africa ${event.effect}`;
    }

    function applyDailyStyling(style) {
        logo.className = `text-3xl ${style.font} ${style.color}`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const userCounter = document.createElement("div");
    userCounter.id = "user-counter";
    userCounter.className = "text-sm text-gray-500 ml-4";
    document.querySelector("header nav").appendChild(userCounter);

    function updateUsers() {
        // Simulating active users count (In real-world, use WebSockets or Firebase)
        let usersOnline = Math.floor(Math.random() * 50) + 1;
        let emoji = usersOnline <= 20 ? "😊" : usersOnline <= 40 ? "😂" : "😭";
        userCounter.innerText = `Currently ${usersOnline} users browsing Fincom Africa ${emoji}`;
    }

    setInterval(updateUsers, 5000); // Update every 5 seconds
    updateUsers(); // Initial call

    // Idle Detector
    let idleTime = 0;
    const idlePopup = document.createElement("div");
    idlePopup.id = "idle-popup";
    idlePopup.className = "fixed bottom-10 right-10 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hidden";
    document.body.appendChild(idlePopup);

    function resetIdleTime() {
        idleTime = 0;
        idlePopup.classList.add("hidden");
    }

    function checkIdleTime() {
        idleTime++;
        if (idleTime === 30) {
            idlePopup.innerText = "Hey there! Need help finding something?";
            idlePopup.classList.remove("hidden");
        } else if (idleTime === 60) {
            idlePopup.innerText = "Still with us? Check out our latest offers!";
        }
    }

    setInterval(checkIdleTime, 1000); // Check every second

    document.addEventListener("mousemove", resetIdleTime);
    document.addEventListener("keydown", resetIdleTime);

    const backToTop = document.createElement("button");
    backToTop.id = "back-to-top";
    backToTop.innerText = "⬆";
    backToTop.className = "fixed bottom-10 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hidden transition-opacity";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.remove("hidden");
        } else {
            backToTop.classList.add("hidden");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


function toggleChat() {
    const chat = document.getElementById("chatbot");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value;
    if (message.trim() !== "") {
        const chatBody = document.getElementById("chat-body");
        chatBody.innerHTML += `<div>User: ${message}</div>`;
        let response = "I'm still learning!";
        if (message.toLowerCase().includes("services")) {
            response = "We offer a range of ICT services, including network setup, maintenance, and security solutions.";
        } else if (message.toLowerCase().includes("contact")) {
            response = "You can reach us at support@fincomafrica.com or call +254-700-000-000.";
        } else if (message.toLowerCase().includes("pricing")) {
            response = "Our pricing varies depending on the services you need. Contact us for a custom quote!";
        }
        chatBody.innerHTML += `<div>AI: ${response}</div>`;
        input.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
}

var swiper = new Swiper(".testimonialSwiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//products filter
const products = [
    { name: "Acer Chromebook", model: "Chromebook Spin 713", price: "$630", description: "A versatile Chromebook with a 2K display.", image: "https://th.bing.com/th/id/OIP.1Z6J9J9Z9Z9Z9Z9Z9Z9Z9wHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7", brand: "Acer" },
    { name: "Apple AirPods Pro", model: "AirPods Pro", price: "$250", description: "Wireless earbuds with active noise cancellation.", image: "https://via.placeholder.com/200", brand: "Apple" },
    { name: "Apple iMac", model: "iMac 27-inch", price: "$1,800", description: "A powerful all-in-one desktop with 5K Retina display.", image: "https://via.placeholder.com/200", brand: "Apple" },
    { name: "Apple iPad", model: "iPad Pro 12.9", price: "$1,100", description: "The most advanced iPad with 5G connectivity.", image: "https://via.placeholder.com/200", brand: "Apple" },
    { name: "Apple iPhone", model: "iPhone 12 Pro", price: "$1,000", description: "The latest iPhone with a Super Retina XDR display.", image: "https://th.bing.com/th/id/OIP.1Z6J9J9Z9Z9Z9Z9Z9Z9Z9wHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7", brand: "Apple" },
    { name: "Apple MacBook Air", model: "MacBook Air M1", price: "$1,000", description: "The thinnest and lightest MacBook with Apple's M1 chip.", image: "https://th.bing.com/th/id/OIP.9WNUBHeROIl6S34e86kGAgHaIq?w=162&h=189&c=7&r=0&o=5&pid=1.7", brand: "Apple" },
    { name: "Asus Gaming Laptop", model: "ROG Zephyrus G14", price: "$1,200", description: "A compact gaming laptop with a powerful AMD Ryzen processor.", image: "https://th.bing.com/th/id/OIP.1Z6J9J9Z9Z9Z9Z9Z9Z9Z9wHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7", brand: "Asus" },
    { name: "Canon DSLR Camera", model: "EOS Rebel T7", price: "$500", description: "A beginner-friendly DSLR camera with 24.1 MP.", image: "https://th.bing.com/th/id/OIP.1Z6J9J9Z9Z9Z9Z9Z9Z9Z9wHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7", brand: "Canon" },
    { name: "Canon Mirrorless Camera", model: "EOS RP", price: "$1,000", description: "A full-frame mirrorless camera with 26.2 MP.", image: "https://via.placeholder.com/200", brand: "Canon" },
    { name: "Canon PIXMA Printer", model: "PIXMA TR4520", price: "$100", description: "An all-in-one printer for home office use.", image: "https://via.placeholder.com/200", brand: "Canon" },
    { name: "Corsair Mechanical Keyboard", model: "K95 RGB Platinum", price: "$200", description: "A premium mechanical keyboard with Cherry MX switches.", image: "https://th.bing.com/th/id/OIP.9WNUBHeROIl6S34e86kGAgHaIq?w=162&h=189&c=7&r=0&o=5&pid=1.7", brand: "Corsair" },
    { name: "Dell Inspiron Desktop", model: "Inspiron 3880", price: "$600", description: "A reliable desktop for everyday computing.", image: "https://via.placeholder.com/200", brand: "Dell" },
    { name: "Dell Wireless Keyboard", model: "Dell Premier KM717", price: "$100", description: "A wireless keyboard and mouse combo with multimedia keys.", image: "https://via.placeholder.com/200", brand: "Dell" },
    { name: "Dell XPS Laptop", model: "XPS 15 9500", price: "$1,500", description: "A powerful laptop with a 4K display.", image: "https://th.bing.com/th/id/OIP.9WNUBHeROIl6S34e86kGAgHaIq?w=162&h=189&c=7&r=0&o=5&pid=1.7", brand: "Dell" },
    { name: "Epson EcoTank Printer", model: "EcoTank ET-2720", price: "$200", description: "A cartridge-free printer with refillable ink tanks.", image: "https://via.placeholder.com/200", brand: "Epson" },
    { name: "Google Nest Hub", model: "Nest Hub Max", price: "$230", description: "A smart display with Google Assistant and a built-in camera.", image: "https://via.placeholder.com/200", brand: "Google" },
    { name: "Google Pixel Smartphone", model: "Pixel 5", price: "$700", description: "A 5G smartphone with a 90 Hz OLED display.", image: "https://via.placeholder.com/200", brand: "Google" },
    { name: "HP All-in-One Printer", model: "OfficeJet Pro 9015", price: "$230", description: "An all-in-one printer with smart tasks for productivity.", image: "https://via.placeholder.com/200", brand: "HP" },
    { name: "HP Envy Laptop", model: "Envy x360", price: "$800", description: "A versatile 2-in-1 laptop with AMD Ryzen processor.", image: "https://via.placeholder.com/200", brand: "HP" },
    { name: "HP Ink Cartridge", model: "HP 67XL", price: "$40", description: "High-yield ink cartridge for HP printers.", image: "https://via.placeholder.com/200", brand: "HP" },
    { name: "HP LaserJet Printer", model: "LaserJet Pro M404dn", price: "$250", description: "A high-speed monochrome laser printer.", image: "https://th.bing.com/th/id/OIP.up3XOYkI5Z5kr4QAwE84egHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7", brand: "HP" },
    { name: "HP Monitor 24-inch", model: "HP 24mh", price: "$180", description: "A 24-inch Full HD monitor with ultra-thin design.", image: "https://via.placeholder.com/200", brand: "HP" },
    { name: "Lenovo Legion Gaming Laptop", model: "Legion 5", price: "$1,000", description: "A gaming laptop with AMD Ryzen processor and NVIDIA graphics.", image: "https://via.placeholder.com/200", brand: "Lenovo" },
    { name: "Lenovo ThinkPad", model: "ThinkPad X1 Carbon", price: "$1,200", description: "A durable business laptop.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMvfJQ3Z0CQeENcc1ai9NFAF8tt9GIQTZVQ&s", brand: "Lenovo" },
    { name: "Lenovo Yoga Laptop", model: "Yoga C940", price: "$1,300", description: "A premium 2-in-1 laptop with a 4K touchscreen.", image: "https://via.placeholder.com/200", brand: "Lenovo" },
    { name: "Logitech Wireless Mouse", model: "M510", price: "$25", description: "A wireless mouse with extra buttons for productivity.", image: "https://th.bing.com/th/id/OIP.1Z6J9J9Z9Z9Z9Z9Z9Z9Z9wHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7", brand: "Logitech" },
    { name: "Microsoft Surface Pro", model: "Surface Pro 7", price: "$800", description: "A powerful 2-in-1 laptop with a detachable keyboard.", image: "https://th.bing.com/th/id/OIP.1Z6J9J9Z9Z9Z9Z9Z9Z9Z9wHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7", brand: "Microsoft" },
    { name: "Samsung Galaxy Tablet", model: "Galaxy Tab S7", price: "$650", description: "A high-end Android tablet with a stylus.", image: "https://th.bing.com/th/id/OIP.1Z6J9J9Z9Z9Z9Z9Z9Z9Z9wHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7", brand: "Samsung" },
    { name: "Samsung LED Monitor", model: "Samsung Odyssey G7", price: "$700", description: "A curved gaming monitor with QLED technology.", image: "https://via.placeholder.com/200", brand: "Samsung" },
    { name: "Samsung Galaxy Smartphone", model: "Galaxy S21 Ultra", price: "$1,200", description: "The latest flagship smartphone from Samsung.", image: "https://via.placeholder.com/200", brand: "Samsung" },
    { name: "Samsung Smartwatch", model: "Galaxy Watch 3", price: "$400", description: "A premium smartwatch with health tracking features.", image: "https://via.placeholder.com/200", brand: "Samsung" },
    { name: "Samsung SSD", model: "Samsung 970 EVO", price: "$150", description: "A high-speed NVMe SSD for faster storage.", image: "https://via.placeholder.com/200", brand: "Samsung" },
    { name: "Samsung Soundbar", model: "Samsung HW-Q70T", price: "$500", description: "A premium soundbar with Dolby Atmos support.", image: "https://via.placeholder.com/200", brand: "Samsung" },
    { name: "Samsung SSD", model: "Samsung 970 EVO", price: "$150", description: "A high-speed NVMe SSD for faster storage.", image: "https://via.placeholder.com/200", brand: "Samsung" },
    { name: "Sony 4K TV", model: "Sony X900H", price: "$1,000", description: "A 65-inch 4K TV with HDR and Android TV.", image: "https://via.placeholder.com/200", brand: "Sony" },
    { name: "Sony Alpha Camera", model: "Sony Alpha a7 III", price: "$2,000", description: "A full-frame mirrorless camera with 24.2 MP.", image: "https://via.placeholder.com/200", brand: "Sony" },
    { name: "Sony Bluetooth Speaker", model: "Sony SRS-XB43", price: "$250", description: "A portable Bluetooth speaker with extra bass.", image: "https://via.placeholder.com/200", brand: "Sony" },
    { name: "Sony PlayStation 5", model: "PS5", price: "$500", description: "The next-generation gaming console from Sony.", image: "https://via.placeholder.com/200", brand: "Sony" },
    { name: "Sony Noise-Canceling Headphones", model: "WH-1000XM4", price: "$350", description: "Wireless headphones with industry-leading noise cancellation.", image: "https://th.bing.com/th/id/OIP.1Z6J9J9Z9Z9Z9Z9Z9Z9Z9wHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7", brand: "Sony" },
    { name: "Apple MacBook Pro M2", model: "MacBook Pro M2", price: "$1,299", description: "High-performance laptop with Apple's M2 chip.", image: "https://via.placeholder.com/200", brand: "Apple" },
    { name: "Dell XPS 13 Plus", model: "XPS 13 Plus", price: "$1,499", description: "Premium ultrabook with a sleek design.", image: "https://via.placeholder.com/200", brand: "Dell" },
    { name: "HP EliteBook 840 G9", model: "EliteBook 840 G9", price: "$1,250", description: "Business laptop with enhanced security features.", image: "https://via.placeholder.com/200", brand: "HP" },
    { name: "Lenovo ThinkPad X1 Carbon", model: "ThinkPad X1 Carbon", price: "$1,350", description: "A durable business laptop with a lightweight build.", image: "https://via.placeholder.com/200", brand: "Lenovo" },
    { name: "Logitech MX Master 3S", model: "MX Master 3S", price: "$99", description: "Precision wireless mouse with ergonomic design.", image: "https://via.placeholder.com/200", brand: "Logitech" },
    { name: "Razer BlackWidow V4", model: "BlackWidow V4", price: "$149", description: "Mechanical gaming keyboard with RGB lighting.", image: "https://via.placeholder.com/200", brand: "Razer" },
    { name: "Dell UltraSharp 27\"", model: "U2723QE", price: "$650", description: "4K UltraSharp monitor with vivid color accuracy.", image: "https://via.placeholder.com/200", brand: "Dell" },
    { name: "HP 24mh Full HD", model: "24mh", price: "$180", description: "24-inch Full HD monitor with built-in speakers.", image: "https://via.placeholder.com/200", brand: "HP" },
    { name: "Samsung 49\" Ultrawide", model: "Odyssey G9", price: "$1,199", description: "Super ultrawide gaming monitor with QLED technology.", image: "https://via.placeholder.com/200", brand: "Samsung" },
    { name: "HP LaserJet Pro M404dn", model: "LaserJet Pro M404dn", price: "$250", description: "High-speed monochrome laser printer.", image: "https://via.placeholder.com/200", brand: "HP" },
    { name: "Epson EcoTank L3150", model: "EcoTank L3150", price: "$280", description: "Ink-tank printer with wireless connectivity.", image: "https://via.placeholder.com/200", brand: "Epson" },
    { name: "Canon PIXMA G6020", model: "PIXMA G6020", price: "$350", description: "High-efficiency all-in-one inkjet printer.", image: "https://via.placeholder.com/200", brand: "Canon" },
    { name: "Brother HL-L2350DW", model: "HL-L2350DW", price: "$199", description: "Compact monochrome laser printer with duplex printing.", image: "https://via.placeholder.com/200", brand: "Brother" },
    { name: "HP 67XL Black Ink Cartridge", model: "67XL", price: "$40", description: "High-yield ink cartridge for HP printers.", image: "https://via.placeholder.com/200", brand: "HP" },
    { name: "Canon PG-260XL Ink Cartridge", model: "PG-260XL", price: "$35", description: "Ink cartridge for Canon PIXMA printers.", image: "https://via.placeholder.com/200", brand: "Canon" },
    { name: "Epson T664 Ink Refill", model: "T664", price: "$15", description: "Compatible ink refill for EcoTank printers.", image: "https://via.placeholder.com/200", brand: "Epson" },
    // 🛜 NETWORKING & INFRASTRUCTURE
    { name: "Cisco Catalyst 2960-X", model: "2960-X", price: "$750", description: "Managed switch for enterprise networking.", image: "https://via.placeholder.com/200", brand: "Cisco" },
    { name: "TP-Link Archer AX73", model: "Archer AX73", price: "$180", description: "WiFi 6 router with high-speed connectivity.", image: "https://via.placeholder.com/200", brand: "TP-Link" },
    { name: "Ubiquiti UniFi 6", model: "UniFi 6", price: "$200", description: "Access point for seamless network expansion.", image: "https://via.placeholder.com/200", brand: "Ubiquiti" },
    { name: "Netgear Nighthawk RAXE500", model: "RAXE500", price: "$600", description: "Tri-band WiFi 6E router with extreme speeds.", image: "https://via.placeholder.com/200", brand: "Netgear" },
    { name: "D-Link DGS-1210", model: "DGS-1210", price: "$150", description: "Smart managed switch with VLAN support.", image: "https://via.placeholder.com/200", brand: "D-Link" },
    { name: "Mikrotik hAP ax3", model: "hAP ax3", price: "$120", description: "Compact yet powerful wireless router.", image: "https://via.placeholder.com/200", brand: "Mikrotik" },
    { name: "CyberRoam CR25iNG", model: "CR25iNG", price: "$300", description: "Next-gen firewall for enterprise security.", image: "https://via.placeholder.com/200", brand: "CyberRoam" },
    // 💾 SERVERS & STORAGE
    { name: "Dell PowerEdge R740", model: "PowerEdge R740", price: "$3,500", description: "High-performance server for enterprise workloads.", image: "https://via.placeholder.com/200", brand: "Dell" },
    { name: "HPE ProLiant DL380 Gen10", model: "DL380 Gen10", price: "$4,200", description: "Enterprise-grade server with redundancy features.", image: "https://via.placeholder.com/200", brand: "HPE" },
    { name: "Synology DiskStation DS920+", model: "DS920+", price: "$600", description: "4-bay NAS storage for businesses.", image: "https://via.placeholder.com/200", brand: "Synology" },
    { name: "Seagate Exos 18TB", model: "Exos 18TB", price: "$550", description: "Enterprise HDD with high durability.", image: "https://via.placeholder.com/200", brand: "Seagate" },
    { name: "Samsung 970 EVO Plus 1TB", model: "970 EVO Plus", price: "$120", description: "High-speed NVMe SSD for performance computing.", image: "https://via.placeholder.com/200", brand: "Samsung" },
    { name: "WD My Book 8TB", model: "My Book 8TB", price: "$180", description: "External HDD for reliable data backup.", image: "https://via.placeholder.com/200", brand: "WD" },
    // 🔌 POWER & BACKUP SOLUTIONS
    { name: "APC Smart-UPS 1500VA", model: "Smart-UPS 1500VA", price: "$500", description: "Reliable backup power for critical devices.", image: "https://via.placeholder.com/200", brand: "APC" },
    { name: "CyberPower CP1500PFCLCD", model: "CP1500PFCLCD", price: "$200", description: "Sinewave UPS for sensitive electronics.", image: "https://via.placeholder.com/200", brand: "CyberPower" },
    { name: "Tripp Lite SMART1500LCDT", model: "SMART1500LCDT", price: "$180", description: "LCD UPS system for network devices and PCs.", image: "https://via.placeholder.com/200", brand: "Tripp Lite" },
    { name: "CyberPower EC850LCD", model: "EC850LCD", price: "$90", description: "Compact UPS for home and office devices.", image: "https://via.placeholder.com/200", brand: "CyberPower" },
    { name: "APC Back-UPS 650VA", model: "Back-UPS 650VA", price: "$80", description: "Entry-level UPS for basic power backup.", image: "https://via.placeholder.com/200", brand: "APC" },
    { name: "Eaton 5S UPS 1500VA", model: "5S 1500VA", price: "$250", description: "Line-interactive UPS for small business servers.", image: "https://via.placeholder.com/200", brand: "Eaton" },
    { name: "Tripp Lite SMART1000LCD", model: "SMART1000LCD", price: "$150", description: "LCD UPS system for PCs and peripherals.", image: "https://via.placeholder.com/200", brand: "Tripp Lite" },
    { name: "APC Smart-UPS 3000VA", model: "Smart-UPS 3000VA", price: "$1,000", description: "Rack-mounted UPS for data centers and servers.", image: "https://via.placeholder.com/200", brand: "APC" },
    { name: "CyberPower PR1500LCD", model: "PR1500LCD", price: "$400", description: "Pure sine wave UPS for high-end electronics.", image: "https://via.placeholder.com/200", brand: "CyberPower" },
    { name: "Tripp Lite SU1500XLCD", model: "SU1500XLCD", price: "$600", description: "Online UPS system for critical applications.", image: "https://via.placeholder.com/200", brand: "Tripp Lite" },
    { name: "Eaton 9PX UPS 1500VA", model: "9PX 1500VA", price: "$800", description: "High-performance UPS for data centers and IT.", image: "https://via.placeholder.com/200", brand: "Eaton" },
    { name: "APC Smart-UPS 1000VA", model: "Smart-UPS 1000VA", price: "$300", description: "Tower UPS for network devices and servers.", image: "https://via.placeholder.com/200", brand: "APC" },
    { name: "CyberPower CP1000AVRLCD", model: "CP1000AVRLCD", price: "$120", description: "Compact UPS for home and office use.", image: "https://via.placeholder.com/200", brand: "CyberPower" },
    { name: "Tripp Lite SMART750LCD", model: "SMART750LCD", price: "$100", description: "LCD UPS system for PCs and peripherals.", image: "https://via.placeholder.com/200", brand: "Tripp Lite" },
    { name: "Eaton 9PX UPS 3000VA", model: "9PX 3000VA", price: "$1,200", description: "High-efficiency UPS for business continuity.", image: "https://via.placeholder.com/200", brand: "Eaton" },
    // 📊 SOFTWARE & LICENSING
    { name: "Microsoft 365 Business Premium", model: "365 Business", price: "$15/user/month", description: "Cloud productivity suite with security features.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Adobe Acrobat Pro DC", model: "Acrobat Pro DC", price: "$15/month", description: "PDF editing and document signing software.", image: "https://via.placeholder.com/200", brand: "Adobe" },
    { name: "Microsoft Windows 10 Pro", model: "Windows 10 Pro", price: "$200", description: "Operating system for business and power users.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft Windows 11 Pro", model: "Windows 11 Pro", price: "$250", description: "Next-generation operating system for modern PCs.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft Office Home & Business", model: "Office Home & Business", price: "$250", description: "Office suite for home and small businesses.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft Project Standard", model: "Project Standard", price: "$600", description: "Project management software for planning and tracking.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft Visio Professional", model: "Visio Professional", price: "$500", description: "Diagramming and flowchart tool for professionals.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Adobe Creative Cloud Photography", model: "Creative Cloud Photography", price: "$10/month", description: "Photo editing and cloud storage for photographers.", image: "https://via.placeholder.com/200", brand: "Adobe" },
    { name: "Adobe Creative Cloud Single App", model: "Creative Cloud Single App", price: "$20/month", description: "Access to a single app from the Adobe suite.", image: "https://via.placeholder.com/200", brand: "Adobe" },
    { name: "Adobe Creative Cloud Student & Teacher", model: "Creative Cloud Student & Teacher", price: "$20/month", description: "Discounted subscription for students and educators.", image: "https://via.placeholder.com/200", brand: "Adobe" },
    { name: "Adobe Creative Cloud Teams", model: "Creative Cloud Teams", price: "$80/month", description: "Collaboration and license management for teams.", image: "https://via.placeholder.com/200", brand: "Adobe" },
    { name: "Microsoft 365 Family", model: "365 Family", price: "$10/user/month", description: "Cloud productivity suite for families and households.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft 365 Personal", model: "365 Personal", price: "$7/month", description: "Cloud productivity suite for individuals.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft Exchange Online Plan 1", model: "Exchange Online Plan 1", price: "$4/user/month", description: "Business email hosting with 50 GB mailbox.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft Exchange Online Plan 2", model: "Exchange Online Plan 2", price: "$8/user/month", description: "Advanced email hosting with unlimited storage.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft Office 2019 Home & Student", model: "Office 2019 Home & Student", price: "$150", description: "Perpetual license for home and student use.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft Office 2019 Home & Business", model: "Office 2019 Home & Business", price: "$250", description: "Perpetual license for home and business use.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Microsoft Office 2019 Professional", model: "Office 2019 Professional", price: "$440", description: "Perpetual license for professional use.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
    { name: "Adobe Creative Cloud All Apps", model: "Creative Cloud", price: "$53/month", description: "Complete creative suite for design professionals.", image: "https://via.placeholder.com/200", brand: "Adobe" },
    { name: "AutoDesk AutoCAD 2022", model: "AutoCAD 2022", price: "$1,690/year", description: "Industry-standard CAD software for design and drafting.", image: "https://via.placeholder.com/200", brand: "AutoDesk" },
    { name: "Kaspersky Total Security", model: "Total Security", price: "$50/year", description: "Comprehensive security suite for devices and data.", image: "https://via.placeholder.com/200", brand: "Kaspersky" },
    { name: "Avast Business Antivirus Pro", model: "Antivirus Pro", price: "$40/year", description: "Advanced antivirus protection for small businesses.", image: "https://via.placeholder.com/200", brand: "Avast" },
    { name: "VMware vSphere Essentials Plus", model: "vSphere Essentials", price: "$5,600", description: "Virtualization software for data centers.", image: "https://via.placeholder.com/200", brand: "VMware" }

];


// Function to filter and display dropdown options
function filterDropdown() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const dropdown = document.getElementById("dropdown-list");

    // Clear previous dropdown list
    dropdown.innerHTML = "";

    // Filter products
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery) || 
        product.model.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery)
    );

    // Show dropdown if there are matches
    if (filteredProducts.length > 0 && searchQuery !== "") {
        dropdown.classList.remove("hidden");
        filteredProducts.forEach(product => {
            let li = document.createElement("li");
            li.textContent = product.name;
            li.classList = "p-3 hover:bg-blue-500 hover:text-white cursor-pointer";
            li.onclick = () => selectProduct(product);
            dropdown.appendChild(li);
        });

        // Auto-close dropdown after 3 seconds
        setTimeout(() => {
            dropdown.classList.add("hidden");
        }, 3000);
    } else {
        dropdown.classList.add("hidden");
    }
}

// Function to display selected product details
// Modify the selectProduct function to include "Add to Cart" button
function selectProduct(product) {
    const productDisplay = document.getElementById("product-display");
    const dropdown = document.getElementById("dropdown-list");

    // Clear previous results
    productDisplay.innerHTML = "";

    productDisplay.innerHTML = `
        <div class="bg-white p-6 shadow-lg rounded-lg max-w-lg text-center">
            <img class="lazy-load mx-auto mb-4 rounded-lg w-32 h-32" data-src="${product.image}" alt="${product.name}">
            <h3 class="text-xl font-semibold text-gray-700">${product.name}</h3>
            <p class="text-gray-500"><strong>Model:</strong> ${product.model}</p>
            <p class="text-gray-500"><strong>Price:</strong> ${product.price}</p>
            <p class="text-gray-500 mt-2">${product.description}</p>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
        </div>
    `;

    // Lazy load images
    lazyLoadImages();

    // Hide dropdown after selection
    dropdown.classList.add("hidden");
    document.getElementById("search-input").value = product.name;
}

//cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
    // Convert price to number before storing
    let productPrice = parseFloat(product.price.replace(/[^0-9.]/g, ""));
    cart.push({ ...product, price: productPrice });

    // Store updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        total += product.price; // No need to parse again

        let li = document.createElement("li");
        li.classList = "flex justify-between items-center border-b pb-2";
        li.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button class="text-red-500" onclick="removeFromCart(${index})">❌</button>
        `;
        cartItems.appendChild(li);
    });

    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
    cartCount.innerText = cart.length;
    cartCount.classList.toggle("hidden", cart.length === 0);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); // Update storage
    updateCartUI();
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    updateCartUI();
}

function toggleCart() {
    document.getElementById("cart-modal").classList.toggle("hidden");
}

// Load cart on page load
document.addEventListener("DOMContentLoaded", updateCartUI);

const cursorGlow = document.getElementById("cursor-glow");

    document.addEventListener("mousemove", (e) => {
        cursorGlow.style.transform = `translate(${e.clientX - 72}px, ${e.clientY - 72}px) scale(1)`; 
    });

    document.addEventListener("mouseenter", () => {
        cursorGlow.style.transition = "opacity 0.2s ease-in-out, transform 0.1s linear";
        cursorGlow.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
        cursorGlow.style.opacity = "0";
    });

document.addEventListener("DOMContentLoaded", function () {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    });

    
    document.addEventListener("DOMContentLoaded", function () {
        new Swiper(".testimonialSwiper", {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });
