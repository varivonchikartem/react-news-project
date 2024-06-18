import React from "react";
import clx from "classnames";
import styles from "./SidebarItem.module.scss";
import { Icon } from "../../../../shared/ui/Icon/Icon";
import { useLocation } from "react-router-dom";
import { SidebarItemType } from "../../model/types/SidebarItemsSchema";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  className?: string;
  item: SidebarItemType;
}

export function SidebarItem(props: SidebarItemProps) {
  const { className, item } = props;
  const location = useLocation();

  const sidebaritemClasses = clx(styles.SidebarItem, {
    [className!]: className,
  });

  return (
    <Link to={item.path}>
      <div className={sidebaritemClasses}>
        <Icon Svg={item.Icon} active={location.pathname === item.path} />
      </div>
    </Link>
  );
}
