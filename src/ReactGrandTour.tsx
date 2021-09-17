import React, { useMemo, useCallback, useState } from 'react';
import styles from './styles';
import { ComponentOverrides, ReactGrandTourStep } from './types';
import {
    Arrow,
    CloseButton,
    CurrentStepLabel,
    DialogWrapper,
    NextStepButton,
    PreviousStepButton,
    StepButton,
    StepButtonWrapper,
    Step,
} from './components';

type ReactGrandTourProps = Partial<ComponentOverrides> & {
    open: boolean;
    onClose: () => void;
    openAt?: number;
    steps: ReactGrandTourStep[];
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    transitionSpeed?: number;
};

const ReactGrandTour = ({
    open,
    onClose,
    steps,
    openAt = 0,
    scrollIntoViewOptions = { behavior: 'smooth', block: 'center' },
    closeButton = CloseButton,
    currentStepLabel = CurrentStepLabel,
    nextStepButton = NextStepButton,
    previousStepButton = PreviousStepButton,
    stepButton = StepButton,
    stepButtonWrapper = StepButtonWrapper,
    arrow = Arrow,
    dialogWrapper = DialogWrapper,
}: ReactGrandTourProps) => {
    const [currentIndex, setCurrentIndex] = useState(openAt);
    const allSteps = useMemo(() => steps.map((_, i) => i), [steps]);
    const close = useCallback(() => {
        onClose();
        setCurrentIndex(openAt);
    }, [onClose, openAt]);
    const changeStep = useCallback(
        (step: number) => {
            if (step >= 0 && step < allSteps.length) {
                setCurrentIndex(step);
            }
        },
        [allSteps.length],
    );
    if (!open) return null;

    return (
        <div className="__react-grand-tour__">
            <style>{styles()}</style>
            <div className="__react-grand-tour__overlay" onClick={close} />
            <Step
                {...steps[currentIndex]}
                content={steps[currentIndex].content}
                selector={steps[currentIndex].selector}
                stepInteraction={steps[currentIndex].stepInteraction}
                stepIndex={currentIndex}
                changeStep={changeStep}
                allSteps={allSteps}
                close={close}
                scrollIntoViewOptions={scrollIntoViewOptions}
                closeButton={closeButton}
                currentStepLabel={currentStepLabel}
                nextStepButton={nextStepButton}
                previousStepButton={previousStepButton}
                stepButton={stepButton}
                stepButtonWrapper={stepButtonWrapper}
                arrow={arrow}
                dialogWrapper={dialogWrapper}
            />
        </div>
    );
};

export default React.memo(ReactGrandTour);
