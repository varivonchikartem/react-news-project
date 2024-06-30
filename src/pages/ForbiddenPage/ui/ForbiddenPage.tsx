import React from "react";
import clx from "classnames";
import styles from "./ForbiddenPage.module.scss";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: React.FC<ForbiddenPageProps> = (props) => {
  const { className } = props;

  const forbiddenpageClasses = clx(styles.ForbiddenPage, {
    [className!]: className,
  });

  return <div className={forbiddenpageClasses}>ForbiddenPage</div>;
};

export default ForbiddenPage;
