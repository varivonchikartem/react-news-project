import React from "react";
import clx from "classnames";
import styles from "./SidebarModal.module.scss";
import { SidebarItemType, SidebarItemsList } from "../../model/types/SidebarItemsSchema";
import { Modal } from "../../../../shared/ui/Modal/Modal";
import { Link } from "react-router-dom";
import Button, { ButtonTheme } from "../../../../shared/ui/Button/Button";

interface SidebarModalProps {
  className?: string;
  onOpenModal: boolean;
  onCloseModal: () => void;
}

export const SidebarModal: React.FC<SidebarModalProps> = (props) => {
  const { className, onOpenModal, onCloseModal } = props;

  const sidebarmodalClasses = clx(styles.SidebarModal, {
    [className!]: className,
  });

  const handleCloseModal = () => {
    onCloseModal();
  };

  return (
    <Modal onOpenModal={onOpenModal} onCloseModal={onCloseModal}>
      <nav className={sidebarmodalClasses}>
        <ul className={styles.menu}>
          {SidebarItemsList.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                <Button className={styles.button} theme={ButtonTheme.DEFAULT} onClick={handleCloseModal}>
                  {item.text}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Modal>
  );
};
