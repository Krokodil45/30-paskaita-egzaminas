/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkapi kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

function createBrandCard(brand, models) {
  const div = document.createElement("div");
  div.className = "brand-card";
  const carBrand = document.createElement("h2");
  carBrand.innerText = brand;
  div.appendChild(carBrand);

  const list = document.createElement("ul");
  div.appendChild(list);

  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    const modelList = document.createElement("li");
    modelList.innerText = model;
    list.appendChild(modelList);
  }
  return div;
}
const output = document.getElementById("output");
fetch(ENDPOINT)
  .then((res) => res.json())
  .then((brands) => {
    for (let i = 0; i < brands.length; i++) {
      const brand = brands[i];
      const { brand: brandName, models } = brand;
      const userCard = createBrandCard(brandName, models);
      output.appendChild(userCard);
    }
  });
