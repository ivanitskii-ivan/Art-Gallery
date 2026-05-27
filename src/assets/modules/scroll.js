const scroll = (upSelect) => {
  const upButton = document.querySelector(upSelect);
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  if (!upButton) {
    return;
  }

  window.addEventListener("scroll", toggleUpButtonVisibility);

  anchorLinks.forEach((link) => {
    link.addEventListener("click", handleAnchorClick);
  });

  function toggleUpButtonVisibility() {
    const isVisible = window.scrollY > 1700;

    upButton.classList.toggle("fadeIn", isVisible);
    upButton.classList.toggle("fadeOut", !isVisible);

    if (isVisible) {
      upButton.classList.add("animated");
    }
  }

  function handleAnchorClick(event) {
    const hash = event.currentTarget.getAttribute("href");

    if (!hash || hash === "#") {
      return;
    }

    const targetElement = document.querySelector(hash);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default scroll;