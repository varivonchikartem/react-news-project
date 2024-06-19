import { StateSchema } from "../../../../../../app/providers/StoreProvider/config/types/StateSchema/StateSchema";

export const getRegistrationFormIsError = (state: StateSchema) => state.registrationForm.isError;
