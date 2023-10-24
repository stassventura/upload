import { FC, ReactNode } from 'react';
import Portal from './Portal';
import CloseIcon from '../icons/CloseIcon';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <Portal target={'#modal-root'}>
      <div className="fixed w-full h-screen bg-black/30 flex justify-center items-center top-0 left-0">
        <div className=" bg-[#f9f9f9] w-[484px] rounded-lg overflow-hidden border-2 border-[#f8f8f8]">
          <header className="w-full flex justify-end items-center p-3 bg-white">
            <span onClick={onClose} className="cursor-pointer">
              <CloseIcon />
            </span>
          </header>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
