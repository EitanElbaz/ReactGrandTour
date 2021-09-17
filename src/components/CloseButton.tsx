import React from 'react';
import { Close } from './Icons';
import { CloseButtonProps } from '../types';

const CloseButton = ({ close }: CloseButtonProps) => (
    <button
        type="button"
        onClick={event => {
            event.stopPropagation();
            close();
        }}
        className="__react-grand-tour__close-button"
    >
        <Close />
    </button>
);

export default React.memo(CloseButton);
