import React from "react";
import clx from "classnames";
import styles from "./Avatar.module.scss";
import useImageLoader from "../../lib/hooks/useImageLoader/useImageLoader";
import Skeleton from "../Skeleton/Skeleton";

export enum AvatarTheme {
  DEFAULT = "default_theme",
  BORDERED = "bordered_theme",
}

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  height?: string;
  width?: string;
  borderRadius: string;
  theme: AvatarTheme;
  fallback?: React.ReactElement;
  errorFallback?: React.ReactElement;
}

export function Avatar(props: AvatarProps) {
  const { className, src, alt, height, width, borderRadius, theme, fallback, errorFallback, ...otherProps } =
    props;

  const avatarClasses = clx(styles.Avatar, {
    [className!]: className,
    [styles[theme]]: theme,
  });

  const avatarSizesStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      height: height || "20px",
      width: width || "20px",
      borderRadius: borderRadius,
    };
  }, [height, width, borderRadius]);

  const { isLoading, isError } = useImageLoader(src ?? "");

  if (isLoading) {
    return <Skeleton width={width || "20px"} height={height || "20px"} />;
  }

  if (isError) {
    return errorFallback ? errorFallback : <div>Error loading avatar image.</div>;
  }

  return (
    <img
      className={avatarClasses}
      style={avatarSizesStyles}
      src={src}
      alt={alt || "Avatar"}
      {...otherProps}
    />
  );
}
