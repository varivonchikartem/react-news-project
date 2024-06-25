import React from "react";
import clx from "classnames";
import styles from "./AppImage.module.scss";

type MinHeightValue = `${number}px` | `${number}vh` | `${number}%`;

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  minHeight: MinHeightValue;
}

export const AppImage: React.FC<AppImageProps> = (props) => {
  const { className, src, minHeight, ...rest } = props;

  const appimageClasses = clx(styles.AppImage, {
    [className!]: className,
  });

  const appImageBlockStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      minHeight: minHeight || "50vh",
    };
  }, [minHeight]);

  return (
    <figure className={appimageClasses} style={appImageBlockStyles}>
      <img src={src} alt="" width="2495" height="1625" loading="lazy" {...rest} />
    </figure>
  );
};
