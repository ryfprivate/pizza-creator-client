import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  margin: 0;
  font-weight: 300;
  color: #6e7790;
  font-size: 22px;
  position: relative;
  margin-bottom: 20px;
`;

export default ({ title, children }) => {
  return (
    <div>
      <H2>{title}</H2>
      {children}
    </div>
  );
};
