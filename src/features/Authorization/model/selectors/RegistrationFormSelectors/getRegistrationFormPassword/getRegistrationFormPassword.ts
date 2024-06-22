import { StateSchema } from "../../../../../../app/providers/StoreProvider/config/types/StateSchema/StateSchema";

export const getRegistrationFormPassword = (state: StateSchema) => state?.registrationForm?.password ?? "";
