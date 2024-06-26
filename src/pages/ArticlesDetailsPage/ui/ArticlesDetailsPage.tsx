import React from "react";
import clx from "classnames";
import styles from "./ArticlesDetailsPage.module.scss";
import { AppImage } from "../../../shared/ui/AppImage/AppImage";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleFetchByIdService } from "../../../entities/Article/modal/service/ArticleFetchByIdService/ArticleFetchByIdService";
import { ArticleReducers, getArticles } from "../../../entities/Article/modal/slices/ArticleSlice";
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

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  article: ArticleReducers,
  comment: CommentReducers,
};

const ArticlesDetailsPage: React.FC<ArticlesDetailsPageProps> = (props) => {
  const { className } = props;

  const articlesdetailspageClasses = clx(styles.ArticlesDetailsPage, {
    [className!]: className,
  });

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const article = useSelector((state: StateSchema) => getArticles.selectById(state, id || ""));

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
          <Button theme={ButtonTheme.DEFAULT}>Напишите отзыв</Button>
          <CommentModal />
          <CommentList />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesDetailsPage;
