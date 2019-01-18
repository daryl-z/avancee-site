import * as React from 'react';

interface IState {
  readonly error: any;
  readonly errorInfo: any;
}

export default class GlobalErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  public componentDidCatch(error: any, errorInfo: any): void {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  public render(): any {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
