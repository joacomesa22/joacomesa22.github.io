const container = document.querySelector("#cards-container");

const getData = async () => {
  try {
    const data = await fetch(
      "https://portiaportia.github.io/json/ice-creams.json"
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

const showData = async () => {
  const data = await getData();
  data.forEach((item) => {
    container.innerHTML += createCard(item);
  });
};

const createCard = (item) => {
  const card = ` <div class="border-2 relative overflow-hidden group w-full">
        <img
          src="https://portiaportia.github.io/json/images/ice-creams/${item.image}"
          alt="${item.name}"
          class="w-full"
        />
        <div
          class="bg-slate-500 text-white text-center p-4 absolute w-full -bottom-[60px] group-hover:bottom-0 duration-300"
        >
          <p>${item.name}</p>
        </div>
      </div>`;
  return card;
};

showData();
