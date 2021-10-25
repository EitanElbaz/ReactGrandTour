import React, { PropsWithChildren, ReactNode } from 'react';

export type ReactGrandTourProps = {
    open?: boolean;
    onOpen?: () => void;
    onClose?: (reason: ReactGrandTourCloseReason) => void;
    onStepChange?: (props: OnStepChangeProps) => void;
    openAt?: number;
    steps?: ReactGrandTourStep[];
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    transitionSpeed?: number;
    disableCloseOnEscape?: boolean;
    disableCloseBtn?: boolean;
    disableCloseOnBackdropClick?: boolean;
    stylingOverrides?: ReactGrandTourStylingOverrides;
    keyboardShortcuts?: ReactGrandTourShortcuts;
};

export type ReactGrandTourStylingOverrides = {
    primaryColor?: string;
    animationSpeed?: number;

    dotBackgroundColor?: string;
    dotBorderColor?: string;
    dotHoverBackgroundColor?: string;

    chevronButtonColor?: string;
    chevronButtonHoverColor?: string;
    chevronButtonDisabledColor?: string;

    closeButtonColor?: string;
    closeButtonHoverColor?: string;

    modalBackgroundColor?: string;
};

/**
 * See article below for key names
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
 */
export type ReactGrandTourShortcuts = {
    /**
     * Default: "Escape"
     *
     * Shortcut for closing the tour.
     */
    closeModal?: string[];

    /**
     *  Default: "ArrowRight"
     *
     *  Shortcut for going to the next step.
     */
    nextStep?: string[];

    /**
     *  Default: "ArrowLeft"
     *
     *  Shortcut for going to the previous step.
     */
    prevStep?: string[];
};

export type OnStepChangeProps = {
    fromStepIndex: number;
    toStepIndex: number;
    totalSteps: number;

    fromStep: ReactGrandTourStep;
    toStep: ReactGrandTourStep;
};

export type ReactGrandTourCloseReason = 'backdrop' | 'close-btn' | 'escape';

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
    close: ReactGrandTourProps['onClose'];

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
     * Use if the highlighted object moves often. The highlighted area and modal will continue moving with the object.
     *
     * Also useful for objects which can change size often like Accordion UIs.
     */
    track?: boolean;

    /**
     * Highlight area + modal position update frequency in ms.
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

export type CloseButtonProps = { close: ReactGrandTourProps['onClose'] };
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
export type StepButtonProps = {
    currentStep: number;
    step: number;
    goToStep: () => void;
    active: boolean;
};
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
    [key in keyof Omit<
        ComponentOverrides,
        'dialogWrapper' | 'stepButton' | 'contentWrapper'
    >]: JSX.Element;
} & {
    content: JSX.Element;
    stepButtonComponent: (props: StepButtonProps) => JSX.Element;
};

export type ComponentOverrides = {
    contentWrapper: React.FC;
    closeButton: (props: CloseButtonProps) => JSX.Element;
    currentStepLabel: (props: PropsWithChildren<CurrentStepLabelProps>) => JSX.Element;
    nextStepButton: (props: NextStepButtonProps) => JSX.Element;
    previousStepButton: (props: PreviousStepButtonProps) => JSX.Element;
    stepButton: (props: StepButtonProps) => JSX.Element;
    stepButtonWrapper: (props: StepButtonWrapperProps) => JSX.Element;
    arrow: (props: ArrowProps) => JSX.Element;
    dialogWrapper: (props: DialogWrapperProps) => JSX.Element;
};
