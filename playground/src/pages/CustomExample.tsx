import React from 'react';
import {
    CloseButtonProps,
    NextStepButtonProps,
    PreviousStepButtonProps,
    ReactGrandTour,
    StepButtonProps,
} from 'react-grand-tour';
import { HomeStepIds, HomeSteps } from 'tours';
import { Box, Button, IconButton } from '@material-ui/core';
import { Hero, KitchenSink } from 'components';
import { ArrowLeft, ArrowRight, Star } from '@material-ui/icons';

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

const Close: React.FC<CloseButtonProps> = () => (
    <Box height={20} width={20} borderRadius="50%" bgcolor="red" />
);

const ContentOverride: React.FC = ({ children }) => (
    <Box bgcolor="primary.main" my={2} p={2}>
        {children}
    </Box>
);

const CustomExample = () => {
    return (
        <ReactGrandTour
            steps={[
                {
                    content:
                        'Welcome to React Grand Tour! (With weird custom component overrides)!!!',
                    selector: `#${HomeStepIds.customOne}`,
                },
                ...HomeSteps.slice(1),
            ]}
            stepButton={StepButton}
            nextStepButton={Next}
            previousStepButton={Prev}
            closeButton={Close}
            contentWrapper={ContentOverride}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                pt={2}
                pb={8}
            >
                <Hero />

                <KitchenSink />
            </Box>
        </ReactGrandTour>
    );
};

export default CustomExample;
