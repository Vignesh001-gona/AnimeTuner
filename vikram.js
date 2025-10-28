let progress = 0;
const progressBar = document.getElementById("progress-bar");
const loadingText = document.getElementById("loading-text");

const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
    // Once loading completes, redirect to main app
    window.location.href = "one.html"; // 👉 change this to your main page file name
  } else {
    progress += Math.floor(Math.random() * 10) + 5;
    if (progress > 100) progress = 100;
    progressBar.style.width = progress + "%";
    loadingText.textContent = `Loading... ${progress}%`;
  }
}, 300);
