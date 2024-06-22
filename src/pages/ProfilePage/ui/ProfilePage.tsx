import React from "react";
import clx from "classnames";
import styles from "./ProfilePage.module.scss";
import { Avatar } from "../../../shared/ui/Avatar/Avatar";
import { Input, InputTheme } from "../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { FetchProfileService } from "../../../entities/Profile";
import { ProfileCard } from "../../../entities/Profile/ui/ProfileCard/ProfileCard";
import { useSelector } from "react-redux";
import { getProfileData } from "../../../entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileUserName } from "../../../entities/Profile/model/selectors/getProfileUserName/getProfileUserName";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const profilepageClasses = clx(styles.ProfilePage, className);

  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileData);
  const username = useSelector(getProfileUserName);

  React.useEffect(() => {
    dispatch(FetchProfileService());
  }, [dispatch]);

  return (
    <>
      <ProfileCard profileData={profileData} />
    </>
  );
};

export default ProfilePage;
