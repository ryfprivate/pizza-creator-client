import React from "react";
import styled from "styled-components";

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
    <div>
      <Label>{label}</Label>
      <input type="text" />
    </div>
  );
};
