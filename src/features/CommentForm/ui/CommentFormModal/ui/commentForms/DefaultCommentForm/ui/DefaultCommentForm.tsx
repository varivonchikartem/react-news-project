import React from "react";
import clx from "classnames";
import styles from "./DefaultCommentForm.module.scss";
import { useSelector } from "react-redux";
import { getCommentFormTitle } from "../../../../../../model/selectors/getCommentFormTitle/getCommentFormTitle";
import { useAppDispatch } from "../../../../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { CommentFormActions, CommentFormReducers } from "../../../../../../model/slices/CommentFormSlice";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../../../../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { CommentReducers } from "../../../../../../../../entities/Сomment";
import { getCommenFormtText } from "../../../../../../model/selectors/getCommenFormtText/getCommenFormtText";
import { Input, InputTheme } from "../../../../../../../../shared/ui/Input/Input";
import Button, { ButtonTheme } from "../../../../../../../../shared/ui/Button/Button";

interface DefaultCommentFormProps {
  className?: string;

  onSendComment: (commentFormTitle: string, commentFormText: string) => void;
}

const reducers: ReducersList = {
  commentForm: CommentFormReducers,
};

const DefaultCommentForm: React.FC<DefaultCommentFormProps> = (props) => {
  const { className, onSendComment } = props;

  const defaultcommentformClasses = clx(styles.DefaultCommentForm, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const commentFormTitle = useSelector(getCommentFormTitle);
  const commentFormText = useSelector(getCommenFormtText);

  const onCommentTitleChange = React.useCallback(
    (value: string) => {
      dispatch(CommentFormActions.setCommentFormTitle(value));
    },
    [dispatch]
  );

  const onCommentTextChange = React.useCallback(
    (value: string) => {
      dispatch(CommentFormActions.setCommentFormText(value));
    },
    [dispatch]
  );

  const onSendHandler = React.useCallback(() => {
    onSendComment(commentFormTitle, commentFormText);
    onCommentTitleChange("");
    onCommentTextChange("");
  }, [onSendComment, onCommentTitleChange, onCommentTextChange, commentFormText, commentFormTitle]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={defaultcommentformClasses}>
        <Input
          theme={InputTheme.DEFAULT}
          placeholderValue="Заголовок"
          placeholder="Присвойте отзыву название"
          value={commentFormTitle}
          onChange={onCommentTitleChange}
        />
        <Input
          theme={InputTheme.DEFAULT}
          placeholderValue="Описание"
          placeholder="Поделитесь своим мнение после прочтения статьи"
          value={commentFormText}
          onChange={onCommentTextChange}
        />
        <div className={styles.ButtonGroup}>
          <Button theme={ButtonTheme.DISABLED}>Закрыть</Button>
          <Button theme={ButtonTheme.DEFAULT} onClick={onSendHandler}>
            Отправить
          </Button>
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default DefaultCommentForm;
