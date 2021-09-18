import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import { ReactGrandTour } from 'react-grand-tour';
import { ExpandCollapseStep, MovingSquareStep, OpenTourAtStep, OpenTourButton } from 'components';
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
                    <Box mb={5}>
                        <OpenTourButton>Start Tour</OpenTourButton>
                    </Box>
                    <Box width="100%" px={20}>
                        <Box bgcolor="primary.main">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" align="center" color="secondary">
                                        Track a fast moving object <OpenTourAtStep step={2} />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <MovingSquareStep boxId={HomeStepIds.three} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box width="100%" px={20} mt={8}>
                        <Box bgcolor="primary.main">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" align="center" color="secondary">
                                        Anchor modal to the container <OpenTourAtStep step={3} />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <MovingSquareStep
                                        boxId={HomeStepIds.four}
                                        containerId={HomeStepIds.fourContainer}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box width="100%" px={20} mt={8}>
                        <Box bgcolor="primary.main">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" align="center" color="secondary">
                                        Anchor modal to the container <OpenTourAtStep step={4} />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <ExpandCollapseStep
                                        verticalId={HomeStepIds.verticalOne}
                                        horizontalOneId={HomeStepIds.horizontalOne}
                                        containerId={HomeStepIds.expandCollapseContainer}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </ReactGrandTour>
        </>
    );
};

export default Home;
