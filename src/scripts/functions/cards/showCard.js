import { showTitle } from "./showTitle";
import { showImg } from "./showImg";
import { showBtn } from "./showBtn";
import { showPrice } from "./showPrice";
import { showDescription } from "./showDescription";
import { uuid } from "uuidv4";

// Function that displays the product card
const showCard = (product) => {

    let card = document.createElement("div");
    let imgTitle = document.createElement("div");
    let descBtn = document.createElement("div");
    // Add className
    imgTitle.classList.add(`imgTitle-${product.uuid}`);
    imgTitle.id = uuid();
    descBtn.classList.add(`descBtn-${product.uuid}`);
    descBtn.classList.add("descBtnGrid");
    card.className = `card ${product.uuid}`;
    card.id = `${product.id}`;

    let board = document.querySelector(".grid");

    // Add (image and title) container and (description and button) container to card
    card.appendChild(imgTitle);
    card.appendChild(descBtn);
    board.append(card);

    // Execute functions
    showImg(product);
    showTitle(product);
    showPrice(product);
    showDescription(product);
    showBtn(product);
};

export {showCard};