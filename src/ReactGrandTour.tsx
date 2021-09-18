import React, { useMemo, useCallback, useState, PropsWithChildren, useEffect } from 'react';
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

type Props = PropsWithChildren<ReactGrandTourProps & Partial<ComponentOverrides>>;

const ReactGrandTour: React.FC<Props> = ({
    children,
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
}) => {
    const [open, setOpen] = useState(defaultOpen);
    const [currentIndex, setCurrentIndex] = useState(openAt);
    const [steps, setSteps] = useState(defaultSteps);
    const allSteps = useMemo(() => steps.map((_, i) => i), [steps]);

    useEffect(() => setSteps(defaultSteps), [defaultSteps]);

    const close = useCallback(() => {
        if (onClose) {
            onClose();
        }
        setOpen(false);
        setSteps(defaultSteps);
    }, [onClose, setOpen, setSteps, defaultSteps]);

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

    const openSimple = useCallback(() => openTour(), [openTour]);

    const goNext = useCallback(() => {
        changeStep(currentIndex + 1);
    }, [currentIndex, changeStep]);

    const goBack = useCallback(() => {
        changeStep(currentIndex - 1);
    }, [currentIndex, changeStep]);

    return (
        <ReactGrandTourContext.Provider
            value={{
                open: openSimple,
                openWith: openTour,
                close,
                isOpen: open,
                steps,
                goNext,
                goBack,
                goToStep: changeStep,
            }}
        >
            {children}
            {open && (
                <div className="__react-grand-tour__">
                    <style>{styles()}</style>{' '}
                    <div className="__react-grand-tour__overlay" onClick={close} />
                    <Step
                        {...steps[currentIndex]}
                        content={steps[currentIndex].content}
                        component={steps[currentIndex].component}
                        selector={steps[currentIndex].selector}
                        // stepInteraction={steps[currentIndex].stepInteraction}
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
            )}
        </ReactGrandTourContext.Provider>
    );
};

export default React.memo(ReactGrandTour);
