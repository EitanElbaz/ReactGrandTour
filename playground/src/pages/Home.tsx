import React from 'react';
import { Box } from '@material-ui/core';
import { ReactGrandTour } from 'react-grand-tour';
import { HomeSteps } from '../tours';
import { Hero, KitchenSink } from '../components';

const Home = () => (
    <ReactGrandTour steps={HomeSteps}>
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

export default Home;
