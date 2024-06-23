import { ArticleSchema } from "../../../../../../entities/Article/modal/types/ArticleSchema";
import { ProfileSchema } from "../../../../../../entities/Profile";
import { UserSchema } from "../../../../../../entities/User";
import { LoginFormSchema, RegistrationFormSchema } from "../../../../../../features/Authorization";

export interface StateSchema {
  user: UserSchema;

  // async entity

  profile?: ProfileSchema;
  article?: ArticleSchema;

  // async feature
  loginForm?: LoginFormSchema;
  registrationForm?: RegistrationFormSchema;
}

export type StateSchemaKey = keyof StateSchema;
