import React from 'react';
import styled from 'styled-components';
import Section from './components/Section/Section';
import DetailsForm from './components/DetailsForm';
import Sizes from './components/Sizes';
import Toppings from './components/Toppings';
import Summary from './components/Summary';

import sizes from './sizes.json';
import toppings from './toppings.json';

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
      selectedSize: sizes ? sizes[0] : null,
      toppings: toppings,
      selectedToppings: []
    };

    this.onDetailsFormDataChange = this.onDetailsFormDataChange.bind(this);
    this.onSizeClick = this.onSizeClick.bind(this);
    this.onToppingClick = this.onToppingClick.bind(this);
    this.addTopping = this.addTopping.bind(this);
    this.minusTopping = this.minusTopping.bind(this);
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

  onToppingClick(topping) {
    const { selectedToppings } = this.state;
    const isExists = selectedToppings.find(({ name }) => {
      return name === topping.name;
    });
    const newSelectedToppings = isExists
      ? selectedToppings.filter(({ name }) => {
          return name !== topping.name;
        })
      : [{ ...topping, amount: 1 }, ...selectedToppings];
    this.setState({ selectedToppings: newSelectedToppings });
  }

  addTopping(topping) {
    const { selectedToppings } = this.state;
    const newSelectedToppings = selectedToppings.map(selectedTopping => {
      const { name } = selectedTopping;
      if (name === topping.name) {
        const { amount } = topping;
        const newAmount = amount + 1;
        return {
          ...topping,
          amount: newAmount
        };
      }
      return selectedTopping;
    });
    this.setState({
      selectedToppings: newSelectedToppings
    });
  }

  minusTopping(topping) {
    const { selectedToppings } = this.state;
    const newSelectedToppings = selectedToppings
      .map(selectedTopping => {
        const { name } = selectedTopping;
        if (name === topping.name) {
          const { amount } = topping;
          const newAmount = amount - 1;
          if (newAmount === 0) {
            return undefined;
          }
          return {
            ...topping,
            amount: newAmount
          };
        }
        return selectedTopping;
      })
      .filter(newSelectedTopping => !!newSelectedTopping);
    this.setState({
      selectedToppings: newSelectedToppings
    });
  }

  render() {
    const {
      detailsFormData,
      detailsFormDirty,
      sizes,
      selectedSize,
      toppings,
      selectedToppings
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
        <Section title="Select the size">
          <Sizes
            sizes={sizes}
            selectedSize={selectedSize}
            onClick={this.onSizeClick}
          />
        </Section>
        <Section title="Pick your toppings">
          <Toppings
            toppings={toppings}
            selectedToppings={selectedToppings}
            onClick={this.onToppingClick}
          />
        </Section>
        <Section title="Summary">
          <Summary
            selectedSize={selectedSize}
            selectedToppings={selectedToppings}
            addTopping={this.addTopping}
            minusTopping={this.minusTopping}
          />
        </Section>
      </Page>
    );
  }
}

export default App;
