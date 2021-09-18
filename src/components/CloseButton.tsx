import React from 'react';
import { CloseButtonProps } from '../types';

const CloseButton: React.FC<CloseButtonProps> = ({ close, children }) => (
    <button
        type="button"
        onClick={event => {
            event.stopPropagation();
            close();
        }}
        className="__react-grand-tour__close-button"
    >
        {children}
    </button>
);

export default CloseButton;
