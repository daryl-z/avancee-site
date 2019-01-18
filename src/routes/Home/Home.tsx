import * as React from "react";

import * as styles from "./index.m.css";
import * as avatar from "../../assets/avatar.jpeg";
import "./home.css";
export interface HelloProps {
  compiler: string;
  framework: string;
}

export default function Home(props: HelloProps) {
  return (
    <div>
      <h1 className={styles.text}>
        Hello from {props.compiler} and {props.framework}!
      </h1>

      <img src={avatar} className="avatar" />
    </div>
  );
}
