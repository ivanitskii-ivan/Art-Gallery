function formatFileName(fileName, maxLength = 6) {
  if (!fileName) {
    return "Файл не выбран";
  }

  const lastDot = fileName.lastIndexOf(".");

  if (lastDot === -1) {
    return fileName.length > maxLength
      ? `${fileName.slice(0, maxLength)}..`
      : fileName;
  }

  const name = fileName.slice(0, lastDot);
  const ext = fileName.slice(lastDot + 1);

  const shortName =
    name.length > maxLength ? `${name.slice(0, maxLength)}..` : name;

  return `${shortName}.${ext}`;
}

export default formatFileName;