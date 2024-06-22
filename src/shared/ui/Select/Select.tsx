import React from "react";
import clx from "classnames";
import styles from "./Select.module.scss";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, onChange, value, readonly } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  const optionsList = React.useMemo(
    () =>
      options?.map((opt) => (
        <option className={styles.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const SelectStyles = clx(styles.Select, {
    [className!]: className,
  });

  return (
    <div className={SelectStyles}>
      <select disabled={readonly} className={styles.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
};

export default Select;
