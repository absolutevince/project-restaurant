import "./style.css";
import Home from "./components/home/Home.js";
import Menu from "./components/menu/Menu.js";
import Contact from "./components/contact/Contact.js";
import navigate from "./utils/navigate.js";

const container = document.querySelector("#content");
const navButtons = document.querySelectorAll(".nav-button");

navigate(
  navButtons,
  container,
  [Home.html(), Menu.html(), Contact.html()],
  Contact.html()
);
