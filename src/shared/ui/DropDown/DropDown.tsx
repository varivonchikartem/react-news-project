import React, { Fragment } from "react";
import { Menu } from "@headlessui/react";
import clx from "classnames";
import styles from "./DropDown.module.scss";
import Button, { ButtonTheme } from "../Button/Button";

interface DropDownItem {
  disabled?: boolean;
  content?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropDownProps {
  className?: string;
  items: DropDownItem[];
  menuPosition?: string;
  minWidth?: string;
  trigger: React.ReactNode;
}

function DropDown(props: DropDownProps) {
  const { className, items, minWidth, trigger, menuPosition } = props;

  const dropDownStyles = clx(styles.DropDown, {
    [className!]: className,
  });

  const menuPositionStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      inset: menuPosition || "auto",
      minWidth: minWidth || "fit-content",
    };
  }, [menuPosition]);

  return (
    <Menu as="div" className={dropDownStyles}>
      <Menu.Button className={styles.DropDown_button}>{trigger}</Menu.Button>
      <Menu.Items className={styles.DropDown_menu} style={menuPositionStyles}>
        {items.map((item, index) => (
          <div key={index} className={styles.DropDown_item}>
            <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
              {({ active }) => (
                <Button theme={active ? ButtonTheme.DEFAULT : ButtonTheme.DEFAULT} onClick={item.onClick}>
                  {item.content}
                </Button>
              )}
            </Menu.Item>
          </div>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default DropDown;
