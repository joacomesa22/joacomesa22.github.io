const counterCard = document.querySelector("#counter-card");
const count = document.querySelector("#count");
const imageCard = document.querySelector("#random-image");
const scroller = document.querySelector("#scroller");
const square = document.querySelector("#square");

counterCard.addEventListener("click", () => {
  count.innerHTML = parseInt(count.innerHTML) + 1;
});

imageCard.addEventListener("click", () => {
  window.location.reload();
});

scroller.addEventListener("input", (e) => {
  let x = e.target.value;
  square.style.left = `${x}px`;
});
