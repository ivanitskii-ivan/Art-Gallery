const validate = (form) => {
  if (!form) {
    return false;
  }

  let isValid = true;
  clearMessages(form);

  const fields = form.querySelectorAll('input[name="name"], input[name="phone"]');

  fields.forEach((field) => {
    const value = field.value.trim();

    if (field.name === 'name') {
      const normalizedName = value.replace(/\s+/g, ' ');

      if (!normalizedName || normalizedName.length < 2 || !/^[а-яёa-z\s-]+$/i.test(normalizedName)) {
        isValid = false;
        showError(field, 'Введите корректное имя');
      }
    }

    if (field.name === 'phone') {
      const digits = value.replace(/\D/g, '');

      if (digits.length < 10) {
        isValid = false;
        showError(field, 'Введите корректный номер телефона');
      }
    }
  });

  return isValid;
};

function showError(field, message) {
  const error = document.createElement('span');
  error.classList.add('error');

  if (field.parentElement && field.parentElement.classList.contains('form-consultation')) {
    error.classList.add('error_pos-ab');
  }

  error.textContent = message;
  field.classList.add('input__error');
  field.insertAdjacentElement('beforebegin', error);
}

function clearMessages(form) {
  const errors = form.querySelectorAll('.error');
  const invalidFields = form.querySelectorAll('.input__error');

  errors.forEach((error) => error.remove());
  invalidFields.forEach((field) => field.classList.remove('input__error'));
}

export default validate;
