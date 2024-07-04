import React from "react";
import clx from "classnames";
import styles from "./HeaderAuthPanel.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getUserAuthenticationData } from "../../../../../entities/User/model/selectors/getUserAuthenticationData/getUserAuthenticationData";
import { UserActions } from "../../../../../entities/User";
import DropDown from "../../../../../shared/ui/DropDown/DropDown";
import { Avatar, AvatarTheme } from "../../../../../shared/ui/Avatar/Avatar";
import Button, { ButtonTheme } from "../../../../../shared/ui/Button/Button";
import { Icon, IconTheme } from "../../../../../shared/ui/Icon/Icon";
import { SidebarModal } from "../../../../Sidebar/ui/SidebarModal/SidebarModal";
import { AuthorizationModal } from "../../../../../features/Authorization";

interface HeaderAuthPanelProps {
  className?: string;
}

export const HeaderAuthPanel: React.FC<HeaderAuthPanelProps> = ({ className }) => {
  const headerAuthPanelClasses = clx(styles.HeaderAuthPanel, className);

  const dispatch = useDispatch();
  const userAuthenticationData = useSelector(getUserAuthenticationData);

  const [isActiveModal, setIsActiveModal] = React.useState(false);

  const onOpenModal = React.useCallback(() => {
    setIsActiveModal(true);
  }, []);

  const onCloseModal = React.useCallback(() => {
    setIsActiveModal(false);
  }, []);

  const onLogout = () => {
    dispatch(UserActions.logout());
  };

  const renderAuthenticated = () => (
    <DropDown
      trigger={
        <Avatar
          theme={AvatarTheme.DEFAULT}
          src={userAuthenticationData?.avatar}
          alt="image"
          width="31px"
          height="31px"
          borderRadius="30px"
        />
      }
      items={[{ content: "Выйти", onClick: onLogout }]}
      menuPosition="40px 0 auto auto"
      minWidth="250px"
    />
  );

  const renderUnauthenticated = () => (
    <div className={styles.ButtonGroup}>
      <Button theme={ButtonTheme.DEFAULT} onClick={onOpenModal}>
        Log in
      </Button>

      {isActiveModal && <AuthorizationModal onOpenModal={isActiveModal} onCloseModal={onCloseModal} />}
    </div>
  );

  return (
    <div className={headerAuthPanelClasses}>
      {userAuthenticationData ? renderAuthenticated() : renderUnauthenticated()}
    </div>
  );
};
