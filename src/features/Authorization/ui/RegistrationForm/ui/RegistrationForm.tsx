import React from "react";
import clx from "classnames";
import styles from "./RegistrationForm.module.scss";
import { Input, InputTheme } from "../../../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../../../shared/ui/Button/Button";
import { useAppDispatch } from "../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getRegistrationFormUserName } from "../../../model/selectors/RegistrationFormSelectors/getRegistrationFormUserName/getRegistrationFormUserName";
import { getRegistrationFormPassword } from "../../../model/selectors/RegistrationFormSelectors/getRegistrationFormPassword/getRegistrationFormPassword";
import {
  RegistrationFormActions,
  RegistrationFormReducers,
} from "../../../model/slices/RegistrationFormSlice/RegistrationFormSlice";
import { RegistrationFormService } from "../../../model/services/RegistrationForm/RegistrationFormService";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";

interface RegistrationFormProps {
  className?: string;
}

const reducers: ReducersList = {
  registrationForm: RegistrationFormReducers,
};

const RegistrationForm: React.FC<RegistrationFormProps> = (props) => {
  const { className } = props;

  const registrationformClasses = clx(styles.RegistrationForm, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const username = useSelector(getRegistrationFormUserName);
  const password = useSelector(getRegistrationFormPassword);

  const onChangeUserName = React.useCallback(
    (value: string) => {
      dispatch(RegistrationFormActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = React.useCallback(
    (value: string) => {
      dispatch(RegistrationFormActions.setPassword(value));
    },
    [dispatch]
  );

  const onRegistrationClick = React.useCallback(() => {
    dispatch(RegistrationFormService({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={registrationformClasses}>
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
        <Button
          className={styles.button}
          theme={ButtonTheme.DEFAULT}
          type="button"
          onClick={onRegistrationClick}
        >
          Sign Up
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default RegistrationForm;
