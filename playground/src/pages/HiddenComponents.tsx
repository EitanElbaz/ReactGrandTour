import React from 'react';
import { Box } from '@material-ui/core';
import { ReactGrandTour } from 'react-grand-tour';
import { HiddenComponentsTour } from '../tours';
import { Hero, KitchenSink } from '../components';

const HiddenComponents = () => (
    <ReactGrandTour steps={HiddenComponentsTour}>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            pt={2}
            pb={8}
        >
            <Box
                id="middle"
                position="absolute"
                top="50%"
                left="50%"
                height={0}
                width={0}
                bgcolor="red"
            />
            <Hero />
            <KitchenSink />
        </Box>
    </ReactGrandTour>
);

export default HiddenComponents;
