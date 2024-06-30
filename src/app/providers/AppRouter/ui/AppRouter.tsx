import React from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfiguration } from "../config/RouterConfiguration/RouterConfiguration";
import { PageWrapper } from "../../../../widgets/PageWrapper/index.";
import { Header } from "../../../../widgets/Header";
import { Sidebar } from "../../../../widgets/Sidebar";

interface AppRouterProps {}

export function AppRouter(props: AppRouterProps) {
  return (
    <PageWrapper>
      <React.Suspense fallback="Loading">
        <Routes>
          {Object.values(routerConfiguration).map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </React.Suspense>
    </PageWrapper>

  );
}
