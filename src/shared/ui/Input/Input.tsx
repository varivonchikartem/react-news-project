import React from "react";
import clx from "classnames";
import styles from "./Input.module.scss";

export enum InputTheme {
  DEFAULT = "default_theme",
}

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
  className?: string;

  value?: string | number;
  onChange?: (value: string) => void;

  theme: InputTheme;

  placeholderValue?: string;

  readonly?: boolean;
}

export function Input(props: InputProps) {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholderValue,
    readonly,
    theme = InputTheme.DEFAULT,
    ...otherProps
  } = props;

  const inputClasses = clx(styles.Input, {
    [className!]: className,

    [styles[theme]]: theme,
    [styles.readonly]: readonly,
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={inputClasses}>
      {placeholderValue && <div className={styles.placeholder}>{placeholderValue}</div>}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
}
