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

    const handleLoad = () => {
      setIsLoading(false);
      setIsError(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setIsError(true);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    img.src = src;

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src]);

  return { isLoading, isError };
}

export default useImageLoader;
