import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/ProfileSchema";

const initialState: ProfileSchema = {
  profileData: undefined,
  isLoading: false,
  isError: "",
};

const ProfileSlice = createSlice({
  name: "Profile",
  initialState: initialState,
  reducers: {},
});

export const { actions: ProfileActions, reducer: ProfileReducers } = ProfileSlice;
