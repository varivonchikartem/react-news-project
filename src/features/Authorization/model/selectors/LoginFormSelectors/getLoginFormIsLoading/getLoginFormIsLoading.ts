import { StateSchema } from "../../../../../../app/providers/StoreProvider/config/types/StateSchema/StateSchema";

export const getLoginFormIsLoading = (state: StateSchema) => state.loginForm.isLoading;
