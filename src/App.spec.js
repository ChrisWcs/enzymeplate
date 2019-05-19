import React from 'react';
import { shallow } from 'enzyme';
import App from './App'
import 'jest-enzyme';

it("App test", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).toExist();
});