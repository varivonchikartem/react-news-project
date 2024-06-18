import React from "react";
import clx from "classnames";
import styles from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { className } = props;

  const headerClasses = clx(styles.Header, {
    [className!]: className,
  });

  return (
    <header className={headerClasses}>
      <div className="container">
        <div className={styles.header_inner}>
          <a href="#" className={styles.header_link}>
            Timesphere
          </a>
          <form className={styles.header_form} action="/">
            <input className={styles.header_form_search} type="search" placeholder="Поиск статей" />
            <button type="submit" className={styles.header_form_button}></button>
          </form>
          <button type="button">Change theme</button>
        </div>
      </div>
    </header>
  );
};
