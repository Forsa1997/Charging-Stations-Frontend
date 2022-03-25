import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import App from '../App'
import { IconButton, MenuItem } from '@mui/material';
import Map from './Map';
import Home from './Home'
import renderer from 'react-test-renderer';
import Nav from './Nav';
import {
    BrowserRouter,
} from "react-router-dom";
import Login from './Nav';
import { Provider } from 'react-redux'
import store from '../store';

it('renders', () => {
    const div = document.createElement('div')
    render(<Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>, div)
})