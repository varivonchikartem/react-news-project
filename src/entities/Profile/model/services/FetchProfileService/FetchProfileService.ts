import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { Profile } from "../../types/ProfileSchema";
import { getRouteProfile } from "../../../../../shared/const/PageRoutes/PageRoutes";

export const FetchProfileService = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  "profile/FetchProfileService",
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Profile>(getRouteProfile(profileId));

      if (!response.data) throw Error();

      return response.data;
    } catch (e) {
      return rejectWithValue("Error");
    }
  }
);
