const accordion = (head) => {
  const buttons = document.querySelectorAll(head);

  const closeAll = () => {
    buttons.forEach((button) => {
      button.classList.remove("active-style");
      button.nextElementSibling.classList.remove("active-accordion");
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isOpen = button.classList.contains("active-style");

      closeAll();

      if (!isOpen) {
        button.classList.add("active-style");
        content.classList.add("active-accordion");
      }
    });
  });
};

export default accordion;