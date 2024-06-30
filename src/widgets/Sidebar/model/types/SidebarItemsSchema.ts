import React from "react";
import HomeIcon from "../../../../shared/assets/icons/home-icon.svg";
import NewsIcon from "../../../../shared/assets/icons/news-icon.svg";
import ProfileIcon from "../../../../shared/assets/icons/avatar-icon.svg";
import {
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "../../../../shared/const/PageRoutes/PageRoutes";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: getRouteProfile(),
    Icon: ProfileIcon,
    text: "Профиль",
  },
];
