import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getProfileUserName = (state: StateSchema) => state.profile?.profileData?.username;
