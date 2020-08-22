import { v4 as uuidv4 } from "uuid";
import {
  showBtn,
  showPrice,
  showDescription,
  showImg,
  showTitle,
} from "../functions/cards/createCardElements";

import { board } from "../index";

export class Product {
  constructor(name, img, price, description) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.description = description;
    this.id = uuidv4();
    this.container = document.createElement("div");
  }

  createCard(product) {
    this.container.innerHTML = "";
    this.container.id = `product${this.id}`;
    let imgTitle = document.createElement("div");
    let descBtn = document.createElement("div");
    // Add className
    imgTitle.classList.add(`imgTitle-${product.id}`);
    descBtn.classList.add(`descBtn-${product.id}`);
    descBtn.classList.add("descBtnGrid");
    if (board) {
      this.container.className = `cards ${board.card} ${product.id}`;
    } else {
       this.container.className = `cards card ${product.id}`;
     }


    this.container.appendChild(imgTitle);
    this.container.appendChild(descBtn);
    showImg(product);
    showTitle(product);
    showPrice(product);
    showDescription(product);
    showBtn(product);
    
    return this.container;
    
  }
}
