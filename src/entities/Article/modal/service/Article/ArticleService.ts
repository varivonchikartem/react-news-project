import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserActions } from "../../../../../entities/User";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { USER_LOCALSTORAGE_KEY } from "../../../../../shared/const/localStorage/User/UserKey/UserKey";
import { Article, ArticleType } from "../../types/ArticleSchema";
import {
  ArticlesSortField,
  ArticlesSortOrder,
} from "../../../ui/ArticleFilters/model/types/ArticleFiltersSchema";

interface ArticleServiceProps {
  articlesSort: ArticlesSortField;
  articlesOrder: ArticlesSortOrder;
  articlesSearch: string;
  articlesType: ArticleType;
}

export const ArticleService = createAsyncThunk<Article[], ArticleServiceProps, ThunkConfig<string>>(
  "Article/ArticleService",
  async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    const { articlesSort, articlesOrder, articlesSearch, articlesType } = props;

    try {
      const response = await extra.api.get<Article[]>("/articles", {
        params: {
          _sort: articlesSort,
          _order: articlesOrder,
          q: articlesSearch,
          type: articlesType === ArticleType.ALL ? undefined : [articlesType],
        },
      });
      if (!response.data) {
        throw new Error();
      }

      console.log(response.data);

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
