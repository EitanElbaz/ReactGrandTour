import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    vertical: {
        animation: `$vertical 2s ${theme.transitions.easing.sharp}`,
        animationIterationCount: 'infinite',
        transition: `height 10ms ${theme.transitions.easing.easeInOut}`,
        width: 100,
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
}));

const ExpandCollapseStep: React.FC<{ verticalId: string; containerId?: string }> = ({
    verticalId,
    containerId,
}) => {
    const { vertical } = useStyle();
    return (
        <Box id={containerId} bgcolor="primary.main" height={200} p={2}>
            <Box
                id={verticalId}
                className={vertical}
                bgcolor="secondary.main"
                height={50}
                width={50}
                borderRadius={8}
            />
        </Box>
    );
};

export default ExpandCollapseStep;
