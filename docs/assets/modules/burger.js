const burger = (burger, classActive, list) => {
  const burgerBtn = document.querySelector(burger);
  const menu = document.querySelector(classActive);
  const listElements = document.querySelectorAll(list);

  if (!burgerBtn || !menu) {
    return;
  }

  burgerBtn.setAttribute("aria-expanded", "false");

  burgerBtn.addEventListener("click", toggleBurger);

  listElements.forEach((item) => {
    item.addEventListener("click", closeBurger);
  });

  function toggleBurger() {
    const isOpen = menu.classList.toggle("burger-active");

    burgerBtn.classList.toggle("burger-active", isOpen);
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  }

  function closeBurger() {
    menu.classList.remove("burger-active");
    burgerBtn.classList.remove("burger-active");
    burgerBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
};

export default burger;