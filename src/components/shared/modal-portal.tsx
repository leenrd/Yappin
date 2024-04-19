import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children?: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal_portal");
    if (!modalRoot) {
      console.error('Modal root element with ID "modal_portal" not found.');
      return;
    }
    modalRoot.appendChild(elementRef.current!);

    return () => {
      if (modalRoot) {
        modalRoot.removeChild(elementRef.current!);
      }
    };
  }, []);

  return createPortal(
    <div>{children}</div>,
    elementRef.current as HTMLDivElement
  );
};

export default Modal;
