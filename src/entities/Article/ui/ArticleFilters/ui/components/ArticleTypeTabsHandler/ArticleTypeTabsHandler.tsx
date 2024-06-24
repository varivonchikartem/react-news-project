import React from "react";
import clx from "classnames";
import styles from "./ArticleTypeTabsHandler.module.scss";
import { ArticleType } from "../../../../../modal/types/ArticleSchema";
import { TabItem, Tabs } from "../../../../../../../shared/ui/Tabs/Tabs";

interface ArticleTypeTabsHandlerProps {
  className?: string;

  articleType: ArticleType;
  tabs: TabItem<ArticleType>[];
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabsHandler: React.FC<ArticleTypeTabsHandlerProps> = (props) => {
  const { className, tabs, articleType, onChangeType } = props;

  const articletypetabshandlerClasses = clx(styles.ArticleTypeTabsHandler, {
    [className!]: className,
  });

  const onTabClick = React.useCallback(
    (tab: TabItem<ArticleType>) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
  );

  return (
    <Tabs className={articletypetabshandlerClasses} value={articleType} tabs={tabs} onTabClick={onTabClick} />
  );
};
