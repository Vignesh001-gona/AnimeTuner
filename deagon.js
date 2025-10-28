// Select elements
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Add message to chat
function addMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(sender === "ai" ? "bot-msg" : "user-msg");
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Send message
async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";

  try {
    const response = await fetch("http://localhost:3000/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    const reply = data.reply || "AI Senpai didn’t respond...";
    addMessage(reply, "ai");

  } catch (err) {
    console.error("❌ Error:", err);
    addMessage("⚠️ Could not reach the AI backend.", "ai");
  }
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
