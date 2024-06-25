import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserActions } from "../../../../../entities/User";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { USER_LOCALSTORAGE_KEY } from "../../../../../shared/const/localStorage/User/UserKey/UserKey";
import { Article, ArticleType } from "../../types/ArticleSchema";
import {
  ArticlesSortField,
  ArticlesSortOrder,
} from "../../../ui/ArticleFilters/model/types/ArticleFiltersSchema";
import { addQueryParams } from "../../../../../shared/lib/url/addQueryParams/addQueryParams";

interface ArticleServiceProps {
  articlesSort?: ArticlesSortField;
  articlesOrder?: ArticlesSortOrder;
  articlesSearch?: string;
  articlesType?: ArticleType;

  articlesLimit?: number;
}

export const ArticleService = createAsyncThunk<Article[], ArticleServiceProps, ThunkConfig<string>>(
  "Article/ArticleService",
  async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    const { articlesSort, articlesOrder, articlesSearch, articlesType, articlesLimit } = props;

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
          _limit: articlesLimit,
        },
      });
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
