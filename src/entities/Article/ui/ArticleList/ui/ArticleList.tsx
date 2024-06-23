import React from "react";
import clx from "classnames";
import styles from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../../modal/types/ArticleSchema";
import { ArticleListItem } from "../components/ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;

  articles: Article[];

  articleView?: ArticleView;
}

export const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { className, articles, articleView = ArticleView.SMALL_CARD } = props;

  const articlelistClasses = clx(styles.ArticleList, {
    [className!]: className,
    [styles[articleView]]: articleView,
  });

  const renderArticle = (article: Article) => <ArticleListItem article={article} key={article.id} />;

  return <div className={articlelistClasses}>{articles.length > 0 ? articles.map(renderArticle) : null}</div>;
};
