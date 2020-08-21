"use strict";
import "../styles/index.scss";
import { productList } from "./script";
import { showCard } from "./functions/cards/showCard";
import { showOrder } from "./functions/buttons/showOrder";

// Create the board
let board = document.createElement("div");
board.classList.add("grid");
document.body.appendChild(board);
let i = 0;
showOrder();
let test = 0;
// For each product, dispay its card
productList.forEach((product) => {
  i++;
  showCard(product);
});

// Buttons
const cardDisplay = document.querySelectorAll(".card");
const prices = document.querySelectorAll(".priceGrid");
const pricesHT = document.querySelectorAll(".priceHTGrid");
const pricesTTC = document.querySelectorAll(".priceTTCGrid");
const descBtns = document.querySelectorAll(".descBtnGrid");

// Line button
let displayLine = () => {
  board.classList.add("line");
  board.classList.remove("grid");

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
  board.classList.add("grid");
  board.classList.remove("line");

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
