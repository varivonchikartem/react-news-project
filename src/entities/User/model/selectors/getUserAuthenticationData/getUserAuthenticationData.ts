import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getUserAuthenticationData = (state: StateSchema) => state.user.userAuthenticationData;
