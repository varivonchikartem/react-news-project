export const getRouteMain = () => "/";
export const getRouteArticles = () => "/articles";
export const getRouteArticlesDetails = (id: string) => `/articles/${id}`;
export const getRouteProfile = (id: string) => `/profile/${id}`;

export enum AppRoutes {
  MAIN_PAGE = "main_page",
  ARTICLES_PAGE = "articles_page",
  ARTICLE_DETAILS_PAGE = "article_details_page",
  PROFILE_PAGE = "profile_page",

  NOT_FOUND_PAGE = "not_found_page",
}
