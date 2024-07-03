import React from "react";
import styles from "./ProfileCardGeneral.module.scss";
import { Country } from "../../../../../../Country/model/types/CountrySchema";
import { Profile, ProfileKey } from "../../../../../model/types/ProfileSchema";
import { Input, InputTheme } from "../../../../../../../shared/ui/Input/Input";
import { CountrySelect } from "../../../../../../Country/ui/CountrySelect/CountrySelect";

interface ProfileCardGeneralProps {
  profileData?: Profile;
  readOnly?: boolean;
  onChangeHandlers: {
    onChangeFirstName: (value?: string) => void;
    onChangeSecondName: (value?: string) => void;
    onChangeUserName: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    onChangeCountry: (country: Country) => void;
    onChangeCity: (value?: string) => void;
    onChangeAvatar: (value?: string) => void;
  };
}

interface InputField {
  key: ProfileKey;
  label: string;
  onChange: (value?: string | Country) => void;
}

const ProfileCardGeneral: React.FC<ProfileCardGeneralProps> = ({
  profileData,
  readOnly,
  onChangeHandlers,
}) => {
  const inputFields: InputField[] = [
    { key: "firstname", label: "FirstName", onChange: onChangeHandlers.onChangeFirstName },
    { key: "secondname", label: "SecondName", onChange: onChangeHandlers.onChangeSecondName },
    { key: "username", label: "UserName", onChange: onChangeHandlers.onChangeUserName },
    { key: "city", label: "City", onChange: onChangeHandlers.onChangeCity },
    { key: "age", label: "Age", onChange: onChangeHandlers.onChangeAge },
    { key: "avatar", label: "Avatar link", onChange: onChangeHandlers.onChangeAvatar },
  ];

  return (
    <div className={styles.ProfileGeneral}>
      <h2 className={styles.title}>General</h2>
      <ul className={styles.MenuList}>
        {inputFields.map((field) => (
          <li className={styles.item} key={field.key}>
            <Input
              theme={InputTheme.DEFAULT}
              value={profileData ? profileData[field.key] : ""}
              placeholderValue={field.label}
              onChange={field.onChange}
              readOnly={readOnly}
              type={field.key === "age" ? "number" : "text"}
            />
          </li>
        ))}
        <li className={styles.item}>
          <CountrySelect
            placeholderValue="Страна"
            value={profileData?.country}
            onChange={onChangeHandlers.onChangeCountry}
            readonly={readOnly}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProfileCardGeneral;
