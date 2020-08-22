// Function showImg display the image inside the imgTitle container
export const showImg = (product) => {
  let img = document.createElement("img");
  img.classList.add("imgStyle");
  img.src = product.img;
  let imgTitle = product.container.querySelector(`.imgTitle-${product.id}`);
  imgTitle.appendChild(img);
};

// Function showTitle display the title inside the imgTitle container
export const showTitle = (product) => {
  let title = document.createElement("h3");
  title.className = `title title-${product.id}`;
  title.innerText = product.name;
  let imgTitle = product.container.querySelector(`.imgTitle-${product.id}`);
  imgTitle.appendChild(title);
};

// Function showPrice display the price inside the descBtn container
export const showPrice = (product) => {
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
  let descBtn = product.container.querySelector(`.descBtn-${product.id}`);
  priceHT.appendChild(priceHTText);
  priceTTC.appendChild(priceTTCText);
  priceContainer.append(priceHT, priceTTC);
  descBtn.appendChild(priceContainer);
};

// Function showDescription display the description inside the descBtn container
export const showDescription = (product) => {
  let desc = document.createElement("p");
  desc.className = `desc ${product.id}`;
  let descContent = document.createTextNode(product.description);
  let descBtn = product.container.querySelector(`.descBtn-${product.id}`);
  desc.appendChild(descContent);
  descBtn.appendChild(desc);
};

// Function showBtn display the button inside the descBtn container
export const showBtn = (product) => {
  let btn = document.createElement("button");
  btn.className = "btn";
  let btnText = document.createTextNode("Ajouter au panier");
  let descBtn = product.container.querySelector(`.descBtn-${product.id}`);
  btn.appendChild(btnText);
  descBtn.appendChild(btn);
};
