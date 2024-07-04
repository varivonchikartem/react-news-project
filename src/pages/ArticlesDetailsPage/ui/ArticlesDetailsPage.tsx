import React from "react";
import clx from "classnames";
import styles from "./ArticlesDetailsPage.module.scss";
import { AppImage } from "../../../shared/ui/AppImage/AppImage";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleFetchByIdService } from "../../../entities/Article/modal/service/ArticleFetchByIdService/ArticleFetchByIdService";
import {
  Article,
  ArticleBlock,
  ArticleBlockType,
  ArticleView,
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
import { CommentFormModal } from "../../../features/CommentForm/ui/CommentFormModal/ui/CommentFormModal";
import { DefaultCommentFormAsync } from "../../../features/CommentForm/ui/CommentFormModal/ui/commentForms/DefaultCommentForm/ui/DefaultCommentForm.async";
import { AddCommentForArticleService } from "../model/service/AddCommentForArticleService/AddCommentForArticleService";
import { CommentFormReducers } from "../../../features/CommentForm/model/slices/CommentFormSlice";
import { getArticleDetailsData } from "../../../entities/Article/modal/selectors/ArticleDetailsSelectors/getArticleDetailsData/getArticleDetailsData";
import { FetchCommentsByArticleIdService } from "../model/service/FetchCommentsByArticleIdService/FetchCommentsByArticleIdService";
import { ArticleDetailsPageCommentsReducers } from "../model/slices/ArticleDetailsPageCommentsSlice";
import { getArticleDetailsPageCommentsData } from "../model/selectors/comments/getArticleDetailsPageCommentsData";
import { ArticleDetailsReducers } from "../../../entities/Article/modal/slices/ArticleDetailsSlice";
import { ArticleList } from "../../../entities/Article/ui/ArticleList/ui/ArticleList";
import { StarRating } from "../../../shared/ui/StarRating/StarRating";
import { RatingCard } from "../../../entities/Rating";
import { ArticleRating } from "../../../features/ArticleRating/ui/ArticleRating/ArticleRating";
import { ArticleListReducers } from "../../../entities/Article";
import { getArticleListData } from "../../../entities/Article/modal/selectors/ArticleListSelectors/getArticleListData/getArticleListData";
import { FetchArticleListService } from "../../../entities/Article/modal/service/FetchArticleListService/FetchArticleListService";
import ArticleDetailsSection from "../components/ArticleDetailsSection/ArticleDetailsSection";
import ArticleBlocksSection from "../components/ArticleBlocksSection/ArticleBlocksSection";
import CommentsSection from "../components/CommentsSection/CommentsSection";
import RecommendationsSection from "../components/RecommendationsSection/RecommendationsSection";

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: ArticleDetailsReducers,
  articleList: ArticleListReducers,
  articleDetailsPageComments: ArticleDetailsPageCommentsReducers,
};

const ArticlesDetailsPage: React.FC<ArticlesDetailsPageProps> = (props) => {
  const { className } = props;

  const articlesdetailspageClasses = clx(styles.ArticlesDetailsPage, {
    [className!]: className,
  });

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const articleRecommendations = useSelector(getArticleListData);
  const article = useSelector(getArticleDetailsData);
  const comments = useSelector(getArticleDetailsPageCommentsData);

  React.useEffect(() => {
    dispatch(ArticleFetchByIdService(id || ""));
    dispatch(FetchCommentsByArticleIdService({ articleId: id || "" }));
    dispatch(FetchArticleListService({}));
  }, [dispatch]);

  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onOpenModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onSendComment = React.useCallback(
    (commentFormTitle: string, commentFormText: string, commentFormCreatedAt: string) => {
      dispatch(
        AddCommentForArticleService({
          commentFormTitle: commentFormTitle,
          commentFormText: commentFormText,
          commentFormCreatedAt: commentFormCreatedAt,
        })
      );
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div className={articlesdetailspageClasses}>
        <AppImage className={styles.image} src={article?.image} minHeight="80vh" />
        <div className={styles.Content}>
          <ArticleDetailsSection article={article} id={id || ""} />
          <ArticleBlocksSection blocks={article?.blocks} />
        </div>
        <CommentsSection
          comments={comments}
          isActiveModal={isAuthModal}
          onOpenModal={onOpenModal}
          onCloseModal={onCloseModal}
          onSendComment={onSendComment}
        />
        <RecommendationsSection articleRecommendations={articleRecommendations} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesDetailsPage;
