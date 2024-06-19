import { StateSchema } from "../../../../../../app/providers/StoreProvider/config/types/StateSchema/StateSchema";

export const getLoginFormUserName = (state: StateSchema) => state.loginForm.username;
