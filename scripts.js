let selectEmoji = document.querySelectorAll(".emoji-feedback");
let btn = document.getElementById("btn");
let getContainer = document.querySelector(".container");
let selectedEmoji = " ";
selectEmoji.forEach((selectEmoji) => {
  selectEmoji.addEventListener("click", function (emoji) {
    removeActive();
    selectedEmoji = emoji.target.parentNode.innerText || emoji.target.innerText;
    emoji.target.classList.add("active");
    emoji.target.parentNode.classList.add("active");
  });
});
btn.addEventListener("click", function () {
  if (selectedEmoji !== "") {
    getContainer.innerHTML = `
      <strong>Thank you!</strong>
      <strong>Feedback:${selectedEmoji}</strong>
      <p>We'll use your feedback to improve our customer support.</p>
      `;
  }
});

function removeActive() {
  selectEmoji.forEach((selectEmoji) => {
    selectEmoji.classList.remove("active");
    selectEmoji.parentNode.classList.remove("active");
  });
}
