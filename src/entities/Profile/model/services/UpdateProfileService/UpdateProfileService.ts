import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { Profile } from "../../types/ProfileSchema";
import { getProfileEditedData } from "../../selectors/getProfileEditedData/getProfileEditedData";

export const UpdateProfileService = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  "profile/UpdateProfileService",
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const profileEditedData = getProfileEditedData(getState());

    try {
      const response = await extra.api.put<Profile>("/profile", profileEditedData);

      if (!response.data) throw Error();

      return response.data;
    } catch (e) {
      return rejectWithValue("Error");
    }
  }
);
