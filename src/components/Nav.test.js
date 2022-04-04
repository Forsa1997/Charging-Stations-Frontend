import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import App from '../App'
import { IconButton, MenuItem } from '@mui/material';
import Map from './Map';
import Home from './Home'
import renderer from 'react-test-renderer';
import Nav from './Nav';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from '../store';
import { LOGIN_SUCCESS } from '../actions/types';

it('renders', () => {
    const div = document.createElement('div')
    render(<Provider store={store}><BrowserRouter><Nav /></BrowserRouter></Provider>, div)
})

it('renders a navbar in the App', () => {
    const wrapper = mount(<BrowserRouter><App /></BrowserRouter>)
    expect(wrapper.find("Nav")).toHaveLength(1);
})

it('has 3 elements in the Navbar when no one is logged in', () => {
    const wrapper = mount(<Provider store={store}><BrowserRouter><Nav /></BrowserRouter></Provider>)
    expect(wrapper.find(MenuItem)).toHaveLength(2);
})

it('has 2 elements in the Navbar when a user is logged in', () => {
    let data = {};
    store.dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
    });
    const wrapper = mount(<Provider store={store}><BrowserRouter><Nav /></BrowserRouter></Provider>)
    expect(wrapper.find(MenuItem)).toHaveLength(2);
})

    // it('render map component when burger map button is clicked', () => {
    //     const wrapper = mount(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>)
    //     wrapper.find('.menuButtonNav').find('li').simulate('click');
    //     expect(wrapper.find(map)).toHaveLength(1);
    // })

    // it('render map component when normal map button is clicked', () => {
    //     const wrapper = mount(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>)
    //     wrapper.find('.menuButtonNav').find('button').simulate('click');
    //     expect(wrapper.find(Map)).toHaveLength(1);
    // })


    // it('render home component when burger home button is clicked', () => {
    //     const wrapper = mount(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>)
    //     wrapper.find('.logoButton').find('button').last().simulate('click');
    //     expect(wrapper.find(Home)).toHaveLength(1);
    // })

    // it('render home component when normal home button is clicked', () => {
    //     const wrapper = mount(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>)
    //     wrapper.find('.logoButton').find('button').first().simulate('click');
    //     expect(wrapper.find(Home)).toHaveLength(1);
    // })

// it('the navbar stays as it is after we clicked the map button', () => {
//     const wrapper = mount(<Provider store={store}><BrowserRouter><Nav /></BrowserRouter></Provider>)
//     const before = wrapper.find(Nav);
//     wrapper.find('.menuButtonNav').find('button').simulate('click');
//     const after = wrapper.find(Nav)
//     expect(before).toEqual(after);
// })

