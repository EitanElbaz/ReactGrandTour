import { ReactGrandTourStep } from 'react-grand-tour';

export const HomeStepIds = {
    one: 'home-one',
    two: 'home-two',
};

export const HomeSteps: ReactGrandTourStep[] = [
    {
        selector: `#${HomeStepIds.one}`,
        content: 'Welcome to React Grand Tour!',
    },
    {
        selector: `#${HomeStepIds.two}`,
        content: 'And this is a cool logo.',
    },
];
