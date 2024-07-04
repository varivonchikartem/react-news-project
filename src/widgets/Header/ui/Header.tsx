import React from "react";
import clx from "classnames";
import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher";

import { ThrowErrorButton } from "../../../app/providers/ErrorBoundary/components/ThrowErrorButton";
import { HeaderAuthPanel } from "./components/HeaderAuthPanel/HeaderAuthPanel";
import { HeaderSearch } from "./components/HeaderSearch/HeaderSearch";
import { HeaderLogo } from "./components/HeaderLogo/HeaderLogo";
import { SidebarModal } from "../../Sidebar/ui/SidebarModal/SidebarModal";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { Icon, IconTheme } from "../../../shared/ui/Icon/Icon";
import TiltedIcon from "../../../shared/assets/icons/list.svg";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { className } = props;

  const headerClasses = clx(styles.Header, {
    [className!]: className,
  });

  const [isActiveSidebarModal, setIsActiveSidebarModal] = React.useState(false);

  const onOpenSidebarModal = React.useCallback(() => {
    setIsActiveSidebarModal(true);
  }, []);

  const onCloseSidebarModal = React.useCallback(() => {
    setIsActiveSidebarModal(false);
  }, []);

  return (
    <header className={headerClasses}>
      <div className="container">
        <div className={styles.HeaderInner}>
          <HeaderLogo />
          <HeaderSearch />

          <div className={styles.HeaderPanel}>
            <ThrowErrorButton />
            <ThemeSwitcher />
            <Button
              className={styles.sidebar_button}
              theme={ButtonTheme.DEFAULT}
              onClick={onOpenSidebarModal}
            >
              <Icon theme={IconTheme.DEFAULT} Svg={TiltedIcon} />
            </Button>
            <SidebarModal onOpenModal={isActiveSidebarModal} onCloseModal={onCloseSidebarModal} />

            <HeaderAuthPanel />
          </div>
        </div>
      </div>
    </header>
  );
};
