import React from 'react';
// import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import classes from './Footer.css';

describe('Component: Footer', () => {
//   const items = ['Learn react', 'rest', 'go out'];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Footer />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});