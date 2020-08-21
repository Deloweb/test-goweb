  // Function showImg display the image inside the imgTitle container
  const showImg = (product) => {
    let img = document.createElement("img");
    img.classList.add("imgStyle");
    img.src = product.img;
    let imgTitle = document.querySelector(`.imgTitle-${product.uuid}`);
    imgTitle.appendChild(img);
  };

  export {showImg};