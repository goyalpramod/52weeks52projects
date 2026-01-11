import { createPortal } from 'react-dom';
import Button from '../button/Button';
import type { ReactNode } from 'react';

export default function Dialog({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: ReactNode }) {
  if (!isOpen) return null; // Don't render anything if closed
  
  return createPortal(
    <div className="fixed inset-0 bg-transparent z-1000 flex items-center justify-center">
      <div className="bg-primary-orange text-white px-6 py-3 border-4 rounded-none border-black shadow-[6px_6px_0_0_black] animate-[scale-in_0.2s_ease-out]">
        {children}
        <Button title='Close' onClick={onClose}>
        </Button>
      </div>
    </div>,
    document.body
  );
}
