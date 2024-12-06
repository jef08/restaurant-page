function viewMenu() {
    const menu = document.createElement('div');
    menu.classList.add("menu-div");

    menu.appendChild(
        setMenuItem(
            "Margherita",
            "Mozzarella, tomato sauce, basil leaves"
        )
    );
    menu.appendChild(
        setMenuItem(
            "Pizza alla Bufala",
            "Buffalo Mozzarella, tomato sauce, basil leaves"
        )
    );
    menu.appendChild(
        setMenuItem(
            "Proscuitto",
            "Ham, mozzarella, tomato sauce, basil leaves"
        )
    );
    menu.appendChild(
        setMenuItem(
            "Quattro Formaggi",
            "Provolone, mozzarella, parmigiano, fontina, tomato sauce"
        )
    );
    menu.appendChild(
        setMenuItem(
            "Frutti di Mare",
            "Mussels, squid, shrimp, garlic, mozarella, tomato"
        )
    )
}

function setMenuItem(item, description) {
    const menu_item = document.createElement("div");
    menu_item.classList.add("menu-item-div");

    const item_name = document.createElement("h2");
    item_name.textContent = item;

    const item_description = document.createElement("p");
    item_description.textContent = description;
    
    //const item_image = document.createElement("img");
    //item_image.src = //source//;
    //item_image.alt = `${item}`;

    //menu_item.appendChild(item_image);
    menu_item.appendChild(item_name);
    menu_item.appenChild(item_description);

    return menu_item;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(viewMenu());
}

export default loadMenu;