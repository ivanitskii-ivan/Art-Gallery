const btn = (btns, elements, wrapper) => {
  const button = document.querySelectorAll(btns);
  const element = document.querySelectorAll(elements);
  const wrapperElem = document.querySelector(wrapper);

  button.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      if (e.target) {
        removeClassActive();
        btn.classList.add("active");
        changeElement(button[i].classList[0]);
      }
    });
  });

  function changeElement(btn) {
    console.log(btn);
    element.forEach((item, i) => {
      if (item.className.indexOf(btn) > -1) {
        item.style.display = "block";
        wrapperElem.style.justifyContent = "center";
      } else {
        item.style.display = " none";
      }
    });
  }

  function removeClassActive() {
    button.forEach((btn) => btn.classList.remove("active"));
  }
};
export default btn;
