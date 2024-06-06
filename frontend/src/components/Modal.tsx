import { useState, useEffect, useRef } from 'react';

interface IModal {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface IModalHead {
  children: React.ReactNode;
  className?: string;
}

interface IModalBody {
  children: React.ReactNode;
  className?: string;
}

interface IModalFooter {
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ isOpen, children, className, size }: IModal) => {
  const [show, setShow] = useState<boolean>(isOpen);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  let modalSize = '';

  switch (size) {
    case 'sm':
      modalSize = 'w-[20%]';
      break;
    case 'md':
      modalSize = 'w-[30%]';
      break;
    case 'lg':
      modalSize = 'w-[50%]';
      break;
    default:
      modalSize = 'w-full';
  }

  useEffect(() => {
    setShow(() => isOpen);
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current.querySelector('.modal-head')) {
      isDragging.current = true;
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`${className} ${show ? 'fixed' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div 
        className={`relative p-4 m-auto ${modalSize}`}
        onMouseDown={handleMouseDown}
        ref={modalRef}
        style={{ left: position.x, top: position.y }}
      >
        <div className="relative bg-white rounded-lg shadow">
          {children}
        </div>
      </div>
    </div>
  );
};

const ModalHead = ({ children, className }: IModalHead) => {
  return (
    <div className={`${className} modal-head flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-gray-100 select-none cursor-move`}>
      <div className="text-xl font-semibold text-gray-900">{children}</div>
    </div>
  );
};

const ModalBody = ({ children, className }: IModalBody) => {
  return <div className={`${className} p-4 md:p-5 space-y-4`}>{children}</div>;
};

const ModalFooter = ({ children, className }: IModalFooter) => {
  return (
    <div className={`${className} flex items-center justify-end p-4 md:p-5 border-t gap-3 border-gray-200 rounded-b`}>
      {children}
    </div>
  );
};

Modal.Head = ModalHead;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
