// Safely select DOM elements
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessage = document.querySelector("#send-message");
const chatbotToggler = document.querySelector("#chatbot-toggler");
const chatbotContainer = document.querySelector("#chatbot-container");

// Toggle chatbot visibility
if (chatbotToggler && chatbotContainer) {
  chatbotToggler.addEventListener("click", () => {
    const isVisible = chatbotContainer.style.display === "block";
    chatbotContainer.style.display = isVisible ? "none" : "block";
  });
}

// Handle sending a message
if (sendMessage && chatBody && messageInput) {
  sendMessage.addEventListener("click", () => {
    const userMessage = messageInput.value.trim();
    if (!userMessage) return; // Do nothing if the input is empty

    // Create user message element
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user-message";
    userMessageElement.innerText = userMessage;

    // Add message to chat
    chatBody.appendChild(userMessageElement);
    messageInput.value = ""; // Clear input
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

    // Simulate bot response
    setTimeout(() => {
      const botMessageElement = document.createElement("div");
      botMessageElement.className = "message bot-message";
      botMessageElement.innerText = "Hello! How can I help you?";
      chatBody.appendChild(botMessageElement);
      chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    }, 1000);
  });
}
