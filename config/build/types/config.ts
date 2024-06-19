export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;

  buildApiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;

  isDevelopment: boolean;
  buildApiUrl: string;
}
