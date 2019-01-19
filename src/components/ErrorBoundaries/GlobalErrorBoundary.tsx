import * as React from 'react';

interface IState {
  readonly error: Error | null;
  readonly errorInfo: React.ErrorInfo;
}

export interface IProps {
  children?: React.ReactNode;
}
export default class GlobalErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  public componentDidCatch(error: Error | null, errorInfo: React.ErrorInfo): void {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  public render(): React.ReactNode {
    const { children } = this.props;
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
    return children;
  }
}
