  // Function showDescription display the description inside the descBtn container
  const showDescription = (product) => {
    let desc = document.createElement("p");
    desc.className = `desc ${product.uuid}`;
    let descContent = document.createTextNode(product.description);
    let descBtn = document.querySelector(`.descBtn-${product.uuid}`);
    desc.appendChild(descContent);
    descBtn.appendChild(desc);
  };

  export {showDescription};