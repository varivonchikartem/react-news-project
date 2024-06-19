import React from "react";
import clx from "classnames";
import styles from "./ArticlesPage.module.scss";
import { Input, InputTheme } from "../../../shared/ui/Input/Input";
import { Modal } from "../../../shared/ui/Modal/Modal";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  const articlespageClasses = clx(styles.ArticlesPage, {
    [className!]: className,
  });

  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onOpenModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  return (
    <div className={articlespageClasses}>
      <Input theme={InputTheme.DEFAULT} />
      <Modal onOpenModal={isAuthModal} onCloseModal={onCloseModal}>
        1
      </Modal>
      <button onClick={onOpenModal}>oPEN</button>
    </div>
  );
};

export default ArticlesPage;
