import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import {Home} from '../src/screens/Home/home';

describe('App test', () => {
  it(`Test for App Screen`, () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
