class AnimateBtn {
  constructor(btn) {
    this.btn = document.querySelectorAll(btn);
  }

  makeContainer() {
    this.btn.forEach((item) => {
      const container = document.createElement("div");
      container.classList.add("cont");
      item.append(container);
    });
  }

  mouseMove() {
    this.makeContainer();
    this.btn.forEach((item) => {
      item.addEventListener("mousemove", function (e) {
        const span = document.createElement("span");
        span.classList.add("circle");
        const offset = e.target.getBoundingClientRect();
        const x = e.clientX - offset.left;
        const y = e.clientY - offset.top;
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        item.lastChild.append(span);
        const timeDelete = setInterval(() => {
          span.remove();
        }, 200);
      });
    });
  }
}

export { AnimateBtn };
