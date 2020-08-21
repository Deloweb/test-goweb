// Function showTitle display the title inside the imgTitle container
const showTitle = (product) => {
  let title = document.createElement("h3");
  title.className = `title ${product.uuid}`;
  let titleName = document.createTextNode(product.name);
  let imgTitle = document.querySelector(`.imgTitle-${product.uuid}`);
  title.appendChild(titleName);
  imgTitle.appendChild(title);
};

export { showTitle };
