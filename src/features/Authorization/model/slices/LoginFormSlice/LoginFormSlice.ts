import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginFormSchema } from "../../types/LoginFormSchema";
import { LoginFormService } from "../../services/LoginForm/LoginFormService";

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
  extraReducers: (builder) => {
    builder
      .addCase(LoginFormService.pending, (state) => {
        state.isError = "";
        state.isLoading = true;
      })
      .addCase(LoginFormService.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(LoginFormService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: LoginFormActions, reducer: LoginFormReducers } = LoginFormSlice;
