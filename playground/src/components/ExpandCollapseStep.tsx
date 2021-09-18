import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    vertical: {
        animation: `$vertical 2s ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        transition: `height 10ms ${theme.transitions.easing.easeInOut}`,
        width: 100,
    },
    horizontalOne: {
        animation: `$horizontalOne 2s ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        transition: `width 10ms ${theme.transitions.easing.easeInOut}`,
        height: 100,
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
    '@keyframes horizontalOne': {
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
}));

const ExpandCollapseStep: React.FC<{
    verticalId: string;
    horizontalOneId: string;
    containerId?: string;
}> = ({ verticalId, horizontalOneId, containerId }) => {
    const { vertical, horizontalOne } = useStyle();
    return (
        <Box id={containerId} bgcolor="primary.main" height={200} p={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <Box
                        id={verticalId}
                        className={vertical}
                        bgcolor="secondary.main"
                        height={50}
                        width={50}
                        borderRadius={8}
                    />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Box
                        id={horizontalOneId}
                        className={horizontalOne}
                        bgcolor="secondary.main"
                        height={50}
                        width={50}
                        borderRadius={8}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExpandCollapseStep;
