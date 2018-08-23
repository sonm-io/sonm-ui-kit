import * as React from 'react';
import { render } from 'react-dom';
import DropdownInput from './components/dropdownInput';

const App = () => (
  <div>
    <h1>Components</h1>
    <DropdownInput/>
  </div>
);

render(<App />, document.getElementById('root'));
