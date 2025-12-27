import { createPortal } from 'react-dom';
import Button from './button.component';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function Modal({
    title,
    buttonContent,
    isButton = true,
    className,
    children,
}: {
    title?: string;
    buttonContent: React.ReactNode;
    isButton?: boolean;
    className?: string;
    children?: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const ModalButtonComponent = isButton ? Button : 'span';

    useEffect(() => {
        if (isOpen) document.body.classList.add('overflow-y-hidden');
        else document.body.classList.remove('overflow-y-hidden');
    }, [isOpen]);

    return (
        <>
            <ModalButtonComponent
                className={`${className} ${!isButton && 'hover:cursor-pointer hover:text-sky-500'}`}
                onClick={() => setIsOpen(true)}
            >
                {buttonContent}
            </ModalButtonComponent>
            {isOpen &&
                createPortal(
                    <div className="w-screen h-screen fixed top-0 left-0 z-20 flex items-center justify-center bg-gray-950/40">
                        <div className="w-xl rounded-md p-6 bg-gray-900 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.3)] drop-shadow-lg">
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-bold">{title}</h1>
                                <button
                                    className="p-2 rounded-md hover:bg-gray-800/50 hover:cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X />
                                </button>
                            </div>
                            {children}
                        </div>
                    </div>,
                    document.getElementById('app')!
                )}
        </>
    );
}
