import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getProfileCountry = (state: StateSchema) => state.profile?.profileData?.country;
