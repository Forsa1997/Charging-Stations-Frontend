import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";

it('app renders', () => {
  const div = document.createElement('div')
  render(<BrowserRouter><App /></BrowserRouter>, div)

})