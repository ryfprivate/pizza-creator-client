import React from 'react';
import { shallow , mount } from 'enzyme';
import Input from '../Input';

const props = {
  label: "name",
  value: "",
  validationMessage:"Please enter your Name",
  formDirty: true,
  onChange: jest.fn()
};

let wrapper;

describe('test Input component', () => {
  beforeEach(() => {
    wrapper = mount(<Input {...props} />)
  });

  it('should render the component to match snapshot',() => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should render correct label', () => {
    expect(wrapper.find('label').text()).toEqual('name')
  });

  it('should receive correct props', () => {
    expect(wrapper.props().formDirty).toBe(true)
  });
  
  it('should render the validationMessage with given props', () => {
    expect(wrapper.find('div').last().text()).toEqual('Please enter your Name')
  });

  it('should trigger the correct function callback', () => {
    wrapper.find('input').simulate('change')
    expect(props.onChange).toHaveBeenCalledWith(wrapper.props().value)
  });
})