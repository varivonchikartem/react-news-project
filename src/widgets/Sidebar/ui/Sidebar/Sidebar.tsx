import React from "react";
import clx from "classnames";
import styles from "./Sidebar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { SidebarItemsList } from "../../model/types/SidebarItemsSchema";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;

  const sidebarClasses = clx(styles.Sidebar, {
    [className!]: className,
  });

  const itemsList = React.useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <li key={item.path}>
          <SidebarItem item={item} />
        </li>
      )),
    []
  );

  return (
    <nav className={sidebarClasses}>
      <ul>{itemsList}</ul>
    </nav>
  );
};
