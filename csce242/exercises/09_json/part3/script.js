const coctailContainer = document.querySelector("#coctail-container");
const searchBar = document.querySelector("#searchBar");
const resetBtn = document.querySelector("#reset");

const getData = async () => {
  try {
    const data = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    );
    const res = await data.json();
    return res.drinks;
  } catch (error) {
    console.error(error);
  }
};

const showData = async () => {
  const data = await getData();

  data.forEach((item) => {
    coctailContainer.innerHTML += createCard(item);
  });
};

const createCard = (item) => {
  return ` <div class="border-2 relative overflow-hidden group w-full">
        <img
          src="${item.strDrinkThumb}"
          alt="${item.strDrink}"
          class="w-full"
        />
        <div
          class="bgGradient text-black font-bold text-center p-4 absolute w-full -bottom-[80px] group-hover:bottom-0 duration-300"
        >
          <p>${item.strDrink}</p>
        </div>
      </div>`;
};

const searchByName = async (input) => {
  coctailContainer.innerHTML = "";
  if (input !== "") {
    try {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
      );
      const res = await data.json();
      if (res.drinks !== null) {
        res.drinks.forEach((item) => {
          coctailContainer.innerHTML += createCard(item);
        });
      } else {
        coctailContainer.innerHTML = `
        <p class="text-red-500">No results. Please try again</p>
    `;
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    showData();
  }
};

searchBar.addEventListener("input", (e) => {
  searchByName(e.target.value);
});

const reset = () => {
  searchBar.value = "";
  coctailContainer.innerHTML = "";
  showData();
};

resetBtn.addEventListener("click", reset);

showData();
