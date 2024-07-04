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

export const AppImage: React.FC<AppImageProps> = (props) => {
  const { className, src, minHeight, ...rest } = props;

  const appimageClasses = clx(styles.AppImage, {
    [className!]: className,
  });

  const { isLoading, isError } = useImageLoader(src ?? "");

  const appImageBlockStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      minHeight: minHeight || "50vh",
    };
  }, [minHeight]);

  if (isLoading) {
    return <Skeleton width="100%" height={minHeight || "50vh"} />;
  }

  if (isError) {
    return <Skeleton width="100%" height={minHeight || "50vh"} />;
  }

  return (
    <figure className={appimageClasses} style={appImageBlockStyles}>
      <img src={src} alt="" width="100%" height="100%" loading="lazy" {...rest} />
    </figure>
  );
};
