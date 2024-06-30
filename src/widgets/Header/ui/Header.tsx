import React from "react";
import clx from "classnames";
import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { AuthorizationModal } from "../../../features/Authorization";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getUserAuthenticationData } from "../../../entities/User/model/selectors/getUserAuthenticationData/getUserAuthenticationData";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { Avatar, AvatarTheme } from "../../../shared/ui/Avatar/Avatar";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { UserActions } from "../../../entities/User";
import { Input, InputTheme } from "../../../shared/ui/Input/Input";
import { getArticlesPageSearch } from "../../../pages/ArticlesPage/model/selectors/getArticlesPageSearch/getArticlesPageSearch";
import { ArticlesPageActions } from "../../../pages/ArticlesPage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../../../shared/RouterConfiguration/RouterConfiguration";
import { SidebarModal } from "../../Sidebar/ui/SidebarModal/SidebarModal";
import { Icon, IconTheme } from "../../../shared/ui/Icon/Icon";

import TiltedIcon from "../../../shared/assets/icons/list.svg";
import { FetchArticlesPageListService } from "../../../pages/ArticlesPage/model/services/FetchArticlesPageListService/FetchArticlesPageListService";
import { useDebounce } from "../../../shared/lib/hooks/useDebounce/useDebounce";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { className } = props;

  const headerClasses = clx(styles.Header, {
    [className!]: className,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const userAuthenticationData = useSelector(getUserAuthenticationData);
  const search = useSelector(getArticlesPageSearch);

  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onOpenModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const [isAuthSidebarModal, setIsAuthSidebarModal] = React.useState(false);

  const onOpenSidebarModal = React.useCallback(() => {
    setIsAuthSidebarModal(true);
  }, []);

  const onCloseSidebarModal = React.useCallback(() => {
    setIsAuthSidebarModal(false);
  }, []);

  const onLogout = React.useCallback(() => {
    dispatch(UserActions.logout());
  }, []);

  const fetchData = React.useCallback(() => {
    dispatch(FetchArticlesPageListService());
  }, []);

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
      if (location.pathname === RoutePath.articles_page) {
        event.preventDefault();
      } else {
        navigate(RoutePath.articles_page);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <header className={headerClasses}>
      <div className="container">
        <div className={styles.header_inner}>
          <a href="#" className={styles.header_link}>
            Timesphere
          </a>
          <Link to={RoutePath.articles_page} className={styles.header_form} onClick={onClickSearch}>
            <Input
              theme={InputTheme.DEFAULT}
              className={styles.header_form_search}
              type="search"
              placeholder="Поиск статей"
              onChange={onChangeSearch}
            />
          </Link>
          <div className={styles.header_panel}>
            <ThemeSwitcher />
            {userAuthenticationData && (
              <>
                <DropDown
                  trigger={
                    <Avatar
                      theme={AvatarTheme.DEFAULT}
                      src="https://images.pexels.com/photos/19101653/pexels-photo-19101653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="image"
                      width="31px"
                      height="31px"
                      borderRadius="30px"
                    />
                  }
                  items={[
                    {
                      content: "Выйти",
                      onClick: onLogout,
                    },
                    {
                      content: "Выйти",
                      onClick: onLogout,
                    },
                    {
                      content: "Выйти",
                      onClick: onLogout,
                    },
                    {
                      content: "Выйти",
                      onClick: onLogout,
                    },
                    {
                      content: "Выйти",
                      onClick: onLogout,
                    },
                  ]}
                  menuPosition="40px 0 auto auto"
                  minWidth="250px"
                />
              </>
            )}
            {!userAuthenticationData && (
              <>
                <Button theme={ButtonTheme.DEFAULT} onClick={onOpenModal}>
                  Log in
                </Button>
                <Button
                  className={styles.sidebar_button}
                  theme={ButtonTheme.DEFAULT}
                  onClick={onOpenSidebarModal}
                >
                  <Icon theme={IconTheme.DEFAULT} Svg={TiltedIcon} />
                </Button>
                <SidebarModal onOpenModal={isAuthSidebarModal} onCloseModal={onCloseSidebarModal} />

                {isAuthModal && <AuthorizationModal onOpenModal={isAuthModal} onCloseModal={onCloseModal} />}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
