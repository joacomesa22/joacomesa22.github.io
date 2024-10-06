class Dog {
  constructor(name, breed, color, age, size, img) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
    this.size = size;
    this.img = img;
  }

  get item() {
    const section = document.createElement("section");
    section.classList.add("dog");

    const h3Name = document.createElement("h3");
    h3Name.innerHTML = this.name;

    const expCon = document.createElement("a");
    expCon.href = "#";
    expCon.innerHTML = "&#x2964";
    h3Name.append(expCon);
    expCon.addEventListener("click", () => {
      div.classList.toggle("hidden");
      div.classList.toggle("flex");
    });

    const div = document.createElement("div");
    div.classList.add("hidden");
    const textContainer = document.createElement("div");

    const pBreed = document.createElement("p");
    pBreed.innerHTML = this.breed;

    const pColor = document.createElement("p");
    pColor.innerHTML = this.color;

    const pAge = document.createElement("p");
    pAge.innerHTML = this.age;

    const pSize = document.createElement("p");
    pSize.innerHTML = this.size;

    const img = document.createElement("img");
    img.src = this.img;
    img.alt = this.name;

    textContainer.append(pBreed, pColor, pAge, pSize);
    section.append(h3Name, div);
    div.append(img, textContainer);
    div.style.display = "hidden";
    div.style.alignItems = "center";
    div.style.gap = "10px";
    return section;
  }
}

const dogArray = [];

const Dave = new Dog(
  "Bobby",
  "Pitbull",
  "Black",
  4,
  "S",
  "images/pitt-bull.jpg"
);

dogArray.push(
  new Dog("Coco", "York Shire", "Brown", "8", "M", "images/yorkie.jpg")
);
dogArray.push(
  new Dog("Sam", "Golden", "Yellow", 3, "M", "images/golden-retriever.jpg")
);
dogArray.push(Dave);

dogArray.forEach((dog) => {
  document.getElementById("dog-list").append(dog.item);
});
