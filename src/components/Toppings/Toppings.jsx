import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
`;

const Topping = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  text-transform: capitalize;
  &.active {
    background: #1a98e1;
    color: white;
  }
`;

const ImageWrap = styled.div`
  padding: 5px;
  background: #e6e6e6;
`;

const Image = styled.img`
  display: block;
  width: 35px;
  height: 35px;
`;

export default ({ toppings, selectedToppings }) => {
  return (
    <Container>
      {toppings.map(topping => {
        const { name: toppingName, imgUrl } = topping;
        return (
          <Topping>
            <ImageWrap>
              <Image src={imgUrl} alt={toppingName} />
            </ImageWrap>
            <span>{toppingName}</span>
          </Topping>
        );
      })}
    </Container>
  );
};
