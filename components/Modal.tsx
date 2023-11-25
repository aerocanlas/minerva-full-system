// components/Modal.tsx
import { FC, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="relative z-50 bg-white p-8 max-w-md rounded-md text-left">
        <button onClick={onClose} className="absolute top-0 right-0 p-4 focus:outline-none t text-blue-500">
          Close
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;