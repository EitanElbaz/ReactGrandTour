import React, { useMemo, useCallback, useState, PropsWithChildren, useEffect } from 'react';
import styles from './styles';
import {
    ComponentOverrides,
    ComponentVisibility,
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
    EmptyClose,
} from './components';
import ReactGrandTourContext from './Context';

type Props = PropsWithChildren<ReactGrandTourProps & Partial<ComponentOverrides>>;

const defaultShortcuts = {
    closeModal: ['Escape'],
    nextStep: ['ArrowRight'],
    prevStep: ['ArrowLeft'],
};

const emptyStyles = {};
const emptyVisibility = {};

const ReactGrandTour: React.FC<Props> = ({
    children,
    open: defaultOpen = false,
    onClose,
    onOpen,
    onStepChange,
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
    disableCloseOnEscape = false,
    disableCloseBtn = false,
    disableCloseOnBackdropClick = false,
    stylingOverrides = emptyStyles,
    keyboardShortcuts,
    componentVisibility = emptyVisibility,
}) => {
    const [open, setOpen] = useState(defaultOpen);
    const [currentIndex, setCurrentIndex] = useState(openAt);
    const [steps, setSteps] = useState(defaultSteps);
    const allSteps = useMemo(() => steps.map((_, i) => i), [steps]);
    const memoisedShortcuts = useMemo(
        () => ({ ...defaultShortcuts, ...keyboardShortcuts }),
        [keyboardShortcuts],
    );

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
            if (reason === 'close-btn' && disableCloseBtn) return;
            if (reason === 'escape' && disableCloseOnEscape) return;
            if (reason === 'backdrop' && disableCloseOnBackdropClick) return;

            if (onClose) {
                onClose(reason);
            } else {
                setOpen(false);
            }
            setSteps(defaultSteps);
        },
        [
            onClose,
            setOpen,
            setSteps,
            defaultSteps,
            disableCloseBtn,
            disableCloseOnEscape,
            disableCloseOnBackdropClick,
        ],
    );

    const changeStep = useCallback(
        (step: number) => {
            if (steps) {
                const currentStep = Number(currentIndex);
                if (step >= 0 && step < steps.length) {
                    setCurrentIndex(step);
                    if (onStepChange) {
                        onStepChange({
                            fromStepIndex: currentStep,
                            toStepIndex: step,
                            totalSteps: steps.length,
                            fromStep: steps[currentStep],
                            toStep: steps[step],
                        });
                    }
                }
            }
        },
        [steps, onStepChange, currentIndex],
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
            const shouldEscape = memoisedShortcuts?.closeModal?.indexOf(e.key) !== -1;
            if (open && shouldEscape) {
                close('escape');
                return;
            }
            const shouldGoNext = memoisedShortcuts?.nextStep?.indexOf(e.key) !== -1;
            if (open && shouldGoNext) {
                goNext();
                return;
            }
            const shouldGoPrev = memoisedShortcuts?.prevStep?.indexOf(e.key) !== -1;
            if (open && shouldGoPrev) {
                goBack();
                return;
            }
        },
        [open, close, goNext, goBack, memoisedShortcuts],
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
                    <style>{styles(stylingOverrides)}</style>{' '}
                    <div className="__react-grand-tour__overlay" onClick={onBackdropClosed} />
                    <Step
                        {...steps[currentIndex]}
                        {...componentVisibility}
                        content={steps[currentIndex].content}
                        component={steps[currentIndex].component}
                        selector={steps[currentIndex].selector}
                        // stepInteraction={steps[currentIndex].stepInteraction}
                        stepIndex={currentIndex}
                        changeStep={changeStep}
                        allSteps={allSteps}
                        close={close}
                        scrollIntoViewOptions={scrollIntoViewOptions}
                        closeButton={disableCloseBtn ? EmptyClose : closeButton}
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
