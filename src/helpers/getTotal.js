export default ({ selectedSize, selectedToppings }) => {
  let total = selectedSize ? selectedSize.price : 0;
  selectedToppings.forEach(({ price, amount }) => {
    total = total + price * amount;
  });
  return total;
};
