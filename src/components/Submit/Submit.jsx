import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem 2rem;
`;

const Button = styled.button`
  width: 100%;
  background: #98c550;
  border: none;
  padding: 10px 15px;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export default ({ onClick }) => {
  return (
    <Container>
      <Button type="submit" onClick={onClick}>
        Place Your Order
      </Button>
    </Container>
  );
};
