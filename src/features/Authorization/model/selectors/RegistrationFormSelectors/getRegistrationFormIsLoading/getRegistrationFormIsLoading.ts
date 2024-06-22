import { StateSchema } from "../../../../../../app/providers/StoreProvider/config/types/StateSchema/StateSchema";

export const getRegistrationFormIsLoading = (state: StateSchema) =>
  state?.registrationForm?.isLoading ?? false;
