import * as React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { loadTheme } from 'office-ui-fabric-react';
import GlobalErrorBoundary from './components/ErrorBoundaries/GlobalErrorBoundary';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { defaultTheme } from './utils/themes';

const Home = lazy(() => import('./routes/Home/Home'));
const About = lazy(() => import('./routes/About/About'));
const Login = lazy(() => import('./routes/Login/Login'));

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
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </Switch>
        </Suspense>
      </GlobalErrorBoundary>
    </Router>
    // </Customizer>
  );
};

export default App;
