import React from "react";

export const ArticlesPageAsync = React.lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    // I know that doing it this way in real projects is an antipattern
    setTimeout(() => resolve(import("./ArticlesPage")), 3000);
  }),
);