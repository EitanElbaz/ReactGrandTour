import React from 'react';
import { Box } from '@material-ui/core';
import { ReactGrandTour } from 'react-grand-tour';
import { Hero, KitchenSink } from 'components';
import { HomeSteps } from 'tours';

const Home = () => {
    return (
        <>
            <ReactGrandTour steps={HomeSteps}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    py={8}
                >
                    <Hero />
                    <KitchenSink />
                </Box>
            </ReactGrandTour>
        </>
    );
};

export default Home;
