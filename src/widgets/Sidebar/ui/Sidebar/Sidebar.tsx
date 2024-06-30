import React from "react";
import clx from "classnames";
import styles from "./Sidebar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;

  const sidebarClasses = clx(styles.Sidebar, {
    [className!]: className,
  });

  const sidebarItemsList = useSelector(getSidebarItems);

  const itemsList = React.useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <li key={item.path}>
          <SidebarItem item={item} />
        </li>
      )),
    [sidebarItemsList]
  );

  return (
    <nav className={sidebarClasses}>
      <ul>{itemsList}</ul>
    </nav>
  );
};
