import React, { MouseEventHandler } from 'react';
import { LeftArrow, RightArrow } from './Icons';

type ButtonType = { direction: -1 | 1; disabled: boolean; onClick: MouseEventHandler };
const ChevronButton = ({ direction, disabled, onClick }: ButtonType) => (
    <button
        type="button"
        className="__react-grand-tour__chevron-button"
        disabled={disabled}
        onClick={onClick}
    >
        {direction === -1 ? <LeftArrow /> : <RightArrow />}
    </button>
);

export default ChevronButton;
