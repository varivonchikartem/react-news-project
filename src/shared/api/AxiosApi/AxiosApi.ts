import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "../../const/localStorage/User/UserKey/UserKey";

export const $api = axios.create({
  baseURL: BUILD_API_URL,
  headers: {
    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
