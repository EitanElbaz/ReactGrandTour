import React, { ReactNode } from 'react';

export type ReactGrandTourProps = {
    open?: boolean;
    onClose?: () => void;
    openAt?: number;
    steps?: ReactGrandTourStep[];
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    transitionSpeed?: number;
};

export type ReactGrandTourContextType = {
    steps: ReactGrandTourStep[];
    isOpen: boolean;

    open: () => void;

    /**
     * Use this function to open the tour.
     *
     * Optionally pass a step to open at. Defaults to 0.
     *
     * Optionally pass new steps
     */
    /**
     * Use this function to open the tour.
     *
     * @param withSteps - Optional. Override the steps to start the tour with.
     * @param atStep - Optional. Choose a step to start at. Defaults to 0.
     */
    openWith: (atStep?: number, withSteps?: ReactGrandTourStep[]) => void;

    /**
     * Close the tour
     */
    close: () => void;

    goToStep: (step: number) => void;
    goNext: () => void;
    goBack: () => void;
};

export type ReactGrandTourStep = {
    content: ReactNode;
    /**
     * Use the `component` prop if you want to customise the content of the step.
     *
     * The value passed into the `content` prop will be passed in the `children` prop
     * into your custom component
     */
    component?: React.FC<{ step: number }>;

    /**
     * The CSS selector for the DOM element which is the focus of the step.
     */
    selector: string;

    /**
     * Optional.
     *
     * The CSS selector for the DOM element you want to anchor the modal to.
     *
     * This is useful when a step is for a DOM element which moves around or changes
     * size frequently.
     */
    anchorSelector?: string;

    /**
     * Allow users to click on DOM elements within the highlighted area
     */
    // stepInteraction?: boolean;

    /**
     * Use if the highlighted object moves often. The highlighted area will continue moving with the object.
     *
     * Also useful for objects which can change size often like Accordion UIs.
     */
    track?: boolean;

    /**
     * Highlight area position update frequency in ms.
     *
     * Less frequent (higher number) tracking is better for performance.
     *
     * Default 10.
     */
    trackFrequency?: number;
};

export type ModalPosition = {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
};

export type ArrowDirection = 'up' | 'left' | 'down' | 'right' | null;

export type CloseButtonProps = { close: () => void };
export type CurrentStepLabelProps = { currentStep: number; totalSteps: number };
export type NextStepButtonProps = {
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    skipTo: (step: number) => void;
};
export type PreviousStepButtonProps = {
    currentStep: number;
    totalSteps: number;
    goBack: () => void;
    skipTo: (step: number) => void;
};
export type StepButtonProps = { currentStep: number; step: number; goToStep: () => void };
export type StepButtonWrapperProps = {
    stepButtons: JSX.Element[];
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    goBack: () => void;
    skipTo: (step: number) => void;
};
export type ArrowProps = { direction: ArrowDirection };
export type DialogWrapperProps = {
    [key in keyof Omit<ComponentOverrides, 'dialogWrapper' | 'stepButton'>]: JSX.Element;
} & {
    content: JSX.Element;
    stepButtonComponent: (props: StepButtonProps) => JSX.Element;
};

export type ComponentOverrides = {
    closeButton: (props: CloseButtonProps) => JSX.Element;
    currentStepLabel: (props: CurrentStepLabelProps) => JSX.Element;
    nextStepButton: (props: NextStepButtonProps) => JSX.Element;
    previousStepButton: (props: PreviousStepButtonProps) => JSX.Element;
    stepButton: (props: StepButtonProps) => JSX.Element;
    stepButtonWrapper: (props: StepButtonWrapperProps) => JSX.Element;
    arrow: (props: ArrowProps) => JSX.Element;
    dialogWrapper: (props: DialogWrapperProps) => JSX.Element;
};
