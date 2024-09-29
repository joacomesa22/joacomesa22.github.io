const userInput = document.querySelector("#stars");
const drawBtn = document.querySelector("#draw-btn");
const error = document.querySelector("#error-msg");
const sky = document.querySelector("#sky");
const starNumber = document.querySelector("#star-num");

const getRandomCoords = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

drawBtn.addEventListener("click", () => {
  if (userInput.value <= 0) {
    error.innerHTML = "Invalid input";
  } else {
    error.innerHTML = "";
    for (let i = 0; i < userInput.value; i++) {
      const star = document.createElement("img");
      star.src = "./images/star.png";
      star.id = i;
      star.classList.add("w-[20px]", "absolute");
      star.style.top = `${getRandomCoords(1, 300)}px`;
      star.style.left = `${getRandomCoords(1, 300)}px`;
      star.onclick = () => {
        starNumber.innerHTML = `Star number ${i}`;
      };
      sky.appendChild(star);
    }
  }
});
