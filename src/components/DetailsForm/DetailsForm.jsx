import React from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';

const DetailsFormDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export default class DetailsForm extends React.Component {
  render() {
    const { data, onDataChange, dirty } = this.props;

    const confirmEmailValidationMessage = getValidationMessageForConfirmEmail(
      data.confirmEmail,
      data.email
    );

    return (
      <DetailsFormDiv>
        <Input
          label="Name"
          value={data.name}
          formDirty={dirty}
          validate={data.name}
          onChange={value => onDataChange('name', value)}
          validationMessage="Please enter your name"
        />
        <Input
          label="Mobile Number"
          value={data.mobile}
          formDirty={dirty}
          validate={!getValidationMessageForMobile(data.mobile)}
          onChange={value => onDataChange('mobile', value)}
          validationMessage={getValidationMessageForMobile(data.mobile)}
        />
        <Input
          label="Email"
          value={data.email}
          formDirty={dirty}
          validate={!getValidationMessageForEmail(data.email)}
          onChange={value => onDataChange('email', value)}
          validationMessage={getValidationMessageForEmail(data.email)}
        />
        <Input
          label="Confirm Email"
          value={data.confirmEmail}
          formDirty={dirty}
          validate={!confirmEmailValidationMessage}
          onChange={value => onDataChange('confirmEmail', value)}
          validationMessage={confirmEmailValidationMessage}
        />
        <Input
          label="Address"
          value={data.address}
          formDirty={dirty}
          validate={data.address}
          onChange={value => onDataChange('address', value)}
          validationMessage="Please enter your Address"
        />
        <Input
          label="Post Code"
          value={data.postCode}
          formDirty={dirty}
          validate={!getValidationMessageForPostCode(data.postCode)}
          onChange={value => onDataChange('postCode', value)}
          validationMessage={getValidationMessageForPostCode(data.postCode)}
        />
      </DetailsFormDiv>
    );
  }
}

function validatePostCode(postCode) {
  var re = /^\d{4}$/;
  return re.test(String(postCode).toLowerCase());
}

function getValidationMessageForPostCode(postCode) {
  if (!postCode) {
    return 'Please enter your Post Code';
  }

  if (!validatePostCode(postCode)) {
    return 'The Post Code format is invalid';
  }

  return '';
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function getValidationMessageForEmail(email) {
  if (!email) {
    return 'Please enter your Email';
  }

  if (!validateEmail(email)) {
    return 'The Email format is invalid';
  }

  return '';
}

function getValidationMessageForConfirmEmail(confirmEmail, email) {
  if (!confirmEmail) {
    return 'Please enter your Confirm Email';
  }

  if (confirmEmail !== email) {
    return 'The Confirm Email is not same as email';
  }

  return '';
}

function validateMobile(mobile) {
  var re = /^04\d{8}$/;
  return re.test(String(mobile).toLowerCase());
}

function getValidationMessageForMobile(mobile) {
  if (!mobile) {
    return 'Please enter your Mobile';
  }

  if (!validateMobile(mobile)) {
    return 'The Mobile format is invalid';
  }

  return '';
}
