import React, { useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticlesPageReducers } from "../model/slices/ArticlesPageSlice";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "../model/selectors/getArticlesPageView/getArticlesPageView";
import { getArticlesPageData } from "../model/selectors/getArticlesPageData/getArticlesPageData";
import { InitArticlesPageService } from "../model/services/InitArticlesPageService/InitArticlesPageService";
import { ArticleList } from "../../../entities/Article/ui/ArticleList/ui/ArticleList";
import { ArticlePageFilters } from "./components/ArticlePageFilters/ArticlePageFilters";

const ArticlesPage = () => {
  const reducers: ReducersList = {
    articlesPage: ArticlesPageReducers,
  };

  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticlesPageData);
  const articleView = useSelector(getArticlesPageView);

  

  useEffect(() => {
    dispatch(InitArticlesPageService(searchParams));
  }, [dispatch, searchParams]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <ArticlePageFilters />
      <ArticleList articles={articles} articleView={articleView} />
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
