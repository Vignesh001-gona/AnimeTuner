// Example update data (can later be fetched from API)
const updates = [
  {
    title: "Attack on Titan: Final Episode Release",
    desc: "The long-awaited final episode of Attack on Titan will premiere worldwide on November 4th, 2025!",
    tag: "Anime News"
  },
  {
    title: "Jujutsu Kaisen Season 3 Confirmed!",
    desc: "MAPPA announced Season 3 will adapt the ‘Culling Game Arc’. Expected in Summer 2026.",
    tag: "Upcoming"
  },
  {
    title: "New Naruto Spin-off Manga",
    desc: "Boruto: Two Blue Vortex is gaining popularity, featuring next-gen shinobi battles and mysterious powers.",
    tag: "Manga Update"
  },
  {
    title: "Spy x Family Movie Trailer Drops!",
    desc: "Anya returns to the big screen with a new adventure. Movie titled 'Code: Family Mission' coming soon!",
    tag: "Trending"
  },
  {
    title: "Chainsaw Man Season 2 Rumors",
    desc: "Fans spotted production teasers hinting at Chainsaw Man Season 2. Studio MAPPA stays silent... for now!",
    tag: "Rumor"
  }
];

const updateList = document.getElementById("updateList");

// Add each update card to the page
updates.forEach(update => {
  const card = document.createElement("div");
  card.classList.add("update-card");
  card.innerHTML = `
    <h3>${update.title}</h3>
    <p>${update.desc}</p>
    <span>${update.tag}</span>
  `;
  updateList.appendChild(card);
});
