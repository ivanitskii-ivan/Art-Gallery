const choice = (state) => {
  const price = document.querySelector('.calc-price');
  const sizeSelect = document.querySelector('#size');
  const materialSelect = document.querySelector('#material');
  const promoInput = document.querySelector('.promocode');

  if (!price || !sizeSelect || !materialSelect || !promoInput) {
    return;
  }

  const PROMO_CODE = 'IWANTPOPART';
  const DISCOUNT = 0.1;

  const getSizePrice = () => Number(sizeSelect.value) || 0;
  const getMaterialPrice = () => Number(materialSelect.value) || 0;
  const getTotal = () => getSizePrice() + getMaterialPrice();

  const updateState = (total, discountedTotal) => {
    state.size = getSizePrice();
    state.material = getMaterialPrice();
    state.sumAll = total;
    state.promoSum = discountedTotal;
  };

  const renderPrice = () => {
    const total = getTotal();
    const hasRequiredValues = getSizePrice() > 0 && getMaterialPrice() > 0;

    if (!hasRequiredValues) {
      price.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
      updateState(total, 0);
      return;
    }

    const isPromoApplied = promoInput.value.trim().toUpperCase() === PROMO_CODE;
    const discountedTotal = isPromoApplied ? Math.floor(total * (1 - DISCOUNT)) : 0;

    price.textContent = isPromoApplied ? discountedTotal : total;
    updateState(total, discountedTotal);
  };

  sizeSelect.addEventListener('input', renderPrice);
  materialSelect.addEventListener('input', renderPrice);
  promoInput.addEventListener('input', renderPrice);

  renderPrice();
};

export default choice;
