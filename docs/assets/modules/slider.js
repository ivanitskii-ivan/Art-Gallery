const slider = (selector, position, btnN, btnPr, time = 3000) => {
  const slides = document.querySelectorAll(selector);

  if (!slides.length) {
    return;
  }

  const sliderContainer = slides[0].parentElement;
  const btnNext = document.querySelector(btnN);
  const btnPrev = document.querySelector(btnPr);

  let indexSlide = 0;
  let autoplayId = null;

  const hideAllSlides = () => {
    slides.forEach((slide) => {
      slide.style.display = 'none';
      slide.classList.remove('fadeInRight', 'fadeInLeft', 'fadeInDown');
    });
  };

  const normalizeIndex = (index) => {
    if (index >= slides.length) {
      return 0;
    }

    if (index < 0) {
      return slides.length - 1;
    }

    return index;
  };

  const showSlide = (index, animationClass = 'fadeInDown') => {
    indexSlide = normalizeIndex(index);
    hideAllSlides();
    slides[indexSlide].style.display = 'block';
    slides[indexSlide].classList.add('animated', animationClass);
  };

  const plusSlide = (step, animationClass) => {
    showSlide(indexSlide + step, animationClass);
  };

  const stopAutoplay = () => {
    if (!autoplayId) {
      return;
    }

    clearInterval(autoplayId);
    autoplayId = null;
  };

  const startAutoplay = () => {
    stopAutoplay();

    const animationClass = position === 'vertical' ? 'fadeInDown' : 'fadeInRight';

    autoplayId = setInterval(() => {
      plusSlide(1, animationClass);
    }, time);
  };

  const handleManualSlide = (step, animationClass) => {
    plusSlide(step, animationClass);
    startAutoplay();
  };

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      handleManualSlide(1, 'fadeInRight');
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      handleManualSlide(-1, 'fadeInLeft');
    });
  }

  sliderContainer.addEventListener('mouseenter', stopAutoplay);
  sliderContainer.addEventListener('mouseleave', startAutoplay);

  showSlide(0);
  startAutoplay();
};

export default slider;
