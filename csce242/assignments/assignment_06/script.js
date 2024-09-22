const colorSlider = document.querySelector("#colorSlider");
const pictureChooser = document.querySelector("#pictureChooser");
const btnEx1 = document.querySelector("#ex1");
const btnEx2 = document.querySelector("#ex2");
const toggler = document.querySelector("#toggleBtn");
const btnArrowDown = document.querySelector("#btnArrowDown");
const btnArrowUp = document.querySelector("#btnArrowUp");
const navigation = document.querySelector("#navigation");
const slider = document.querySelector("#slider");
const sliderMessage = document.querySelector("#sliderMessage");
const picture = document.querySelector("#picture");
const btnsSize = document.querySelectorAll(".btnSize");

btnEx1.addEventListener("click", () => {
  colorSlider.classList.add("flex");
  colorSlider.classList.remove("hidden");
  pictureChooser.classList.add("hidden");
});
btnEx2.addEventListener("click", () => {
  pictureChooser.classList.add("flex");
  pictureChooser.classList.remove("hidden");
  colorSlider.classList.add("hidden");
});

toggler.addEventListener("click", () => {
  btnArrowDown.classList.toggle("flex");
  btnArrowDown.classList.toggle("hidden");
  btnArrowUp.classList.toggle("flex");
  btnArrowUp.classList.toggle("hidden");
  navigation.classList.toggle("hidden");
  navigation.classList.toggle("flex");
});

slider.addEventListener("input", (e) => {
  document
    .querySelector(":root")
    .style.setProperty("--sliderValue", `${e.target.value}`);
  if (e.target.value < 40) {
    sliderMessage.innerHTML = "";
  }
  if (e.target.value >= 50 && e.target.value <= 149) {
    sliderMessage.innerHTML = "Getting Hot!";
  } else if (e.target.value >= 150 && e.target.value <= 239) {
    sliderMessage.innerHTML = "Súper Hot!";
  } else if (e.target.value >= 240) {
    sliderMessage.innerHTML = "FIRE! FIRE! FIRE!";
  }
});

function pictureSize(size) {
  if (size === "L") {
    picture.src = "https://picsum.photos/500";
  } else if (size === "M") {
    picture.src = "https://picsum.photos/200";
  } else if (size === "S") {
    picture.src = "https://picsum.photos/75";
  }
}

btnsSize.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(picture.src);
    pictureSize(e.target.getAttribute("data-size"));
  });
});
