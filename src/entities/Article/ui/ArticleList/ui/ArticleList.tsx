import React from "react";
import clx from "classnames";
import styles from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../../modal/types/ArticleSchema";
import { ArticleListItem } from "../components/ArticleListItem/ArticleListItem";
import { useSelector } from "react-redux";
import { getArticleListLoading } from "../../../modal/selectors/ArticleListSelectors/getArticleListLoading/getArticleListLoading";

interface ArticleListProps {
  className?: string;

  articles: Article[];

  articleView?: ArticleView;

  target?: React.HTMLAttributeAnchorTarget;
}

export const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { className, articles, articleView = ArticleView.SMALL_CARD, target } = props;

  const articlelistClasses = clx(styles.ArticleList, {
    [className!]: className,
    [styles[articleView]]: articleView,
  });

  const isLoading = useSelector(getArticleListLoading);

  console.log(isLoading, "Loading");

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} key={article.id} target={target} isLoading={isLoading} />
  );

  return <div className={articlelistClasses}>{articles.length > 0 ? articles.map(renderArticle) : null}</div>;
};
