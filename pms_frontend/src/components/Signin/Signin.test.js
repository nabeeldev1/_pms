import React from 'react';
// import ReactDOM from 'react-dom';
import Signin from '../Signin/Signin';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import classes from './Signin';

// describe('Component: Signin', () => {

//   it('should match its empty snapshot', () => {
//     const tree = renderer.create(
//       <Signin />
//      ).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });

// describe('Stateless component', () => {
//     test('shallow wrapper instance should not be null', () => {
//         const wrapper = shallow(<Stateless {...props} />);
//         const instance = wrapper.instance();

//         expect(instance).not.toBe(null);
//     });
// });

describe('Statefull component', () => {
    test('shallow wrapper instance should not be null', () => {
        const wrapper = shallow(<Statefull {...props} />);
        const instance = wrapper.instance();

        expect(instance).not.toBe(null);
    });
});