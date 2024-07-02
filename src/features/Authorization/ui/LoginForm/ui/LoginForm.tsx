import React from "react";
import clx from "classnames";
import styles from "./LoginForm.module.scss";
import { Input, InputTheme } from "../../../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../../../shared/ui/Button/Button";
import { useAppDispatch } from "../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getLoginFormUserName } from "../../../model/selectors/LoginFormSelectors/getLoginFormUserName/getLoginFormUserName";
import { getLoginFormPassword } from "../../../model/selectors/LoginFormSelectors/getLoginFormPassword/getLoginFormPassword";
import { LoginFormActions, LoginFormReducers } from "../../../model/slices/LoginFormSlice/LoginFormSlice";
import { LoginFormService } from "../../../model/services/LoginForm/LoginFormService";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";

interface LoginFormProps {
  className?: string;
}

const reducers: ReducersList = {
  loginForm: LoginFormReducers,
};

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props;

  const loginformClasses = clx(styles.LoginForm, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginFormUserName);
  const password = useSelector(getLoginFormPassword);

  const onLoginAsAdmin = () => {
    dispatch(LoginFormService({ username: "admin", password: "123" }));
  };

  const onLoginAsUser = () => {
    dispatch(LoginFormService({ username: "user", password: "123" }));
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={loginformClasses}>
        <Button className={styles.button} theme={ButtonTheme.DEFAULT} type="button" onClick={onLoginAsAdmin}>
          Admin
        </Button>
        <Button className={styles.button} theme={ButtonTheme.DEFAULT} type="button" onClick={onLoginAsUser}>
          User
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
