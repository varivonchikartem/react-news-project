import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginFormSchema } from "../../types/LoginFormSchema";

const initialState: LoginFormSchema = {
  username: "",
  password: "",
  isLoading: false,
  isError: "",
};

const LoginFormSlice = createSlice({
  name: "LoginForm",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { actions: LoginFormActions, reducer: LoginFormReducers } = LoginFormSlice;
