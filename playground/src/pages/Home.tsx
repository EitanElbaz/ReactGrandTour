import React from 'react';
import { Box, Typography } from '@material-ui/core';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import { ReactGrandTour } from 'react-grand-tour';
import { MovingSquareStep, OpenTourButton } from 'components';
import { HomeStepIds, HomeSteps } from 'tours';

const Home = () => {
    return (
        <>
            <ReactGrandTour steps={HomeSteps}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    pt={8}
                >
                    <Box
                        id={HomeStepIds.two}
                        fontSize={200}
                        borderRadius="50%"
                        bgcolor="primary.main"
                        color="white"
                        p={3}
                    >
                        <Box height={200} borderRadius="50%" bgcolor="secondary.main" p={1}>
                            <DirectionsBusIcon fontSize="inherit" />
                        </Box>
                    </Box>
                    <Box id={HomeStepIds.one} mt={2} display="flex">
                        <Box mr={2}>
                            <Typography variant="h3" color="primary">
                                React
                            </Typography>
                        </Box>
                        <Typography variant="h3" color="secondary">
                            Grand Tour
                        </Typography>
                    </Box>
                    <Box>
                        <OpenTourButton>Start Tour</OpenTourButton>
                    </Box>
                    <MovingSquareStep />
                </Box>
            </ReactGrandTour>
        </>
    );
};

export default Home;
