import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  display: block;
  margin-bottom: 10px;
`;

export default ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <input type="text" />
    </Container>
  );
};
