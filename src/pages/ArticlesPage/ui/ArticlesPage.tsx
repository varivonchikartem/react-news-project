import React from "react";
import clx from "classnames";
import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  const articlespageClasses = clx(styles.ArticlesPage, {
    [className!]: className,
  });

  return <div className={articlespageClasses}>ArticlesPage</div>;
};

export default ArticlesPage;
