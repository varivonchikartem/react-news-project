import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/UserSchema";
import { USER_LOCALSTORAGE_KEY } from "../../../../shared/const/localStorage/User/UserKey/UserKey";

const initialState: UserSchema = {
};

const UserSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.userAuthenticationData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.userAuthenticationData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.userAuthenticationData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: UserActions, reducer: UserReducers } = UserSlice;
