import React from 'react';
import { Button } from '@material-ui/core';
import { useGrandTour } from 'react-grand-tour';

const OpenTourButton: React.FC = ({ children }) => {
    const { open } = useGrandTour();

    return (
        <Button variant="contained" color="primary" onClick={open}>
            {children}
        </Button>
    );
};

export default OpenTourButton;
