import React from 'react';
import styled from 'styled-components';
import getTotal from './getTotal';

const Summary = styled.ul`
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: grid;
  grid-gap: 5px;
  align-items: center;
  grid-template-columns: auto auto auto 1fr auto;
  text-transform: capitalize;
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  border: 0;
  outline: 0;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  :active {
    background: #1a98e1;
    color: white;
  }
`;

const Total = styled.div`
  text-align: right;
  font-size: 1.25rem;
`;

export default ({
  selectedSize,
  selectedToppings,
  addTopping,
  minusTopping
}) => {
  const total = getTotal({ selectedSize, selectedToppings });
  return (
    <div>
      <Summary>
        <Item>
          <span>{`${selectedSize.name} Pizza`}</span>
          <span />
          <span />
          <span />
          <span>{`${selectedSize.price}`}</span>
        </Item>
        {selectedToppings.map(selectedTopping => {
          const { name, amount, price } = selectedTopping;
          return (
            <Item key={name}>
              <Button onClick={() => addTopping(selectedTopping)}>+</Button>
              <Button onClick={() => minusTopping(selectedTopping)}>-</Button>
              <span>{name}</span>
              <span>{`* ${amount}`}</span>
              <span>{`$ ${(price * amount).toFixed(2)}`}</span>
            </Item>
          );
        })}
      </Summary>
      <Total>
        <span>{`Total: $${total.toFixed(2)}`}</span>
      </Total>
      <span>Hello world</span>
    </div>
  );
};
