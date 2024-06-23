import React from "react";
import clx from "classnames";
import styles from "./ArticleList.module.scss";
import { Article } from "../../../modal/types/ArticleSchema";
import { ArticleListItem } from "../components/ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;

  articles: Article[];
}

export const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { className, articles } = props;

  const articlelistClasses = clx(styles.ArticleList, {
    [className!]: className,
  });

  const renderArticle = (article: Article) => <ArticleListItem article={article} key={article.id} />;

  return <div className={articlelistClasses}>{articles.length > 0 ? articles.map(renderArticle) : null}</div>;
};
