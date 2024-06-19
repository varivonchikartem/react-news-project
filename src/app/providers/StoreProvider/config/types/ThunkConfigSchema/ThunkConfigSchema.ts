import { AxiosInstance } from "axios";
import { StateSchema } from "../StateSchema/StateSchema";

export interface ThunkExtraArguments {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArguments;
  state: StateSchema;
}
