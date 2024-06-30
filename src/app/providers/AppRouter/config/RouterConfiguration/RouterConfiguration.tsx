import { RouteProps } from "react-router-dom";

import { MainPage } from "../../../../../pages/MainPage";
import { ArticlesPage } from "../../../../../pages/ArticlesPage";
import { NotFoundPage } from "../../../../../pages/NotFoundPage";
import { ProfilePage } from "../../../../../pages/ProfilePage";
import { ArticleDetailsPage } from "../../../../../pages/ArticlesDetailsPage";
import {
  AppRoutes,
  getRouteArticles,
  getRouteArticlesDetails,
  getRouteMain,
  getRouteProfile,
} from "../../../../../shared/const/PageRoutes/PageRoutes";

export const routerConfiguration: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN_PAGE]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ARTICLES_PAGE]: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
  },
  [AppRoutes.ARTICLE_DETAILS_PAGE]: {
    path: getRouteArticlesDetails(":id"),
    element: <ArticleDetailsPage />,
  },
  [AppRoutes.PROFILE_PAGE]: {
    path: getRouteProfile(":id"),
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND_PAGE]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
