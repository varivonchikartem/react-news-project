import React from "react";
import clx from "classnames";
import styles from "./ArticleViewHandler.module.scss";
import { ArticleView } from "../../../../../modal/types/ArticleSchema";
import Button, { ButtonTheme } from "../../../../../../../shared/ui/Button/Button";

import TiledIcon from "../../../../../../../shared/assets/icons/tiled.svg";
import ListIcon from "../../../../../../../shared/assets/icons/list.svg";
import { Icon, IconTheme } from "../../../../../../../shared/ui/Icon/Icon";

interface ArticleViewHandlerProps {
  className?: string;

  articleView: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    articleView: ArticleView.SMALL_CARD,
    icon: ListIcon,
  },
  {
    articleView: ArticleView.LARGE_CARD,
    icon: TiledIcon,
  },
];

export const ArticleViewHandler: React.FC<ArticleViewHandlerProps> = (props) => {
  const { articleView, onViewClick, className } = props;

  const articleviewhandlerClasses = clx(styles.ArticleViewHandler, "hidden-mobile", {
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
          theme={viewType.articleView === articleView ? ButtonTheme.DEFAULT : ButtonTheme.DISABLED}
          onClick={onClick(viewType.articleView)}
        >
          <Icon theme={IconTheme.DEFAULT} Svg={viewType.icon} />
        </Button>
      ))}
    </div>
  );
};
