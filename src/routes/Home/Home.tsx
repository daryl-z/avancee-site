import * as React from 'react';

import * as styles from './index.m.css';
import * as avatar from '../../assets/avatar.jpeg';
import './home.css';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <h1 className={styles.text}>Hello World!</h1>
      <img src={avatar} className="avatar" />
    </div>
  );
};

export default Home;
