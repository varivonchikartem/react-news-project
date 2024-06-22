import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getProfileSecondName = (state: StateSchema) => state.profile?.profileData?.secondname ?? "";
