import React from "react";
import clx from "classnames";
import styles from "./CommentCard.module.scss";
import { Comment } from "../../model/types/CommentSchema";

interface CommentCardProps {
  className?: string;

  comment: Comment;
}

export const CommentCard: React.FC<CommentCardProps> = (props) => {
  const { className } = props;

  const commentcardClasses = clx(styles.CommentCard, {
    [className!]: className,
  });

  return <div className={commentcardClasses}>CommentCard</div>;
};
