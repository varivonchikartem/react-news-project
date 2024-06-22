import React from "react";
import clx from "classnames";
import styles from "./Avatar.module.scss";

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
  const { className, src, alt, height, width, borderRadius, fallback, errorFallback, theme, ...otherProps } =
    props;

  const avatarClasses = clx(styles.Avatar, {
    [className!]: className,
    [styles[theme]]: theme,
  });

  const avatarSizesStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      height: height || 20,
      width: width || 20,
      borderRadius: borderRadius,
    };
  }, [height, width]);

  return <img className={avatarClasses} style={avatarSizesStyles} src={src} alt={alt} {...otherProps} />;
}
