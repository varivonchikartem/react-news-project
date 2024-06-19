import React from "react";
import clx from "classnames";
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;

  children: React.ReactNode;

  onOpenModal: boolean;
  onCloseModal: () => void;

  height?: string;
  width?: string;
}

export function Modal(props: ModalProps) {
  const { className, children, onOpenModal, onCloseModal, height, width } = props;

  const modalClasses = clx(styles.Modal, {
    [className!]: className,
    [styles.Modal_opened]: onOpenModal,
  });

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const modalContentStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      height: height || "540px",
      width: width || "360px",
    };
  }, [height, width]);

  return (
    <div className={modalClasses} role="dialog">
      <div className={styles.Modal_overlay} onClick={onCloseModal} role="button">
        <dialog style={modalContentStyles} className={styles.Modal_content} onClick={onContentClick} open>
          <main className={styles.Modal_main}>{children}</main>
        </dialog>
      </div>
    </div>
  );
}
