import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as styles from "./index.module.css";
import * as avatar from "./assets/avatar.jpeg";
export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1 className={styles.text}>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <DefaultButton>I am a button.</DefaultButton>
        <img src={avatar} />
      </div>
    );
  }
}
