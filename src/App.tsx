import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as styles from "./index.module.css";
import * as avatar from "./assets/avatar.jpeg";
import { Customizer } from "office-ui-fabric-react";
import Nav from "./components/Nav";
import { FluentCustomizations } from "@uifabric/fluent-theme";
export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <Nav />
        <div>
          <h1 className={styles.text}>
            Hello from {this.props.compiler} and {this.props.framework}!
          </h1>
          <DefaultButton>I am a button.</DefaultButton>
          <img src={avatar} />
        </div>
      </Customizer>
    );
  }
}
