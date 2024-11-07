import "./menu.css";
import MenuItem from "./MenuItem";
import cheeseburger from "../../asset/product-images/cheeseburger.jpg";
import frenchFries from "../../asset/product-images/french-fries.jpg";
import friedChicken from "../../asset/product-images/fried-chicken.jpg";

const items = [
  {
    name: "Hamb-eyy-gur",
    price: 4.99,
    description: "A hamburger with lots of cheese",
    imgSrc: cheeseburger,
  },
  {
    name: "French Fr-eyy-s",
    price: 3.99,
    description: "Just a simple French Fries, nothing crazy",
    imgSrc: frenchFries,
  },
  {
    name: "Fr-eyy-d Chick-eey-n",
    price: 7.99,
    description: "Good old Fried Chicken",
    imgSrc: friedChicken,
  },
];

export default (function Menu() {
  const element = document.createElement("div");
  const list = document.createElement("ul");
  element.id = "menu";
  list.classList = "menu-list";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.append(MenuItem(item).html());
    list.append(li);
  });

  element.append(list);

  return {
    html: () => element,
  };
})();
