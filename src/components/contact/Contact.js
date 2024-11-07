export default (function Contact() {
  const element = document.createElement("div");
  element.id = "contact";
  element.innerHTML = `
    <h1>Contact</h1>
  `;

  return {
    html: () => element,
  };
})();
