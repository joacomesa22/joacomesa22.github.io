const getShoes = async () => {
  try {
    const shoes = await fetch("https://portiaportia.github.io/json/shoes.json");
    const data = await shoes.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const showShoes = async () => {
  const shoes = await getShoes();
  shoes.forEach((shoe) => {
    document.getElementById("shoes-section").append(getShoeSection(shoe));
  });
};

const getShoeSection = (shoe) => {
  const section = document.createElement("section");

  const h3 = document.createElement("h3");
  h3.innerHTML = `${shoe.name} - ${shoe.brand}`;
  section.append(h3);

  const pPrice = document.createElement("p");
  pPrice.innerHTML = `$${shoe.price}`;
  section.append(pPrice);

  const pDesc = document.createElement("p");
  pDesc.innerHTML = shoe.description;
  section.append(pDesc);

  const ul = document.createElement("ul");
  shoe.reviews.forEach((review) => {
    const li = document.createElement("li");
    li.innerHTML = review;
    ul.append(li);
  });

  section.append(ul);
  return section;
};

getShoes();
showShoes();
