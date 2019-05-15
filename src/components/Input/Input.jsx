import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  flex-grow: 1;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  display: block;
  margin-bottom: 10px;
  &.error {
    color: #b00020;
  }
`;

const InputFrame = styled.input`
  width: 85%;
  background: #fff;
  border-radius: 2px;
  border: 1px solid #d7d7e7;
  font-size: 1.25rem;
  padding: 8px 10px;
  outline: none;
`;

const ValidationErrorDiv = styled.div`
  color: #b00020;
  font-size: 14px;
`;

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e, showError) {
    const { onChange } = this.props;
    const value = e.target.value;

    this.setState({
      dirty: true
    });

    onChange(value, showError);
  }

  render() {
    const {
      label,
      value = '',
      validate,
      validationMessage,
      formDirty
    } = this.props;

    const { dirty } = this.state;

    const showError = !validate && (dirty || formDirty);

    return (
      <Container>
        <Label className={showError && 'error'}>{label}</Label>
        <InputFrame
          value={value}
          onChange={e => this.onChange(e, showError)}
          type="text"
        />
        <ValidationErrorDiv>
          {showError && validationMessage}
        </ValidationErrorDiv>
      </Container>
    );
  }
}

Input.defaultProps = {
  value: ''
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  validate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  validationMessage: PropTypes.string.isRequired,
  formDirty: PropTypes.bool.isRequired
};

export default Input;
