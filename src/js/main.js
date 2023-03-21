import { modals } from "../assets/modules/modals";
import { slider } from "../assets/modules/slider";
import { AnimateBtn } from "../assets/modules/animateButton";
import { form } from "../assets/modules/form";
import burger from "../assets/modules/burger";
import btns from "../assets/modules/buttons";
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  btns(".portfolio-menu>li", ".portfolio-block ", ".portfolio-wrapper");
  burger(".burger", ".burger-menu");
  modals();
  form();
  slider(
    ".feedback-slider-item",
    "horizontal",
    ".main-next-btn",
    ".main-prev-btn",
    6000
  );
  slider(".main-slider-item", "vertical", "", "", 3000);
  const animate = new AnimateBtn(".button-order");
  animate.mouseMove();
});
