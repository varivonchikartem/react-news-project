import React from "react";
import clx from "classnames";
import styles from "./DefaultCommentForm.module.scss";
import { CommentModal } from "../../../ui/CommentModal";
import { Input, InputTheme } from "../../../../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../../../../shared/ui/Button/Button";

interface DefaultCommentFormProps {
  className?: string;
}

export const DefaultCommentForm: React.FC<DefaultCommentFormProps> = (props) => {
  const { className } = props;

  const defaultcommentformClasses = clx(styles.DefaultCommentForm, {
    [className!]: className,
  });

  return (
    <div className={defaultcommentformClasses}>
      <Input
        theme={InputTheme.DEFAULT}
        placeholderValue="Заголовок"
        placeholder="Присвойте отзыву название"
      />
      <Input
        theme={InputTheme.DEFAULT}
        placeholderValue="Описание"
        placeholder="Поделитесь своим мнение после прочтения статьи"
      />
      <div className={styles.button_group}>
        <Button theme={ButtonTheme.DISABLED} className={styles.transparent}>
          Закрыть
        </Button>
        <Button theme={ButtonTheme.DEFAULT}>Отправить</Button>
      </div>
    </div>
  );
};
