import * as React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { loadTheme } from 'office-ui-fabric-react';
import GlobalErrorBoundary from './components/ErrorBoundaries/GlobalErrorBoundary';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { defaultTheme } from './utils/themes';
import AsyncCompo from './routes';

loadTheme({
  palette: defaultTheme
});

const App: React.FunctionComponent = () => {
  return (
    // preview fluent ui
    // <Customizer {...FluentCustomizations}>
    <Router>
      <GlobalErrorBoundary>
        {/* <Link to="/">
          <PrimaryButton>Home</PrimaryButton>
        </Link>
        <Link to="/login">
          <PrimaryButton>Login</PrimaryButton>
        </Link>
        <Link to="/About">
          <PrimaryButton>About</PrimaryButton>
        </Link> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" render={() => <AsyncCompo componentName="Home" />} />
            <Route path="/about" render={() => <AsyncCompo componentName="About" />} />
            <Route path="/login" render={() => <AsyncCompo componentName="Login" />} />
          </Switch>
        </Suspense>
      </GlobalErrorBoundary>
    </Router>
    // </Customizer>
  );
};

export default App;
