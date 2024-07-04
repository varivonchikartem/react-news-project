import React from "react";
import clx from "classnames";
import styles from "./NotFoundPage.module.scss";
import { AppImage } from "../../../shared/ui/AppImage/AppImage";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
  const { className } = props;

  const notfoundpageClasses = clx(styles.NotFoundPage, {
    [className!]: className,
  });

  return (
    <div className={notfoundpageClasses}>
      <div className={styles.NotFoundPageInner}>
        <div className={styles.Description}>
          <h1>This page doesn’t exist. But you exist.</h1>
          <p className={styles.subtitle}>
            This is your sign to take a break. And take a breath. In and out. When you’re ready, ease back to
            work below.
          </p>
        </div>
        <AppImage
          minHeight="700px"
          className={styles.image}
          src="https://media.sproutsocial.com/uploads/404-Space-Illustration.svg"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
