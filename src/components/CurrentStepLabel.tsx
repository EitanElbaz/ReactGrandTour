import React from 'react';
import { CurrentStepLabelProps } from '../types';

const CurrentStepLabel = ({ currentStep }: CurrentStepLabelProps) => (
    <div className="__react-grand-tour__page-number">{currentStep + 1}</div>
);

export default React.memo(CurrentStepLabel);
