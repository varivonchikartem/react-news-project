import React from "react";

export const useActiveModal = () => {
  const [isActiveModal, setIsActiveModal] = React.useState(false);
  const [isActiveSidebarModal, setIsActiveSidebarModal] = React.useState(false);

  const onOpenModal = React.useCallback(() => {
    setIsActiveModal(true);
  }, []);

  const onCloseModal = React.useCallback(() => {
    setIsActiveModal(false);
  }, []);

  const onOpenSidebarModal = React.useCallback(() => {
    setIsActiveSidebarModal(true);
  }, []);

  const onCloseSidebarModal = React.useCallback(() => {
    setIsActiveSidebarModal(false);
  }, []);

  return {
    isActiveModal,
    isActiveSidebarModal,
    onOpenModal,
    onCloseModal,
    onOpenSidebarModal,
    onCloseSidebarModal,
  };
};
