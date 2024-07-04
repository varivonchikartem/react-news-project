import React from "react";

function useImageLoader(src: string) {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    if (!src) {
      setIsLoading(false);
      setIsError(true);
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setIsError(true);
    };
  }, [src]);

  return { isLoading, isError };
}

export default useImageLoader;
