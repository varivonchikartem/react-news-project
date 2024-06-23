import React from "react";
import clx from "classnames";
import styles from "./ArticlePageFilters.module.scss";
import { ArticleView } from "../../../../../entities/Article/modal/types/ArticleSchema";
import { ArticlesPageActions } from "../../../model/slices/ArticlesPageSlice";
import { useAppDispatch } from "../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "../../../model/selectors/getArticlesPageView/getArticlesPageView";
import { ArticleViewHandler } from "../../../../../entities/Article/ui/ArticleFilters/ui/components/ArticleViewHandler/ArticleViewHandler";
import { ArticleSortHandler } from "../../../../../entities/Article/ui/ArticleFilters/ui/components/ArticleSortHandler/ArticleSortHandler";
import { ArticleActions, ArticlesSortField, ArticlesSortOrder } from "../../../../../entities/Article";
import { getArticlesPageOrder } from "../../../model/selectors/getArticlesPageOrder/getArticlesPageOrder";
import { getArticlesPageSort } from "../../../model/selectors/getArticlesPageSort/getArticlesPageSort";
import { ArticleService } from "../../../../../entities/Article/modal/service/Article/ArticleService";

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters: React.FC<ArticlePageFiltersProps> = (props) => {
  const { className } = props;

  const articlepagefiltersClasses = clx(styles.ArticlePageFilters, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const articleView = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);



  const onViewClick = React.useCallback(
    (articleView: ArticleView) => {
      dispatch(ArticlesPageActions.setArticleView(articleView));
    },
    [dispatch]
  );

  const onChangeOrder = React.useCallback(
    (articleView: ArticlesSortOrder) => {
      dispatch(ArticlesPageActions.setArticleOrder(articleView));
    },
    [dispatch]
  );

  const onChangeSort = React.useCallback(
    (articleView: ArticlesSortField) => {
      dispatch(ArticlesPageActions.setArticleSort(articleView));
    },
    [dispatch]
  );

  return (
    <div className={articlepagefiltersClasses}>
      <ArticleSortHandler
        order={order}
        sort={sort}
        onChangeOrder={onChangeOrder}
        onChangeSort={onChangeSort}
      />
      <ArticleViewHandler articleView={articleView} onViewClick={onViewClick} />
    </div>
  );
};
