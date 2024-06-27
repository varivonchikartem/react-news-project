import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { getUserAuthenticationData } from "../../../../../entities/User/model/selectors/getUserAuthenticationData/getUserAuthenticationData";
import { getArticleDetailsData } from "../../selectors/getArticleDetailsData";

interface AddCommentForArticleServiceProps {
  commentFormTitle: string;
  commentFormText: string;
}

export const AddCommentForArticleService = createAsyncThunk<
  Comment,
  AddCommentForArticleServiceProps,
  ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (props, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const { commentFormTitle, commentFormText } = props;

  const userData = getUserAuthenticationData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !commentFormTitle || !commentFormText || !article) {
    return rejectWithValue("no data");
  }

  try {
    const response = await extra.api.post<Comment>("/comments", {
      articleId: article.id,
      userId: userData.id,
      commentTitle: commentFormTitle,
      commentFormText: commentFormText,
    });

    if (!response.data) {
      throw new Error();
    }



    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
