import React from 'react';
import ChevronButton from './ChevronButton';
import { NextStepButtonProps } from '../types';

const NextStepButton = ({ currentStep, totalSteps, goNext }: NextStepButtonProps) => (
    <ChevronButton direction={1} disabled={currentStep === totalSteps - 1} onClick={goNext} />
);

export default NextStepButton;
