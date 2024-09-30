const container = document.querySelector("#img-container");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

const imgArray = [];
imgArray["birthday"] = "./images/birthday.jpg";
imgArray["clown"] = "./images/clown.jpg";
imgArray["rain"] = "./images/rain.jpg";
imgArray["read"] = "./images/read.jpg";
imgArray["shovel"] = "./images/shovel.jpg";
imgArray["work"] = "./images/work.jpg";
const titlesArray = [];
titlesArray["birthday"] = "Birthday Boy";
titlesArray["clown"] = "Clown";
titlesArray["rain"] = "It's raining!";
titlesArray["read"] = "Reading time!";
titlesArray["shovel"] = "Let's dig!";
titlesArray["work"] = "Working mode on";
const descriptionArray = [];
descriptionArray["birthday"] = "let's sing the happy birthday together!";
descriptionArray["clown"] = "Let me make you laugh!";
descriptionArray["rain"] = "Get your umbrella ASAP!";
descriptionArray["read"] = "Pick your favourite book";
descriptionArray["shovel"] = "Help me plant some flowers";
descriptionArray["work"] = "My final project is almost ready!";

for (const item in imgArray) {
  const img = document.createElement("img");
  img.src = imgArray[item];
  img.alt = item;
  img.classList.add("max-w-[300px]");
  img.addEventListener("click", () => {
    title.innerHTML = titlesArray[item];
    description.innerHTML = descriptionArray[item];
  });
  container.append(img);
}
