import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/ProfileSchema";
import { FetchProfileService } from "../services/FetchProfileService/FetchProfileService";

const initialState: ProfileSchema = {
  profileData: undefined,
  isLoading: false,
  isError: "",
};

const ProfileSlice = createSlice({
  name: "Profile",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchProfileService.pending, (state) => {
        state.isError = "";
        state.isLoading = true;
      })
      .addCase(FetchProfileService.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.profileData = action.payload;
      })
      .addCase(FetchProfileService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: ProfileActions, reducer: ProfileReducers } = ProfileSlice;
