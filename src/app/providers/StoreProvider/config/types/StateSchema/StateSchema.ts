import { ArticleSchema } from "../../../../../../entities/Article/modal/types/ArticleSchema";
import { ProfileSchema } from "../../../../../../entities/Profile";
import { UserSchema } from "../../../../../../entities/User";
import { LoginFormSchema, RegistrationFormSchema } from "../../../../../../features/Authorization";
import { ArticlesPageSchema } from "../../../../../../pages/ArticlesPage";

export interface StateSchema {
  user: UserSchema;

  //async pages

  articlesPage?: ArticlesPageSchema;
  // async entity

  profile?: ProfileSchema;
  article?: ArticleSchema;

  // async feature
  loginForm?: LoginFormSchema;
  registrationForm?: RegistrationFormSchema;
}

export type StateSchemaKey = keyof StateSchema;
