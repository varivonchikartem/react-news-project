import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthenticationData } from "../../../../entities/User/model/selectors/getUserAuthenticationData/getUserAuthenticationData";
import { SidebarItemType } from "../types/SidebarItemsSchema";
import {
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "../../../../shared/const/PageRoutes/PageRoutes";

import HomeIcon from "../../../../shared/assets/icons/home-icon.svg";
import NewsIcon from "../../../../shared/assets/icons/news-icon.svg";
import ProfileIcon from "../../../../shared/assets/icons/avatar-icon.svg";

export const getSidebarItems = createSelector(getUserAuthenticationData, (userAuthenticationData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: HomeIcon,
      text: "Домашняя страница",
    },
    {
      path: getRouteArticles(),
      Icon: NewsIcon,
      text: "Новости",
    },
  ];

  if (userAuthenticationData) {
    sidebarItemsList.push({
      path: getRouteProfile(userAuthenticationData.id),
      Icon: ProfileIcon,
      text: "Профиль",
    });
  }

  return sidebarItemsList;
});
