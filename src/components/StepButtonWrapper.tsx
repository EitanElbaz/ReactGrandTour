import React from 'react';
import { StepButtonWrapperProps } from '../types';

const StepButtonWrapper = ({ stepButtons }: StepButtonWrapperProps) => (
    <div className="__react-grand-tour__dot-wrapper">{stepButtons}</div>
);

export default StepButtonWrapper;
