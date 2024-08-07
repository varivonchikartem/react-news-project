import React from "react";
import clx from "classnames";
import styles from "./Icon.module.scss";

export enum IconTheme {
  DEFAULT = "default_theme",
  TRANSPARENT = "transparent_theme",
  ACTIVE = "active_theme",
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;

  theme: IconTheme;

  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export function Icon(props: IconProps) {
  const { className, Svg, height = 25, width = 25, theme, ...otherProps } = props;

  const iconClasses = clx(styles.Icon, {
    [className!]: className,
    [styles[theme]]: theme,
  });

  return <Svg className={iconClasses} width={width} height={height} {...otherProps} />;
}
