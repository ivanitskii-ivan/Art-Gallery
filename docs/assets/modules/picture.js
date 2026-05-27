const picture = () => {
  const blocks = document.querySelectorAll('.sizes-block');

  if (!blocks.length) {
    return;
  }

  const getHoverSrc = (img) => {
    const currentSrc = img.dataset.baseSrc || img.getAttribute('src');
    const dotIndex = currentSrc.lastIndexOf('.');

    if (dotIndex === -1) {
      return currentSrc;
    }

    const fileName = currentSrc.slice(0, dotIndex);
    const extension = currentSrc.slice(dotIndex);

    return `${fileName}-1${extension}`;
  };

  blocks.forEach((block) => {
    const img = block.querySelector('img');

    if (!img) {
      return;
    }

    img.dataset.baseSrc = img.getAttribute('src');
    img.dataset.hoverSrc = getHoverSrc(img);

    block.addEventListener('mouseenter', () => {
      img.src = img.dataset.hoverSrc;
      img.classList.add('animated', 'bounceIn');

      block.querySelectorAll('p:not(.sizes-hit)').forEach((text) => {
        text.style.display = 'none';
      });
    });

    block.addEventListener('mouseleave', () => {
      img.src = img.dataset.baseSrc;
      img.classList.remove('animated', 'bounceIn');

      block.querySelectorAll('p:not(.sizes-hit)').forEach((text) => {
        text.style.display = 'block';
      });
    });
  });
};

export default picture;
