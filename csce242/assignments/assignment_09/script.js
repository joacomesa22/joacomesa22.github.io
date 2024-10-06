class Bird {
  constructor(name, size, lifespan, food, habitat, description, img) {
    this.name = name;
    this.size = size;
    this.lifespan = lifespan;
    this.food = food;
    this.habitat = habitat;
    this.description = description;
    this.img = img;
  }

  get section() {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    h3.innerHTML = this.name;
    img.src = this.img;
    img.alt = this.name;
    img.classList.add("w-[200px]", "h-[200px]", "object-cover", "rounded-xl");
    section.classList.add(
      "border-2",
      "border-white",
      "rounded-xl",
      "p-4",
      "flex",
      "flex-col",
      "justify-between",
      "items-center",
      "gap-4",
      "hover:-translate-y-1",
      "duration-300",
      "cursor-pointer"
    );
    section.append(h3, img);
    section.addEventListener("click", () => {
      this.expandedSection;
    });
    return section;
  }

  get expandedSection() {
    const modalContainer = document.querySelector("#modal-container");
    modalContainer.innerHTML = "";
    const modal = `
      <div class="flex flex-col gap-8">
        <div>
          <h2 class="font-bold text-2xl">${this.name}</h2>
          <p>
            ${this.description}
          </p>
        </div>
        <div>
          <div>
            <p class="font-bold">Size:</p>
            <span id="size"> ${this.size}</span>
          </div>
          <div>
            <p class="font-bold">Lifespan:</p>
            <span id="lifespan">${this.lifespan}</span>
          </div>
          <div>
            <p class="font-bold">Food:</p>
            <span id="food">${this.food}</span>
          </div>
          <div>
            <p class="font-bold">Habitat:</p>
            <span id="habitat">${this.habitat}</span>
          </div>
        </div>
      </div>
      <img
        src=${this.img}
        alt=${this.name}
        class="max-w-[400px] rounded-xl"
      />
      <span class="absolute top-4 right-10 cursor-pointer" id="close-modal">&#10006</span>
`;
    modalContainer.innerHTML = modal;
    const closeModal = document.querySelector("#close-modal");
    closeModal.addEventListener("click", () => {
      modalContainer.classList.toggle("hidden");
      modalContainer.classList.toggle("flex");
    });
    modalContainer.classList.toggle("hidden");
    modalContainer.classList.toggle("flex");
  }
}

const birdArray = [];

birdArray.push(
  new Bird(
    "Eagle",
    "80cm",
    "8 years",
    "Rats",
    "Forest",
    "An eagle is a large bird of prey with powerful talons, known for its sharp vision and ability to soar at great heights. It symbolizes strength and freedom in many cultures.",
    "./images/eagle.jpg"
  )
);
birdArray.push(
  new Bird(
    "Duck",
    "60cm",
    "4 years",
    "Fish",
    "Lake",
    "A duck is a medium-sized waterfowl with a broad, flat bill, known for its quacking sound and ability to swim and fly. Ducks are often found in lakes, rivers, and ponds.",
    "./images/duck.jpeg"
  )
);
birdArray.push(
  new Bird(
    "Crow",
    "30cm",
    "3 years",
    "Seeds",
    "Swamp",
    "A crow is a medium-sized black bird known for its intelligence, adaptability, and loud cawing. It often thrives in both urban and rural areas and is recognized for its problem-solving abilities.",
    "./images/crow.jpg"
  )
);
birdArray.push(
  new Bird(
    "Owl",
    "20",
    "12 years",
    "Mice",
    "Fields",
    "An owl is a nocturnal bird of prey with a distinctive round face, large eyes, and excellent night vision. Known for their silent flight and sharp talons, owls primarily hunt small mammals, birds, and insects.",
    "./images/owl.jpeg"
  )
);
birdArray.forEach((item) => {
  document.querySelector("#birds-container").append(item.section);
});
