import React from "react";
import clx from "classnames";
import styles from "./MainForm.module.scss";
import { LoginFormAsync } from "../../LoginForm/ui/LoginForm.async";
import { RegistrationFormAsync } from "../../RegistrationForm/ui/RegistrationForm.async";
import Button, { ButtonTheme } from "../../../../../shared/ui/Button/Button";

interface MainFormProps {
  className?: string;
}

export const MainForm: React.FC<MainFormProps> = (props) => {
  const { className } = props;

  const mainformClasses = clx(styles.MainForm, {
    [className!]: className,
  });

  const [formType, setFormType] = React.useState<"login" | "registration">("login");

  const onFormTypeChange = () => {
    setFormType((prevFormType) => (prevFormType === "login" ? "registration" : "login"));
  };

  return (
    <div className={mainformClasses}>
      <header className={styles.header}>
        <h2 className={styles.header_title}>
          {formType === "login" ? "Log in to your account" : "Create your account"}
        </h2>
        <p>Welcome!</p>
      </header>
      <main>
        <React.Suspense fallback="Loading">
          {formType === "login" && <LoginFormAsync />}
          {formType === "registration" && <RegistrationFormAsync />}
        </React.Suspense>
      </main>
      <footer className="footer">
        <p>
          {formType === "login" ? "Don't have an account?  " : " Already have an account?"}
          <Button theme={ButtonTheme.DEFAULT} onClick={onFormTypeChange}>
            {formType === "login" ? "   Sign up here.  " : "   Log in here."}
          </Button>
        </p>
      </footer>
    </div>
  );
};
