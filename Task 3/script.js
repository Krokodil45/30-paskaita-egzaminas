/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

function createUserCard(avatarUrl, login) {
  const div = document.createElement("div");
  div.className = "user-info";
  const img = document.createElement("img");
  img.src = avatarUrl;
  div.appendChild(img);
  const loginElement = document.createElement("p");
  loginElement.innerText = login;
  div.appendChild(loginElement);
  return div;
}

document.getElementById("btn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "";
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const { login, avatar_url: avatarUrl } = user;
        const userCard = createUserCard(avatarUrl, login);
        output.appendChild(userCard);
      }
    });
});
