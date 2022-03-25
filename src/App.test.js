import { render } from '@testing-library/react';
import App from './App';

it('app renders', () => {
  const div = document.createElement('div')
  render(<App />, div)
  
})