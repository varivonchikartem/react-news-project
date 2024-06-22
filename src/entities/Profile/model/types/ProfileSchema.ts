import { Country } from "../../../Country/model/types/CountrySchema";

export interface Profile {
  id?: string;
  firstname?: string;
  secondname?: string;
  username?: string;
  age?: number;
  country?: Country;
  city?: string;
  avatar?: string;
}

export interface ProfileSchema {
  profileData?: Profile;
  profileEditedData?: Profile;

  isLoading: boolean;
  isError?: string;
  readOnly?: boolean;
}
