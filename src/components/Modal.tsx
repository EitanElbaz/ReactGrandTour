import React, { useMemo } from 'react';
import FadeIn from './FadeIn';
import {
    ArrowDirection,
    ComponentOverrides,
    ComponentVisibility,
    ReactGrandTourProps,
} from '../types';
import CloseButton from './CloseButton';
import { isSafari } from '../lib';
import CloseButtonPositionalWrapper from './CloseButtonPositionalWrapper';

export type ModalProps = Partial<ComponentOverrides> &
    ComponentVisibility & {
        arrowDirection: ArrowDirection;
        stepIndex: number;
        changeStep: (index: number) => void;
        allSteps: number[];
        close: ReactGrandTourProps['onClose'];
        renderedContent: any;
        scrollToElement: () => void;
        track: boolean;
    };

const Modal = ({
    arrowDirection,
    stepIndex,
    changeStep,
    allSteps,
    close,
    renderedContent: content,
    scrollToElement,
    arrow: Arrow,
    closeButton: CloseButton,
    currentStepLabel: CurrentStepLabel,
    dialogWrapper: DialogWrapper,
    nextStepButton: NextStepButton,
    previousStepButton: PreviousStepButton,
    stepButtonWrapper: StepButtonWrapper,
    stepButton: StepButton,
    track,

    hideCloseButton,
    hideCurrentStepLabel,
    hideNextStepButton,
    hidePreviousStepButton,
    hideStepButtons,
}: ModalProps) => {
    const arrow = useMemo(() => <Arrow direction={arrowDirection} />, [Arrow, arrowDirection]);
    const currentStepLabel = useMemo(
        () => <CurrentStepLabel currentStep={stepIndex} totalSteps={allSteps.length} />,
        [CurrentStepLabel, stepIndex, allSteps.length],
    );
    const nextStepButton = useMemo(
        () => (
            <NextStepButton
                currentStep={stepIndex}
                goNext={() => changeStep(stepIndex + 1)}
                skipTo={changeStep}
                totalSteps={allSteps.length}
                close={close}
            />
        ),
        [stepIndex, changeStep, allSteps.length, NextStepButton, close],
    );
    const previousStepButton = useMemo(
        () => (
            <PreviousStepButton
                currentStep={stepIndex}
                goBack={() => changeStep(stepIndex - 1)}
                skipTo={changeStep}
                totalSteps={allSteps.length}
                close={close}
            />
        ),
        [stepIndex, changeStep, allSteps.length, PreviousStepButton, close],
    );
    const stepButtonWrapper = useMemo(
        () => (
            <StepButtonWrapper
                stepButtons={allSteps.map((x, index) => (
                    <StepButton
                        key={x}
                        currentStep={stepIndex}
                        active={stepIndex === x}
                        step={index}
                        goToStep={() => changeStep(index)}
                    />
                ))}
                currentStep={stepIndex}
                totalSteps={allSteps.length}
                goNext={() => changeStep(stepIndex + 1)}
                goBack={() => changeStep(stepIndex - 1)}
                skipTo={changeStep}
            />
        ),
        [allSteps, stepIndex, changeStep, StepButton, StepButtonWrapper],
    );

    const closeButton = useMemo(
        () => <CloseButton close={close} PositionalWrapper={CloseButtonPositionalWrapper} />,
        [close, CloseButton],
    );

    return (
        <FadeIn>
            <div
                className={`__react-grand-tour__modal-position ${
                    track && !isSafari ? '__react-grand-tour__modal-position-track' : ''
                }`}
            >
                <div
                    className="__react-grand-tour__modal-container"
                    onClick={arrow ? scrollToElement : undefined}
                >
                    <DialogWrapper
                        {...{
                            allSteps,
                            arrow,
                            changeStep,
                            closeButton,
                            content,
                            currentStepLabel,
                            nextStepButton,
                            previousStepButton,
                            stepButtonWrapper,
                            stepIndex,
                            stepButtonComponent: StepButton,

                            hideCloseButton,
                            hideCurrentStepLabel,
                            hideNextStepButton,
                            hidePreviousStepButton,
                            hideStepButtons,
                        }}
                    />
                </div>
            </div>
        </FadeIn>
    );
};

export default React.memo(Modal);
