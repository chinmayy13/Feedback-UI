// const ratings = document.querySelectorAll(".rating");
// const ratingsContainer = document.querySelector(".ratings-container");
// const sendBtn = document.querySelector("#send");
// const panel = document.querySelector("#panel");

// let selectedRating = "Satisfied";

// ratingsContainer.addEventListener("click", (e) => {
//   //   console.log(e.target);
//   if (e.target.parentNode.classList.contains("rating")) {
//     // console.log(e.target);
//     removeActive();
//     e.target.parentNode.classList.add("active");
//     selectedRating = e.target.nextElementSibling.innerHTML;
//     console.log(selectedRating);
//   }
// });

// sendBtn.addEventListener("click", (e) => {
//   panel.innerHTML = `
//     <i class = "fas fa-heart"></i>
//     <strong>Thank You!</strong>
//     <br>
//     <strong> Feedback: ${selectedRating}</strong>
//     <p> We'll use your feedback to improve our customer support</p>
//     `;
// });

// function removeActive() {
//   for (let i = 0; i < ratings.length; i++) {
//     ratings[i].classList.remove("active");
//   }
// }

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  const rating = e.target.closest(".rating");
  if (rating) {
    removeActive();
    rating.classList.add("active");

    const label = rating.querySelector("small");
    if (label) {
      selectedRating = label.innerText;
      console.log(selectedRating);
    }
  }
});

sendBtn.addEventListener("click", () => {
  let colorClass = "";

  if (selectedRating === "Unhappy") {
    colorClass = "unhappy";
  } else if (selectedRating === "Neutral") {
    colorClass = "neutral";
  } else if (selectedRating === "Satisfied") {
    colorClass = "okay";
  }

  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: <span class="${colorClass}">${selectedRating}</span></strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove("active"));
}
