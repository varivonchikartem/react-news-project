import React from "react";
import clx from "classnames";
import styles from "./ArticleSortHandler.module.scss";
import { ArticlesSortField, ArticlesSortOrder } from "../../../model/types/ArticleFiltersSchema";
import Select, { SelectOption } from "../../../../../../../shared/ui/Select/Select";

interface ArticleSortHandlerProps {
  className?: string;

  sort: ArticlesSortField;
  order: ArticlesSortOrder;

  onChangeOrder: (newOrder: ArticlesSortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
}

export const ArticleSortHandler: React.FC<ArticleSortHandlerProps> = (props) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props;

  const articlesorthandlerClasses = clx(styles.ArticleSortHandler, {
    [className!]: className,
  });

  const orderOptions = React.useMemo<SelectOption<ArticlesSortOrder>[]>(
    () => [
      {
        value: "asc",
        content: "возрастанию",
      },
      {
        value: "desc",
        content: "убыванию",
      },
    ],
    []
  );

  const sortFieldOptions = React.useMemo<SelectOption<ArticlesSortField>[]>(
    () => [
      {
        value: ArticlesSortField.CREATED_AT,
        content: "по дате создания",
      },
      {
        value: ArticlesSortField.TITLE,
        content: "по названию",
      },
      {
        value: ArticlesSortField.VIEWS,
        content: "по количеству просмотров",
      },
    ],
    []
  );

  return (
    <div className={articlesorthandlerClasses}>
      <Select options={sortFieldOptions} label="Сортировать ПО" value={sort} onChange={onChangeSort} />
      <Select options={orderOptions} label="по" value={order} onChange={onChangeOrder} />
    </div>
  );
};
