import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  element?: HTMLElement;
}

export function Portal({ children, element = document.body }: PortalProps): JSX.Element {
  return createPortal(children, element);
}