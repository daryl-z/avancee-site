import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { cube } from './math'; // 不能只shaking掉使用 shaking掉那个文件中的其他的export

import './index.css';
import App from './App';

function TestCompo(): any {
  return <div>{['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n')}</div>;
}
// ReactDOM.render(<TestCompo />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
