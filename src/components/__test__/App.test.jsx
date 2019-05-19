import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('App test suite', () => {
  describe('on mount', () => {
    it('renders without crashing', () => {
      shallow(<App />);
    });
    it('form is not dirty', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state('detailsFormDirty')).toEqual(false);
    });
    it('is not loading', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state('loading')).toEqual(true);
    });
    it('test state', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state('testCase')).toEqual(123);
    });
  });
});
