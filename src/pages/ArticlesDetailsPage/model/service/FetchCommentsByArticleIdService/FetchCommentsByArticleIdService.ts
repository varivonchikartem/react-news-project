import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { getUserAuthenticationData } from "../../../../../entities/User/model/selectors/getUserAuthenticationData/getUserAuthenticationData";
import { Comment } from "../../../../../entities/Сomment";

interface FetchCommentsByArticleIdServiceProps {
  articleId: string;
}

export const FetchCommentsByArticleIdService = createAsyncThunk<
  Comment[],
  FetchCommentsByArticleIdServiceProps,
  ThunkConfig<string>
>("FetchCommentsByArticleId/FetchCommentsByArticleIdService", async (props, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const { articleId } = props;

  try {
    const response = await extra.api.get<Comment[]>("/comments", {
      params: {
        articleId: articleId,
        _expand: "user",
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
