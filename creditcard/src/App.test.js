/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';

describe('handleChange', () => {
    it('should return error', () => {
    const app = shallow(<App />);

    app.find('input').simulate('change',{ target: { name: 'month', value: '13' }});

    expect(app.state().formErrors.mount).toEqual('maximum 12');

    });

    it('no error', () => {
        // const app = mount(<App />);
    
        app.find('input').simulate('change',{ target: { name: 'month', value: '10' }});
    
        expect(app.state().formErrors.mount).toEqual('');
    
    });

})

test('toggle', ()=>{
    const app = shallow(<App />);
    app.state().modal=false;

    app.toggle();
    expect(app.state().modal).toEqual(true);
})

test('submit', ()=>{
    const app = shallow(<App />);
    app.state()={
        amount: "12451",
        cardNumber: "12314",
        month: "22",
        year: "22"
    };
    app.find('xxx').simulate('submit');
    expect(app.toggle()).to.have.been.called;

    expect(app.state().amount).toEqual("");
    expect(app.state().cardNumber).toEqual("");
    expect(app.state().month).toEqual("");
    expect(app.state().year).toEqual("");
})
// const React = require('react');
// const {shallow, mount} = require('enzyme');
// const App = require('./App');
// // import App from './App';

// describe('handleChange', () => {
//     it('should return error', () => {
//     // const app = shallow(<Footer />);

//     // app.find('input').simulate('change',{ target: { name: 'month', value: '13' }});

//     expect(1).toEqual(1);

//     });
//})