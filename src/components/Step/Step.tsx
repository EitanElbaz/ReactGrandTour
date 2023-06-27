import React, { useMemo, useState, useEffect } from 'react';
import { useCallback } from 'react';
import {
    ComponentOverrides,
    ComponentVisibility,
    ReactGrandTourProps,
    ReactGrandTourStep,
} from '../../types';
import Highlight from '../Highlight';
import Modal from '../Modal';
import { getArrowDirection } from '../../lib';
import StepPositioner from './StepPostioner';

type Props = Partial<ReactGrandTourStep> &
    ComponentVisibility &
    ComponentOverrides & {
        stepIndex: number;
        changeStep: (index: number) => void;
        allSteps: number[];
        close: ReactGrandTourProps['onClose'];
        scrollIntoViewOptions: ScrollIntoViewOptions;
    };

const Step = React.memo(
    ({
        element,
        anchorElement,
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
        track = false,
        trackFrequency = 10,
        preferredModalPosition = 'auto',

        hideStepElementHighlight = false,

        hideCloseButton,
        hideCurrentStepLabel,
        hideNextStepButton,
        hidePreviousStepButton,
        hideStepButtons,
    }: Omit<Props, 'contentWrapper'> & {
        element: Element;
        anchorElement?: Element;
        renderedContent: any;
    }) => {
        const [boundaries, setBoundaries] = useState(() => element.getBoundingClientRect());
        const [anchorBoundaries, setAnchorBoundaries] = useState(() =>
            (anchorElement ?? element).getBoundingClientRect(),
        );
        const adjustBoundaries = useCallback(() => {
            setBoundaries(element.getBoundingClientRect());
            setAnchorBoundaries((anchorElement ?? element).getBoundingClientRect());
        }, [element, anchorElement]);
        const scrollToElement = useCallback(() => {
            element?.scrollIntoView?.(scrollIntoViewOptions);
            adjustBoundaries();
        }, [adjustBoundaries, element, scrollIntoViewOptions]);
        useEffect(() => {
            scrollToElement();
            window.addEventListener('resize', adjustBoundaries);
            window.addEventListener('scroll', adjustBoundaries);

            // if not tracking we want to give the GUI some time to adjust to the element's final size
            const interval =
                !track && setInterval(() => window.dispatchEvent(new Event('resize')), 250);

            const timeout = setTimeout(() => clearInterval(interval), 3000);

            const trackInterval =
                track &&
                setInterval(() => window.dispatchEvent(new Event('resize')), trackFrequency);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
                clearTimeout(trackInterval);
                window.removeEventListener('resize', adjustBoundaries);
                window.removeEventListener('scroll', adjustBoundaries);
            };
        }, [adjustBoundaries, element, anchorElement, scrollToElement, track, trackFrequency]);

        const arrowDirection = useMemo(() => getArrowDirection(boundaries), [boundaries]);
        return (
            <>
                <StepPositioner
                    boundaries={boundaries}
                    anchorBoundaries={anchorBoundaries}
                    differentAnchor={anchorElement != null}
                    preferredPosition={preferredModalPosition}
                    hideStepElementHighlight={hideStepElementHighlight}
                />
                <Highlight track={track} anchorHighlight={anchorElement != null} />
                <Modal
                    track={track}
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

                        hideCloseButton,
                        hideCurrentStepLabel,
                        hideNextStepButton,
                        hidePreviousStepButton,
                        hideStepButtons,
                    }}
                />
            </>
        );
    },
);

const DefaultContentComponent: React.FC = ({ children }) => <>{children}</>;

const ElementFinder = ({
    selector,
    anchorSelector,
    content: Content,
    component: Component = DefaultContentComponent,
    contentWrapper: ContentWrapper = DefaultContentComponent,
    stepIndex,
    ...props
}: Props) => {
    const [failedCount, setFailedCount] = useState(0);
    const [failedAnchorCount, setFailedAnchorCount] = useState(0);
    const renderedContent = useMemo(
        () => (
            <ContentWrapper>
                <Component step={stepIndex}>{Content}</Component>
            </ContentWrapper>
        ),
        [Content, stepIndex, Component, ContentWrapper],
    );
    const element = useMemo(() => document.querySelector(selector), [selector]);

    if (element == null && failedCount < 25) {
        setTimeout(() => setFailedCount(failedCount + 1), 100);
    }
    const anchorElement = useMemo(
        () => (anchorSelector ? document.querySelector(anchorSelector) : null),
        [anchorSelector],
    );
    if (anchorSelector != null && anchorElement == null && failedAnchorCount < 25) {
        setTimeout(() => setFailedAnchorCount(failedAnchorCount + 1), 100);
    }
    if (failedCount > 0) {
        setFailedCount(0);
    }
    if (failedAnchorCount > 0) {
        setFailedAnchorCount(0);
    }
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        if (failedCount == 25) {
            // eslint-disable-next-line no-console
            console.warn(
                `--- React Grand Tour: Failed to find element using selector '${selector}'. There is probably a bug causing the element not to be added to the page. ---`,
            );
        }
        if (failedAnchorCount == 25) {
            // eslint-disable-next-line no-console
            console.warn(
                `--- React Grand Tour: Failed to find anchor element using selector '${anchorSelector}'. There is probably a bug causing the anchor element not to be added to the page. ---`,
            );
        }
    }
    return (
        <Step
            {...{
                ...props,
                element: element ?? document.body,
                anchorElement,
                renderedContent,
                stepIndex,
            }}
        />
    );
};

export default React.memo(ElementFinder);
