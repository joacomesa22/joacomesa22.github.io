const doStuff = () => {
  alert("Hello!");
};

const myButton = document.getElementById("my-button");
const goodBye = document.getElementById("good-bye");
const hideColumn = document.getElementById("hide-column");
const animateButton = document.getElementById("animate");
const stopAnimation = document.getElementById("stop-animation");
const stuff = document.getElementById("stuff");
const inputName = document.getElementById("txt-first-name");
const result = document.getElementById("result");

myButton.onclick = () => {
  stuff.classList.toggle("special");
};

goodBye.onclick = () => {
  stuff.innerHTML = "GOOD BYE!";
  stuff.classList.remove("special");
};

hideColumn.onclick = () => {
  stuff.classList.add("hide");
};

animateButton.onclick = () => {
  stuff.classList.add("animation");
};
stopAnimation.onclick = () => {
  stuff.classList.remove("animation");
};

inputName.onkeyup = (e) => {
  result.innerHTML = e.target.value;
};
