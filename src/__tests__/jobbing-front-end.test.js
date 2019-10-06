import React from 'react';

import renderer from 'react-test-renderer';

import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import App from '../app';

Enzyme.configure({ adapter: new Adapter() });

describe('< App /> ', () => {
  it('form is rendered at start', () => {
    const app = shallow(< App />);

    expect(app.find('span').exists()).toEqual(false);
  });

  it('matches snapshot', () => {
    const snapshot = renderer.create(< App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
