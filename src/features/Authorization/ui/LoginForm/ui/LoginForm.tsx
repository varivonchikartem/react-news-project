import React from "react";
import clx from "classnames";
import styles from "./LoginForm.module.scss";
import { Input, InputTheme } from "../../../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../../../shared/ui/Button/Button";
import { useAppDispatch } from "../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getLoginFormUserName } from "../../../model/selectors/LoginFormSelectors/getLoginFormUserName/getLoginFormUserName";
import { getLoginFormPassword } from "../../../model/selectors/LoginFormSelectors/getLoginFormPassword/getLoginFormPassword";
import { LoginFormActions } from "../../../model/slices/LoginFormSlice/LoginFormSlice";
import { LoginFormService } from "../../../model/services/LoginForm/LoginFormService";

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props;

  const loginformClasses = clx(styles.LoginForm, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginFormUserName);
  const password = useSelector(getLoginFormPassword);

  const onChangeUserName = React.useCallback(
    (value: string) => {
      dispatch(LoginFormActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = React.useCallback(
    (value: string) => {
      dispatch(LoginFormActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = React.useCallback(() => {
    dispatch(LoginFormService({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={loginformClasses}>
      <Input
        className={styles.input}
        type="text"
        theme={InputTheme.DEFAULT}
        placeholderValue="Name"
        onChange={onChangeUserName}
      />
      <Input
        theme={InputTheme.DEFAULT}
        type="password"
        placeholderValue="Password"
        onChange={onChangePassword}
      />
      <Button className={styles.button} theme={ButtonTheme.DEFAULT} type="button" onClick={onLoginClick}>
        Log in
      </Button>
    </div>
  );
};

export default LoginForm;
