import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import { ReactGrandTour } from 'react-grand-tour';
import {
    ExpandCollapseStep,
    Hero,
    MovingSquareStep,
    OpenTourAtStep,
    OpenTourButton,
} from 'components';
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
                    py={8}
                >
                    <Hero />
                    <Box width="100%" px={10}>
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
                    <Box width="100%" px={10} mt={8}>
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
                    <Box width="100%" px={10} mt={8}>
                        <Box bgcolor="primary.main">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" align="center" color="secondary">
                                        Track a morphing object <OpenTourAtStep step={4} />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <ExpandCollapseStep
                                        verticalId={HomeStepIds.verticalOne}
                                        horizontalOneId={HomeStepIds.horizontalOne}
                                        horVertOneId={HomeStepIds.horVertOne}
                                        containerId={HomeStepIds.expandCollapseContainer}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box width="100%" px={10} mt={8}>
                        <Box bgcolor="primary.main">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" align="center" color="secondary">
                                        Anchor Modal To the container <OpenTourAtStep step={7} />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <ExpandCollapseStep
                                        verticalId={HomeStepIds.verticalTwo}
                                        horizontalOneId={HomeStepIds.horizontalTwo}
                                        horVertOneId={HomeStepIds.horVertTwo}
                                        containerId={HomeStepIds.expandCollapseContainerTwo}
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
