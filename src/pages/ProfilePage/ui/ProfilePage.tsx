import React from "react";
import clx from "classnames";
import styles from "./ProfilePage.module.scss";
import { Avatar } from "../../../shared/ui/Avatar/Avatar";
import { Input, InputTheme } from "../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const profilepageClasses = clx(styles.ProfilePage, className);

  return (
    <div className={profilepageClasses}>
      <div className="wrapper">
        <div className={styles.profile_inner}>
          <header className={styles.profile_header}>
            <Avatar
              src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png"
              alt="image"
              width="70px"
              height="70px"
              borderRadius="500rem"
            />
            <div className={styles.header_bio}>
              <h3>Right_Street_19</h3>
              <p>u/Right_Street_19</p>
            </div>
          </header>
          <nav className={styles.profile_menu}>
            <ul className={styles.profile_menu_list}>
              <li className={styles.profile_menu_item}>
                <Button theme={ButtonTheme.DEFAULT}>Account</Button>
              </li>
              <li className={styles.profile_menu_item}>
                <Button theme={ButtonTheme.DISABLED}>Overview</Button>
              </li>
              <li className={styles.profile_menu_item}>
                <Button theme={ButtonTheme.DISABLED}>Posts</Button>
              </li>
              <li className={styles.profile_menu_item}>
                <Button theme={ButtonTheme.DISABLED}>Comments</Button>
              </li>
              <li className={styles.profile_menu_item}>
                <Button theme={ButtonTheme.DISABLED}>Saved</Button>
              </li>
              <li className={styles.profile_menu_item}>
                <Button theme={ButtonTheme.DISABLED}>Hidden</Button>
              </li>
              <li className={styles.profile_menu_item}>
                <Button theme={ButtonTheme.DISABLED}>Upvoted</Button>
              </li>
              <li className={styles.profile_menu_item}>
                <Button theme={ButtonTheme.DISABLED}>Downvoted</Button>
              </li>
            </ul>
          </nav>
          <div className={styles.profile_general}>
            <h2 className={styles.profile_general_title}>General</h2>
            <ul className={styles.profile_general_menu_list}>
              <li className={styles.profile_general_menu_item}>
                <Input theme={InputTheme.DEFAULT} placeholderValue="Name" />
              </li>
              <li className={styles.profile_general_menu_item}>
                <Input theme={InputTheme.DEFAULT} placeholderValue="Name" />
              </li>
              <li className={styles.profile_general_menu_item}>
                <Input theme={InputTheme.DEFAULT} placeholderValue="Name" />
              </li>
              <li className={styles.profile_general_menu_item}>
                <Input theme={InputTheme.DEFAULT} placeholderValue="Name" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
