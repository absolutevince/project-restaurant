import "./menu.css";

export default function MenuItem({ name, price, description, imgSrc }) {
  const element = document.createElement("div");
  const heading = document.createElement("h2");
  const imgCont = document.createElement("div");
  const img = document.createElement("img");
  const desc = document.createElement("p");
  const optCont = document.createElement("div");
  const orderButton = document.createElement("button");
  const priceEl = document.createElement("h3");
  element.className = "menu-list-item";
  heading.className = "menu-list-item-heading";
  imgCont.className = "menu-list-item-image";
  desc.classList = "menu-list-item-description";
  optCont.classList = "menu-list-item-option";
  orderButton.classList = "menu-list-item-option-order_button";

  heading.textContent = name;
  img.src = imgSrc;
  desc.textContent = description;
  priceEl.textContent = `$${price}`;
  orderButton.textContent = "Order Now";

  element.append(heading, imgCont, desc, optCont);
  imgCont.append(img);
  optCont.append(orderButton, priceEl);

  orderButton.addEventListener("click", () => {
    console.log(`Order ${name} for $${price}`);
  });

  return {
    html: () => {
      return element;
    },
    htmlString: () => element.outerHTML,
  };
}
