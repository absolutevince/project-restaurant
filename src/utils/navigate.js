export default function navigate(controllers, container, pages, defaultPage) {
  let activePage;

  container.appendChild(defaultPage);

  controllers.forEach((controller) => {
    controller.addEventListener("click", () => {
      pages.forEach((page) => {
        if (activePage === page.id) return;
        if (controller.dataset.navigateDestination === page.id) {
          container.innerHTML = "";
          container.appendChild(page);
          activePage = page.id;
        }
      });
    });
  });
}
