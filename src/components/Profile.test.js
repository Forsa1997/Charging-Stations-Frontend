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
import { LOGIN_SUCCESS, MODIFY_USER } from '../actions/types'
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

it('renders the changed username after a MODIFY Action', () => {
    const wrapper = mount(<Provider store={store}><BrowserRouter><Profile /></BrowserRouter></Provider >)
    expect(wrapper.text().includes('Bob')).toBe(true);
    store.dispatch({
        type: MODIFY_USER,
        payload: { data: { firstName: "Fred" } },
    });
    expect(wrapper.text().includes('Fred')).toBe(true);
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
//         type: MODIFY_PASSWORD,
//     });
//     expect(wrapper.text().includes('Fred')).toBe(true);
// })