const getData = async () => {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

const showBrewery = async () => {
  const breweries = await getData();
  const breweriesSection = document.querySelector("#breweries-section");
  breweries.forEach((item) => {
    breweriesSection.append(createBreweryCard(item));
  });
};

const createBreweryCard = (brew) => {
  const section = document.createElement("section");
  section.classList.add("brewery");

  const a = document.createElement("a");
  a.href = brew.website_url;
  const h3 = document.createElement("h3");
  h3.textContent = brew.name;
  a.append(h3);
  section.append(a);

  const p = document.createElement("p");
  p.textContent = brew.brewery_type;
  section.append(p);

  section.append(getLocation(brew.latitude, brew.longitude));

  return section;
};

const getLocation = (lat, long) => {
  const iframe = document.createElement("iframe");
  iframe.src = `https://maps.google.com/maps?q=${lat},${long}&t=&z=15&ie=UTF8&iwloc=&&output=embed`;
  iframe.width = "300";
  iframe.height = "300";
  return iframe;
};

getData();
showBrewery();
