import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { cube } from './math';

import './index.css';
import App from './App';

function TestCompo(): any {
  return <div>{['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n')}</div>;
}
ReactDOM.render(<TestCompo />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
