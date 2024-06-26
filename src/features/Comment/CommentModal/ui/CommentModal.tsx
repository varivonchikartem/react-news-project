import React from "react";
import clx from "classnames";
import styles from "./CommentModal.module.scss";
import { Modal } from "../../../../shared/ui/Modal/Modal";

interface CommentModalProps {
  className?: string;

  onOpenModal: boolean;
  onCloseModal: () => void;

  children: React.ReactNode;
}

export const CommentModal: React.FC<CommentModalProps> = (props) => {
  const { className, onOpenModal, onCloseModal, children } = props;

  const commentmodalClasses = clx(styles.CommentModal, {
    [className!]: className,
  });

  return (
    <Modal className={commentmodalClasses} onOpenModal={onOpenModal} onCloseModal={onCloseModal}>
      {children}
    </Modal>
  );
};
