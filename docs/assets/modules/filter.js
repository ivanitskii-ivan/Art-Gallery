const btn = (btns, elements, wrapper, portfolio) => {
  const buttons = document.querySelectorAll(btns);
  const items = document.querySelectorAll(elements);
  const wrapperElement = document.querySelector(wrapper);
  const emptyState = document.querySelector(portfolio);

  if (!buttons.length || !items.length || !wrapperElement || !emptyState) {
    return;
  }

  const hideAllItems = () => {
    items.forEach((item) => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
    });
  };

  const hideEmptyState = () => {
    emptyState.style.display = 'none';
    emptyState.classList.remove('animated', 'fadeIn');
  };

  const showEmptyState = () => {
    hideAllItems();
    wrapperElement.style.justifyContent = 'center';
    emptyState.style.display = 'block';
    emptyState.classList.add('animated', 'fadeIn');
  };

  const showFilteredItems = (filterClass) => {
    let visibleCount = 0;

    hideAllItems();
    hideEmptyState();
    wrapperElement.style.justifyContent = 'center';

    items.forEach((item) => {
      if (filterClass === 'all' || item.classList.contains(filterClass)) {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
        visibleCount += 1;
      }
    });

    if (!visibleCount) {
      showEmptyState();
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filterClass = Array.from(button.classList).find(
        (className) => !className.startsWith('btn') && className !== 'active'
      );

      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');

      if (!filterClass) {
        showEmptyState();
        return;
      }

      showFilteredItems(filterClass);
    });
  });
};

export default btn;
