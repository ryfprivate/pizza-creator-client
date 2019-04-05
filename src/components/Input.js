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

const Input = styled.input`
  width: 85%;
  background: #fff;
  border-radius: 2px;
  border: 1px solid #d7d7e7;
  font-size: 1.25rem;
  padding: 8px 10px;
  outline: none;
`;

export default ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input type="text" />
    </Container>
  );
};
