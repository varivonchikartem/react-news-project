import React from "react";
import clx from "classnames";
import styles from "./CommentItem.module.scss";
import { Comment } from "../../model/types/CommentSchema";

interface CommentItemProps {
  className?: string;

  comment?: Comment;
}

export const CommentItem: React.FC<CommentItemProps> = (props) => {
  const { className, comment } = props;

  const commentItemClasses = clx(styles.CommentItem, {
    [className!]: className,
  });

  return (
    <>
      <div className={commentItemClasses}>
        <h2 className={styles.title}>{comment?.commentTitle}</h2>
        <p className={styles.subtitle}>{comment?.commentText}</p>
        <div className={styles.UserDate}>
          <span className={styles.username}>{comment?.user.username}</span>
          <data className={styles.date} value="2024-06-26">
            26.06.2024
          </data>
        </div>
      </div>
    </>
  );
};
