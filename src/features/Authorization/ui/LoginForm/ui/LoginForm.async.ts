import React from "react";

export const LoginFormAsync = React.lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    // I know that doing it this way in real projects is an antipattern
    setTimeout(() => resolve(import("./LoginForm")), 3000);
  }),
);