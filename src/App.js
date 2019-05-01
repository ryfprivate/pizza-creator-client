import React from 'react';
import styled from 'styled-components';
import Section from './components/Section';
import DetailsForm from './components/DetailsForm';
import Sizes from './components/Sizes';

import sizes from './sizes.json';

const Page = styled.div`
  font: 300 16px/1.4 -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsFormData: {},
      detailsFormDirty: false,
      sizes: sizes,
      selectedSize: null
    };

    this.onDetailsFormDataChange = this.onDetailsFormDataChange.bind(this);
    this.onSizeClick = this.onSizeClick.bind(this);
  }

  onDetailsFormDataChange(name, value) {
    const { detailsFormData } = this.state;

    const newDetailsFormData = {
      ...detailsFormData,
      [name]: value
    };

    this.setState({
      detailsFormData: newDetailsFormData
    });
  }

  onSizeClick(size) {
    this.setState({ selectedSize: size });
  }

  render() {
    const {
      detailsFormData,
      detailsFormDirty,
      sizes,
      selectedSize
    } = this.state;

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
          <Sizes
            sizes={sizes}
            selectedSize={selectedSize}
            onClick={this.onSizeClick}
          />
        </Section>
      </Page>
    );
  }
}

export default App;
