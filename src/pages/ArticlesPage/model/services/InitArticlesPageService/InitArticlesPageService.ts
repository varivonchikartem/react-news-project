import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { ArticlesPageActions } from "../../slices/ArticlesPageSlice";
import { ArticlesSortField, ArticlesSortOrder } from "../../../../../entities/Article";
import { ArticleType } from "../../../../../entities/Article/modal/types/ArticleSchema";
import { getArticlesPageInited } from "../../selectors/getArticlesPageInited/getArticlesPageInited";
import { FetchArticleListService } from "../FetchArticleListService/FetchArticleListService";

export const InitArticlesPageService = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  "articlesPage/InitArticlesPageService",
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const urlParamsMap: Record<string, (value: string) => void> = {
        articlesOrder: (value) => dispatch(ArticlesPageActions.setArticleOrder(value as ArticlesSortOrder)),
        articlesSort: (value) => dispatch(ArticlesPageActions.setArticleSort(value as ArticlesSortField)),
        articlesSearch: (value) => dispatch(ArticlesPageActions.setArticleSearch(value)),
        articlesType: (value) => dispatch(ArticlesPageActions.setArticleType(value as ArticleType)),
      };

      Object.entries(urlParamsMap).forEach(([param, action]) => {
        const paramValue = searchParams.get(param);
        if (paramValue !== null) {
          action(paramValue);
        }
      });
      dispatch(ArticlesPageActions.initState());
      dispatch(FetchArticleListService());
    }
  }
);
