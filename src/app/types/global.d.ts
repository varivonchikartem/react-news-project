declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const IS_DEVELOPMENT_GLOBAL: boolean;
declare const BUILD_API_URL: string;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
