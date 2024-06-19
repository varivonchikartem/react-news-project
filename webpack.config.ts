import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const MODE = env.mode || "development";
  const PORT = env.port || 3000;

  const isDevelopment = MODE === "development";
  const buildApiUrl = env.buildApiUrl || "http://localhost:8000/";

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths: paths,
    isDevelopment: isDevelopment,
    port: PORT,
    buildApiUrl: buildApiUrl,
  });

  return config;
};
