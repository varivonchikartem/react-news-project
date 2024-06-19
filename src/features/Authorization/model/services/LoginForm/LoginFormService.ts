import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../../../entities/User";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";

interface LoginFormServiceProps {
  username: string;
  password: string;
}

export const LoginFormService = createAsyncThunk<User, LoginFormServiceProps, ThunkConfig<string>>(
  "LoginForm/LoginFormService",
  async ({ username, password }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.post<User>("login", { username, password });
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
