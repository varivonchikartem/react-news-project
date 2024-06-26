import React from "react";
import clx from "classnames";
import styles from "./CommentList.module.scss";
import { Comment } from "../../model/types/CommentSchema";
import { CommentCard } from "../CommentCard/CommentCard";

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
      {comments?.length ? comments.map((comment) => <CommentCard comment={comment} />) : <p>Нет комментариев</p>}
    </div>
  );
};
