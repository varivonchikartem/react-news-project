import React from "react";
import clx from "classnames";
import styles from "./ErrorPage.module.scss";
import { AppImage } from "../../../shared/ui/AppImage/AppImage";
import { Header } from "../../../widgets/Header";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";

interface ErrorPageProps {
  className?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { className } = props;

  const errorpageClasses = clx(styles.ErrorPage, {
    [className!]: className,
  });

  const onReloadPage = () => {
    location.reload();
  };

  return (
    <div className={errorpageClasses}>
      <div className={styles.ErrorInner}>
        <div className={styles.Description}>
          <h1>Oops, something went wrong.</h1>
          <p className={styles.subtitle}>
            Take a moment to breathe. In and out. Everything will be okay soon. When you're ready, ease back
            into your work below.
          </p>
          <Button className={styles.button} theme={ButtonTheme.DEFAULT} onClick={onReloadPage}>
            Reload page
          </Button>
        </div>
        <AppImage minHeight="700px" src="https://media.sproutsocial.com/uploads/404-Space-Illustration.svg" />
      </div>
    </div>
  );
};

export default ErrorPage;
