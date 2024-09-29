const userInput = document.querySelector("#stars");
const drawBtn = document.querySelector("#draw-btn");
const error = document.querySelector("#errr-msg");
const sky = document.querySelector("#sky");

drawBtn.addEventListener("click", () => {
  // if (userInput.value <= 0) {
  //   error.innerHTML = "Invalid input";
  // }
  console.log(userInput.value);
});
