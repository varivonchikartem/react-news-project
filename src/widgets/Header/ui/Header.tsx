import React from "react";
import clx from "classnames";
import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { AuthorizationModal } from "../../../features/Authorization";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getUserAuthenticationData } from "../../../entities/User/model/selectors/getUserAuthenticationData/getUserAuthenticationData";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { Avatar } from "../../../shared/ui/Avatar/Avatar";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { UserActions } from "../../../entities/User";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { className } = props;

  const headerClasses = clx(styles.Header, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const userAuthenticationData = useSelector(getUserAuthenticationData);

  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onOpenModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = React.useCallback(() => {
    dispatch(UserActions.logout());
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
            {userAuthenticationData && (
              <>
                <DropDown
                  trigger={
                    <Avatar
                      src="https://images.pexels.com/photos/19101653/pexels-photo-19101653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="image"
                      width="31px"
                      height="31px"
                      borderRadius={30}
                    />
                  }
                  items={[
                    {
                      content: "Выйти",
                      onClick: onLogout,
                    },
                  ]}
                  menuPosition="33px 0 auto auto"
                  minWidth="300px"
                />
              </>
            )}
            {!userAuthenticationData && (
              <>
                <Button theme={ButtonTheme.DEFAULT} onClick={onOpenModal}>
                  Log in
                </Button>
                {isAuthModal && <AuthorizationModal onOpenModal={isAuthModal} onCloseModal={onCloseModal} />}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
