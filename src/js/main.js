import modals  from "../assets/modules/modals.js";
import slider from "../assets/modules/slider.js";
import AnimateBtn from "../assets/modules/animateButton.js";
import form  from "../assets/modules/form.js";
import choice from "../assets/modules/calc.js";
import burger from "../assets/modules/burger.js";
import filter from "../assets/modules/filter.js";
import picture from "../assets/modules/picture.js";
import accordion from "../assets/modules/accordion.js";
import revealItems from "../assets/modules/paginate.js";
import scroll from "../assets/modules/scroll.js";

window.addEventListener("DOMContentLoaded", () => {
  const appState = {};  
  const initPortfolioFilter = () => {
    filter(
      ".portfolio-menu > li",
      ".portfolio-block",
      ".portfolio-wrapper",
      ".portfolio-no"
    );
  };

  const initBurgerMenu = () => {
    burger(".burger", ".burger-menu", ".burger__item");
  };

  const initModals = () => {
    modals();
  };

  const initSliders = () => {
    slider(
      ".feedback-slider-item",
      "horizontale",
      ".main-next-btn",
      ".main-prev-btn",
      6000
    );

    slider(".main-slider-item", "vertical", null, null, 3000);
  };

  const initAnimatedButton = () => {
     AnimateBtn(".button-order");
  };

  const initCalculator = () => {
    choice(appState);
  };

  const initForms = () => {
    console.log(form)
    form(appState);
  };

  const initPortfolioReveal = () => {
    revealItems(".button-transparent", ".styles-2");
  };

  const initPictures = () => {
    picture();
  };

  const initAccordion = () => {
    accordion(".accordion-heading");
  };

  const initScrollToTop = () => {
    scroll(".pageup");
  };

  initPortfolioFilter();
  initBurgerMenu();
  initModals();
  initSliders();
  initAnimatedButton();
  initCalculator();
  initForms();
  initPortfolioReveal();
  initPictures();
  initAccordion();
  initScrollToTop();
});
