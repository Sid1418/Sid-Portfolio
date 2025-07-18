// Dark mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.backgroundColor = "#0077b6";
toggleBtn.style.color = "#fff";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll animation
const faders = document.querySelectorAll("section, header");

faders.forEach(el => {
  el.classList.add("fade-in");
});

function onScroll() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll); // trigger on load
