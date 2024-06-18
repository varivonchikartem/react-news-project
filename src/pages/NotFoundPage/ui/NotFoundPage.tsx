import React from "react";
import clx from "classnames";
import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
  const { className } = props;

  const notfoundpageClasses = clx(styles.NotFoundPage, {
    [className!]: className,
  });

  return <div className={notfoundpageClasses}>NotFoundPage</div>;
};

export default NotFoundPage;
