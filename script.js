const input = document.querySelector(".input-box");
const result = document.querySelector(".result-box");
const diceImages = document.querySelector(".dice-faces");

function displayFaces() {
  const values = [];
  const images = [];
  if (input.value < 1) {
    alert("Please enter whole number!");
    return;
  }
  for (let i = 0; i < input.value; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="assets/dice-six-faces-${value}.png">`);
  }
  result.textContent = `Dice: ${values.join(",")}`;
  diceImages.innerHTML = images.join(" ");
}
