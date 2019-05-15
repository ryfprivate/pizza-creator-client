import React from 'react';
import styled from 'styled-components';
import getTotal from '../../helpers/getTotal';

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
`;

const ModalBox = styled.div`
  border-top: 5px solid #98c550;
  text-align: center;
  background: white;
  min-width: 400px;
  margin-top: 2rem;
  padding: 1rem 2.5rem;
`;

const PizzaContainer = styled.div`
  text-align: left;
`;

const Pizza = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  text-transform: capitalize;
`;

const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Actions = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &.confirm {
    background: #98c550;
  }
  &.cancel {
    background: #e74c3c;
  }
`;

const Strong = styled.strong`
  text-align: left;
`;

const ConfirmationModal = ({
  data,
  selectedSize,
  selectedToppings,
  onClose
}) => {
  const { name, address, postCode, mobile } = data;
  const total = getTotal({ selectedSize, selectedToppings });
  return (
    <Modal>
      <ModalBox>
        <h1>Your Order Details</h1>
        <address>
          <p>
            <strong>Order for: {name}</strong>
          </p>
          <p>
            Delivery to: {address} {postCode}
          </p>
          <p>Contact: {mobile}</p>
        </address>
        <hr />
        <PizzaContainer>
          <Pizza>
            <strong>{selectedSize.name} Pizza</strong>
            <span />
            {selectedToppings.map(({ name, amount }) => {
              return (
                <div key={name}>
                  {amount}*{name}
                </div>
              );
            })}
          </Pizza>
        </PizzaContainer>
        <hr />
        <PriceContainer>
          <Strong>Price:</Strong>
          <strong>{total.toFixed(2)}</strong>
        </PriceContainer>
        <Actions>
          <Button onClick={onClose} className="cancel">
            Cancel
          </Button>
          <Button className="confirm">Confirm</Button>
        </Actions>
      </ModalBox>
    </Modal>
  );
};


export default ConfirmationModal;
