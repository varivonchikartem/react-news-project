import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getProfileAge = (state: StateSchema) => state.profile?.profileData?.age;
