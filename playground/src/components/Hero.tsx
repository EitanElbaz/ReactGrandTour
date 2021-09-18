import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { HomeStepIds } from 'tours';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import { Link as RouterLink, Route, Switch } from 'react-router-dom';
import { OpenTourButton } from './index';
import { Routes } from 'routes';

const Hero = () => (
    <>
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
        <Box mb={5} mt={2}>
            <Grid container spacing={2}>
                <Grid item>
                    <OpenTourButton>Start Tour</OpenTourButton>
                </Grid>
                <Grid item>
                    <Switch>
                        <Route path={Routes.home} exact>
                            <Button
                                variant="outlined"
                                color="primary"
                                component={RouterLink}
                                to={Routes.custom}
                            >
                                Custom Components Example
                            </Button>
                        </Route>
                        <Route path={Routes.custom}>
                            <Button
                                variant="outlined"
                                color="primary"
                                component={RouterLink}
                                to={Routes.home}
                            >
                                Default Components
                            </Button>
                        </Route>
                    </Switch>
                </Grid>
            </Grid>
        </Box>
    </>
);

export default Hero;
