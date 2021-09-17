import React, { useMemo, useCallback, useState } from 'react';
import styles from './styles';
import { ComponentOverrides, ReactGrandTourProps, ReactGrandTourStep } from './types';
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
import ReactGrandTourContext from './Context';

type Props = ReactGrandTourProps & Partial<ComponentOverrides>;

const ReactGrandTour = ({
    open: defaultOpen = false,
    onClose,
    steps: defaultSteps = [],
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
}: Props) => {
    const [open, setOpen] = useState(defaultOpen);
    const [currentIndex, setCurrentIndex] = useState(openAt);
    const [steps, setSteps] = useState(defaultSteps);
    const allSteps = useMemo(() => steps.map((_, i) => i), [steps]);

    const close = useCallback(() => {
        if (onClose) {
            onClose();
        }
        setOpen(false);
    }, [onClose, setOpen]);

    const changeStep = useCallback(
        (step: number) => {
            if (step >= 0 && step < allSteps.length) {
                setCurrentIndex(step);
            }
        },
        [allSteps.length],
    );
    const openTour = useCallback(
        (atStep = 0, withSteps?: ReactGrandTourStep[]) => {
            setCurrentIndex(atStep);
            if (withSteps != null) {
                setSteps(withSteps);
            }
            setOpen(true);
        },
        [setOpen, setSteps],
    );

    const goNext = useCallback(() => {
        changeStep(currentIndex + 1);
    }, [currentIndex, changeStep]);

    const goBack = useCallback(() => {
        changeStep(currentIndex - 1);
    }, [currentIndex, changeStep]);

    if (!open) return null;

    return (
        <ReactGrandTourContext.Provider
            value={{
                openWith: openTour,
                close,
                isOpen: open,
                steps,
                goNext,
                goBack,
                goToStep: changeStep,
            }}
        >
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
        </ReactGrandTourContext.Provider>
    );
};

export default React.memo(ReactGrandTour);
