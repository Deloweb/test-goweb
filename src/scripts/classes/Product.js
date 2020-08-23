import { board } from "../index";
import {
  createBtn,
  createPrice,
  createDescription,
  createImg,
  createTitle,
} from "../functions/cards/createCardElements";
import { v4 as uuidv4 } from "uuid";

export class Product {
  // Initialise product
  constructor(name, img, price, description) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.description = description;
    this.id = uuidv4();
    this.container = document.createElement("div");
  }

  // Function that creates a product card
  createCard(product) {
    // Clean board
    this.container.innerHTML = "";
    // Create containers inside the card
    let imgTitle = document.createElement("div");
    let descBtn = document.createElement("div");
    // Add className and id
    imgTitle.classList.add(`imgTitle-${product.id}`);
    descBtn.classList.add(`descBtn-${product.id}`);
    descBtn.classList.add("descBtns");
    this.container.id = `product${this.id}`;
    // If a new board has been generated when sorting by price,
    // add "card" or "cardList" to the container to display the
    // new generated board in grid or in line
    if (board) {
      this.container.className = `cards ${board.card} ${product.id}`;
      descBtn.classList.add(`descBtn--${board.display}`);
    } else {
      this.container.className = `cards card ${product.id}`;
      descBtn.classList.add("descBtn--grid");
    }

    // Add the elements containers inside the card
    this.container.appendChild(imgTitle);
    this.container.appendChild(descBtn);
    // Execute functions to create the cards elements
    createImg(product);
    createTitle(product);
    createPrice(product, board);
    createDescription(product);
    createBtn(product);

    return this.container;
  }
}
