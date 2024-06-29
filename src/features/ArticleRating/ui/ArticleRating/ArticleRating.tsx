import React from "react";
import clx from "classnames";
import styles from "./ArticleRating.module.scss";
import { RatingCard } from "../../../../entities/Rating";
import { GetArticleRatingService } from "../../model/services/GetArticleRatingService/GetArticleRatingService";
import { useSelector } from "react-redux";
import { getUserAuthenticationData } from "../../../../entities/User/model/selectors/getUserAuthenticationData/getUserAuthenticationData";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getArticleRatingData } from "../../model/selectors/getArticleRatingData/getArticleRatingData";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleRatingReducers } from "../../model/slices/ArticleRatingSlice";
import { RateArticleService } from "../../model/services/RateArticleService/RateArticleService";

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const reducers: ReducersList = {
  ArticleRatingFeature: ArticleRatingReducers,
};

export const ArticleRating: React.FC<ArticleRatingProps> = (props) => {
  const { className, articleId } = props;

  const articleratingClasses = clx(styles.ArticleRating, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const userAuthenticationData = useSelector(getUserAuthenticationData);
  const data = useSelector(getArticleRatingData);

  console.log(data, "data");

  React.useEffect(() => {
    dispatch(GetArticleRatingService({ articleId: articleId, userId: userAuthenticationData?.id || "" }));
  }, [dispatch]);

  const onHandleRateArticle = React.useCallback(
    (starsCount: number, feedback?: string) => {
      dispatch(
        RateArticleService({
          articleId: articleId,
          userId: userAuthenticationData?.id || "",
          rate: starsCount,
          feedback: feedback,
        })
      );
    },
    [dispatch, articleId, userAuthenticationData]
  );

  const onAccept = React.useCallback(
    (starsCount: number, feedback?: string) => {
      onHandleRateArticle(starsCount, feedback);
    },
    [onHandleRateArticle]
  );

  const onCancel = React.useCallback(
    (starsCount: number) => {
      onHandleRateArticle(starsCount);
    },
    [onHandleRateArticle]
  );
  const rating = data?.[data.length - 1];

  return (
    <DynamicModuleLoader reducers={reducers}>
      <RatingCard
        className={articleratingClasses}
        rate={rating?.rate}
        title="Оцените статью"
        feedbackTitle="Оставьте свой отзыв о статье"
        hasFeedback={true}
        onAccept={onAccept}
        onCancel={onCancel}
      />
    </DynamicModuleLoader>
  );
};
