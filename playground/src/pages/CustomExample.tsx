import React from 'react';
import {
    NextStepButtonProps,
    PreviousStepButtonProps,
    ReactGrandTour,
    StepButtonProps,
} from 'react-grand-tour';
import { HomeSteps } from 'tours';
import { Box, Button, IconButton } from '@material-ui/core';
import { Hero, KitchenSink } from 'components';
import { Star, ArrowRight, ArrowLeft } from '@material-ui/icons';

const StepButton: React.FC<StepButtonProps> = ({ goToStep, active }) => (
    <IconButton onClick={goToStep} size="small" color={active ? 'primary' : undefined}>
        <Star />
    </IconButton>
);

const Next: React.FC<NextStepButtonProps> = ({ goNext }) => (
    <Button color="secondary" variant="contained" onClick={goNext} size="small">
        <ArrowRight />
    </Button>
);

const Prev: React.FC<PreviousStepButtonProps> = ({ goBack }) => (
    <Button color="secondary" variant="contained" onClick={goBack} size="small">
        <ArrowLeft />
    </Button>
);

const CustomExample = () => {
    return (
        <ReactGrandTour
            steps={HomeSteps}
            stepButton={StepButton}
            nextStepButton={Next}
            previousStepButton={Prev}
        >
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
    );
};

export default CustomExample;
