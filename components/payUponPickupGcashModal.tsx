// components/Modal.tsx
import { FC, ReactNode } from 'react';
import { CiCreditCard2 } from "react-icons/ci";

interface ModalProps {
  isOpenGCash: boolean;
  onCloseGCash: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpenGCash, onCloseGCash, children }) => {
  return isOpenGCash? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-25 backdrop-blur-sm">
      <div className="w-[600px] flex flex-col relative z-50 p-8 max-w-md rounded-md text-left">
        <button onClick={onCloseGCash} className="absolute top-0 right-0 text-black text-xl place-self-end">
          X
        </button>
        <div className=" bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7 " >
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Pay Upon Pickup - Card Payment Information</h1>
            </div>

            <div className="mt-5 flex flex-col justify-center items-center">
              <CiCreditCard2 size={60} className="text-white mb-3" />
              <p className="text-center divide-x divide-gray-300 dark:divide-gray-700 text-white">
                The Pay Upon Pickup - Card payment method must be settled in shop. Please present your order form to the cashier at the front desk to settle your payment.
              </p>
            
              <p className="text-center divide-x divide-gray-300 dark:divide-gray-700 text-white pt-3">
                You may pay using debit or credit card via the POS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;