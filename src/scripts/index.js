"use strict";
import "../styles/index.scss";
import { Board } from "./classes/Board";

const board = new Board();

// Create the board
let i = 0;

// let order;
// const showPriceInc = () => {
//   console.log('coucou');
//   order = "asc";
//   console.log(order);
// };

// let increaseBtn = document.querySelector(".increase");
// increaseBtn.addEventListener("click", showPriceInc);

// let increaseBtn = document.querySelector(".increase");
// increaseBtn.addEventListener("click", board.changeSorting());

// let desc = document.querySelector(".decrease");
// desc.addEventListener("click", board.changeSorting);

// const newProducts = [...productList];
// if (order === "asc") {
//   newProducts.sort((a, b) =>
//     a.price > b.price ? 1 : -1
//   );
// } else if (order === "desc") {
//   newProducts.sort((a, b) =>
//   a.price < b.price ? 1 : -1
//   );
// }

// console.log(newProducts);

// For each product, dispay its card
// newProducts.forEach((product) => {
//   i++;
//   showCard(product);
// });

// Buttons
const boardHTML = document.querySelector('.grid');
const cardDisplay = document.querySelectorAll(".card");
const prices = document.querySelectorAll(".priceGrid");
const pricesHT = document.querySelectorAll(".priceHTGrid");
const pricesTTC = document.querySelectorAll(".priceTTCGrid");
const descBtns = document.querySelectorAll(".descBtnGrid");

// Line button
let displayLine = () => {
  boardHTML.classList.add("line");
  boardHTML.classList.remove("grid");

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

  descBtns.forEach((descBtn) => {
    descBtn.classList.remove("descBtnGrid");
    descBtn.classList.add("descBtnLine");
  });
};

const line = document.querySelector(".lineBtn");
line.addEventListener("click", displayLine);

// Grid button
let displayGrid = () => {
  boardHTML.classList.add("grid");
  boardHTML.classList.remove("line");

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

  descBtns.forEach((descBtn) => {
    descBtn.classList.add("descBtnGrid");
    descBtn.classList.remove("descBtnLine");
  });
};

const grid = document.querySelector(".gridBtn");
grid.addEventListener("click", displayGrid);
