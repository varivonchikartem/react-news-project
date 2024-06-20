import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserActions } from "../../../../../entities/User";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { USER_LOCALSTORAGE_KEY } from "../../../../../shared/const/localStorage/User/UserKey/UserKey";

interface RegistrationFormServiceProps {
  username: string;
  password: string;
}

export const RegistrationFormService = createAsyncThunk<
  User,
  RegistrationFormServiceProps,
  ThunkConfig<string>
>("RegistrationForm/RegistrationFormService", async ({ username, password }, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.post<User>("registration", { username, password });
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
});
