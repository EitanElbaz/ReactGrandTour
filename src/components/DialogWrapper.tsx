import React from 'react';
import { DialogWrapperProps } from '../types';

const DialogWrapper = ({
    arrow,
    currentStepLabel,
    closeButton,
    content,
    previousStepButton,
    stepButtonWrapper,
    nextStepButton,

    hideCloseButton,
    hideCurrentStepLabel,
    hideNextStepButton,
    hidePreviousStepButton,
    hideStepButtons,
}: DialogWrapperProps) => (
    <div className="__react-grand-tour__modal">
        <div className="__react-grand-tour__modal-content">
            {arrow}
            {!hideCurrentStepLabel && currentStepLabel}
            {!hideCloseButton && closeButton}
            {content}
            <div className="__react-grand-tour__page-selector">
                {!hidePreviousStepButton && previousStepButton}
                {!hideStepButtons && stepButtonWrapper}
                {!hideNextStepButton && nextStepButton}
            </div>
        </div>
    </div>
);

export default DialogWrapper;
