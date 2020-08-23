import { productList } from "../script";

export class Board {
  constructor() {
    this.products = productList;
    this.display = "grid";
    this.card = "card";

    // Fetch elements
    this.container = document.querySelector(".grid");
    this.incrBtn = document.querySelector("#increase");
    this.decrBtn = document.querySelector("#decrease");
    this.line = document.querySelector(".lineBtn");
    this.grid = document.querySelector(".gridBtn");

    // Init
    this.displayCards();
    this.incrBtn.addEventListener("click", (e) => this.changeSorting(e));
    this.decrBtn.addEventListener("click", (e) => this.changeSorting(e));
    this.line.addEventListener("click", (e) => this.changeProductsStyle(e));
    this.grid.addEventListener("click", (e) => this.changeProductsStyle(e));
  }

  // Function that displays the cards inside the board
  displayCards() {
    //  Create a card for each products
    this.products.forEach((product) => {
      const card = product.createCard(product);
      this.container.appendChild(card);
    });
  }

  // Function that sorts the products by increasing
  // or decreasing price
  changeSorting(e) {
    this.incrBtn.disabled = true;
    this.decrBtn.disabled = false;

    // Cloning products array into newProducts
    const newProducts = [...this.products];
    // If increase btn has been clicked...
    if (e.target.id === "increase") {
      // ... we sort newProduct by increasing price
      newProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      // Reasigning this.product with the sorted array
      this.products = newProducts;
      // We call the function that displays the cards with the
      // sorted array
      this.displayCards();
    }
    // else if decrease btn has been clicked
    else if (e.target.id === "decrease") {
      this.decrBtn.disabled = true;
      this.incrBtn.disabled = false;
      // Same but by decreasing price
      newProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
      this.products = newProducts;
      this.displayCards();
    }
  }

  // Function that changes style of the cards
  // Displays the board in grid or in lines
  changeProductsStyle(e) {
    // Fetch elements
    const cardDisplay = document.querySelectorAll(".cards");
    const prices = document.querySelectorAll(".prices");
    const pricesHT = document.querySelectorAll(".pricesHT");
    const pricesTTC = document.querySelectorAll(".pricesTTC");
    const descBtns = document.querySelectorAll(".descBtns");
    // If grid btn has been clicked
    if (e.target.id === "gridBtn") {
      // Change the "state" of this.card
      this.card = "card";
      this.display = "grid";
      // Disable clicked btn and set the background color in grey
      this.grid.disabled = true;
      this.line.disabled = false;
      this.grid.classList.add("disabled");
      this.line.classList.remove("disabled");
      // Changes all line elements into grid
      this.container.classList.add("grid");
      this.container.classList.remove("line");

      cardDisplay.forEach((card) => {
        card.classList.remove("cardList");
        card.classList.add("card");
      });

      prices.forEach((price) => {
        price.classList.remove("price__line");
        price.classList.add("price__grid");
      });

      pricesHT.forEach((priceHT) => {
        priceHT.classList.add("price__grid--HT");
        priceHT.classList.remove("price__line--HT");
      });

      pricesTTC.forEach((priceTTC) => {
        priceTTC.classList.add("price__grid--TTC");
        priceTTC.classList.remove("price__line--TTC");
      });

      descBtns.forEach((descBtn) => {
        descBtn.classList.add("descBtn--grid");
        descBtn.classList.remove("descBtn--line");
      });
    }
    // If line btn has been clicked
    else if (e.target.id === "lineBtn") {
      // Same but for line
      this.card = "cardList";
      this.display = "line";
      this.line.disabled = true;
      this.grid.disabled = false;

      this.line.classList.add("disabled");
      this.grid.classList.remove("disabled");

      this.container.classList.add("line");
      this.container.classList.remove("grid");

      cardDisplay.forEach((card) => {
        card.classList.add("cardList");
        card.classList.remove("card");
      });

      prices.forEach((price) => {
        price.classList.remove("price__grid");
        price.classList.add("price__line");
      });

      pricesHT.forEach((priceHT) => {
        priceHT.classList.remove("price__grid--HT");
        priceHT.classList.add("price__line--HT");
      });

      pricesTTC.forEach((priceTTC) => {
        priceTTC.classList.remove("price__grid--TTC");
        priceTTC.classList.add("price__line--TTC");
      });

      descBtns.forEach((descBtn) => {
        descBtn.classList.remove("descBtn--grid");
        descBtn.classList.add("descBtn--line");
      });
    }
  }
}
