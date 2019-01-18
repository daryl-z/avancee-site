import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { loadTheme } from 'office-ui-fabric-react';
import GlobalErrorBoundary from './components/ErrorBoundaries/GlobalErrorBoundary';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Link } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home/Home'));
const About = lazy(() => import('./routes/About/About'));
const Login = lazy(() => import('./routes/Login/Login'));
export interface IHelloProps {
  compiler: string;
  framework: string;
}

interface IState {
  readonly counter: number;
}

loadTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff'
  }
});
export default function App({ compiler, framework }: IHelloProps): JSX.Element {
  return (
    // preview fluent ui
    // <Customizer {...FluentCustomizations}>
    <Router>
      <GlobalErrorBoundary>
        <Link to="/">
          <PrimaryButton>Home</PrimaryButton>
        </Link>
        <Link to="/login">
          <PrimaryButton>Login</PrimaryButton>
        </Link>
        <Link to="/About">
          <PrimaryButton>About</PrimaryButton>
        </Link>
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
}
