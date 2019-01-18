import * as React from "react";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import * as styles from "./index.m.css";

export default function Login(props: any) {
  return (
    <div>
      <h1 className={styles.text}>Login </h1>
      <PrimaryButton>Login</PrimaryButton>
    </div>
  );
}
