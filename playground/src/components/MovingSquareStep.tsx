import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { HomeStepIds } from 'tours';

const useStyle = makeStyles(theme => ({
    movingBox: {
        position: 'absolute',
        animation: `$move 10s ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        transition: `left 500ms ${theme.transitions.easing.sharp}, top 2500ms ${theme.transitions.easing.sharp}`,
    },
    '@keyframes move': {
        '0%': {
            top: 10,
            left: 10,
        },
        '25%': {
            top: 'calc(100% - 60px)',
            left: 10,
        },
        '50%': {
            top: 'calc(100% - 60px)',
            left: 'calc(100% - 60px)',
        },
        '75%': {
            top: 10,
            left: 'calc(100% - 60px)',
        },
        '100%': {
            top: 10,
            left: 10,
        },
    },
}));

const MovingSquareStep = () => {
    const { movingBox } = useStyle();
    return (
        <Box my={4} px={20} width="100%">
            <Box bgcolor="primary.main" height={200} position="relative">
                <Box
                    id={HomeStepIds.movingBox}
                    className={movingBox}
                    bgcolor="secondary.main"
                    height={50}
                    width={50}
                    borderRadius={8}
                />
            </Box>
        </Box>
    );
};

export default MovingSquareStep;
