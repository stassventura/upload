import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  target: string | HTMLElement;
}

const Portal: FC<PortalProps> = ({ children, target }) => {
  const targetElement = typeof target === 'string' ? document.querySelector(target) : target;

  if (!targetElement) {
    console.error('Target element not found for portal.');
    return null;
  }

  return createPortal(children, targetElement);
};

export default Portal;
