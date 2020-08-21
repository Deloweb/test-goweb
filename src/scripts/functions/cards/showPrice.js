// Function showPrice display the price inside the descBtn container
const showPrice = (product) => {
  // Create prices' containers
  let priceContainer = document.createElement("div");
  let priceHT = document.createElement("p");
  let priceTTC = document.createElement("p");
  // Add className
  priceContainer.className = "priceGrid";
  priceHT.className = "priceHTGrid";
  priceTTC.className = "priceTTCGrid";
  // Create text node
  let priceHTText = document.createTextNode(`${product.price} € HT `);
  let priceTTCText = document.createTextNode(
    `${product.price + (product.price * 20) / 100} € TTC `
  );
  // Call previous containers
  let descBtn = document.querySelector(`.descBtn-${product.uuid}`);
  priceHT.appendChild(priceHTText);
  priceTTC.appendChild(priceTTCText);
  priceContainer.append(priceHT, priceTTC);
  descBtn.appendChild(priceContainer);
};

export { showPrice };
