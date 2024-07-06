import React from "react";
import clx from "classnames";
import styles from "./ArticleListItem.module.scss";
import { Article, ArticleView } from "../../../../modal/types/ArticleSchema";
import Button, { ButtonTheme } from "../../../../../../shared/ui/Button/Button";
import { useTruncateText } from "../../../../../../shared/lib/hooks/useTruncateText/useTruncateText";
import { Link } from "react-router-dom";
import { AppImage } from "../../../../../../shared/ui/AppImage/AppImage";
import { getRouteArticlesDetails } from "../../../../../../shared/const/PageRoutes/PageRoutes";
import Skeleton from "../../../../../../shared/ui/Skeleton/Skeleton";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  articleView?: ArticleView;
  isLoading?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
}

const ArticleListItemSkeleton: React.FC = () => {
  return (
    <li className={styles.ArticleListItem}>
      <figure className={styles.Figure}>
        <Skeleton className={styles.imageSkeleton} height="50vh" />
        <figcaption className={styles.FigureCaption}>
          <Skeleton className={styles.button_type} />
          <Skeleton className={styles.title} />
          <Skeleton className={styles.subtitleSkeleton} />
        </figcaption>
      </figure>
    </li>
  );
};

export const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const { className, article, isLoading, target } = props;

  if (isLoading) {
    return <ArticleListItemSkeleton />;
  }

  const articlelistitemClasses = clx(styles.ArticleListItem, {
    [className!]: className,
  });

  const truncatedTitle = useTruncateText(article?.title, 35);
  const truncatedSubtitle = useTruncateText(article?.subtitle, 60);

  return (
    <li className={articlelistitemClasses}>
      <Link to={getRouteArticlesDetails(article?.id)} target={target}>
        <figure className={styles.Figure}>
          <AppImage src={article?.image} minHeight="45vh" />
          <figcaption className={styles.FigureCaption}>
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
