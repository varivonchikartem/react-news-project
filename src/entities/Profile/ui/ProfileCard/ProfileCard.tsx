import React from "react";
import clx from "classnames";
import styles from "./ProfileCard.module.scss";

import { Profile } from "../../model/types/ProfileSchema";
import { Avatar } from "../../../../shared/ui/Avatar/Avatar";
import Button, { ButtonTheme } from "../../../../shared/ui/Button/Button";
import { Input, InputTheme } from "../../../../shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;

  profileData?: Profile;
  isLoading?: boolean;
  isError?: string;
  readonly?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const { className, profileData, isLoading, isError, readonly } = props;

  const profilecardClasses = clx(styles.ProfileCard, {
    [className!]: className,
  });

  return (
    <div className={profilecardClasses}>
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
                <Input
                  theme={InputTheme.DEFAULT}
                  value={profileData?.firstname}
                  placeholderValue="FirstName"
                  readOnly={readonly}
                />
              </li>
              <li className={styles.profile_general_menu_item}>
                <Input
                  theme={InputTheme.DEFAULT}
                  value={profileData?.secondname}
                  placeholderValue="SecondName"
                  readOnly={readonly}
                />
              </li>
              <li className={styles.profile_general_menu_item}>
                <Input
                  theme={InputTheme.DEFAULT}
                  value={profileData?.username}
                  placeholderValue="UserName"
                  readOnly={readonly}
                />
              </li>
              <li className={styles.profile_general_menu_item}>Country</li>
              <li className={styles.profile_general_menu_item}>
                <Input
                  theme={InputTheme.DEFAULT}
                  value={profileData?.city}
                  placeholderValue="City"
                  readOnly={readonly}
                />
              </li>
              <li className={styles.profile_general_menu_item}>
                <Input
                  theme={InputTheme.DEFAULT}
                  value={profileData?.age?.toString()}
                  placeholderValue="Age"
                  readOnly={readonly}
                />
              </li>
              <li className={styles.profile_general_menu_item}>
                <Input
                  theme={InputTheme.DEFAULT}
                  value={profileData?.avatar}
                  placeholderValue="Avatar link"
                  readOnly={readonly}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
