import React from 'react';

interface ModalProps {
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, title, content, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="anc-modal-overlay" onClick={onClose}>
            <div className="anc-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="anc-modal-header">
                    <h3>{title}</h3>
                    <button className="anc-modal-close" onClick={onClose}>×</button>
                </div>
                <div className="anc-modal-body">
                    {content}
                </div>
                <div className="anc-modal-footer">
                    <button className="anc-btn primary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};
