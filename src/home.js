function viewHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const pizza_home_img = document.createElement("img");
    pizza_home_img.src = //source;
    pizza_home_img.alt = "PizzaHome";

    home.appendChild(createParagraph("Jazzy Pizza celebrates a long line of pizza-makers. Providing you with the best pizza in the country since 1890."))
    home.appendChild(pizza_home_img);
    home.appendChild(createParagraph("It's our mission to leave customers satisfied and happy after tasting the best pizza around."));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(viewHome());
}

export default loadHome;