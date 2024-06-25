import React from "react";
import HomeIcon from "../../../../shared/assets/icons/home-icon.svg";
import NewsIcon from "../../../../shared/assets/icons/news-icon.svg";
import { RoutePath } from "../../../../shared/RouterConfiguration/RouterConfiguration";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main_page,
    Icon: HomeIcon,
    text: "Домашняя страница",
  },
  {
    path: RoutePath.articles_page,
    Icon: NewsIcon,
    text: "Новости",
  },
  {
    path: `${RoutePath.article_details_page}1`,
    Icon: NewsIcon,
    text: "Новости",
  },
  {
    path: RoutePath.profile_page,
    Icon: NewsIcon,
    text: "Профиль",
  },
];
