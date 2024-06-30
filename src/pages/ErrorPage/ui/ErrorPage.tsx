import React from "react";
import clx from "classnames";
import styles from "./ErrorPage.module.scss";

interface ErrorPageProps {
  className?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { className } = props;

  const errorpageClasses = clx(styles.ErrorPage, {
    [className!]: className,
  });

  return <div className={errorpageClasses}>ErrorPage</div>;
};

export default ErrorPage;
