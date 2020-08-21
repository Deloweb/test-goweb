// Function showBtn display the button inside the descBtn container
const showBtn = (product) => {
  let btn = document.createElement("button");
  btn.className = "btn";
  let btnText = document.createTextNode("Ajouter au panier");
  let descBtn = document.querySelector(`.descBtn-${product.uuid}`);
  btn.appendChild(btnText);
  descBtn.appendChild(btn);
};
export { showBtn };
