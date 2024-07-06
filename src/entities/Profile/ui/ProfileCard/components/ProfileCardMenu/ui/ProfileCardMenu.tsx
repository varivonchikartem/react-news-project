import React from "react";
import clx from "classnames";
import styles from "./ProfileCardMenu.module.scss";
import Button, { ButtonTheme } from "../../../../../../../shared/ui/Button/Button";
import Skeleton from "../../../../../../../shared/ui/Skeleton/Skeleton";

interface ProfileCardMenuProps {
  className?: string;
  isLoading?: boolean;
}

export const ProfileCardMenu: React.FC<ProfileCardMenuProps> = (props) => {
  const { className, isLoading } = props;

  const profilecardmenuClasses = clx(styles.ProfileCardMenu, {
    [className!]: className,
  });

  if (isLoading) {
    return (
      <nav className={profilecardmenuClasses}>
        <ul className={styles.MenuList}>
          <li className={styles.item}>
            <Skeleton width="100px" height="40px" />
          </li>
          {[...Array(7)].map((_, index) => (
            <li className={styles.item} key={index}>
              <Skeleton width="80px" height="40px" />
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className={profilecardmenuClasses}>
      <ul className={styles.MenuList}>
        <li className={styles.item}>
          <Button theme={ButtonTheme.DEFAULT}>Account</Button>
        </li>
        {["Overview", "Posts", "Comments", "Saved", "Hidden", "Upvoted", "Downvoted"].map((item) => (
          <li className={styles.item} key={item}>
            <Button className={styles.sceleton} theme={ButtonTheme.DISABLED}>
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
