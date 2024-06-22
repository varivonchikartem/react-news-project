import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/ProfileSchema";
import { FetchProfileService } from "../services/FetchProfileService/FetchProfileService";
import { UpdateProfileService } from "../services/UpdateProfileService/UpdateProfileService";

const initialState: ProfileSchema = {
  profileData: undefined,
  isLoading: false,
  isError: "",
  readOnly: true,
};

const ProfileSlice = createSlice({
  name: "Profile",
  initialState: initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload;
    },
    onCancelEdit: (state) => {
      state.readOnly = true;
      state.profileEditedData = state.profileData;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.profileEditedData = {
        ...state.profileData,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchProfileService.pending, (state) => {
        state.isError = undefined;
        state.isLoading = true;
      })
      .addCase(FetchProfileService.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.profileData = action.payload;
        state.profileEditedData = action.payload;
      })
      .addCase(FetchProfileService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(UpdateProfileService.pending, (state) => {
        state.isError = undefined;
        state.isLoading = true;
      })
      .addCase(UpdateProfileService.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.profileData = action.payload;
        state.profileEditedData = action.payload;
        state.readOnly = true;
      })
      .addCase(UpdateProfileService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: ProfileActions, reducer: ProfileReducers } = ProfileSlice;
