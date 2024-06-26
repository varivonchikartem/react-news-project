import React from "react";
import clx from "classnames";
import styles from "./CommentList.module.scss";
import { Comment } from "../../model/types/CommentSchema";
import { CommentItem } from "../CommentItem/CommentItem";

interface CommentListProps {
  className?: string;

  comments?: Comment[];
}

export const CommentList: React.FC<CommentListProps> = (props) => {
  const { className, comments } = props;

  const commentlistClasses = clx(styles.CommentList, {
    [className!]: className,
  });

  return (
    <div className={commentlistClasses}>
      <CommentItem />
    </div>
  );
};
