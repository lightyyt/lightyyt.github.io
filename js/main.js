function redir(site) {
  let sites = [
    "/",
    "https://youtube.com/@LightyCode",
    "https://bsky.app/profile/lightyyt.bsky.social",
    "https://discord.gg/dzmap8Sgsv",
    "https://github.com/lightyyt/Chuckle",
    "https://github.com/trixune/trixune"
  ]
  let red = sites[site];
  window.location = red;
}
// Theming

function darkmodeText(isDark) {
  // Set Dark mode element text
  document.getElementById("darkmode").innerHTML = isDark ? "Dark Mode 🌙" : "Light Mode ☀️";
}
// Toggle and remember theme
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") == "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
  
  darkmodeText(isDark);
}

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  
  html.classList.add("no-transition"); // Disable transitions
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  
  html.classList.remove("no-transition")
  
  darkmodeText(saved == "light");
});

let menuOpen = false;
function hamburger() {
  menuOpen = !menuOpen;
  document.getElementById("menu").style.width = menuOpen ? "13rem" : "0rem";
}


function intern(web) {
  window.location = web;
}