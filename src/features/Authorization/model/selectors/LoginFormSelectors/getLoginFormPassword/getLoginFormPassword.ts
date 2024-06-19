import { StateSchema } from "../../../../../../app/providers/StoreProvider/config/types/StateSchema/StateSchema";

export const getLoginFormPassword = (state: StateSchema) => state.loginForm.password;
