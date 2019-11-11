import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pressable from './index';

test('Pressable component renders correctly', () => {
  const tree = renderer.create(<Pressable />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Pressable component takes correct hitSlop', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Pressable hitSlop={{
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      }}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.setProps({
      hitSlop: {
        top: 12,
        bottom: 19,
      },
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
