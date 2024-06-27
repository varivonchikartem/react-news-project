import React from "react";
import clx from "classnames";
import styles from "./ArticlesDetailsPage.module.scss";
import { AppImage } from "../../../shared/ui/AppImage/AppImage";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleFetchByIdService } from "../../../entities/Article/modal/service/ArticleFetchByIdService/ArticleFetchByIdService";
import { ArticleReducers } from "../../../entities/Article/modal/slices/ArticleSlice";
import {
  Article,
  ArticleBlock,
  ArticleBlockType,
  ArticleSchema,
} from "../../../entities/Article/modal/types/ArticleSchema";
import { useSelector } from "react-redux";
import { StateSchema } from "../../../app/providers/StoreProvider";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { useParams } from "react-router-dom";
import { ArticleDetailsTextBlockComponent } from "../../../entities/Article/ui/ArticleBlocks/ui/ArticleDetailsTextBlockComponent/ArticleDetailsTextBlockComponent";
import { ArticleDetailsImageBlockComponent } from "../../../entities/Article/ui/ArticleBlocks/ui/ArticleDetailsImageBlockComponent/ArticleDetailsImageBlockComponent";
import { CommentList, CommentReducers } from "../../../entities/Сomment";
import Select from "../../../shared/ui/Select/Select";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { getArticleDetailsData } from "../model/selectors/getArticleDetailsData";
import { ArticleDetalisPageReducers } from "../model/slices/ArticleDetalisPageSlice";
import { CommentFormModal } from "../../../features/CommentForm/ui/CommentFormModal/ui/CommentFormModal";
import { DefaultCommentFormAsync } from "../../../features/CommentForm/ui/CommentFormModal/ui/commentForms/DefaultCommentForm/ui/DefaultCommentForm.async";
import { AddCommentForArticleService } from "../model/service/AddCommentForArticleService/AddCommentForArticleService";
import { CommentFormReducers } from "../../../features/CommentForm/model/slices/CommentFormSlice";

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  article: ArticleReducers,
  articleDetailsPage: ArticleDetalisPageReducers,
  comment: CommentReducers,
  commentForm: CommentFormReducers,
};

const ArticlesDetailsPage: React.FC<ArticlesDetailsPageProps> = (props) => {
  const { className } = props;

  const articlesdetailspageClasses = clx(styles.ArticlesDetailsPage, {
    [className!]: className,
  });

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);

  React.useEffect(() => {
    dispatch(ArticleFetchByIdService(id || ""));
  }, [dispatch]);

  const renderBlock = React.useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleDetailsTextBlockComponent block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleDetailsImageBlockComponent block={block} />;
      case ArticleBlockType.CODE:
        return null;
      default:
        return null;
    }
  }, []);

  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onOpenModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onSendComment = React.useCallback(
    (commentFormTitle: string, commentFormText: string) => {
      dispatch(AddCommentForArticleService({ commentFormTitle: commentFormTitle, commentFormText: commentFormText }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={articlesdetailspageClasses}>
        <AppImage src={article?.image} minHeight="80vh" />

        <div className="mmm">
          <div className="div1">
            <h2>{article?.title}</h2>
            <p className="sub">{article?.subtitle}</p>
          </div>
          <div className="div2">{article?.blocks.map(renderBlock)}</div>
        </div>

        <div>
          <h2>Отзывы</h2>
          <Select />
          <Button theme={ButtonTheme.DEFAULT} onClick={onOpenModal}>
            Напишите отзыв
          </Button>
          <CommentFormModal onOpenModal={isAuthModal} onCloseModal={onCloseModal}>
            <DefaultCommentFormAsync onSendComment={onSendComment} />
          </CommentFormModal>
          <CommentList />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesDetailsPage;
