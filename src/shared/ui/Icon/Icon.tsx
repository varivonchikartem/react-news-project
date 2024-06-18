import React from "react";
import clx from "classnames";
import styles from "./Icon.module.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;

  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;

  active?: boolean;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { className, Svg, height = 20, width = 20, active, ...otherProps } = props;

  const iconClasses = clx(styles.Icon, {
    [className!]: className,
    [styles.active]: active,
  });

  return <Svg width={width} height={height} className={iconClasses} {...otherProps} />;
};
