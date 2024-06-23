import React from "react";
import clx from "classnames";
import styles from "./ArticleViewHandler.module.scss";
import { ArticleView } from "../../../../../modal/types/ArticleSchema";
import Button, { ButtonTheme } from "../../../../../../../shared/ui/Button/Button";

interface ArticleViewHandlerProps {
  className?: string;

  articleView: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    articleView: ArticleView.SMALL_CARD,
    // icon: ListIcon,
  },
  {
    articleView: ArticleView.MEDIUM_CARD,
  },
  {
    articleView: ArticleView.LARGE_CARD,
    // icon: TiledIcon,
  },
];

export const ArticleViewHandler: React.FC<ArticleViewHandlerProps> = (props) => {
  const { articleView, onViewClick, className } = props;

  const articleviewhandlerClasses = clx(styles.ArticleViewHandler, {
    [className!]: className,
  });

  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick?.(newView);
    };
  };

  return (
    <div className={articleviewhandlerClasses}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.articleView}
          theme={ButtonTheme.DEFAULT}
          onClick={onClick(viewType.articleView)}
          className={clx(styles.IconButton, {
            [styles.selected]: viewType.articleView === articleView,
          })}
        >
          1 {/* <Icon Svg={viewType.icon} /> */}
        </Button>
      ))}
    </div>
  );
};
