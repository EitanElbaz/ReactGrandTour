import React from 'react';
import { CloseButtonProps } from '../types';
import { Close } from '../components/Icons';

const CloseButton: React.FC<CloseButtonProps> = ({ close, children }) => (
    <button
        type="button"
        onClick={event => {
            event.stopPropagation();
            close('close-btn');
        }}
        className="__react-grand-tour__close-button"
    >
        <Close />
    </button>
);

export default CloseButton;
