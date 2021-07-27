/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function convertToLb(kg) {
  return kg * 2.2046;
}
function convertToG(kg) {
  return kg / 0.001;
}
function convertToOz(kg) {
  return kg * 35.274;
}
function createDiv(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const kg = document.getElementById("search").value;
  const output = document.getElementById("output");
  output.innerHTML = "";
  output.appendChild(createDiv(convertToLb(kg).toFixed(3) + " lb"));
  output.appendChild(createDiv(convertToG(kg).toFixed(3) + " g"));
  output.appendChild(createDiv(convertToOz(kg).toFixed(3) + " oz"));
});
