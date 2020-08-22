import { productList } from "../script";

export class Board {
  constructor() {
    this.products = productList;
    this.display = "grid";
    this.card = "card";
    
    this.container = document.querySelector(".grid");
    this.incrBtn = document.querySelector('.increase');
    this.decrBtn = document.querySelector('.decrease');
    this.line = document.querySelector(".lineBtn");
    this.grid = document.querySelector(".gridBtn");
  
    // Init
    this.displayCards();
    this.incrBtn.addEventListener("click", (e) => this.changeSorting(e));
    this.decrBtn.addEventListener("click", (e) => this.changeSorting(e));
    this.line.addEventListener("click", (e) => this.changeProductsStyle(e));
    this.grid.addEventListener("click", (e) => this.changeProductsStyle(e));
  }
  
  displayCards() {
    // We clean board
    this.container.innerHTML = "";
    
    this.products.forEach((product) => {
      const card = product.createCard(product);
      this.container.appendChild(card);
    });
  }

  changeSorting(e) {
    this.incrBtn.disabled = true;
    this.decrBtn.disabled = false;

    const newProducts = [...this.products];
    if (e.target.id === "increase") {
      // On traite this.products avec un sort
      newProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      // Do things
      this.products = newProducts;

      // On reaffiche les produits dans le nouvel ordre
      this.displayCards();

    } else if (e.target.id === "decrease" ) {
      this.decrBtn.disabled = true;
      this.incrBtn.disabled = false;

      // Meme chose mais inversé

      newProducts.sort((a, b) => (a.price < b.price ? 1 : -1));

      this.products = newProducts;
      this.displayCards();
    }
  }

  changeProductsStyle(e) {
    const cardDisplay = document.querySelectorAll(".cards");
    const prices = document.querySelectorAll(".prices");
    const pricesHT = document.querySelectorAll(".pricesHT");
    const pricesTTC = document.querySelectorAll(".pricesTTC");
    if (e.target.id === "gridBtn") {
      this.card = "card";
      this.grid.disabled = true;
      this.line.disabled = false;
  
      this.container.classList.add("grid");
      this.container.classList.remove("line");
      
      cardDisplay.forEach((card) => {
        card.classList.remove("cardList");
        card.classList.add("card");
      });
    
      prices.forEach((price) => {
        price.classList.remove("priceLine");
        price.classList.add("priceGrid");
      });
    
      pricesHT.forEach((priceHT) => {
        priceHT.classList.add("priceHTGrid");
        priceHT.classList.remove("priceHTLine");
      });
    
      pricesTTC.forEach((priceTTC) => {
        priceTTC.classList.add("priceTTCGrid");
        priceTTC.classList.remove("priceTTCLine");
      });

    } else if (e.target.id === "lineBtn" ) {
      this.card = "cardList";
      this.line.disabled = true;
      this.grid.disabled = false;
  
      this.container.classList.add("line");
      this.container.classList.remove("grid");
    
      cardDisplay.forEach((card) => {
        card.classList.add("cardList");
        card.classList.remove("card");
      });
    
      prices.forEach((price) => {
        price.classList.remove("priceGrid");
        price.classList.add("priceLine");
      });
    
      pricesHT.forEach((priceHT) => {
        priceHT.classList.remove("priceHTGrid");
        priceHT.classList.add("priceHTLine");
      });
    
      pricesTTC.forEach((priceTTC) => {
        priceTTC.classList.remove("priceTTCGrid");
        priceTTC.classList.add("priceTTCLine");
      });
    }
  }
}