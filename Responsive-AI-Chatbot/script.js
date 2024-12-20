// Select DOM elements with null checks
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessage = document.querySelector("#send-message");
const fileInput = document.querySelector("#file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const fileCancelButton = fileUploadWrapper?.querySelector("#file-cancel");
const chatbotToggler = document.querySelector("#chatbot-toggler");
const closeChatbot = document.querySelector("#close-chatbot");

// API setup
const API_KEY = "AIzaSyCQXdM8mF1o7j7KlC2ue75X37ZIU_cDTVk";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

// User message and file data
const userData = {
  message: null,
  file: {
    data: null,
    mime_type: null,
  },
};

// Chat history
const chatHistory = [];
const initialInputHeight = messageInput?.scrollHeight || 0;

// Create a message element
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// Generate bot response using API
const generateBotResponse = async (incomingMessageDiv) => {
  const messageElement = incomingMessageDiv.querySelector(".message-text");
  chatHistory.push({
    role: "user",
    parts: [{ text: userData.message }, ...(userData.file.data ? [{ inline_data: userData.file }] : [])],
  });

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: chatHistory }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    const botResponseText = data.candidates[0].content.parts[0].text.trim();
    messageElement.innerText = botResponseText;
    chatHistory.push({ role: "model", parts: [{ text: botResponseText }] });
  } catch (error) {
    console.error(error);
    messageElement.innerText = "Sorry, something went wrong!";
    messageElement.style.color = "red";
  } finally {
    userData.file = {};
    incomingMessageDiv.classList.remove("thinking");
    chatBody?.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }
};

// Handle outgoing user messages
const handleOutgoingMessage = (e) => {
  e.preventDefault();
  if (!messageInput?.value.trim()) return;

  userData.message = messageInput.value.trim();
  messageInput.value = "";
  messageInput.dispatchEvent(new Event("input"));
  fileUploadWrapper?.classList.remove("file-uploaded");

  const messageContent = `<div class="message-text"></div>
                          ${userData.file.data ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment" />` : ""}`;
  const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
  outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;
  chatBody?.appendChild(outgoingMessageDiv);
  chatBody?.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

  setTimeout(() => {
    const messageContent = `
      <img class="bot-avatar" src="robotic.png" alt="Chatbot Logo" width="50" height="50">
      <div class="message-text">
        <div class="thinking-indicator">
          <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        </div>
      </div>`;
    const incomingMessageDiv = createMessageElement(messageContent, "bot-message", "thinking");
    chatBody?.appendChild(incomingMessageDiv);
    chatBody?.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    generateBotResponse(incomingMessageDiv);
  }, 600);
};

// Adjust input field height
messageInput?.addEventListener("input", () => {
  messageInput.style.height = `${initialInputHeight}px`;
  messageInput.style.height = `${messageInput.scrollHeight}px`;
  document.querySelector(".chat-form").style.borderRadius = messageInput.scrollHeight > initialInputHeight ? "15px" : "32px";
});

// Send message on Enter key
messageInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) handleOutgoingMessage(e);
});

// File input change handling
fileInput?.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    fileInput.value = "";
    fileUploadWrapper.querySelector("img").src = e.target.result;
    fileUploadWrapper.classList.add("file-uploaded");
    userData.file = { data: e.target.result.split(",")[1], mime_type: file.type };
  };
  reader.readAsDataURL(file);
});

// Cancel file upload
fileCancelButton?.addEventListener("click", () => {
  userData.file = {};
  fileUploadWrapper.classList.remove("file-uploaded");
});

// Toggle chatbot visibility
chatbotToggler?.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
closeChatbot?.addEventListener("click", () => document.body.classList.remove("show-chatbot"));

// Initialize emoji picker (optional)
try {
  const picker = new EmojiMart.Picker({
    theme: "light",
    onEmojiSelect: (emoji) => {
      const { selectionStart: start, selectionEnd: end } = messageInput;
      messageInput.setRangeText(emoji.native, start, end, "end");
      messageInput.focus();
    },
  });
  document.querySelector(".chat-form")?.appendChild(picker);
} catch (error) {
  console.warn("Emoji picker not initialized:", error);
}
sendMessage?.addEventListener("click", (e) => handleOutgoingMessage(e));
