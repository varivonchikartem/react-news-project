import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { getArticlesPageOrder } from "../../selectors/getArticlesPageOrder/getArticlesPageOrder";
import { getArticlesPageSort } from "../../selectors/getArticlesPageSort/getArticlesPageSort";
import { getArticlesPageSearch } from "../../selectors/getArticlesPageSearch/getArticlesPageSearch";
import { addQueryParams } from "../../../../../shared/lib/url/addQueryParams/addQueryParams";
import { getArticlesPageType } from "../../selectors/getArticlesPageType/getArticlesPageType";
import { Article, ArticleType } from "../../../../../entities/Article/modal/types/ArticleSchema";

export const FetchArticlesPageListService = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  "FetchArticlesPageList/FetchArticlesPageListService",
  async (props, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const articlesSort = getArticlesPageSort(getState());
    const articlesOrder = getArticlesPageOrder(getState());
    const articlesSearch = getArticlesPageSearch(getState());
    const articlesType = getArticlesPageType(getState());

    try {
      addQueryParams({
        articlesSort,
        articlesOrder,
        articlesSearch,
        articlesType,
      });
      const response = await extra.api.get<Article[]>("/articles", {
        params: {
          _sort: articlesSort,
          _order: articlesOrder,
          q: articlesSearch,
          type: articlesType === ArticleType.ALL ? undefined : [articlesType],
        },
      });

      if (!response.data) throw Error();

      return response.data;
    } catch (e) {
      return rejectWithValue("Error");
    }
  }
);
