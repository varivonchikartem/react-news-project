import React from "react";

export const RegistrationFormAsync = React.lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    // I know that doing it this way in real projects is an antipattern
    setTimeout(() => resolve(import("./RegistrationForm")), 3000);
  }),
);