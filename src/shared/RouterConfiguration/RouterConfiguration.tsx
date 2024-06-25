import { RouteProps } from "react-router-dom";

import { MainPage } from "../../pages/MainPage";
import { ArticlesPage } from "../../pages/ArticlesPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { ArticleDetailsPage } from "../../pages/ArticlesDetailsPage";

export enum AppRoutes {
  MAIN_PAGE = "main_page",
  ARTICLES_PAGE = "articles_page",
  ARTICLE_DETAILS_PAGE = "article_details_page",
  PROFILE_PAGE = "profile_page",
  NOT_FOUND_PAGE = "not_found_page",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_PAGE]: "/",
  [AppRoutes.ARTICLES_PAGE]: "/articles",
  [AppRoutes.ARTICLE_DETAILS_PAGE]: "/articles/",
  [AppRoutes.PROFILE_PAGE]: "/profile",
  [AppRoutes.NOT_FOUND_PAGE]: "*",
};

export const routerConfiguration: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN_PAGE]: {
    path: RoutePath.main_page,
    element: <MainPage />,
  },
  [AppRoutes.ARTICLES_PAGE]: {
    path: RoutePath.articles_page,
    element: <ArticlesPage />,
  },
  [AppRoutes.ARTICLE_DETAILS_PAGE]: {
    path: `${RoutePath.article_details_page}:id`,
    element: <ArticleDetailsPage />,
  },
  [AppRoutes.PROFILE_PAGE]: {
    path: RoutePath.profile_page,
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND_PAGE]: {
    path: RoutePath.not_found_page,
    element: <NotFoundPage />,
  },
};
