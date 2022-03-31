import {render} from "@testing-library/react";
import Home from "./Home";
import Theme from "./home-components/Theme";
import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter} from "react-router-dom";


it('home renders', () => {
    const theme = Theme;
    const div = document.createElement('div')
    render(<BrowserRouter><ThemeProvider theme={theme}><Home /></ThemeProvider></BrowserRouter>, div)

})