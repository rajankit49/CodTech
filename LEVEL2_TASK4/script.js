// Select button
const btn = document.getElementById("colorBtn");

// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add event listener
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});
