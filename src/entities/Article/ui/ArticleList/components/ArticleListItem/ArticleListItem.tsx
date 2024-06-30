import React from "react";
import clx from "classnames";
import styles from "./ArticleListItem.module.scss";
import { Article, ArticleView } from "../../../../modal/types/ArticleSchema";
import Button, { ButtonTheme } from "../../../../../../shared/ui/Button/Button";
import { useTruncateText } from "../../../../../../shared/lib/hooks/useTruncateText/useTruncateText";
import { Link } from "react-router-dom";
import { AppImage } from "../../../../../../shared/ui/AppImage/AppImage";
import { getRouteArticlesDetails } from "../../../../../../shared/const/PageRoutes/PageRoutes";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  articleView?: ArticleView;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const { className, article } = props;

  const articlelistitemClasses = clx(styles.ArticleListItem, {
    [className!]: className,
  });

  const truncatedTitle = useTruncateText(article?.title, 35);
  const truncatedSubtitle = useTruncateText(article?.subtitle, 60);

  return (
    <li className={articlelistitemClasses}>
      <Link to={getRouteArticlesDetails(article?.id)}>
        <figure>
          <AppImage src={article?.image} minHeight="50vh" />
          <figcaption>
            {article.type &&
              article.type.map((type, index) => (
                <Button key={index} className={styles.button_type} theme={ButtonTheme.DEFAULT}>
                  {type}
                </Button>
              ))}

            <h3 className={styles.title}>{truncatedTitle}</h3>
            <p>{truncatedSubtitle}</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};
