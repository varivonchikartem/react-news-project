import React from "react";
import clx from "classnames";
import styles from "./AuthorizationModal.module.scss";
import { Modal } from "../../../../../shared/ui/Modal/Modal";
import { MainForm } from "../../MainForm/ui/MainForm";

interface AuthorizationModalProps {
  className?: string;

  onOpenModal: boolean;
  onCloseModal: () => void;
}

export const AuthorizationModal: React.FC<AuthorizationModalProps> = (props) => {
  const { className, onOpenModal, onCloseModal } = props;

  const authorizationmodalClasses = clx(styles.AuthorizationModal, {
    [className!]: className,
  });

  return (
    <Modal className={authorizationmodalClasses} onOpenModal={onOpenModal} onCloseModal={onCloseModal}>
      <MainForm />
    </Modal>
  );
};
