import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "../types/StateSchema/StateSchema";

export function createReduxStore() {
  const store = configureStore<StateSchema>({
    reducer: {},
    devTools: IS_DEVELOPMENT_GLOBAL,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
