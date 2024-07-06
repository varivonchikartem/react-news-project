import React from "react";
import clx from "classnames";
import styles from "./ProfileCard.module.scss";

import { Profile } from "../../model/types/ProfileSchema";
import { Avatar, AvatarTheme } from "../../../../shared/ui/Avatar/Avatar";
import Button, { ButtonTheme } from "../../../../shared/ui/Button/Button";
import { Input, InputTheme } from "../../../../shared/ui/Input/Input";
import { ProfilePageEditPanel } from "../../../../pages/ProfilePage";
import { Country } from "../../../Country/model/types/CountrySchema";
import { CountrySelect } from "../../../Country/ui/CountrySelect/CountrySelect";
import { ProfileCardHeader } from "./components/ProfileCardHeader/ui/ProfileCardHeader";
import { ProfileCardMenu } from "./components/ProfileCardMenu/ui/ProfileCardMenu";
import ProfileCardGeneral from "./components/ProfileCardGeneral/ui/ProfileCardGeneral";

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
  onChangeCity: (value?: string) => void;
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
    onChangeCity,
    onChangeAvatar,
  } = props;

  const profilecardClasses = clx(styles.ProfileCard, {
    [className!]: className,
  });

  const onChangeHandlers = {
    onChangeFirstName,
    onChangeSecondName,
    onChangeUserName,
    onChangeAge,
    onChangeCountry,
    onChangeCity,
    onChangeAvatar,
  };

  return (
    <div className={profilecardClasses}>
      <div className={styles.ProfileInner}>
        <ProfilePageEditPanel />
        <ProfileCardHeader profileData={profileData} />
        <ProfileCardMenu isLoading={isLoading} />
        <ProfileCardGeneral
          profileData={profileData}
          onChangeHandlers={onChangeHandlers}
          readOnly={readOnly}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
