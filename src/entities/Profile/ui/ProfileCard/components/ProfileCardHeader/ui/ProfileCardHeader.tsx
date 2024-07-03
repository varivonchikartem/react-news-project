import React from "react";
import clx from "classnames";
import styles from "./ProfileCardHeader.module.scss";
import { Profile } from "../../../../../model/types/ProfileSchema";
import { Avatar, AvatarTheme } from "../../../../../../../shared/ui/Avatar/Avatar";
import { useSelector } from "react-redux";
import { getUserAuthenticationData } from "../../../../../../User/model/selectors/getUserAuthenticationData/getUserAuthenticationData";

interface ProfileCardHeaderProps {
  className?: string;

  profileData?: Profile;
}

export const ProfileCardHeader: React.FC<ProfileCardHeaderProps> = (props) => {
  const { className, profileData } = props;

  const profilecardheaderClasses = clx(styles.ProfileCardHeader, {
    [className!]: className,
  });

  return (
    <header className={profilecardheaderClasses}>
      <Avatar
        theme={AvatarTheme.BORDERED}
        src={profileData?.avatar}
        alt="image"
        width="70px"
        height="70px"
        borderRadius="500rem"
      />
      <div className={styles.Bio}>
        <h3>
          {profileData?.firstname} {profileData?.secondname}
        </h3>
        <p>{profileData?.country}</p>
      </div>
    </header>
  );
};
