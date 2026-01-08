// Simple click animation feedback
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.96)";
    setTimeout(() => btn.style.transform = "", 120);
  });
});
