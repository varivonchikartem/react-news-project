import React from "react";
import clx from "classnames";
import styles from "./ArticlesPage.module.scss";
import { Input, InputTheme } from "../../../shared/ui/Input/Input";
import { Modal } from "../../../shared/ui/Modal/Modal";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { AuthorizationModal } from "../../../features/Authorization";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  const articlespageClasses = clx(styles.ArticlesPage, {
    [className!]: className,
  });

  return <div className={articlespageClasses}>1</div>;
};

export default ArticlesPage;
