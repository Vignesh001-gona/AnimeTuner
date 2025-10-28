// Section switcher
function showSection(id) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Anime mood guide
function suggestAnime() {
  const mood = document.getElementById('moodSelect').value;
  const suggestion = {
    action: "Try 'Attack on Titan' or 'Demon Slayer'.",
    romance: "Try 'Your Name' or 'Horimiya'.",
    comedy: "Try 'KonoSuba' or 'Saiki K'.",
    sad: "Try 'A Silent Voice' or 'Clannad: After Story'.",
    fantasy: "Try 'Re:Zero' or 'Mushoku Tensei'."
  };
  document.getElementById('animeSuggestion').innerText = suggestion[mood] || "";
}

// Updates
const updates = [
  "🔥 Solo Leveling Season 2 - November 2025",
  "💫 Jujutsu Kaisen Movie - Coming December 2025",
  "🎶 Attack on Titan: Final Concert - February 2026"
];
document.getElementById("updatesList").innerHTML = updates.map(u => `<li>${u}</li>`).join("");

// Manga Guider
function suggestManga() {
  const anime = document.getElementById('mangaInput').value.toLowerCase();
  const mangaMatches = {
    "naruto": "You’d love 'Boruto' or 'Bleach'.",
    "demon slayer": "Read 'Kimetsu no Yaiba' (original manga).",
    "jujutsu kaisen": "Try 'Chainsaw Man'.",
    "attack on titan": "Try 'Code Geass' or the original manga."
  };
  document.getElementById('mangaResult').innerText =
    mangaMatches[anime] || "Sorry, no manga suggestions found 😅";
}

// Community chat
function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");
  if (input.value.trim() !== "") {
    chatBox.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
