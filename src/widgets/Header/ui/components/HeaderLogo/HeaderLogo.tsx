import React from "react";
import clx from "classnames";
import styles from "./HeaderLogo.module.scss";

interface HeaderLogoProps {
  className?: string;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = (props) => {
  const { className } = props;

  const headerlogoClasses = clx(styles.HeaderLogo, {
    [className!]: className,
  });

  return (
    <div className={headerlogoClasses}>
      <a href="#" className={styles.logo}>
        Timesphere
      </a>
    </div>
  );
};
