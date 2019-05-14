import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Section from './components/Section';
import ConfirmationModal from './components/ConfirmationModal';
import DetailsForm from './components/DetailsForm';
import Sizes from './components/Sizes';
import Toppings from './components/Toppings';
import Summary from './components/Summary';
import Submit from './components/Submit';
import Loading from './components/Loading';

const Page = styled.div`
  font: 300 16px/1.4 -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif;
`;

function hasErrors(obj1, obj2) {
  const keys = Object.keys(obj1);
  const values = Object.values(obj2);
  if (keys.length < 6) {
    return true;
  }
  // if (values.includes(true)) {
  //   return true;
  // }
  return false;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsFormData: {},
      detailsFormErros: {},
      detailsFormDirty: false,
      sizes: [],
      selectedSize: null,
      toppings: [],
      selectedToppings: [],
      showConfirmationModal: false,
      loading: false,
      disableSubmit: false
    };

    this.onDetailsFormDataChange = this.onDetailsFormDataChange.bind(this);
    this.onSizeClick = this.onSizeClick.bind(this);
    this.onToppingClick = this.onToppingClick.bind(this);
    this.addTopping = this.addTopping.bind(this);
    this.minusTopping = this.minusTopping.bind(this);
    this.onPlaceOrderClick = this.onPlaceOrderClick.bind(this);
  }

  componentDidMount() {
    const newToppings = [];
    const newSizes = [];
    this.setState({ loading: true });
    axios
      .get('https://pizza-creator-api.herokuapp.com/products')
      .then(response => {
        const products = response.data;
        products.forEach(product => {
          if (product.type === 'TOPPING') {
            newToppings.push(product);
          } else {
            newSizes.push(product);
          }
        });
        this.setState({
          loading: false,
          toppings: newToppings,
          sizes: newSizes,
          selectedSize: newSizes[0]
        });
      });
  }

  onDetailsFormDataChange(name, value, showError) {
    const { detailsFormData, detailsFormErrors } = this.state;

    const newDetailsFormData = {
      ...detailsFormData,
      [name]: value
    };

    const newDetailsFormErrors = {
      ...detailsFormErrors,
      [name]: showError
    };

    this.setState({
      detailsFormData: newDetailsFormData,
      detailsFormErrors: newDetailsFormErrors
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

  onPlaceOrderClick(event) {
    const { detailsFormData, detailsFormErrors, disableSubmit } = this.state;
    event.preventDefault();

    console.log('detailsFormErrors', detailsFormErrors);

    this.setState({
      detailsFormDirty: true
    });
    if (hasErrors(detailsFormData, detailsFormErrors)) {
      return;
    }
    if (disableSubmit) {
      return;
    }

    this.setState({
      showConfirmationModal: true
    });
  }

  render() {
    const {
      detailsFormData,
      detailsFormDirty,
      sizes,
      selectedSize,
      toppings,
      selectedToppings,
      showConfirmationModal,
      loading,
      disableSubmit
    } = this.state;

    return (
      <Page>
        {showConfirmationModal && (
          <ConfirmationModal
            data={detailsFormData}
            selectedSize={selectedSize}
            selectedToppings={selectedToppings}
            onClose={() => this.setState({ showConfirmationModal: false })}
          />
        )}
        <Section title="Enter Your Details">
          <DetailsForm
            data={detailsFormData}
            dirty={detailsFormDirty}
            onDataChange={this.onDetailsFormDataChange}
          />
        </Section>
        <Section title="Select the size">
          {loading ? (
            <Loading />
          ) : (
            <Sizes
              sizes={sizes}
              selectedSize={selectedSize}
              onClick={this.onSizeClick}
            />
          )}
        </Section>
        <Section title="Pick your toppings">
          {loading ? (
            <Loading />
          ) : (
            <Toppings
              toppings={toppings}
              selectedToppings={selectedToppings}
              onClick={this.onToppingClick}
            />
          )}
        </Section>
        <Section title="Order Summary">
          <Summary
            selectedSize={selectedSize}
            selectedToppings={selectedToppings}
            addTopping={this.addTopping}
            minusTopping={this.minusTopping}
          />
        </Section>
        <Submit onClick={this.onPlaceOrderClick} disabled={disableSubmit} />
      </Page>
    );
  }
}

export default App;
