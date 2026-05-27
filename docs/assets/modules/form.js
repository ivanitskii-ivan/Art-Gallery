import apiPost from '../servese/api.js';
import clearInputForm from './clearInput.js';
import formatText from './formatText.js';
import validate from './validate.js';

const form = (state) => {
  const price = document.querySelector('.calc-price');
  const forms = document.querySelectorAll('form');
  const uploads = document.querySelectorAll('[name="upload"]');
  const buttons = document.querySelectorAll('button');

  const messages = {
    loading: 'Загрузка...',
    spinner: 'assets/img/spinner.gif',
    successImg: 'assets/img/ok.png',
    success: 'Готово',
    errorImg: 'assets/img/fail.png',
    error: 'Что-то пошло не так',
  };

  if (!forms.length) {
    return;
  }

  const toggleButtonsDisabled = (isDisabled) => {
    buttons.forEach((button) => {
      if (isDisabled) {
        button.setAttribute('disabled', 'disabled');
      } else {
        button.removeAttribute('disabled');
      }
    });
  };

  uploads.forEach((input) => {
    input.addEventListener('input', (event) => {
      const fileNameLabel = event.target.parentElement?.children?.[1];
      const file = event.target.files?.[0];

      if (!fileNameLabel) {
        return;
      }

      fileNameLabel.textContent = file ? formatText(file.name) : 'Файл не выбран';
    });
  });

  forms.forEach((currentForm) => {
    currentForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!validate(currentForm)) {
        return;
      }

      const currentInputs = currentForm.querySelectorAll('input');
      const currentTextAreas = currentForm.querySelectorAll('textarea');
      const currentUploads = currentForm.querySelectorAll('[name="upload"]');
      const currentSelects = currentForm.querySelectorAll('select');
      const statusImage = document.createElement('img');
      const statusMessage = document.createElement('div');

      currentForm.classList.add('animated', 'fadeOut');
      toggleButtonsDisabled(true);

      statusImage.classList.add('spinner', 'animated', 'fadeIn');
      statusImage.src = messages.spinner;

      statusMessage.classList.add('messages');
      statusMessage.textContent = messages.loading;
      statusMessage.style.cssText = `
        margin-top: 10px;
        font-size: 20px;
        font-weight: 700;
        color: #ba1eb8;
        text-align: center;
      `;

      setTimeout(() => {
        currentForm.style.display = 'none';
        currentForm.classList.remove('animated', 'fadeOut');
        currentForm.insertAdjacentElement('afterend', statusImage);
        statusImage.insertAdjacentElement('afterend', statusMessage);
      }, 300);

      const formData = new FormData(currentForm);

      Object.keys(state).forEach((key) => {
        formData.append(key, state[key]);
      });

      const path = {
        post: 'assets/server.php',
        question: 'assets/question.php',
      };

      const url = currentForm.closest('.popup-design') ? path.question : path.post;

      try {
        await apiPost(url, formData);
        statusImage.src = messages.successImg;
        statusMessage.textContent = messages.success;
        clearInputForm(currentInputs, currentTextAreas, currentUploads, currentSelects);
      } catch (error) {
        console.error(error);
        statusImage.src = messages.errorImg;
        statusMessage.textContent = messages.error;
      } finally {
        setTimeout(() => {
          statusImage.remove();
          statusMessage.remove();
          currentForm.style.display = 'block';
          toggleButtonsDisabled(false);

          if (price) {
            price.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
          }
        }, 1500);
      }
    });
  });
};

export default form;
