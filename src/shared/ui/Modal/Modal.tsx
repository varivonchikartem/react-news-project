import React from "react";
import clx from "classnames";
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;

  children: React.ReactNode;

  onOpenModal: boolean;
  onCloseModal: () => void;

  width?: string;
}

export function Modal(props: ModalProps) {
  const { className, children, onOpenModal, onCloseModal, width } = props;

  const modalClasses = clx(styles.Modal, {
    [className!]: className,
    [styles.Modal_opened]: onOpenModal,
  });

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={modalClasses} role="dialog">
      <div className={styles.Modal_overlay} onClick={onCloseModal} role="button">
        <dialog className={styles.Modal_content} onClick={onContentClick} open>
          <main className={styles.Modal_main}>{children}</main>
        </dialog>
      </div>
    </div>
  );
}
