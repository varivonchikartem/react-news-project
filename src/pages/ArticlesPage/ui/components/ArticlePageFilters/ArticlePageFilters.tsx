import React from "react";
import clx from "classnames";
import styles from "./ArticlePageFilters.module.scss";
import { ArticleViewHandler } from "../../../../../entities/Article/ui/components/ArticleFilters/components/ArticleViewHandler/ArticleViewHandler";
import { ArticleView } from "../../../../../entities/Article/modal/types/ArticleSchema";
import { ArticlesPageActions } from "../../../model/slices/ArticlesPageSlice";
import { useAppDispatch } from "../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "../../../model/selectors/getArticlesPageView/getArticlesPageView";

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

  const onViewClick = React.useCallback(
    (articleView: ArticleView) => {
      dispatch(ArticlesPageActions.setArticleView(articleView));
    },
    [dispatch]
  );

  return (
    <div className={articlepagefiltersClasses}>
      <ArticleViewHandler articleView={articleView} onViewClick={onViewClick} />
    </div>
  );
};
