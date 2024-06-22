import React from "react";
import clx from "classnames";
import styles from "./ProfileCard.module.scss";

import { Profile } from "../../model/types/ProfileSchema";
import { Avatar, AvatarTheme } from "../../../../shared/ui/Avatar/Avatar";
import Button, { ButtonTheme } from "../../../../shared/ui/Button/Button";
import { Input, InputTheme } from "../../../../shared/ui/Input/Input";
import { ProfilePageHeader } from "../../../../pages/ProfilePage";
import { Country } from "../../../Country/model/types/CountrySchema";
import { CountrySelect } from "../../../Country/ui/CountrySelect/CountrySelect";

interface ProfileCardProps {
  className?: string;

  profileData?: Profile;
  isLoading?: boolean;
  isError?: string;
  readOnly?: boolean;

  onChangeFirstName: (value?: string) => void;
  onChangeSecondName: (value?: string) => void;
  onChangeUserName: (value?: string) => void;
  onChangeAge: (value?: string) => void;
  onChangeCountry: (country: Country) => void;
  omChangeCity: (value?: string) => void;
  onChangeAvatar: (value?: string) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const {
    className,
    profileData,
    isLoading,
    isError,
    readOnly,

    onChangeFirstName,
    onChangeSecondName,
    onChangeUserName,
    onChangeAge,
    onChangeCountry,
    omChangeCity,
    onChangeAvatar,
  } = props;

  const profilecardClasses = clx(styles.ProfileCard, {
    [className!]: className,
  });

  return (
    <div className={profilecardClasses}>
      <div className={styles.profile_inner}>
        <ProfilePageHeader />
        <header className={styles.profile_header}>
          <Avatar
            theme={AvatarTheme.BORDERED}
            src={profileData?.avatar}
            alt="image"
            width="70px"
            height="70px"
            borderRadius="500rem"
          />
          <div className={styles.header_bio}>
            <h3>
              {profileData?.firstname} {profileData?.secondname}
            </h3>
            <p>{profileData?.country}</p>
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
                onChange={onChangeFirstName}
                readOnly={readOnly}
              />
            </li>
            <li className={styles.profile_general_menu_item}>
              <Input
                theme={InputTheme.DEFAULT}
                value={profileData?.secondname}
                placeholderValue="SecondName"
                onChange={onChangeSecondName}
                readOnly={readOnly}
              />
            </li>
            <li className={styles.profile_general_menu_item}>
              <Input
                theme={InputTheme.DEFAULT}
                value={profileData?.username}
                placeholderValue="UserName"
                onChange={onChangeUserName}
                readOnly={readOnly}
              />
            </li>
            <li className={styles.profile_general_menu_item}>
              <CountrySelect
                placeholderValue="Страна"
                value={profileData?.country}
                onChange={onChangeCountry}
                readonly={readOnly}
              />
            </li>
            <li className={styles.profile_general_menu_item}>
              <Input
                theme={InputTheme.DEFAULT}
                value={profileData?.city}
                placeholderValue="City"
                onChange={omChangeCity}
                readOnly={readOnly}
              />
            </li>
            <li className={styles.profile_general_menu_item}>
              <Input
                theme={InputTheme.DEFAULT}
                value={profileData?.age?.toString()}
                placeholderValue="Age"
                onChange={onChangeAge}
                readOnly={readOnly}
              />
            </li>
            <li className={styles.profile_general_menu_item}>
              <Input
                theme={InputTheme.DEFAULT}
                value={profileData?.avatar}
                placeholderValue="Avatar link"
                onChange={onChangeAvatar}
                readOnly={readOnly}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
