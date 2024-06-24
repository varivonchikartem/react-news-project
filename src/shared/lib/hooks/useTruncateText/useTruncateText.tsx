import React from "react";

export const useTruncateText = (text: string | undefined, maxLength: number): string => {
  const truncatedText = React.useMemo(() => {
    if (!text) return "";
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }, [text, maxLength]);

  return truncatedText;
};
