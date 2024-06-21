import React from "react";
import clx from "classnames";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;

  height: string;
  width: string;
  borderRadius?: string;
}

function Skeleton(props: SkeletonProps) {
  const { className, height, width, borderRadius } = props;

  const skeletonPropsStyles: React.CSSProperties = {
    width: width,
    height: height,
    borderRadius: borderRadius ?? "var(--border-radius)",
  };

  const skeletonStyles = clx(styles.Skeleton, {
    [className!]: className,
  });

  return <div className={skeletonStyles} style={skeletonPropsStyles} />;
}

export default React.memo(Skeleton);
