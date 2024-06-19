import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./types/StateSchema/StateSchema";
import { ThunkExtraArguments } from "./types/ThunkConfigSchema/ThunkConfigSchema";
import { $api } from "../../../../shared/api/AxiosApi/AxiosApi";
import { UserReducers } from "../../../../entities/User";

const extraArguments: ThunkExtraArguments = {
  api: $api,
};

export function createReduxStore() {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: UserReducers,
  };

  const store = configureStore({
    reducer: rootReducers,
    devTools: IS_DEVELOPMENT_GLOBAL,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArguments,
        },
      }),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
