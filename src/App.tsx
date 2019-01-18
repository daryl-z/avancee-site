import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as styles from "./index.module.css";
import * as avatar from "./assets/avatar.jpeg";
import { Customizer } from "office-ui-fabric-react";
import GlobalErrorBoundary from "./components/ErrorBoundarys/GlobalErrorBoundary";
import Nav from "./components/Nav";
import { FluentCustomizations } from "@uifabric/fluent-theme";
export interface HelloProps {
  compiler: string;
  framework: string;
}

interface State {
  readonly counter: number;
}

class BuggyCounter extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  state: State = { counter: 0 };

  handleClick() {
    this.setState(({ counter }: State) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export class Hello extends React.Component<HelloProps, {}> {
  componentDidMount() {
    setTimeout(() => {
      throw new Error("creash");
    }, 4000);
  }
  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <GlobalErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Nav />
            <div>
              <h1 className={styles.text}>
                Hello from {this.props.compiler} and {this.props.framework}!
              </h1>
              <DefaultButton>I am a button.</DefaultButton>
              <img src={avatar} />
            </div>
            <div>
              <p>
                <b>
                  This is an example of error boundaries in React 16.
                  <br />
                  <br />
                  Click on the numbers to increase the counters.
                  <br />
                  The counter is programmed to throw when it reaches 5. This
                  simulates a JavaScript error in a component.
                </b>
              </p>
              <hr />
              <p>
                These two counters are inside the same error boundary. If one
                crashes, the error boundary will replace both of them.
              </p>
              <BuggyCounter />
              <BuggyCounter />
              <hr />
              <p>
                These two counters are each inside of their own error boundary.
                So if one crashes, the other is not affected.
              </p>
              <BuggyCounter />
              <BuggyCounter />
            </div>
          </Suspense>
        </GlobalErrorBoundary>
      </Customizer>
    );
  }
}
