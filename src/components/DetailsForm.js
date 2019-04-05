import React from "react";
import styled from "styled-components";

import Input from "./Input";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
`;

export default () => {
  return (
    <form>
      <Row>
        <Input label="NAME" />
        <Input label="EMAIL" />
        <Input label="CONFIRM" />
      </Row>
      <Row>
        <Input label="ADDRESS" />
        <Input label="POSTCODE" />
        <Input label="CONTACT NUMBER" />
      </Row>
    </form>
  );
};
