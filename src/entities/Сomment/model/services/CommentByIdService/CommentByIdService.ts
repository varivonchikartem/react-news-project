import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "../../types/CommentSchema";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";

export const CommentByIdService = createAsyncThunk<Comment[], void, ThunkConfig<string>>(
  "CommentById/CommentByIdService",
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Comment[]>("/comments");

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
