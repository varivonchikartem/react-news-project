import React from "react";
import clx from "classnames";
import styles from "./ErrorPage.module.scss";
import { AppImage } from "../../../shared/ui/AppImage/AppImage";

interface ErrorPageProps {
  className?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { className } = props;

  const errorpageClasses = clx(styles.ErrorPage, {
    [className!]: className,
  });

  return (
    <div className={errorpageClasses}>
      <div className={styles.main}>
        <div className={styles.main1}>
          <h1>Oops, something went wrong.</h1>
          <p className={styles.subtitle}>
            Take a moment to breathe. In and out. Everything will be okay soon. When you're ready, ease back
            into your work below.
          </p>
        </div>
        <div className={styles.main2}>
          <AppImage
            minHeight="700px"
            src="https://media.sproutsocial.com/uploads/404-Space-Illustration.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
