import React from "react";
import clx from "classnames";
import styles from "./ArticlesPage.module.scss";
import { Input, InputTheme } from "../../../shared/ui/Input/Input";
import { Modal } from "../../../shared/ui/Modal/Modal";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { AuthorizationModal } from "../../../features/Authorization";
import { ArticleList } from "../../../entities/Article/ui/ArticleList/ui/ArticleList";
import { Article, ArticleType } from "../../../entities/Article/modal/types/ArticleSchema";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleReducers } from "../../../entities/Article";
import { useSelector } from "react-redux";
import { getArticles } from "../../../entities/Article/modal/slices/ArticleSlice";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleService } from "../../../entities/Article/modal/service/Article/ArticleService";
import { ArticlesPageReducers } from "../model/slices/ArticlesPageSlice";
import { ArticlePageFilters } from "./components/ArticlePageFilters/ArticlePageFilters";
import { getArticlesPageView } from "../model/selectors/getArticlesPageView/getArticlesPageView";
import { getArticlesPageSearch } from "../model/selectors/getArticlesPageSearch/getArticlesPageSearch";
import { getArticlesPageOrder } from "../model/selectors/getArticlesPageOrder/getArticlesPageOrder";
import { getArticlesPageSort } from "../model/selectors/getArticlesPageSort/getArticlesPageSort";
import { getArticlesPageType } from "../model/selectors/getArticlesPageType/getArticlesPageType";
import { useDebounce } from "../../../shared/lib/hooks/useDebounce/useDebounce";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  article: ArticleReducers,
  articlesPage: ArticlesPageReducers,
};

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  const articlespageClasses = clx(styles.ArticlesPage, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);

  const articleView = useSelector(getArticlesPageView);
  const articleSearch = useSelector(getArticlesPageSearch);
  const articleOrder = useSelector(getArticlesPageOrder);
  const articleSort = useSelector(getArticlesPageSort);
  const articleType = useSelector(getArticlesPageType);

  const debouncedFetchData = useDebounce(() => {
    dispatch(
      ArticleService({
        articlesSearch: articleSearch,
        articlesOrder: articleOrder,
        articlesSort: articleSort,
        articlesType: articleType,
      })
    );
  }, 500);

  React.useEffect(() => {
    debouncedFetchData();
  }, [articleSearch, articleOrder, articleSort, articleType]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div className={articlespageClasses}>
        <ArticlePageFilters />
        <ArticleList articles={articles} articleView={articleView} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
