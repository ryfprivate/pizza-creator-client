export default ({ selectedSize, selectedToppings }) => {
  let total = selectedSize.price;
  selectedToppings.forEach(({ price, amount }) => {
    total = total + price * amount;
  });
  return total;
};
