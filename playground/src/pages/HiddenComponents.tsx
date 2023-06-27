import React from 'react';
import { Box } from '@material-ui/core';
import { ReactGrandTour } from 'react-grand-tour';
import KitchenSink from 'components/KitchenSink';
import Hero from 'components/Hero';
import { HiddenComponentsTour } from 'tours';

const HiddenComponents = () => (
    <ReactGrandTour
        steps={HiddenComponentsTour}
        componentVisibility={{ hideCurrentStepLabel: true }}
    >
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            pt={2}
            pb={8}
        >
            <Hero />
            <KitchenSink />
        </Box>
    </ReactGrandTour>
);

export default HiddenComponents;
