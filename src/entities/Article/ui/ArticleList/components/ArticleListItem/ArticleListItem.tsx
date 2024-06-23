import React from "react";
import clx from "classnames";
import styles from "./ArticleListItem.module.scss";
import { Article } from "../../../../modal/types/ArticleSchema";
import Button, { ButtonTheme } from "../../../../../../shared/ui/Button/Button";

interface ArticleListItemProps {
  className?: string;

  article: Article;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const { className, article } = props;

  const articlelistitemClasses = clx(styles.ArticleListItem, {
    [className!]: className,
  });

  return (
    <li className={articlelistitemClasses}>
      <figure>
        <div className="projects-image-block">
          <img
            className="projects-image"
            src={article?.image}
            alt=""
            width="2495"
            height="1625"
            loading="lazy"
          />
        </div>
        <figcaption>
          {article.type.map((type, index) => (
            <Button key={index} className={styles.button_type} theme={ButtonTheme.DEFAULT}>
              {type}
            </Button>
          ))}

          <h3 className="projects-title">{article?.title}</h3>
        </figcaption>
      </figure>
    </li>
  );
};
