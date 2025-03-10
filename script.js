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

