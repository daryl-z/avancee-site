import * as React from 'react';
import * as styles from './index.m.css';

const GlobalHeader: React.FunctionComponent = ({}) => {
  return (
    <header id="header">
      <button id="action-trigger">&#xe606;</button>
      <a href="#">
        <img src="images/microsoft-gray.png" alt="logo" />
      </a>
      <div />
      <nav id="mobile-nav">
        <ul>
          <li>
            <a href="#">Office</a>
          </li>
          <li>
            <a href="#">Windows</a>
          </li>
          <li>
            <a href="#">Surface</a>
          </li>
          <li>
            <a href="#">Xbox</a>
          </li>
          <li>
            <a href="#">支持</a>
          </li>
          <li>
            <a href="#">更多</a>
          </li>
        </ul>
      </nav>
      <div>
        <form action="">
          <input type="search" />
          <button>&#xe63c;</button>
        </form>
        <a>&#xe600;</a>
        <div>登录</div>
      </div>
    </header>
  );
};

export default GlobalHeader;
