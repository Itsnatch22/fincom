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

    // 🖨️ PRINTERS & CARTRIDGES
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
    { name: "Eaton 9PX UPS 3000VA", model: "9PX 3000VA", price: "$1,200", description: "High-efficiency UPS for business continuity.", image: "https://via.placeholder.com/200", brand: "Eaton" },

    // 📊 SOFTWARE & LICENSING
    { name: "Microsoft 365 Business Premium", model: "365 Business", price: "$15/user/month", description: "Cloud productivity suite with security features.", image: "https://via.placeholder.com/200", brand: "Microsoft" },
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
    } else {
        dropdown.classList.add("hidden");
    }
}

// Function to display selected product details
function selectProduct(product) {
    const productDisplay = document.getElementById("product-display");
    const dropdown = document.getElementById("dropdown-list");

    productDisplay.innerHTML = `
        <div class="bg-white p-6 shadow-lg rounded-lg max-w-lg text-center">
            <img src="${product.image}" alt="${product.name}" class="mx-auto mb-4 rounded-lg w-32 h-32">
            <h3 class="text-xl font-semibold text-gray-700">${product.name}</h3>
            <p class="text-gray-500"><strong>Model:</strong> ${product.model}</p>
            <p class="text-gray-500"><strong>Price:</strong> ${product.price}</p>
            <p class="text-gray-500 mt-2">${product.description}</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Buy now</button>
        </div>
    `;

    // Hide dropdown after selection
    dropdown.classList.add("hidden");
    document.getElementById("search-input").value = product.name;
}

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
