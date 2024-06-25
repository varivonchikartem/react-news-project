import React from "react";
import clx from "classnames";
import styles from "./ArticlesDetailsPage.module.scss";

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticlesDetailsPage: React.FC<ArticlesDetailsPageProps> = (props) => {
  const { className } = props;

  const articlesdetailspageClasses = clx(styles.ArticlesDetailsPage, {
    [className!]: className,
  });

  return <div className={articlesdetailspageClasses}>ArticlesDetailsPage</div>;
};

export default ArticlesDetailsPage;
