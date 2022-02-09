export default formatPrice = (number) => {
  const price = Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    currencyDisplay: 'symbol',
  }).format(number / 100);

  return price;
};
