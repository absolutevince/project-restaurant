import "./menu.css";

export default function MenuItem({ name, price, description, imgSrc }) {
  const element = document.createElement("div");
  element.className = "menu-list-item";
  element.innerHTML = `
    <h2 class="menu-list-item-heading">${name}</h2>
    <div class="menu-list-item-image">
      <img src=${imgSrc} alt="Hamburger"/>
    </div>
    <p class="menu-list-item-description">
        ${description}
    </p>
    <div class="menu-list-item-option">
     <button class="menu-list-item-button">Order</button>
      <h3>$${price}</h3>
    </div>
    
  `;

  return {
    html: () => element,
    htmlString: () => element.outerHTML,
  };
}
