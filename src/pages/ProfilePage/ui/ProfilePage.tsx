import React from "react";
import clx from "classnames";
import styles from "./ProfilePage.module.scss";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { FetchProfileService, ProfileActions, ProfileReducers } from "../../../entities/Profile";
import { ProfileCard } from "../../../entities/Profile/ui/ProfileCard/ProfileCard";
import { useSelector } from "react-redux";
import { Country } from "../../../entities/Country/model/types/CountrySchema";
import { getProfileReadOnly } from "../../../entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileEditedData } from "../../../entities/Profile/model/selectors/getProfileEditedData/getProfileEditedData";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { useParams } from "react-router-dom";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: ProfileReducers,
};

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const profilepageClasses = clx(styles.ProfilePage, className);

  const dispatch = useAppDispatch();
  const profileEditedData = useSelector(getProfileEditedData);
  const profileReadOnly = useSelector(getProfileReadOnly);

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    dispatch(FetchProfileService(id || ""));
  }, [dispatch]);

  const onChangeFirstName = React.useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch]
  );

  const onChangeSecondName = React.useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ secondname: value || "" }));
    },
    [dispatch]
  );

  const onChangeCity = React.useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = React.useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeUsername = React.useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = React.useCallback(
    (value?: string) => {
      dispatch(ProfileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeCountry = React.useCallback(
    (country?: Country) => {
      dispatch(ProfileActions.updateProfile({ country: country || Country.Belarus }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={profilepageClasses}>
        <ProfileCard
          profileData={profileEditedData}
          onChangeFirstName={onChangeFirstName}
          onChangeSecondName={onChangeSecondName}
          onChangeUserName={onChangeUsername}
          onChangeAge={onChangeAge}
          onChangeCountry={onChangeCountry}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          readOnly={profileReadOnly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
