document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("fincom-logo");
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const weekday = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // 🎉 Special Events
    const events = {
        "1-1": { name: "New Year", color: "gold", font: "font-extrabold", effect: "🎆" },
        "2-14": { name: "Valentine's Day", color: "red", font: "italic", effect: "💖" },
        "6-1": { name: "Madaraka Day", color: "green", font: "font-bold", effect: "🇰🇪" },
        "6-15": { name: "Pride Month", color: "rainbow", font: "font-serif", effect: "🏳️‍🌈" },
        "10-10": { name: "Huduma Day", color: "blue", font: "underline", effect: "🤝" },
        "10-20": { name: "Mashujaa Day", color: "red", font: "font-bold", effect: "🔥" },
        "10-31": { name: "Halloween", color: "orange", font: "font-cursive", effect: "🎃" },
        "12-12": { name: "Jamhuri Day", color: "black", font: "font-extrabold", effect: "🦁" },
        "12-25": { name: "Christmas", color: "red-green", font: "font-sans", effect: "🎄" }
    };

    // 🔄 Daily Font & Color Rotation
    const dailyStyles = [
        { font: "font-bold", color: "blue" },  // Monday
        { font: "italic", color: "red" },      // Tuesday
        { font: "underline", color: "green" }, // Wednesday
        { font: "font-serif", color: "orange" }, // Thursday
        { font: "font-sans", color: "purple" }, // Friday
        { font: "font-cursive", color: "red" }, // Saturday
        { font: "font-extrabold", color: "pink" } // Sunday
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

        logo.style.fontFamily = getFontFamily(event.font);
        logo.innerHTML = `Fincom Africa ${event.effect}`;
    }

    function applyDailyStyling(style) {
        logo.style.color = style.color;
        logo.style.fontFamily = getFontFamily(style.font);
    }

    function getFontFamily(font) {
        const fonts = {
            "font-bold": "'Poppins', sans-serif",
            "italic": "'Dancing Script', cursive",
            "underline": "'Oswald', sans-serif",
            "font-serif": "'Merriweather', serif",
            "font-sans": "'Roboto', sans-serif",
            "font-cursive": "'Pacifico', cursive",
            "font-extrabold": "'UnifrakturCook', cursive"
        };
        return fonts[font] || "'Arial', sans-serif"; // Default font
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
    { name: "Acer Chromebook", model: "Chromebook Spin 713", price: "$630", description: "A versatile Chromebook with a 2K display.", image: "data:image/jpeg;base64,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", brand: "Acer" },
    { name: "Apple AirPods Pro", model: "AirPods Pro", price: "$250", description: "Wireless earbuds with active noise cancellation.", image: "data:image/jpeg;base64,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", brand: "Apple" },
    { name: "Apple iMac", model: "iMac 27-inch", price: "$1,800", description: "A powerful all-in-one desktop with 5K Retina display.", image: "data:image/jpeg;base64,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", brand: "Apple" },
    { name: "Apple iPad", model: "iPad Pro 12.9", price: "$1,100", description: "The most advanced iPad with 5G connectivity.", image: "data:image/jpeg;base64,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", brand: "Apple" },
    { name: "Apple iPhone", model: "iPhone 12 Pro", price: "$1,000", description: "The latest iPhone with a Super Retina XDR display.", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAQEA8PEBIQEBAQEBAQFg8PFREWFhUVFhYYHSggGBolGxUVITEhJSktLi4uGB81ODMsNygtLisBCgoKDg0OGhAQGi0fHR0tLS0tLS0tLS0uKy0tLS0tLSstLS8tLSstLS0tMC0tLSsrLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwYHBQj/xABTEAABAwIABgoKDgkDBQEAAAABAAIDBBEFBxIhMXEGEzRBUWFygZGyFBUiM1NzsbTB0hYkJTJCUpKTlKGjxNHTIzVDRFRidKKzVYLwF2PC4fEI/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA6EQEAAQICBgcHAwQBBQAAAAAAAQIRAwQFEiExQVEUMkJxgZGxEzNhocHR4RVS8AYiIyRTFmOCkvH/2gAMAwEAAhEDEQA/AO4oCAgICChIGcmwG+ginCcA/bR8z2nyJcU7aQeFZ0qXDtpB4VnSlyx20g8KzpS62O2sHhWdKXRY7DNMNM8Y1uAS4uZhanOiZh1G6XF3bODwjVQ7ZweEagds4PCNUDtnB4RvSgds4PCN6UDtnB4VvSgds4PCN6UDtnB4RvSlw7ZweFjGtwHlQskxyBwu0gg6CCCCqLkBAQEBAQEBAQEGGqnEbS472gDS4nMANZQQhSZfdT90dIYfeM1DfPGVgySAGDesNQCC7JHAfqQVyRwFADAghYRnDBvX3rkAaL3J3gACSeAFBwvZljPl28w0QzNNtuLA6SRxtba2uBEYOouzi5BuBlFKTNnmMwlsgl7ra6s3z93PMz+0vFuhboy+JPZcs53Aiba8KVNdh6Jj5Hx1DY42lz3dkzHJaNJzS3UnAriLzDKnN4VU2irbLxPZ9XeFk+fqfXWqzfc9n9d4V/z9T+YlluqNntedD5Pn6r8xLFw7Pa/fkk+fqvzEsXHbPK8WvJIL6P09Vn+0V1Uup7Pq7wsnz9T66lh7NFhHDs8bZYo6h0bxdruyJhlC9ri8l7ZlsjBrmLxDRXmsKibVVbWV1dsgju7aqvN8SoncegSG/Qsuj4nJjGcwZ7UJ+xDGnUw1AirWmznZLnhmTLG7eDmgASD+VwyuA3zHTNNnTFUTF4fQGC65s8bXtLXAgG7Tdrg4BzXNO+0ggg8aQJaoICAgICAgICCBW91NCzeAfIdYs1vWKxlYeVs2w8KCinqrZW1NGS3RlSOOSwcXdFo5ynEfOFbsxwrPIZ3VlS03JAie6NjdJsGNzWsDpvozrZGHMxe2xNZ1/FDs1lrYnxVBBmge1jnABu2Ne1xY6wzB3cPBAzZgd8rXMModIqK6ONzGvdkukNmCxNzm4NGkaUGV5tn6dSg0fGFVEU8o3nNawjhY7KfI08RZC5upxSElyTFjQNeJqx4ypTKWNcR73MHPcOM5QF+LjK9TJYcWmt4Ol8arWjCjdvn47/s6TAxdcy8+ilImpGSxvjeLskY6N40Xa5pB+orXVtizoovTMTHByGvxV1zXuELoZY79y8yCM23sprtB1EhefOWrvsexTnsOY23hG/6YYT+JD8/Gp0etl03C+KoxZ4UGhsXz7PxTo9Z03C+PkqcWeFPixfPs/FOjYh03C+PkOxaYUNrtiNsw/Tx5k6PiJ03C/kMlLitwg54EhgiZcZTzKH2G/ZrdJ4s2sKxlqyc9h22XdcocHsp4YoGXyIY2saTpIaLXPGdPOvQoiKYiIePizNdU1TxJGrOGiYc9xpYMaYW1TQBLE9rS4Zi6M5hfjDrW1lc2cw4mjXjg7NGY80404U7p2+Lp+KSvdJTRg6C021OZHMBqDpZQOIDgXmcXvugqggICAgICAgIIUttvbnOVtZsN62ULlYzvWHj7NsBdsKGppb5LpGgsdnOTI3JcwkDPbKaL8V1FfNVTsawnA8wOoqhzgSAY4nyMdfNdrmggjnW6MSYizXNEXu67id2HTUbHyzjJlme17m3B2trA5rGkjMXd28m2juRpuBqmWcOpTtiu3LDC5udpcAS08IvoUVdKcxUVz/GTbaHZ+6yjcb1uxKu3pWUMZc9xVj2m7+of1I16+T914vm9KRfMx3R6y6BCFtmWmmExgzLFuiF1lGRZCxZAyUCyAQqksbwjGUZ7VYlrmGl4zW+0JeVH/kasMx7mrwZ5KP8Aao8fRuGJu3Y0Oc3yIrDh9rNv6F5HF9M6cqggICAgICAgIIE26WeKPXCxnesMr5A3Kc4gAaSc28ornGFcbeCWTFjWPnsbOmZA1zM38xILhxtB51dVLt12O4ep6yNskDmuY4XaW6DbMRnAIIOYggEb4UVMnpiS46csdCxmm8s6arQvDC1liqxc/wAY3eX682rsSrWUMZaLimHtN39Q/qMXrZX3Xi+d0htzX/jHrLoETVsaohMibmUbV2QgoWoqmSgZKCoaguyURikaiWR3tVYzDS8aDfc+XlR/5GrDMe6q8PVllI/2aPH0ltOJ3c8HIj81C8ni+jdQVQQEBAQEBAQEECbdLPFO64WMrDUsb5lGCawxXvkty7adqL2tkOrIy+a6cSXzkyJmTnLr57WAI0Zrm+bPr5l1U00au1pqmq9nUsQrpcqrGfahLAW8AlLJA+3+0Mvqauapuh3MLFWKYZiiud4xx+hfrzcXtSrVhjLScUbfabjwzv6rF6mVn/F4vAz9P+1fnTHrLoLAtrVCVGjJksgZKKpkopkoK5KIWRGN4QYHNQaTjUHudLy4/wDI1a8f3VXh6ssrH+xR4+ktkxObng5EfmwXl8X0DqKqCAgICAgICAg8+Vw7JaLi4hJI4AXi3kPQsZ3rDNVU7ZGua4BzXNLXNcLhzSM4IUVy7CGJejfKXRTVMEbjfaWlpa3iYXMJA13WUVSlm8bGNjlNg+JsMDclrbn4RJJ984k5y42GfiAFgABjKvcD/wDligo8ZtSDnWMYHaXknS6w4gKOq9JKsJLTsUg9og8NROOhsP4r0sr7ue94mkI/2Ke76ugtat7QysQZQiqhGUCgqgoVSVCjBjcgxuag0bGqPc+XidGTq21g9IWvH91Pgzy0XzNHwv6flsWJ0+14ONsYHGexQbDo+peXxe+6kqggICAgICAgIPNePbYO+YbdD83lKxnesJ6iiAgILZNBQc4xjOG0vHA83+h1SsJLUsUbfc0O+LWzN5nQxeqF6GV3TDx9IR/kpq5fV0FoXS5VclBUXQXByKqHItzKQupdEUsiKWQUcitHxnNvg2rd8UwNHPO0nyDpWnMz/js25GL4+tyi3n/Ie7ieaDTwcTYyNfYzR5CV5vF7jqSqCAgICAgICAg85+6h4k9cLGd6wnKKICAgtk0FBzbGL3qTNburXzZz2HVn025laUlrmJWLLwZM3hqpCNYZEQekLtwatWmJebmaNeqafhHnwbtG/eOYjMRwEaQux58SygoqqBdFLoF0C6BdELoMVRIGtJO8ESqbRdqWNGAswNNcWc+SJ7uImVlhzAAcy5MerWiXZk6NSab75vM+X0i0PWxO7ng5EXm7VxcXrOoqoICAgICAgICDzX37LGbNtGY8Jy845rDpWM71hPUUQEBBbJoKDnOMfvDuWfM6pWElr+I39Xv/AKmTqRrrw+o4cb3vhHrLfKyjyjlMsH74Oh49B4/+Ddh4mrsnc5sbA1v7qd/r+UES2OS4FruA5j/7HGuiNsXhyTNptOyWRrwiq5SBlIGUgqCgpdBZLO1uclEmqI3stJSOeQ+QWaM7GHSTvOcN7iC1V4nCG7BwJqnXrjZwj6z9mr45D7lTcuH/ACtXNX1ZdtHvKfH0lMxPkiCnsL3bGDxDsUG/SAOdcvF38HUlUEBAQEBAQEBBAl3SzxTuuFjKwmKKICAgo/Qg5tjGFopM5zuvq9qVYzdCQkvBxG/q9/8AUydSNdmH1HDi+98I9ZdIVFk0LXiz2hw3r73GOBWJmNsMa8OmuLVRd58uCPByObxO7seg+VboxucOSrJ/sqt37fyjPoKgaMh+p1vLZZxi0NU5fHjlLGYqgaYXcxafIVlr0c2GpjR2fT7qBlR4F/1D0pr0c01Mb9ksjKaoP7PJ5T2eglScSjmzjBx57NvGGePBkp9/I1o4GAuPSbW6CsJxo4Q2RlcSetVEd38+kptNQRxm4GU4fDcco828Oay1VYlVW904eXoom++ec/z0SVg3NFxxfqufiMR+3jHpUxOqYfvI8UzE73iDkR+atXLxdzqKqCAgICAgICAggTbpZ4p3XCxlUxRRAQEFH6Cg5vjJ70/X91rFYSXgYjz7nu/qZOqxdWH1XDje98I9ZdGus2N1yFxRkICAgICqXUKJdRC7R8bx9y6nkxecwrDF6viywfe+E/RMxObng5EfmrVzcXc6iqggICAgICAgIIEu6WeKd1wsZWEwKKICAgtfoQc4xkd6fr+6VisJLXsSebBx46mX6mx/iurC6rhx/eeH1l0dpWbBdlIKXRbq3QurdFupdC5dEuZSCmUgEojRcbf6squTF51CscXqeP3ZYHvfCfWE7E5ueDkR+ahcvF3uoqoICAgICAgICCBLulnindcLGVhMCiiAgILHIOd4yu9P1/daxVJa3iY/VreOrqR0Mp/xXTg7pcWZ69PdP0dEklawXcQAN8my2REzua6qqaYvVNmEV1/exyuHC2OQg6iBZWabb5jzhrjFv1aZnwn7HbJg9+HR+MaWdaysUTO7aTj0U9bZ3xMeqQyoadBBWNpbIqpncyZQRlsVuFDYpcIKEhDYpcKmwzKDR8awvgquPAaZvOahpPoWGLOyIZZaP76p5W/nom4nNzwciPzVq5+LtdRVQQEBAQEBAQEECXdLPFO64WMrCYFFEFLoKXUFrtCDneMk/ona/utYs0l4eJODLwTcEBza6ci4JFjFDcZuboWyivVu0Y2Fr2tNph0GGiaDlOvI8aHObmbyW6BrznjVqxZnZGyGOHl6adtW2fTujh6/FLyta1ugvvWKF0aTB8RudqaCd9t4z0tstkYlccWirL4NXZjw2elkZ+DwPemZup7XdZpP1rKMarjENc5Sns1THjf1iVvYr96Rw5UYd5HBX20cY+bHotfCvzj8wClk35uiA+ur7an9vz/B0XE41x5fleKG+mWU8ljW+UFT23KF6Jzrn5faVwwdHv7Ydcjm9Wyx9tV8PJnGUw+MzPjP0sv7XM3ssapXnrXT21Xw8jouHwv5z9Wo43YQzAtUGg53wEkm5J2+POSsKqpqm8t1GHTRFoZMTm54ORH5qFhxbHUVUEBAQEBAQEBBAl3SzxR64WMql3UVRQEBBa/Qg51jI707X91rFYSWtYpMMNpcDFxYXudXThrQQ3RFDck7wzjeOlc+bzdOXpiZi8zud2QyFWcrmmJ1YjfO/wCTYX7N5Pg08Y5UjneQBedVpers0w9yn+nMPtYkz3REfdBqNldW/MHsjH/aYB9brlc+JpPHq3TEdzswtCZSjbMTV3z9rPPfXzON3TSu1yPPpXHXmMWrfVPm7qcrgURamimPCGaGulH7R/ynLROJX+6fOWFeXwp7MeSZHhmcftH/ACnLH22LG6urzlzVZHAnsx5QlR7Iph8MnXnWcZzNU7sSrzv6uerRWBPZhmbsrlGkNdrH4Low9J5yjfVFXfEfSzVVoTBq3XjuledmRGmBjtTy30Fd9Gma+1RHh/Jav+nqZ3VzHhf7LmbNWfCp3Dkyh3laFvp0vTxp+bCr+nKuziR40/mUiHZlTH3zJmcZaxw+p11up0rgTvvDRX/T+Zjq1Uz4zH0eNjWwhFPgSqdE8PAfTg2uC07ezMQc4XdhY1GLF6Ju8rMZXFy9Wri02n17p3Sz4ndzwciPzULPi0OoqoICAgICAgICCBLulnindcLGd6wkrFVUBAQWu0IOdYyO8u1/dKxWlJaTi/gysCNd8XCFQ35UMPqrydMUXooq5T6//Hu6AxNXGqp5x6T+Ugrw32MARF4WLGWUFYywmF2WpZjZQyJZdVY56ysyilYXLKzKIWoyWqqh7JYz2rwg7PkhtM08bnVTCOq7pXsaIidaqeD53+o6o9lRTxmb+UfmG7YnNzwciPzVq9zi+TdRVQQEBAQEBAQEECXdLPFO64WM71hJWKqoCAgtfoQc6xkd5fr+6VisJLwsTtHt2A5o991XMW8sRQlv1i3OtWbwfbYNVHHh38HRk8f2GPTicI393FAmbZxGix0cC+Sh+iUTeIlaEZLgoxXAqWSwXJZLKEotlt1VsIqioAIr0dnNCIdj1SDbbHvgkkFwS0mdmS0jezDpJX1GQwPZYMX3ztl8HpfN9IzE26tOyPrPn8nsYnNzwciPzVq7OLzXUVUEBAQEBAQEBBAl3SzxTuuFjKwlLFRBRAQUdoQc5xj95fr+6VisJLzcRLgMEvJNgKyckneAihzrNErZfgshxqGMeI3nurgDJed+17gHjtnJ4l89pLKalftad1W/4T+X12g8/FdHsK5/up3fGPx6NYvxLzLPojL4k1UMs8CuqllMoq2hdVblHjTYurBc8atjVgDypaE1eTJDd7g1rXOcdDQCSdQGlNSZ2RtY1VRTF6ptDdNjWxF5IlqW5DRnEZ0u5XAOLSvUyejqpqivFi0Rw59/wfNaT0xTNM4WBN775+33RMdjQ3BU7WgABsQsBbRVQ28pXvPl1cTm54ORH5qFOKuoqoICAgICAgICCBLulnindcLGVhJusVEBAQWv0FBzrGP3l+v7pWKwkvGxJuAwSAdDsIyA6hFE7ytHSs0dVLARYgFpFiCAQQd4jfUmImLSsTMTExsmGuYRwJRlxayIB/wi1zw1nNe1+L/4uGrRuXqm9rd0vRo0vm6Itr374hGbsVpDpa+/LIU/TMD4+bdGnM3HGPJlbsUoviPOuWT0FZRo7L8vmk6czk9qP/WGVuxiiH7G+uSU/wDksoyGXjs+rCdM52e38qfsv9jlF4BvypPWV6Dl/wBnqx/V87/yT5R9gbHaL+HZ0v8AxV6Fl/2R80/Vs7/yT5R9mRuAqMaKaHnZleVZRlcGOxDCdJ5yd+LV529EplJE0WYxjBp/RtDLHhGTaxW2nDpo6sRDlxMWvEm9dU1d8zPqzQVha4Mk0ONmSZhc7zXcB4DoOvTm1uf45KsPoK5gNzEYWu4nGeF1jzEHnQS8Tm54ORH5q1TirqKqCAgICAgICAggS7pZ4p3XCxlUlYshEEBBR2goOc4yO8u1/dKxWElqeK+p2rA7X7zcIyZXEH9ix3/uKzR1isrslga0924A3+I07+vg6dYQYSAghV+yekguHzNuPgsu8/26OdbMPBrxOrF23DwMTE6lMy8SbGJFe0VPNJxuLIx5SfqXZTo3FnbNod1GicxO+0d8sB2dVR97RNA45XHyMWf6dzrjy/LdGh544kA2cVY00bPnHt8rVf06P3/L8sv0b/ux5fllixhkd9pHDh2uZr/qIapOjK+zVEsatC4vZqiXqUezqiksHSOhJ8MwtHyxdo5yuavJY1G+nyceLo/MYXWpbBBVseA5jmvac4c1wcDqI0rlnY4p2bFal7Mh2VbJAJN9SDmeMON7cE1m2Cz3SNc4cF6mIgcwsOZB7+Jzc8HIj81CnFXUVUEBAQEBAQEBBAl3SzxTuuFjKwkrFRAQEFHaCg5zjI70/X90rFaUlr+JiibUYJmhdofNKDxEtZnHGLArNG4XkDC57MjIblTSSnIYyw7pxcffDjAO9oViJmbQsRMzaGpYSwvLUEshJbFexkc0tLtTL9yOInK4SPer0MLLU0ba9s8nq4GSpp24m2eXJjosBxjO5uW74z8/QNA6F0zi1WtGyPg9KJmN2x7MFEBmAsOIWWuZujOKRQvCvYiF4YZaPhF9aq3h5tVgeJ2mNusDJPSLLZTi107pZRiV07peYzBclM7bKWTJN7mN9i1/F/zpSuqjFi2JHjDRjUUYsf30+MNy2J4ZgqnCKVphq2Z9qe97mvIz5UeUTwXtpzZibG3nY+XnD2xtpeNmMtOFtjbDy8dTQ3Bk/GYR9sz8FzOVJxOd4g5EfmoU4q6iqggICAgICAgIIEu6WeJd1wsZWElYqICAgtfoKDnWMjvLtf3WsVpSXkf/AJ/Z7nynhq5LfNRLNF2yzDjq+faIj7ThdnI/eJQffcbQdHTvjJ9LL4UYdOtVvn5PXyeBqU69W+V9DR2tmWy7vh7VPSoxmtMZEFLtc1L8gJdNYLEuazG+IIsVIs1OjZFbz56dUmbvGwlRk2ewlksZyopG5ix4Nwb6wEvwndLVVETsYMYWGTW4DfI6zZ4pYoqhgzAStkbnHE4EOGsjeXnYuHqVW4PFx8L2dduHBseJzc8HIj81C08Wt1FVBAQEBAQEBAQQJd0s8S7rhYysJKxUQEBBa/QUHOsZHena/ulYrSktE2BYWMGBHQxkiarrJowQbFkIih2xw47ENHKvvLqy+HrVXndDoyuFr13ndDYcD0IaBYLvqqexdsdNAsbk1JzW2Uu1zK9Y3Y3LoCCity61zFbsolFnhVuyip5VXApdZlzzZ3IYYKhgHcVIja4cEkcrXMd8nLHOFqzFN6L8nDnKb035Oj4nO8QciPzULg4vOdRVQQEBAQEBAQEEKVo29pvn2sjJtpGUM91jKs6xUQEBBa7Qg55jIaNocb58ojJtoHYlXnv09CtKS5Zi3gL4jckhsrgBwZmnMvRy+yh6WT2UX+LqNJEGgLO7runNkAQXbeollpqELKdkIloOyEW0LhUIWXidUso6QFFRahoIQu53jMh9qvPA5nWAWGLP+OXNmvdy3vE20djRG9iGxWFtPtUXXBxeW6eqggICAgICAgIIFTmniO85j284LSPT0LGVhJWKiAgIKOQaBjFpyYHngMf94lgH907FaUly/FVUN2qVhPdslyiN/Jc1oB6Wld2BN6bO/KVf2zDoPZoC32de0FaFdU2ruyVNVbybcU1UU20q6obapqi4TJqivZCaq3lUVSWS8hqQpZLtDxo1jRShl+6lkaGjfs3uidWYDnC1Y02ptzc2aqiKLc3Q8T1M5tNHcaBb5EEMZ/vMg/2lcXF57pKqCAgICAgICAgjV0Be3uTZ7SHMJ3nDh4iLjnUkYqeqD7g9y9uZ7DpafSONYMme6BdAugXCDx8O4PbNG9jhlNe1zHtDskuY4WcA74J3wd4gFB877KdjFdgypdUwF7oSSRUNb3Of3zZRoYeFrrC+i4W2muYm8FNU0zeFKfZRhFw3PE/+ZtxfoeuiM1VHCHVGdr5Qzt2S4R/g2dLvWV6XVyXp1XKGdmyrCY/cYzzv9ZTpdXI6bVyhlGy3Cf8AAR9MnrJ0qrknTauUHsswn/p8fTJ6ydKq5HTauUK+y3Cn+nx9MnrJ0qrkdNq5QodluE/9Pj6ZPWTpVXI6bVyhjfsqwmf3GMfL9ZOlVcl6bVyhj9lOEv4KPpf6ydKq5HTauUMc+y/CQG5YWcbss2/vU6TV8GM5yueEIuAtj+EML1LJZQTCHDKme39E1t8zWAZnn+Rtyd+1y4aKq5mby5q65qm9T6V2N4JbSwsjaCLNAAJBNhc3cRpcXOc5x4XFYwxesqCAgICAgICAgII9VRxyWy23I0OBLXDU4ZwpYYO1pGiecDgymHytupZbna938RN9l6qWLna938RN9l6qWLna938RP9l6qWLqOwaT+8T/AGXqJYujSbH2uOVt84da2UDEDbguGZxxJYujP2HUrjd7GSHhfTUbidZMStkW+wmi8DB9EovykFPYTReBg+iUX5SWFfYTReAg+iUX5SWFfYTQ+Ag+iUX5SWD2FUPgIPolH+Ulg9hND4CD6JRflJYPYTQ+Ag+iUX5SWD2E0PgIPolF+UlhfFsPo2m7YomnhbT0jT0iO6WHrU2D44zdrbuGbKcS4gcAJ0DiCWEpUEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEH/2Q==", brand: "Apple" },
    { name: "Apple MacBook Air", model: "MacBook Air M1", price: "$1,000", description: "The thinnest and lightest MacBook with Apple's M1 chip.", image: "data:image/jpeg;base64,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", brand: "Apple" },
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

document.addEventListener("DOMContentLoaded", function () {
    const isAdmin = localStorage.getItem("isAdmin"); 
    const docSection = document.getElementById("restricted-doc");
    const featureMessage = document.getElementById("feature-message");
    const loginBtn = document.getElementById("admin-login-btn");

    // Check Admin Status
    if (isAdmin === "true") {
        docSection.classList.remove("hidden");
        featureMessage.classList.add("hidden");
    } else {
        docSection.classList.add("hidden");
        featureMessage.classList.remove("hidden");
    }

    // Admin Login Button (Click to Enable Access)
    loginBtn.addEventListener("click", function () {
        localStorage.setItem("isAdmin", "true"); 
        alert("Admin access granted! Reloading page...");
        location.reload(); 
    });
});

  const firebaseConfig = {
    apiKey: "AIzaSyBPliUV7jGBlup8IA1UfS7xZ35DOI471M8",
    authDomain: "fincom-tech.firebaseapp.com",
    projectId: "fincom-tech",
    storageBucket: "fincom-tech.firebasestorage.app",
    messagingSenderId: "719007057204",
    appId: "1:719007057204:web:e896b3e895a4dac70bd161",
    measurementId: "G-JZW2N9QWB7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const userRef = db.ref("activeUsers").push();
userRef.set({ active: true });

// Remove user on disconnect
userRef.onDisconnect().remove();
db.ref("activeUsers").on("value", (snapshot) => {
  const activeUsers = snapshot.numChildren();
  document.getElementById("user-count").innerText = `👥 Active Users: ${activeUsers}`;
});
