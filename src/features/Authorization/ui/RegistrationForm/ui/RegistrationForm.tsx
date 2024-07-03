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

  const onRegistrationAsAdmin = () => {
    dispatch(RegistrationFormService({ username: "admin", password: "123" }));
  };

  const onRegistrationAsUser = () => {
    dispatch(RegistrationFormService({ username: "user", password: "123" }));
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={registrationformClasses}>
        <Button
          className={styles.button}
          theme={ButtonTheme.DEFAULT}
          type="button"
          onClick={onRegistrationAsAdmin}
        >
          Admin
        </Button>
        <Button
          className={styles.button}
          theme={ButtonTheme.DEFAULT}
          type="button"
          onClick={onRegistrationAsUser}
        >
          User
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default RegistrationForm;
