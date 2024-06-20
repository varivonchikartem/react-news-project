import React from "react";
import clx from "classnames";
import styles from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";
import Button, { ButtonTheme } from "../Button/Button";

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
    <Portal>
      <div className={modalClasses} role="dialog">
        <div className={styles.Modal_overlay} onClick={onCloseModal} role="button">
          <dialog className={styles.Modal_content} onClick={onContentClick} open>
            <header className={styles.header}>
              <Button className={styles.cross_button} theme={ButtonTheme.DEFAULT} onClick={onCloseModal}>
                <span className="vissualy-hidden"></span>
              </Button>
            </header>
            <main className={styles.Modal_main}>{children}</main>
          </dialog>
        </div>
      </div>
    </Portal>
  );
}
