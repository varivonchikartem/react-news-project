import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegistrationFormSchema } from "../../types/RegistrationFormSchema";

const initialState: RegistrationFormSchema = {
  username: "",
  password: "",
  isLoading: false,
  isError: "",
};

const RegistrationFormSlice = createSlice({
  name: "RegistrationForm",
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

export const { actions: RegistrationFormActions, reducer: RegistrationFormReducers } = RegistrationFormSlice;
