import React from "react";
import styled from "styled-components";

import Section from "./Section";

const Title = styled.h1`
  color: red;
`;
class App extends React.Component {
  render() {
    return (
      <>
        <Section title="Welcome">
          <p>Hello world!</p>
        </Section>
      </>
    );
  }
}

export default App;
