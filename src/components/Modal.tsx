import React, { useMemo } from 'react';
import FadeIn from './FadeIn';
import { ArrowDirection, ComponentOverrides } from '../types';

export type ModalProps = ComponentOverrides & {
    arrowDirection: ArrowDirection;
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: () => void;
    renderedContent: any;
    scrollToElement: () => void;
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
            />
        ),
        [stepIndex, changeStep, allSteps.length, NextStepButton],
    );
    const previousStepButton = useMemo(
        () => (
            <PreviousStepButton
                currentStep={stepIndex}
                goBack={() => changeStep(stepIndex - 1)}
                skipTo={changeStep}
                totalSteps={allSteps.length}
            />
        ),
        [stepIndex, changeStep, allSteps.length, PreviousStepButton],
    );
    const stepButtonWrapper = useMemo(
        () => (
            <StepButtonWrapper
                stepButtons={allSteps.map((x, index) => (
                    <StepButton
                        key={x}
                        currentStep={stepIndex}
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
    const closeButton = useMemo(() => <CloseButton close={close} />, [close, CloseButton]);

    return (
        <FadeIn>
            <div className="__react-grand-tour__modal-position">
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
                        }}
                    />
                </div>
            </div>
        </FadeIn>
    );
};

export default React.memo(Modal);
