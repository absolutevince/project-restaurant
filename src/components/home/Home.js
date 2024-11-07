export default (function Home() {
  const element = document.createElement("div");
  element.id = "home";
  element.innerHTML = `
    <h1>Home</h1>
  `;

  return {
    html: () => element,
  };
})();
