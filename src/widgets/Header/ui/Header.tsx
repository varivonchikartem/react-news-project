import React from "react";
import clx from "classnames";
import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher";

import { ThrowErrorButton } from "../../../app/providers/ErrorBoundary/components/ThrowErrorButton";
import { HeaderAuthPanel } from "./components/HeaderAuthPanel/HeaderAuthPanel";
import { HeaderSearch } from "./components/HeaderSearch/HeaderSearch";
import { HeaderLogo } from "./components/HeaderLogo/HeaderLogo";

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
        <div className={styles.HeaderInner}>
          <HeaderLogo />
          <HeaderSearch />

          <div className={styles.HeaderPanel}>
            <ThrowErrorButton />
            <ThemeSwitcher />
            <HeaderAuthPanel />
          </div>
        </div>
      </div>
    </header>
  );
};
