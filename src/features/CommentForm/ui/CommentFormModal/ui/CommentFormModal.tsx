import React from "react";
import clx from "classnames";
import styles from "./CommentFormModal.module.scss";
import { Modal } from "../../../../../shared/ui/Modal/Modal";

interface CommentFormModalProps {
  className?: string;

  onOpenModal: boolean;
  onCloseModal: () => void;

  children: React.ReactNode;
}

export const CommentFormModal: React.FC<CommentFormModalProps> = (props) => {
  const { className, onOpenModal, onCloseModal, children } = props;

  const commentformModalClasses = clx(styles.CommentFormModal, {
    [className!]: className,
  });

  return (
    <Modal className={commentformModalClasses} onOpenModal={onOpenModal} onCloseModal={onCloseModal}>
      <React.Suspense fallback="Loading">{children}</React.Suspense>
    </Modal>
  );
};
