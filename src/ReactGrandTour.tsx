import React, { useMemo, useCallback, useState, PropsWithChildren, useEffect } from 'react';
import styles from './styles';
import {
    ComponentOverrides,
    ReactGrandTourCloseReason,
    ReactGrandTourProps,
    ReactGrandTourStep,
} from './types';
import {
    Arrow,
    CurrentStepLabel,
    DialogWrapper,
    NextStepButton,
    PreviousStepButton,
    StepButton,
    StepButtonWrapper,
    Step,
    Close,
} from './components';
import ReactGrandTourContext from './Context';

type Props = PropsWithChildren<ReactGrandTourProps & Partial<ComponentOverrides>>;

const ReactGrandTour: React.FC<Props> = ({
    children,
    open: defaultOpen = false,
    onClose,
    onOpen,
    steps: defaultSteps = [],
    openAt = 0,
    scrollIntoViewOptions = { behavior: 'smooth', block: 'center' },
    closeButton = Close,
    currentStepLabel = CurrentStepLabel,
    nextStepButton = NextStepButton,
    previousStepButton = PreviousStepButton,
    stepButton = StepButton,
    stepButtonWrapper = StepButtonWrapper,
    arrow = Arrow,
    dialogWrapper = DialogWrapper,
    contentWrapper,
}) => {
    const [open, setOpen] = useState(defaultOpen);
    const [currentIndex, setCurrentIndex] = useState(openAt);
    const [steps, setSteps] = useState(defaultSteps);
    const allSteps = useMemo(() => steps.map((_, i) => i), [steps]);

    useEffect(() => setOpen(defaultOpen), [defaultOpen]);
    useEffect(() => setSteps(defaultSteps), [defaultSteps]);
    useEffect(() => {
        if (onOpen && open) {
            onOpen();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const close = useCallback(
        (reason: ReactGrandTourCloseReason) => {
            if (onClose) {
                onClose(reason);
            } else {
                setOpen(false);
            }
            setSteps(defaultSteps);
        },
        [onClose, setOpen, setSteps, defaultSteps],
    );

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

    const onBackdropClosed = useCallback(() => {
        close('backdrop');
    }, [close]);

    const onKeyUp = useCallback(
        (e: KeyboardEvent) => {
            if (open && e.key === 'Escape') {
                close('escape');
            }
        },
        [open, close],
    );

    useEffect(() => {
        window.addEventListener('keyup', onKeyUp);
        return () => {
            window.removeEventListener('keyup', onKeyUp);
        };
    }, [onKeyUp]);

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
                    <div className="__react-grand-tour__overlay" onClick={onBackdropClosed} />
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
                        contentWrapper={contentWrapper}
                    />
                </div>
            )}
        </ReactGrandTourContext.Provider>
    );
};

export default React.memo(ReactGrandTour);
