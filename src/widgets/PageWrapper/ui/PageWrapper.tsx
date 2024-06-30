import React from "react";
import clx from "classnames";
import styles from "./PageWrapper.module.scss";
import { useSelector } from "react-redux";
import { StateSchema } from "../../../app/providers/StoreProvider";
import { getScrollRestorationByPath } from "../../../features/ScrollRestoration/model/selectors/getScrollRestorationByPath/getScrollRestorationByPath";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ScrollRestorationActions } from "../../../features/ScrollRestoration/model/slices/ScrollRestorationSlice";
import { useThrottle } from "../../../shared/lib/hooks/useThrottle/useThrottle";

interface PageWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const { className, children } = props;

  const pagewrapperClasses = clx(styles.PageWrapper, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const wrapperRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) => getScrollRestorationByPath(state, pathname));

  React.useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  }, [pathname, scrollPosition]);

  const onScroll = useThrottle((event: React.UIEvent<HTMLDivElement>) => {
    dispatch(
      ScrollRestorationActions.setScrollPosition({
        position: event.currentTarget.scrollTop,
        path: pathname,
      })
    );
    console.log("me");
  }, 200);

  return (
    <main className={pagewrapperClasses} ref={wrapperRef} onScroll={onScroll}>
      {children}
    </main>
  );
};
