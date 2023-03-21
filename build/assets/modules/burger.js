const burger = (burger, classActive) => {
  const burgerBtn = document.querySelector(burger),
    burgerClass = document.querySelector(classActive);
  let windowWidth = window.innerWidth;

  if (windowWidth <= 991) {
    burgerBtn.addEventListener("click", (e) => toggleBurger(e));
  }

  function toggleBurger(e) {
    if (e.target) {
      if (burgerClass.className !== "burger-menu burger-active") {
        console.log("burger-active");
        burgerClass.classList.add("burger-active");
        burgerBtn.classList.add("burger-active");
      } else {
        burgerClass.classList.remove("burger-active");
        burgerBtn.classList.remove("burger-active");
      }
    }
  }
};

export default burger;
