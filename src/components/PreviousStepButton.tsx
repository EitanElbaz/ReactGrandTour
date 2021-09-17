import React from 'react';
import ChevronButton from './ChevronButton';
import { PreviousStepButtonProps } from '../types';

const PreviousStepButton = ({ currentStep, goBack }: PreviousStepButtonProps) => (
    <ChevronButton direction={-1} disabled={currentStep === 0} onClick={goBack} />
);

export default PreviousStepButton;
