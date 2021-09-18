import React from 'react';
import { ReactGrandTour } from 'react-grand-tour';
import { HomeSteps } from 'tours';
import { Box } from '@material-ui/core';
import { Hero } from 'components';

const CustomExample = () => {
    return (
        <ReactGrandTour steps={HomeSteps}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                py={8}
            >
                <Hero />
            </Box>
        </ReactGrandTour>
    );
};

export default CustomExample;
