import React from "react";
import clx from "classnames";
import styles from "./AppImage.module.scss";
import useImageLoader from "../../lib/hooks/useImageLoader/useImageLoader";
import Skeleton from "../Skeleton/Skeleton";

type MinHeightValue = `${number}px` | `${number}vh` | `${number}%`;

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  minHeight?: MinHeightValue;
}

export const AppImage: React.FC<AppImageProps> = ({
  className,
  src,
  minHeight = "50vh",
  alt = "",
  ...rest
}) => {
  const { isLoading, isError } = useImageLoader(src ?? "");

  const appimageClasses = clx(styles.AppImage, className);

  const appImageBlockStyles = React.useMemo<React.CSSProperties>(
    () => ({
      minHeight: minHeight,
    }),
    [minHeight]
  );

  if (isLoading || isError) {
    return <Skeleton width="100%" height={minHeight} />;
  }

  return (
    <figure className={appimageClasses} style={appImageBlockStyles}>
      <img src={src} alt={alt} loading="lazy" {...rest} />
    </figure>
  );
};
