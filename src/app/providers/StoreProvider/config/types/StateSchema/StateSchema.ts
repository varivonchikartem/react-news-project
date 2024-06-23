import { ProfileSchema } from "../../../../../../entities/Profile";
import { UserSchema } from "../../../../../../entities/User";
import { LoginFormSchema, RegistrationFormSchema } from "../../../../../../features/Authorization";

export interface StateSchema {
  user: UserSchema;
  profile?: ProfileSchema;

  // async feature
  loginForm?: LoginFormSchema;
  registrationForm?: RegistrationFormSchema;
}

export type StateSchemaKey = keyof StateSchema;
