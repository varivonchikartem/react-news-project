import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { Article, ArticleType } from "../../../../../entities/Article/modal/types/ArticleSchema";

interface FetchArticleListServiceProps {
  limit?: number;
}

export const FetchArticleListService = createAsyncThunk<
  Article[],
  FetchArticleListServiceProps,
  ThunkConfig<string>
>("FetchArticlesPageList/FetchArticleListService", async (props, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const { limit } = props;

  try {
    const response = await extra.api.get<Article[]>("/articles", {
      params: {
        _limit: limit,
      },
    });

    if (!response.data) throw Error();

    return response.data;
  } catch (e) {
    return rejectWithValue("Error");
  }
});
