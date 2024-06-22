import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { Profile } from "../../types/ProfileSchema";

export const FetchProfileService = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  "profile/FetchProfileService",
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Profile>("/profile");

      if (!response.data) throw Error();

      return response.data;
    } catch (e) {
      return rejectWithValue("Error");
    }
  }
);
