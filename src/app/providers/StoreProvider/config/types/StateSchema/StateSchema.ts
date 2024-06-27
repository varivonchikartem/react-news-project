import { ArticleDetailsSchema } from "../../../../../../entities/Article/modal/types/ArticleDetailsSchema";
import { ArticleSchema } from "../../../../../../entities/Article/modal/types/ArticleSchema";
import { ProfileSchema } from "../../../../../../entities/Profile";
import { UserSchema } from "../../../../../../entities/User";
import { CommentSchema } from "../../../../../../entities/Сomment";
import { LoginFormSchema, RegistrationFormSchema } from "../../../../../../features/Authorization";
import { CommentFormSchema } from "../../../../../../features/CommentForm/model/types/CommentFormSchema";
import { ArticleDetailsPageCommentsSchema } from "../../../../../../pages/ArticlesDetailsPage/model/types/ArticleDetailsPageCommentsSchema";
import { ArticlesPageSchema } from "../../../../../../pages/ArticlesPage";

export interface StateSchema {
  user: UserSchema;

  //async pages

  articlesPage?: ArticlesPageSchema;
  articleDetailsPageComments?: ArticleDetailsPageCommentsSchema;

  // async entity

  profile?: ProfileSchema;
  article?: ArticleSchema;
  articleDetails?: ArticleDetailsSchema;
  comment?: CommentSchema;

  // async feature
  loginForm?: LoginFormSchema;
  registrationForm?: RegistrationFormSchema;
  commentForm?: CommentFormSchema;
}

export type StateSchemaKey = keyof StateSchema;
