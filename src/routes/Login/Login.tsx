import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { css, classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { getStyles, ILoginProps, ILoginStyles } from './Login.styles';
// import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import { Link } from 'react-router-dom';
import * as styles from './index.m.scss';

interface IError {
  email?: string;
}

const Login: React.FunctionComponent = props => {
  const getClassNames = classNamesFunction<ILoginProps, ILoginStyles>();
  const classNames = getClassNames(getStyles, {});
  console.log(getClassNames);
  console.log(classNames);

  return (
    <div>
      <div className={`${styles.login} ${css(classNames.login)}`}>
        <div className={styles.header}>
          <a className={styles.logo}>
            Logo
            {/*  TODO: img */}
          </a>
        </div>
        <div className={styles.loginCard}>
          <div className={styles.loginContent}>
            <h1 className={styles.title}>Log In</h1>
            <div className={styles.inner}>
              <div className="formItem">
                <Label htmlFor="anInput">Email Address</Label>
                <TextField type="email" name="email" required={true} placeholder="Email" />
              </div>
              <div className="formItem">
                <Label htmlFor="anInput">Password</Label>
                <TextField type="password" name="password" required={true} placeholder="Password" />
              </div>
              <div className={styles.inputHelp}>
                <Link to="#">Forget your password</Link>
              </div>
              <div className="btnWrapper">
                <PrimaryButton type="submit">Login</PrimaryButton>
              </div>
            </div>
          </div>
          <div className={styles.loginFooter}>
            <a href="https://github.com/Avancee" target="_blank">
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
