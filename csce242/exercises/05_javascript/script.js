const navItems = document.querySelector("#nav-items");
const navToggle = document.querySelector("#toggle-nav");
const clickLink = document.querySelector("#click-link");
const ball = document.querySelector("#ball");
const ballToggle = document.querySelector("#txt-color");
const moveBall = document.querySelector("#move-right");
const showColorMessage = document.querySelector("#btn-show-color");
const colorInput = document.querySelector("#txt-enter-color");
const message = document.querySelector("#color-message");

navToggle.addEventListener("click", () => {
  navItems.classList.toggle("hidden-small");
});

clickLink.addEventListener("click", (e) => {
  e.preventDefault();
  alert("CLICKED");
});

ballToggle.addEventListener("input", (e) => {
  ball.style.backgroundColor = e.target.value;
});

let pos = 10;
moveBall.addEventListener("click", () => {
  pos = pos + 10;
  ball.style.transform = `translateX(${pos + "px"})`;
});

showColorMessage.addEventListener("click", () => {
  const color = colorInput.value;
  if (color === "red") {
    message.innerHTML = "Red is for anger!";
    message.style.backgroundColor = "red";
  } else if (color === "green") {
    message.innerHTML = "Green is for nature!";
    message.style.backgroundColor = "green";
  } else if (color === "blue") {
    message.innerHTML = "Blue is for the ocean!";
    message.style.backgroundColor = "blue";
  } else if (color === "yellow") {
    message.innerHTML = "Yellow is for the sun!";
    message.style.backgroundColor = "yellow";
  } else if (color === "orange") {
    message.innerHTML = "orange is for the fruit!";
    message.style.backgroundColor = "orange";
  } else {
    message.innerHTML = "Not a valid color :(";
  }
});

const donationInput = document.querySelector("#txt-enter-donation");
const thermometer = document.querySelector("#funds-thermometer");
const btnSubmitDonation = document.querySelector("#btn-submit-donation");
const errorMessage = document.querySelector("#error-donation");
const goalMessage = document.querySelector("#goal");

let totalDonations = 0;
btnSubmitDonation.addEventListener("click", () => {
  const donation = donationInput.value;
  errorMessage.innerHTML = "";
  if (isNaN(donation) || donation < 0 || donationInput.value.length < 1) {
    errorMessage.innerHTML = "Please enter a valid donation";
  }
  totalDonations = totalDonations + parseInt(donation);
  document
    .querySelector(":root")
    .style.setProperty("--funds", `${totalDonations}%`);
  if (totalDonations >= 100) {
    goalMessage.innerHTML = "WE REACHED THE GOAL!!!";
    setTimeout(() => {
      totalDonations = 0;
      document
        .querySelector(":root")
        .style.setProperty("--funds", `${totalDonations}%`);
      goalMessage.innerHTML = "";
    }, 1000);
  }
  donationInput.value = "";
});
