import React from "react";
import clx from "classnames";
import styles from "./LoginForm.module.scss";
import { Input, InputTheme } from "../../../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../../../shared/ui/Button/Button";

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props;

  const loginformClasses = clx(styles.LoginForm, {
    [className!]: className,
  });

  return (
    <div className={loginformClasses}>
      <Input className={styles.input} type="text" theme={InputTheme.DEFAULT} placeholderValue="Name" />
      <Input theme={InputTheme.DEFAULT} type="password" placeholderValue="Password" />
      <Button className={styles.button} theme={ButtonTheme.DEFAULT} type="button">
        Log in
      </Button>
    </div>
  );
};

export default LoginForm;
