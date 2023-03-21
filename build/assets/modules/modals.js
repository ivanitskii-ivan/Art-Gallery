export { modals };
const modals = () => {
  let modalValueBtn = false;
  function modal(triggerModalOpen, triggerModal, triggerModalClose, present) {
    const open = document.querySelectorAll(triggerModalOpen),
      modal = document.querySelector(triggerModal),
      close = document.querySelector(triggerModalClose),
      window = document.querySelectorAll("[data-modal]"),
      scroll = scrollHide();

    window.forEach((item) => {
      item.classList.add("animated", "fadeIn");
    });

    open.forEach((item) => {
      // open Modal - btn
      item.addEventListener("click", (e) => {
        modalValueBtn = true;
        if (present) {
          console.log(item.className);
          item.remove();
        }
        window.forEach((item) => {
          // close all modal
          item.style.display = "none";
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`; // show modal
        // document.body.classList.add('modal-open');
      });

      close.addEventListener("click", () => {
        //  this functinon close modal  after click btn_close
        window.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        // document.body.classList.remove('modal-open');
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        window.forEach((item) => {
          item.style.display = "none";
        });

        modal.style.display = "none";
        // document.body.classList.remove('modal-open');
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }
  function timeModal(selector, time) {
    setTimeout(() => {
      const modalActive = document.querySelectorAll("[data-modal]");
      let display = false;

      modalActive.forEach((item) => {
        if (
          getComputedStyle(item).display == "block" ||
          modalValueBtn == true
        ) {
          display = true;
          clearInterval(setTimeout);
        } else if (display == false) {
          modalValueBtn = true;
          document.querySelector(selector).style.display = "block";
          document.body.style.overflow = "hidden";
          let scrolling = scrollHide();
        }
      });
    }, time);
  }

  function scrollHide() {
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scroll = div.offsetWidth - div.clientWidth;
    div.remove();
    return scroll;
  }

  function scrollPageYOffset(selector, present) {
    window.addEventListener("scroll", () => {
      const height = window.scrollY + document.documentElement.clientHeight + 5;
      const scroll = Math.max(
        document.documentElement.clientHeight,
        document.body.offsetHeight
      );
      console.log(height, scroll);
      if (!modalValueBtn && height >= scroll) {
        modalValueBtn = true;
        document.querySelector(selector).style.display = "block";
        document.querySelector(present).remove();
      }
    });
  }

  timeModal(".popup-consultation  ", 30000);
  modal(".button-design", ".popup-design", ".popup-design .popup-close");
  modal(
    ".button-consultation  ",
    ".popup-consultation  ",
    ".popup-consultation  .popup-close"
  );
  modal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
  scrollPageYOffset(".popup-gift", ".fixed-gift");
};
