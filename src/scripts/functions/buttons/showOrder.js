// Display the increase / descrease button
const showOrder = () => {
    const orderContainer = document.createElement("div");
    orderContainer.classList.add("orderContainer");
    const increase = document.createElement("p");
    const decrease = document.createElement("p");
    increase.classList.add("increase");
    decrease.classList.add("decrease");
    let increaseText = document.createTextNode("Prix croissant");
    let decreaseText = document.createTextNode("Prix décroissant");
    increase.appendChild(increaseText);
    decrease.appendChild(decreaseText);
    const affichage = document.querySelector(".affichage");
    orderContainer.appendChild(increase);
    orderContainer.appendChild(decrease);
    affichage.appendChild(orderContainer);




    
  };
  
  export {showOrder};