import React from "react";
import clx from "classnames";
import styles from "./ProfilePageEditPanel.module.scss";
import { useSelector } from "react-redux";
import Button, { ButtonTheme } from "../../../../../shared/ui/Button/Button";
import { useAppDispatch } from "../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfileActions } from "../../../../../entities/Profile";
import { UpdateProfileService } from "../../../../../entities/Profile/model/services/UpdateProfileService/UpdateProfileService";
import { getUserAuthenticationData } from "../../../../../entities/User/model/selectors/getUserAuthenticationData/getUserAuthenticationData";
import { getProfileData } from "../../../../../entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileReadOnly } from "../../../../../entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly";
import Skeleton from "../../../../../shared/ui/Skeleton/Skeleton";

interface ProfilePageEditPanelProps {
  className?: string;
}

export const ProfilePageEditPanel: React.FC<ProfilePageEditPanelProps> = (props) => {
  const { className } = props;

  const profilepageheaderClasses = clx(styles.ProfilePageEditPanel, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);
  const userAuthenticationData = useSelector(getUserAuthenticationData);
  const profileData = useSelector(getProfileData);

  const canEdit = userAuthenticationData?.id == profileData?.id;

  const onEdit = React.useCallback(() => {
    dispatch(ProfileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = React.useCallback(() => {
    dispatch(ProfileActions.onCancelEdit());
  }, [dispatch]);

  const onSaveEdit = React.useCallback(() => {
    dispatch(UpdateProfileService(userAuthenticationData?.id ?? ""));
  }, [dispatch, userAuthenticationData]);

  if (!userAuthenticationData || !profileData ) {
    return (
      <div className={profilepageheaderClasses}>
        <Skeleton className={styles.title} width="200px" />
        <div className={styles.ButtonGroup}>
          <Skeleton height="40px" width="120px" />
        </div>
      </div>
    );
  }

  return (
    <div className={profilepageheaderClasses}>
      <h2 className={styles.title}>Profile</h2>
      {canEdit && (
        <div className={styles.ButtonGroup}>
          {readOnly ? (
            <Button className={styles.edit_button} theme={ButtonTheme.DEFAULT} onClick={onEdit}>
              Редактировать
            </Button>
          ) : (
            <div className={styles.ActionButtonGroup}>
              <Button className={styles.reject_button} theme={ButtonTheme.REJECT} onClick={onCancelEdit}>
                Отменить
              </Button>
              <Button className={styles.save_button} theme={ButtonTheme.DEFAULT} onClick={onSaveEdit}>
                Сохранить
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
