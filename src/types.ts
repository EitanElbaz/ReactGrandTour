export type ReactGrandTourStep = {
    content: ({ step }: { step: number }) => JSX.Element;
    selector: string;
    stepInteraction?: boolean;
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
