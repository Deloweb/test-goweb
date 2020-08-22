import { productList } from "../script";

export class Board {
  constructor() {
    this.container = document.querySelector(".grid");
    this.products = productList;
    this.sorting = "asc";

    // Init
    this.displayCards();
  }

  displayCards() {
    // We clean board
    this.container.innerHTML = "";

    this.products.forEach((product) => {
      const card = product.createCard(product);
      this.container.appendChild(card);
    });
  }

  changeSorting() {
    const button = document.querySelector(".increase");
    // button.disabled = true;

    const newProducts = [...this.products];
    if (this.sorting === "asc") {
      this.sorting = "desc";
      // On traite this.products avec un sort
      newProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      console.log(newProducts);
      // Do things
      this.products = newProducts;

      // On reaffiche les produits dans le nouvel ordre
      console.log("coucou");
      this.displayCards();
    } else if (this.sorting === "desc" ) {
      this.sorting = "asc";
      // Meme chose mais inversé

      newProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
      console.log(newProducts);

      this.products = newProducts;
      this.displayCards();

    }
  }

  changeProductsStyle() {}
}
