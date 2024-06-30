import { configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { UserReducers } from "../../../../entities/User";
import { ThunkExtraArguments } from "./types/ThunkConfigSchema/ThunkConfigSchema";
import { $api } from "../../../../shared/api/AxiosApi/AxiosApi";
import { StateSchema } from "..";
import { createReducerManager } from "./reducerManager";

export function createReduxStore() {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: UserReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArguments = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: IS_DEVELOPMENT_GLOBAL,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
