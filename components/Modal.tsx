// components/Modal.tsx
import { FC, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50 bg-opacity-25 backdrop-blur-sm items-center flex justify-center">
      <div className="w-[600px] flex flex-col"></div>
      <div className="relative z-50 p-8 max-w-md rounded-md text-left">
        <button onClick={onClose} className="text-white text-xl place-self-end">
          X
        </button>
        {children}
      </div>
    </div>
  ) : null;
};
export default Modal;