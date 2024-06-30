import React from "react";

export const ErrorPageAsync = React.lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    // I know that doing it this way in real projects is an antipattern
    setTimeout(() => resolve(import("./ErrorPage")), 3000);
  }),
);