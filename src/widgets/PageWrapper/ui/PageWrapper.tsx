import React from "react";
import clx from "classnames";
import styles from "./PageWrapper.module.scss";

interface PageWrapperProps {
  className?: string;

  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const { className, children, as: Tag = "div" } = props;

  const pagewrapperClasses = clx(styles.PageWrapper, {
    [className!]: className,
  });

  return <Tag className={pagewrapperClasses}>{children}</Tag>;
};
