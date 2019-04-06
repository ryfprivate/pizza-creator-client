import React from "react";
import styled from "styled-components";

import Section from "./Section";
import DetailsForm from "./DetailsForm";
import Sizes from "./Sizes";

const Page = styled.div`
  font: 300 16px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif;
`;
class App extends React.Component {
  render() {
    return (
      <Page>
        <Section title="Enter your details">
          <DetailsForm />
        </Section>
        <Section title="Select your size">
          <Sizes />
        </Section>
      </Page>
    );
  }
}

export default App;
