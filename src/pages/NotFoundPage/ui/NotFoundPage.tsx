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
      <div className={styles.main}>
        <div className={styles.main1}>
          <h1>This page doesn’t exist. But you exist.</h1>
          <p className={styles.subtitle}>
            This is your sign to take a break. And take a breath. In and out. When you’re ready, ease back to
            work below.
          </p>
        </div>
        <div className={styles.main2}>
          <AppImage
            minHeight="700px"
            src="https://media.sproutsocial.com/uploads/404-Space-Illustration.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
