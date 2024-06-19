import { UserSchema } from "../../../../../../entities/User/model/types/UserSchema";

export interface StateSchema {
  user: UserSchema;
}

export type StateSchemaKey = keyof StateSchema;
