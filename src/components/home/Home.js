import "./home.css";
import heroImg from "../../asset/hero-image.jpg";

export default (function Home() {
  const element = document.createElement("section");
  const leftCont = document.createElement("div");
  const rightCont = document.createElement("div");
  const img = document.createElement("img");
  const paragraph = document.createElement("p");
  element.id = "home";
  leftCont.classList = "home-left";
  rightCont.classList = "home-right";

  img.src = heroImg;
  img.alt = "Pineapple with sunglasses";
  paragraph.textContent = "Aren't we cool?";

  leftCont.append(img);
  rightCont.append(paragraph);
  element.append(leftCont, rightCont);

  return {
    html: () => element,
  };
})();
