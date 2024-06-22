import React from "react";
import clx from "classnames";
import styles from "./ProfilePageHeader.module.scss";
import { useSelector } from "react-redux";
import { getProfileReadOnly } from "../../../../../entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly";
import Button, { ButtonTheme } from "../../../../../shared/ui/Button/Button";
import { useAppDispatch } from "../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfileActions } from "../../../../../entities/Profile";
import { UpdateProfileService } from "../../../../../entities/Profile/model/services/UpdateProfileService/UpdateProfileService";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;

  const profilepageheaderClasses = clx(styles.ProfilePageHeader, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);

  const onEdit = React.useCallback(() => {
    dispatch(ProfileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = React.useCallback(() => {
    dispatch(ProfileActions.onCancelEdit());
  }, [dispatch]);

  const onSaveEdit = React.useCallback(() => {
    dispatch(UpdateProfileService());
  }, [dispatch]);

  return (
    <div className={profilepageheaderClasses}>
      <h2 className={styles.title}>Profile</h2>
      {readOnly ? (
        <Button className={styles.edit_button} theme={ButtonTheme.DEFAULT} onClick={onEdit}>
          Редактировать
        </Button>
      ) : (
        <div className={styles.button_group}>
          <Button className={styles.reject_button} theme={ButtonTheme.REJECT} onClick={onCancelEdit}>
            Отменить
          </Button>
          <Button className={styles.save_button} theme={ButtonTheme.DEFAULT} onClick={onSaveEdit}>
            Сохранить
          </Button>
        </div>
      )}
    </div>
  );
};
