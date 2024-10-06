const slide = () => {
  let currentFruit = document.querySelector("#slideshow :not(.hidden)");

  let nextFruit = currentFruit.nextElementSibling;

  if (!nextFruit) nextFruit = document.querySelector("#slideshow :first-child");

  currentFruit.classList.add("hidden");
  nextFruit.classList.remove("hidden");
};
setInterval(slide, 1000);

const gallery = document.querySelector(".gallery");
const changeBg = () => {
  let currentSection = document.querySelector(".items section.highlighted");
  if (currentSection == null) {
    document.querySelector(".items section").classList.add("highlighted");
    return;
  }
  let nextSection = currentSection.nextElementSibling;
  if (nextSection == null) {
    nextSection = document.querySelector(".items section");
  }
  currentSection.classList.remove("highlighted");
  nextSection.classList.add("highlighted");
};
setInterval(changeBg, 1000);
