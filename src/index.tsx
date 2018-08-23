import * as React from 'react';
import { render } from 'react-dom';
import test from './components/dropdownInput';
const s = require('./constants.styl');

const App = () => (
  <div>
    <h1>Components</h1>
    {test}
  </div>
);

render(<App />, document.getElementById('root'));
