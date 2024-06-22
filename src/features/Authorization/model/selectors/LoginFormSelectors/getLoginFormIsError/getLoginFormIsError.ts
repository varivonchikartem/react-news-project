import { StateSchema } from "../../../../../../app/providers/StoreProvider/config/types/StateSchema/StateSchema";

export const getLoginFormIsError = (state: StateSchema) => state?.loginForm?.isError ?? false;
