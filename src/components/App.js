import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import DetailsForm from './DetailsForm';
import Sizes from './Sizes';

const Page = styled.div`
  font: 300 16px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsFormData: {},
      detailsFormDirty: false,
    };

    this.onDetailsFormDataChange = this.onDetailsFormDataChange.bind(this);
  }

  onDetailsFormDataChange(name, value) {
    const { detailsFormData } = this.state;

    const newDetailsFormData = {
      ...detailsFormData,
      [name]: value,
    };

    this.setState({
      detailsFormData: newDetailsFormData,
    });
  }

  render() {
    const { detailsFormData, detailsFormDirty } = this.state;

    return (
      <Page>
        <Section title="Enter Your Details">
          <DetailsForm
            data={detailsFormData}
            dirty={detailsFormDirty}
            onDataChange={this.onDetailsFormDataChange}
          />
        </Section>
        <Section title="Select your size">
          <Sizes />
        </Section>
      </Page>
    );
  }
}

export default App;
