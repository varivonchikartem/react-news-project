import React from "react";
import clx from "classnames";
import styles from "./ArticlePageFilters.module.scss";
import { ArticleType, ArticleView } from "../../../../../entities/Article/modal/types/ArticleSchema";
import { ArticlesPageActions } from "../../../model/slices/ArticlesPageSlice";
import { useAppDispatch } from "../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "../../../model/selectors/getArticlesPageView/getArticlesPageView";
import { ArticleViewHandler } from "../../../../../entities/Article/ui/ArticleFilters/ui/components/ArticleViewHandler/ArticleViewHandler";
import { ArticleSortHandler } from "../../../../../entities/Article/ui/ArticleFilters/ui/components/ArticleSortHandler/ArticleSortHandler";
import { ArticlesSortField, ArticlesSortOrder } from "../../../../../entities/Article";
import { getArticlesPageOrder } from "../../../model/selectors/getArticlesPageOrder/getArticlesPageOrder";
import { getArticlesPageSort } from "../../../model/selectors/getArticlesPageSort/getArticlesPageSort";
import { TabItem } from "../../../../../shared/ui/Tabs/Tabs";
import { ArticleTypeTabsHandler } from "../../../../../entities/Article/ui/ArticleFilters/ui/components/ArticleTypeTabsHandler/ArticleTypeTabsHandler";
import { getArticlesPageType } from "../../../model/selectors/getArticlesPageType/getArticlesPageType";
import { FetchArticleListService } from "../../../model/services/FetchArticleListService/FetchArticleListService";

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
  const articleType = useSelector(getArticlesPageType);

  const fetchData = React.useCallback(() => {
    dispatch(FetchArticleListService());
  }, []);

  const onViewClick = React.useCallback(
    (articleView: ArticleView) => {
      dispatch(ArticlesPageActions.setArticleView(articleView));
      fetchData();
    },
    [dispatch]
  );

  const onChangeOrder = React.useCallback(
    (order: ArticlesSortOrder) => {
      dispatch(ArticlesPageActions.setArticleOrder(order));
      fetchData();
    },
    [dispatch]
  );

  const onChangeSort = React.useCallback(
    (sort: ArticlesSortField) => {
      dispatch(ArticlesPageActions.setArticleSort(sort));
      fetchData();
    },
    [dispatch]
  );

  const tabs = React.useMemo<TabItem<ArticleType>[]>(
    () =>
      Object.values(ArticleType).map((type) => ({
        value: type,
        content: type,
      })),
    []
  );

  const onChangeType = React.useCallback(
    (type: ArticleType) => {
      dispatch(ArticlesPageActions.setArticleType(type));
      fetchData();
    },
    [dispatch]
  );

  return (
    <div className={articlepagefiltersClasses}>
      <div className={styles.panel}>
        <ArticleSortHandler
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewHandler articleView={articleView} onViewClick={onViewClick} />
      </div>
      <ArticleTypeTabsHandler articleType={articleType} tabs={tabs} onChangeType={onChangeType} />
    </div>
  );
};
