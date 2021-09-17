import React from 'react';
import { StepButtonProps } from '../types';

const StepButton = ({ currentStep, step, goToStep }: StepButtonProps) => (
    <button
        type="button"
        className={
            currentStep === step
                ? `__react-grand-tour__dot __react-grand-tour__dot-selected`
                : '__react-grand-tour__dot'
        }
        onClick={goToStep}
    >
        <div />
    </button>
);

export default StepButton;
