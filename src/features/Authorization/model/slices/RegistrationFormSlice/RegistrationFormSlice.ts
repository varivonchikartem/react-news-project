import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegistrationFormSchema } from "../../types/RegistrationFormSchema";
import { RegistrationFormService } from "../../services/RegistrationForm/RegistrationFormService";

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
  extraReducers: (builder) => {
    builder
      .addCase(RegistrationFormService.pending, (state) => {
        state.isError = "";
        state.isLoading = true;
      })
      .addCase(RegistrationFormService.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(RegistrationFormService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: RegistrationFormActions, reducer: RegistrationFormReducers } = RegistrationFormSlice;
