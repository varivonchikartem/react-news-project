import React from "react";
import clx from "classnames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  DEFAULT = "default_theme",
  DISABLED = "disabled_theme",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  children: React.ReactNode;
  theme: ButtonTheme;
}

function Button(props: ButtonProps) {
  const { className, children, theme, ...otherProps } = props;

  const buttonClasses = clx(styles.Button, {
    [className!]: className,
    [styles[theme]]: theme,
  });

  return (
    <button className={buttonClasses} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
