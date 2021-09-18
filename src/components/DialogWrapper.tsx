import React from 'react';
import { DialogWrapperProps } from '../types';

const DialogWrapper = ({
    arrow,
    closeButton,
    content,
    previousStepButton,
    stepButtonWrapper,
    nextStepButton,
}: DialogWrapperProps) => (
    <div className="__react-grand-tour__modal">
        <div className="__react-grand-tour__modal-content">
            {arrow}
            {closeButton}
            {content}
            <div className="__react-grand-tour__page-selector">
                {previousStepButton}
                {stepButtonWrapper}
                {nextStepButton}
            </div>
        </div>
    </div>
);

export default DialogWrapper;
