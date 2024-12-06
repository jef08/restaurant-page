import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const home_button = document.querySelector(".home-button");
const menu_button = document.querySelector(".menu-button");
const contact_button = document.querySelector(".contact-button");

home_button.addEventListener("click", () => {
    loadHome();
});
menu_button.addEventListener("click", () => {
    loadMenu();
});
contact_button.addEventListener("click", () => {
    loadContact();
});

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function startWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createMain());
    loadHome();
}

export default startWebsite;
