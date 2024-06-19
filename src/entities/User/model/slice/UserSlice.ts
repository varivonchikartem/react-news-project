import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../types/UserSchema";

const initialState: UserSchema = {};

const UserSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {},
});

export const { actions: UserActions, reducer: UserReducers } = UserSlice;
