import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import "./index.module.css";
// let styles = require("./index.module.css");
export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1 className="text">
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <DefaultButton>I am a button.</DefaultButton>
      </div>
    );
  }
}
// "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
