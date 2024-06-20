import React from "react";
import clx from "classnames";
import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { AuthorizationModal } from "../../../features/Authorization";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { className } = props;

  const headerClasses = clx(styles.Header, {
    [className!]: className,
  });

  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onOpenModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

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
          <div className={styles.header_panel}>
            <ThemeSwitcher />
            {isAuthModal && <AuthorizationModal onOpenModal={isAuthModal} onCloseModal={onCloseModal} />}
            <Button theme={ButtonTheme.DEFAULT} onClick={onOpenModal}>
              Log in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
