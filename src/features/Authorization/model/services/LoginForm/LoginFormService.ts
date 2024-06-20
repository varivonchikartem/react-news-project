import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserActions } from "../../../../../entities/User";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { USER_LOCALSTORAGE_KEY } from "../../../../../shared/const/localStorage/User/UserKey/UserKey";

interface LoginFormServiceProps {
  username: string;
  password: string;
}

export const LoginFormService = createAsyncThunk<User, LoginFormServiceProps, ThunkConfig<string>>(
  "LoginForm/LoginFormService",
  async ({ username, password }, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.post<User>("login", { username, password });
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(UserActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
