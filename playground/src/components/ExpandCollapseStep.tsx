import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    vertical: {
        animation: `$vertical 2s ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        transition: `height 10ms ${theme.transitions.easing.easeInOut}`,
        width: 100,
    },
    horizontal: {
        animation: `$horizontal 2s ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        transition: `width 10ms ${theme.transitions.easing.easeInOut}`,
        height: 100,
    },
    hotVert: {
        animation: `$hotVert 2s ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        transition: `width 10ms ${theme.transitions.easing.easeInOut}`,
        height: 10,
        width: 10,
    },
    '@keyframes vertical': {
        '0%': {
            height: 100,
        },
        '50%': {
            height: 25,
        },
        '100%': {
            height: 100,
        },
    },
    '@keyframes horizontal': {
        '0%': {
            width: 100,
        },
        '50%': {
            width: 25,
        },
        '100%': {
            width: 100,
        },
    },
    '@keyframes hotVert': {
        '0%': {
            height: 10,
            width: 10,
        },
        '50%': {
            height: 100,
            width: 100,
        },
        '100%': {
            height: 10,
            width: 10,
        },
    },
}));

const ExpandCollapseStep: React.FC<{
    verticalId: string;
    horizontalOneId: string;
    horVertOneId: string;
    containerId?: string;
}> = ({ verticalId, horizontalOneId, horVertOneId, containerId }) => {
    const { vertical, horizontal, hotVert } = useStyle();
    return (
        <Box id={containerId} bgcolor="primary.main" p={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <Box height={100} display="flex" justifyContent="center">
                        <Box
                            id={verticalId}
                            className={vertical}
                            bgcolor="secondary.main"
                            borderRadius={8}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Box display="flex" justifyContent="center">
                        <Box
                            id={horizontalOneId}
                            className={horizontal}
                            bgcolor="secondary.main"
                            borderRadius={8}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Box display="flex" justifyContent="center">
                        <Box
                            id={horVertOneId}
                            className={hotVert}
                            bgcolor="secondary.main"
                            borderRadius={8}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExpandCollapseStep;
