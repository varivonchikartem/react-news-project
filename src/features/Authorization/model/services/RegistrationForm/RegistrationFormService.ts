import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../../../entities/User";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";

interface RegistrationFormServiceProps {
  username: string;
  password: string;
}

export const RegistrationFormService = createAsyncThunk<
  User,
  RegistrationFormServiceProps,
  ThunkConfig<string>
>("RegistrationForm/RegistrationFormService", async ({ username, password }, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.post<User>("registration", { username, password });
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
