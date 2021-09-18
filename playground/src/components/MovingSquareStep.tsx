import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    movingBox: {
        position: 'absolute',
        animation: `$move 5s ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        transition: `left 100ms ${theme.transitions.easing.easeInOut}, top 100ms ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes move': {
        '0%': {
            top: 20,
            left: 20,
        },
        '15%': {
            top: 'calc(100% - 70px)',
            left: 20,
        },
        '50%': {
            top: 'calc(100% - 70px)',
            left: 'calc(100% - 70px)',
        },
        '65%': {
            top: 20,
            left: 'calc(100% - 70px)',
        },
        '100%': {
            top: 20,
            left: 20,
        },
    },
}));

const MovingSquareStep: React.FC<{ boxId: string; containerId?: string }> = ({
    boxId,
    containerId,
}) => {
    const { movingBox } = useStyle();
    return (
        <Box id={containerId} bgcolor="primary.main" height={200} position="relative">
            <Box
                id={boxId}
                className={movingBox}
                bgcolor="secondary.main"
                height={50}
                width={50}
                borderRadius={8}
            />
        </Box>
    );
};

export default MovingSquareStep;
