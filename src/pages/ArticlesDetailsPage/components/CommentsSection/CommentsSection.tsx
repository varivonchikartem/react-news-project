import React from "react";
import Button, { ButtonTheme } from "../../../../shared/ui/Button/Button";
import Select from "../../../../shared/ui/Select/Select";
import { CommentFormModal } from "../../../../features/CommentForm/ui/CommentFormModal/ui/CommentFormModal";
import { DefaultCommentFormAsync } from "../../../../features/CommentForm/ui/CommentFormModal/ui/commentForms/DefaultCommentForm/ui/DefaultCommentForm.async";
import { Comment, CommentList } from "../../../../entities/Сomment";
import styles from "./CommentsSection.module.scss";
import Skeleton from "../../../../shared/ui/Skeleton/Skeleton";

interface CommentsSectionProps {
  comments?: Comment[];
  isActiveModal: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
  onSendComment: (commentFormTitle: string, commentFormText: string, commentFormCreatedAt: string) => void;
  isLoading?: boolean;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  isActiveModal,
  onOpenModal,
  onCloseModal,
  onSendComment,
  isLoading = false,
}) => {
  if (isLoading || !comments) {
    return (
      <div className={styles.commentsSection}>
        <Skeleton className={styles.commentary} />
        <Skeleton width="100%" height="200px" />
      </div>
    );
  }

  return (
    <div className={styles.commentsSection}>
      <div className={styles.commentary}>
        <h2>Отзывы</h2>
        <Button theme={ButtonTheme.DEFAULT} onClick={onOpenModal}>
          Напишите отзыв
        </Button>
      </div>

      <CommentFormModal onOpenModal={isActiveModal} onCloseModal={onCloseModal}>
        <DefaultCommentFormAsync onSendComment={onSendComment} />
      </CommentFormModal>
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentsSection;
