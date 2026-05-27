const animateBtn = (btn) => {
  const buttons = document.querySelectorAll(btn);

  if (!buttons.length) {
    return;
  }

  const createContainer = (button) => {
    let container = button.querySelector('.cont');

    if (!container) {
      container = document.createElement('div');
      container.classList.add('cont');
      button.append(container);
    }

    return container;
  };

  buttons.forEach((button) => {
    createContainer(button);

    button.addEventListener('click', (e) => {
      const container = createContainer(button);
      const circle = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      circle.classList.add('circle');
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      container.append(circle);

      setTimeout(() => {
        circle.remove();
      }, 200);
    });
  });
};

export default animateBtn;
