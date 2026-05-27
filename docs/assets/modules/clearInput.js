export default function clearInputForm(inputs = [], textAreas = [], uploads = [], selects = []) {
  inputs.forEach((input) => {
    if (input.type !== 'file') {
      input.value = '';
    }
  });

  textAreas.forEach((textArea) => {
    textArea.value = '';
  });

  uploads.forEach((uploadInput) => {
    uploadInput.value = '';

    const fileText = uploadInput.parentElement?.children?.[1];
    if (fileText) {
      fileText.textContent = 'Файл не выбран';
    }
  });

  selects.forEach((select) => {
    select.selectedIndex = 0;
  });
}
