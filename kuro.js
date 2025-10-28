const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const usernameInput = document.getElementById("username");
const postsContainer = document.getElementById("posts");

// Load saved posts from localStorage
window.onload = () => {
  const savedPosts = JSON.parse(localStorage.getItem("animePosts")) || [];
  savedPosts.forEach(post => addPostToDOM(post.username, post.text));
};

// Add a new post
postBtn.addEventListener("click", () => {
  const text = postInput.value.trim();
  const username = usernameInput.value.trim() || "Anonymous";

  if (!text) return alert("Type something first, senpai~ ✨");

  addPostToDOM(username, text);

  // Save to localStorage
  const savedPosts = JSON.parse(localStorage.getItem("animePosts")) || [];
  savedPosts.push({ username, text });
  localStorage.setItem("animePosts", JSON.stringify(savedPosts));

  // Clear input
  postInput.value = "";
});

// Function to add post to the page
function addPostToDOM(username, text) {
  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `<strong>${username}</strong><p>${text}</p>`;
  postsContainer.prepend(post);
}
