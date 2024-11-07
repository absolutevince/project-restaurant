import "./menu.css";
import MenuItem from "./MenuItem";
import cheeseburger from "../../asset/product-images/cheeseburger.jpg";
import frenchFries from "../../asset/product-images/french-fries.jpg";
import friedChicken from "../../asset/product-images/fried-chicken.jpg";

export default (function Menu() {
  const element = document.createElement("div");
  element.id = "menu";
  element.innerHTML = `
  <div class="CONTAINER">
    <ul class="menu-list">
      <li>
        ${MenuItem({
          name: "Hamb-eyy-gur",
          price: 4.99,
          description: "A hamburger with lots of cheese",
          imgSrc: cheeseburger,
        }).htmlString()}
      </li>
      <li>
        ${MenuItem({
          name: "French Fr-eyy-s",
          price: 3.99,
          description: "Just a simple French Fries, nothing crazy",
          imgSrc: frenchFries,
        }).htmlString()}
      </li>
      <li>
        ${MenuItem({
          name: "Fr-eyy-d Chick-eey-n",
          price: 7.99,
          description: "Good old Fried Chicken",
          imgSrc: friedChicken,
        }).htmlString()}
      </li>
    </ul>
  </div>
`;
  return {
    html: () => element,
  };
})();
