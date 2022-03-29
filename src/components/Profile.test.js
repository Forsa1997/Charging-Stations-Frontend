import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import App from '../App'
import { IconButton, MenuItem } from '@mui/material';
import Map from './Map';
import Home from './Home'
import renderer from 'react-test-renderer';
import Profile from './Profile';
import {
    BrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from '../store';
import { LOGIN_SUCCESS } from '../actions/types'
import Input from '@mui/material/Input';

beforeAll(() => {
    let data = {
        firstName: "Bob",
        lastName: "Builder",
        username: "bob32",
        email: "bob43@web.de",
    };
    store.dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
    });
});

it('renders', () => {
    const div = document.createElement('div')
    render(<Provider store={store}><BrowserRouter><Profile /></BrowserRouter></Provider >, div)
})

it('renders the first name of the logged in user', () => {
    const wrapper = mount(<Provider store={store}><BrowserRouter><Profile /></BrowserRouter></Provider >)
    expect(wrapper.text().includes('Bob')).toBe(true);
})

it('renders the data of the logged in user', () => {
    const wrapper = mount(<Provider store={store}><BrowserRouter><Profile /></BrowserRouter></Provider >)
    expect(wrapper.text().includes('Bob')).toBe(true);
    expect(wrapper.text().includes('Builder')).toBe(true);
    expect(wrapper.text().includes('bob32')).toBe(true);
    expect(wrapper.text().includes('bob43@web.de')).toBe(true);
})

it('renders the accordions with 7 Input Fields', () => {
    const wrapper = mount(<Provider store={store}><BrowserRouter><Profile /></BrowserRouter></Provider >)
    expect(wrapper.find(Input)).toHaveLength(7);
})


it('renders the accordions with 7 Input Fields', () => {
    const wrapper = mount(<Provider store={store}><BrowserRouter><Profile /></BrowserRouter></Provider >)
    expect(wrapper.find(Input)).toHaveLength(7);
})









// it('renders a navbar in the App', () => {
//     const wrapper = mount(<App />)
//     expect(wrapper.find("Nav")).toHaveLength(1);
// })

// it('has 3 elements in the Navbar when no one is logged in', () => {
//     const wrapper = mount(<App />)
//     expect(wrapper.find(MenuItem)).toHaveLength(3);
// })

// it('has 2 elements in the Navbar when a user is logged in', () => {
//     let data = {};
//     store.dispatch({
//         type: LOGIN_SUCCESS,
//         payload: { user: data },
//     });
//     const wrapper = mount(<App />)
//     expect(wrapper.find(MenuItem)).toHaveLength(2);
// })

// it('render map component when burger map button is clicked', () => {
//     const wrapper = mount(<App />)
//     wrapper.find('.menuButtonNav').find('li').simulate('click');
//     expect(wrapper.find(Map)).toHaveLength(1);
// })

// it('render map component when normal map button is clicked', () => {
//     const wrapper = mount(<App />)
//     wrapper.find('.menuButtonNav').find('button').simulate('click');
//     expect(wrapper.find(Map)).toHaveLength(1);
// })

// it('render home component when burger home button is clicked', () => {
//     const wrapper = mount(<App />)
//     wrapper.find('.logoButton').find('div').last().simulate('click');
//     expect(wrapper.find(Home)).toHaveLength(1);
// })

// it('render home component when normal home button is clicked', () => {
//     const wrapper = mount(<App />)
//     wrapper.find('.logoButton').find('div').first().simulate('click');
//     expect(wrapper.find(Home)).toHaveLength(1);
// })

// it('the navbar stays as it is after we clicked the map button', () => {
//     const wrapper = mount(<App />)
//     const before = wrapper.find(Nav);
//     wrapper.find('.menuButtonNav').find('button').simulate('click');
//     const after = wrapper.find(Nav)
//     expect(before).toEqual(after);
// })