import React, { useMemo, useState, useEffect } from 'react';
import { useCallback } from 'react';
import { ComponentOverrides, ReactGrandTourStep } from '../../types';
import Highlight from '../Highlight';
import Modal from '../Modal';
import { getArrowDirection } from '../../lib';
import StepPositioner from './StepPostioner';

const $ = (query: string) => document.querySelector(query);

type Props = Partial<ReactGrandTourStep> &
    ComponentOverrides & {
        stepIndex: number;
        changeStep: (index: number) => void;
        allSteps: number[];
        close: () => void;
        scrollIntoViewOptions: ScrollIntoViewOptions;
    };

const Step = React.memo(
    ({
        element,
        stepIndex,
        changeStep,
        allSteps,
        close,
        renderedContent,
        scrollIntoViewOptions,
        closeButton,
        currentStepLabel,
        nextStepButton,
        previousStepButton,
        stepButton,
        stepButtonWrapper,
        arrow,
        dialogWrapper,
    }: Props & { element: Element; renderedContent: any }) => {
        const [boundaries, setBoundaries] = useState(() => element.getBoundingClientRect());
        const adjustBoundaries = useCallback(
            () => setBoundaries(element.getBoundingClientRect()),
            [element],
        );
        const scrollToElement = useCallback(() => {
            element.scrollIntoView(scrollIntoViewOptions);
            adjustBoundaries();
        }, [adjustBoundaries, element, scrollIntoViewOptions]);
        const keyDownEventHandler = useCallback(
            (event: KeyboardEvent) => {
                if (event.code === 'ArrowLeft' && stepIndex !== 0) {
                    changeStep(stepIndex - 1);
                } else if (event.code === 'ArrowRight' && stepIndex !== allSteps.length - 1) {
                    changeStep(stepIndex + 1);
                }
            },
            [stepIndex, changeStep, allSteps],
        );
        useEffect(() => {
            scrollToElement();
            window.addEventListener('resize', adjustBoundaries);
            window.addEventListener('scroll', adjustBoundaries);
            window.addEventListener('keydown', keyDownEventHandler);

            const interval = setInterval(() => window.dispatchEvent(new Event('resize')), 250);

            const timeout = setTimeout(() => clearInterval(interval), 3000);
            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
                window.removeEventListener('resize', adjustBoundaries);
                window.removeEventListener('scroll', adjustBoundaries);
                window.removeEventListener('keydown', keyDownEventHandler);
            };
        }, [adjustBoundaries, element, keyDownEventHandler, scrollToElement]);

        const arrowDirection = useMemo(() => getArrowDirection(boundaries), [boundaries]);
        return (
            <>
                <StepPositioner boundaries={boundaries} />
                <Highlight />
                <Modal
                    scrollToElement={scrollToElement}
                    arrowDirection={arrowDirection}
                    renderedContent={renderedContent}
                    stepIndex={stepIndex}
                    changeStep={changeStep}
                    allSteps={allSteps}
                    close={close}
                    {...{
                        closeButton,
                        currentStepLabel,
                        nextStepButton,
                        previousStepButton,
                        stepButton,
                        stepButtonWrapper,
                        arrow,
                        dialogWrapper,
                    }}
                />
            </>
        );
    },
);

const DefaultContentComponent: React.FC = ({ children }) => <>{children}</>;

const ElementFinder = ({
    selector,
    content: Content,
    component: Component = DefaultContentComponent,
    stepIndex,
    ...props
}: Props) => {
    const [failedCount, setFailedCount] = useState(0);
    const renderedContent = <Component step={stepIndex}>{Content}</Component>;
    const element = useMemo(() => $(selector), [selector]);
    if (element == null && failedCount < 25) {
        setTimeout(() => setFailedCount(failedCount + 1), 100);
    }
    if (failedCount > 0) {
        setFailedCount(0);
    }
    if (!process.env.NODE_ENV || (process.env.NODE_ENV === 'development' && failedCount == 25)) {
        // eslint-disable-next-line no-console
        console.warn(
            `--- React Grand Tour: Failed to find element using selector '${selector}'. There is probably a bug causing the element not to be added to the page. ---`,
        );
    }
    return (
        <Step {...{ ...props, element: element ?? document.body, renderedContent, stepIndex }} />
    );
};

export default React.memo(ElementFinder);
