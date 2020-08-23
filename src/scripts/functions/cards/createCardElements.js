// Function createImg displays the image inside the imgTitle container
export const createImg = (product) => {
  // Create img element
  let img = document.createElement("img");
  // Add className and src
  img.classList.add("imgStyle");
  img.src = product.img;
  // Fetch spzcific container
  let imgTitle = product.container.querySelector(`.imgTitle-${product.id}`);
  // Add element to the container
  imgTitle.appendChild(img);
};

// Function createTitle displays the title inside the imgTitle container
// (works the same as creatImg)
export const createTitle = (product) => {
  let title = document.createElement("h3");
  title.className = `title title-${product.id}`;
  title.innerText = product.name;
  let imgTitle = product.container.querySelector(`.imgTitle-${product.id}`);
  imgTitle.appendChild(title);
};

// Function createPrice displays the price inside the descBtn container
export const createPrice = (product, board) => {
  // Create prices' containers
  let priceContainer = document.createElement("div");
  let priceHT = document.createElement("p");
  let HT = document.createElement("span");
  let priceTTC = document.createElement("p");
  let TTC = document.createElement("span");
  // Add className
  // If a new board has been generated when sorting by price,
  // add "card" or "cardList" to the container to display the
  // new generated board in grid or in line
  if (board) {
    priceContainer.className = `prices price__${board.display}`;
    priceHT.className = `price__${board.display}--HT pricesHT`;
    priceTTC.className = `price__${board.display}--TTC pricesTTC`;
  } else {
    priceContainer.className = "prices price__grid";
    priceHT.className = `price__grid--HT pricesHT`;
    priceTTC.className = `price__grid--TTC pricesTTC`;
  }
  HT.className = "sup";
  TTC.className = "sup";
  // Create text node
  let priceHTText = document.createTextNode(`${product.price}`);
  let HTText = document.createTextNode(" € HT");
  let priceTTCText = document.createTextNode(
    `${(product.price + (product.price * 20) / 100).toFixed(2)}`
  );
  let TTCText = document.createTextNode(" € TTC");
  // Call specific container
  let descBtn = product.container.querySelector(`.descBtn-${product.id}`);
  // Add elements to their container
  priceHT.appendChild(priceHTText);
  HT.appendChild(HTText);
  priceHT.appendChild(HT);
  priceTTC.appendChild(priceTTCText);
  TTC.appendChild(TTCText);
  priceTTC.appendChild(TTC);
  priceContainer.appendChild(priceHT);
  priceContainer.appendChild(priceTTC);
  descBtn.appendChild(priceContainer);
};

// Function createDescription displays the description inside the descBtn container
export const createDescription = (product) => {
  let desc = document.createElement("p");
  desc.className = `desc ${product.id}`;
  let descContent = document.createTextNode(product.description);
  let descBtn = product.container.querySelector(`.descBtn-${product.id}`);
  desc.appendChild(descContent);
  descBtn.appendChild(desc);
};

// Function createBtn displays the button inside the descBtn container
export const createBtn = (product) => {
  let btn = document.createElement("button");
  btn.className = "btn";
  let btnText = document.createTextNode("Ajouter au panier");
  let descBtn = product.container.querySelector(`.descBtn-${product.id}`);
  btn.appendChild(btnText);
  descBtn.appendChild(btn);
};
