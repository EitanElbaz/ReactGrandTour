import React, { useCallback } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import { useGrandTour } from 'react-grand-tour';
import { IconButton } from '@material-ui/core';

const OpenTourAtStep: React.FC<{ step: number }> = ({ step }) => {
    const { openWith } = useGrandTour();

    const onClick = useCallback(() => openWith(step), [step, openWith]);

    return (
        <IconButton onClick={onClick} color="secondary">
            <LaunchIcon fontSize="inherit" />
        </IconButton>
    );
};

export default OpenTourAtStep;
