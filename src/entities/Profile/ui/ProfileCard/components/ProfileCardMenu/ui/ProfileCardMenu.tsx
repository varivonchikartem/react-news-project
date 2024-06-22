import React from "react";
import clx from "classnames";
import styles from "./ProfileCardMenu.module.scss";
import Button, { ButtonTheme } from "../../../../../../../shared/ui/Button/Button";

interface ProfileCardMenuProps {
  className?: string;
}

export const ProfileCardMenu: React.FC<ProfileCardMenuProps> = (props) => {
  const { className } = props;

  const profilecardmenuClasses = clx(styles.ProfileCardMenu, {
    [className!]: className,
  });

  return (
    <nav className={profilecardmenuClasses}>
      <ul className={styles.profile_menu_list}>
        <li className={styles.profile_menu_item}>
          <Button theme={ButtonTheme.DEFAULT}>Account</Button>
        </li>
        {["Overview", "Posts", "Comments", "Saved", "Hidden", "Upvoted", "Downvoted"].map((item) => (
          <li className={styles.profile_menu_item} key={item}>
            <Button theme={ButtonTheme.DISABLED}>{item}</Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
