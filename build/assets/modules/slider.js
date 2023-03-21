const slider = (selector, position, btnN, btnPr, time) => {
  let indexSlide = 0;
  let stop = false;
  const slide = document.querySelectorAll(selector);
  const feedback = document.querySelector(".feedback");

  function showSlide(n) {
    if (n > slide.length - 1) {
      indexSlide = 0;
    }

    if (n < 0) {
      indexSlide = slide.length - 1;
    }

    slide.forEach((item) => {
      item.style.display = "none";
    });
    feedback.style.overflow = "hidden";
    slide[indexSlide].style.display = "block";
  }

  showSlide(0);

  function plusSlide(n) {
    showSlide((indexSlide += n));
  }

  function toggleBtn() {
    try {
      const btnNext = document.querySelector(btnN),
        btnPrev = document.querySelector(btnPr);
      btnNext.addEventListener("click", (e) => {
        if (e.target) {
          plusSlide(1);
          slide[indexSlide].classList.add("animated", "fadeInRight");
          slide[indexSlide].classList.remove("fadeInLeft");
        }
      });

      btnPrev.addEventListener("click", (e) => {
        if (e.target) {
          plusSlide(-1);
          slide[indexSlide].classList.add("animated", "fadeInLeft");
          slide[indexSlide].classList.remove("fadeInRight");
        }
      });
    } catch (e) {}
  }

  function activeAnimation() {
    if (position == "vertical") {
      stop = setInterval(() => {
        plusSlide(1);
        slide[indexSlide].classList.add("animated", "fadeInDown");
      }, time);
    } else {
      stop = setInterval(() => {
        plusSlide(1);
        slide[indexSlide].classList.add("animated", "fadeInRight");
      }, time);
    }
  }

  slide[0].parentNode.addEventListener("mouseover", () => {
    clearInterval(stop);
  });
  slide[0].parentNode.addEventListener("mouseout", () => {
    activeAnimation();
  });

  activeAnimation();
  toggleBtn();
};

export { slider };
