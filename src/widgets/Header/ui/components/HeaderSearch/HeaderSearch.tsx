import React from "react";
import clx from "classnames";
import styles from "./HeaderSearch.module.scss";
import { useAppDispatch } from "../../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArticlesPageSearch } from "../../../../../pages/ArticlesPage/model/selectors/getArticlesPageSearch/getArticlesPageSearch";
import { FetchArticlesPageListService } from "../../../../../pages/ArticlesPage/model/services/FetchArticlesPageListService/FetchArticlesPageListService";
import { useDebounce } from "../../../../../shared/lib/hooks/useDebounce/useDebounce";
import { ArticlesPageActions } from "../../../../../pages/ArticlesPage";
import { getRouteArticles } from "../../../../../shared/const/PageRoutes/PageRoutes";
import { Link } from "react-router-dom";
import { Input, InputTheme } from "../../../../../shared/ui/Input/Input";

interface HeaderSearchProps {
  className?: string;
}

export const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const { className } = props;

  const headersearchClasses = clx(styles.HeaderSearch, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const search = useSelector(getArticlesPageSearch);

  const fetchData = React.useCallback(() => {
    dispatch(FetchArticlesPageListService());
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeSearch = React.useCallback(
    (search: string) => {
      dispatch(ArticlesPageActions.setArticleSearch(search));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onClickSearch = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (location.pathname === getRouteArticles()) {
        event.preventDefault();
      } else {
        navigate(getRouteArticles());
      }
    },
    [location.pathname, navigate]
  );

  return (
    <Link to={getRouteArticles()} className={headersearchClasses} onClick={onClickSearch}>
      <Input
        theme={InputTheme.DEFAULT}
        className={styles.input}
        type="search"
        placeholder="Поиск статей"
        onChange={onChangeSearch}
        value={search}
      />
    </Link>
  );
};
