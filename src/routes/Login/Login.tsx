import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { css, classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { getStyles, ILoginProps, ILoginStyles } from './Login.styles';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as styles from './index.m.scss';
import { string } from 'prop-types';

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
      <div className={css(classNames.login)}>
        <h1 className={styles.logo}>Logo</h1>
        <div className={styles.loginCard}>
          <h1>Log in</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              let errors: IError = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                {/* <button type="submit" disabled={isSubmitting}>
                  Submit
                </button> */}
                <PrimaryButton type="submit" disabled={isSubmitting}>
                  Login
                </PrimaryButton>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
