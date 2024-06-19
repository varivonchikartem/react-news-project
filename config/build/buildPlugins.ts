import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths, isDevelopment, buildApiUrl } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      IS_DEVELOPMENT_GLOBAL: JSON.stringify(isDevelopment),
      BUILD_API_URL: JSON.stringify(buildApiUrl),
    }),
  ];
}
