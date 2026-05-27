const revealItems = (buttonSelector, itemSelector) => {
  const button = document.querySelector(buttonSelector);
  const items = document.querySelectorAll(itemSelector);

  if (!button || !items.length) return;

  button.addEventListener("click", () => {
    button.classList.add("rotate");

    setTimeout(() => {
      items.forEach((item) => {
        item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
        item.classList.add(
          "col-sm-3",
          "col-sm-offset-0",
          "col-xs-10",
          "col-xs-offset-1",
          "animated",
          "fadeIn"
        );
      });
    }, 400);

    button.disabled = true;
  });
};

export default revealItems;