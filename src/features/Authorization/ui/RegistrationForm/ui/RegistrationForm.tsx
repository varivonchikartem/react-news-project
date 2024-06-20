import React from "react";
import clx from "classnames";
import styles from "./RegistrationForm.module.scss";
import { Input, InputTheme } from "../../../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../../../shared/ui/Button/Button";

interface RegistrationFormProps {
  className?: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = (props) => {
  const { className } = props;

  const registrationformClasses = clx(styles.RegistrationForm, {
    [className!]: className,
  });

  return (
    <div className={registrationformClasses}>
      <Input className={styles.input} type="text" theme={InputTheme.DEFAULT} placeholderValue="Name" />
      <Input theme={InputTheme.DEFAULT} type="password" placeholderValue="Password" />
      <Button className={styles.button} theme={ButtonTheme.DEFAULT} type="button">
       Sign Up
      </Button>
    </div>
  );
};

export default RegistrationForm;
