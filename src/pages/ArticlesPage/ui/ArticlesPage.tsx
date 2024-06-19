import React from "react";
import clx from "classnames";
import styles from "./ArticlesPage.module.scss";
import { Input, InputTheme } from "../../../shared/ui/Input/Input";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  const articlespageClasses = clx(styles.ArticlesPage, {
    [className!]: className,
  });

  return (
    <div className={articlespageClasses}>
      <Input theme={InputTheme.DEFAULT} />
    </div>
  );
};

export default ArticlesPage;
