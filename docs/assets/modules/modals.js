export { modals };

const modals = () => {
  let modalOpenedByUser = false;
  let lastActiveElement = null;

  const allModals = document.querySelectorAll('[data-modal]');
  const bodyScrollWidth = getScrollBarWidth();

  if (!allModals.length) {
    return;
  }

  allModals.forEach((modal) => {
    modal.classList.add('animated', 'fadeIn');

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isAnyModalOpen()) {
      closeAllModals();
    }
  });

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal(
    '.button-consultation',
    '.popup-consultation',
    '.popup-consultation .popup-close'
  );
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', {
    removeTrigger: true,
  });

  openModalByTime('.popup-consultation', 30000);
  openModalOnScrollBottom('.popup-gift', '.fixed-gift');

  function bindModal(openSelector, modalSelector, closeSelector, options = {}) {
    const openButtons = document.querySelectorAll(openSelector);
    const modal = document.querySelector(modalSelector);
    const closeButton = document.querySelector(closeSelector);

    if (!openButtons.length || !modal || !closeButton) {
      return;
    }

    openButtons.forEach((button) => {
      button.addEventListener('click', () => {
        modalOpenedByUser = true;
        lastActiveElement = button;

        if (options.removeTrigger) {
          button.remove();
        }

        openModal(modal);
      });
    });

    closeButton.addEventListener('click', closeAllModals);
  }

  function openModal(modal) {
    closeAllModals(false);

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${bodyScrollWidth}px`;

    const focusTarget = modal.querySelector(
      'input, textarea, select, button, [href], [tabindex]:not([tabindex="-1"])'
    );

    if (focusTarget) {
      focusTarget.focus();
    }
  }

  function closeAllModals(resetModalFlag = false) {
    allModals.forEach((modal) => {
      modal.style.display = 'none';
    });

    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }

    if (resetModalFlag) {
      modalOpenedByUser = false;
    }
  }

  function openModalByTime(selector, delay) {
    setTimeout(() => {
      const modal = document.querySelector(selector);

      if (!modal || modalOpenedByUser || isAnyModalOpen()) {
        return;
      }

      modalOpenedByUser = true;
      openModal(modal);
    }, delay);
  }

  function openModalOnScrollBottom(modalSelector, triggerSelector) {
    const onScroll = () => {
      const scrollPosition =
        window.scrollY + document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const modal = document.querySelector(modalSelector);
      const trigger = document.querySelector(triggerSelector);

      if (!modal || !trigger || modalOpenedByUser) {
        return;
      }

      if (scrollPosition >= pageHeight - 5) {
        modalOpenedByUser = true;
        trigger.remove();
        openModal(modal);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
  }

  function isAnyModalOpen() {
    return Array.from(allModals).some((modal) => {
      return getComputedStyle(modal).display === 'block';
    });
  }

  function getScrollBarWidth() {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }
};

export default modals;
