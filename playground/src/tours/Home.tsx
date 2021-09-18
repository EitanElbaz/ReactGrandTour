import { ReactGrandTourStep } from 'react-grand-tour';

export const HomeStepIds = {
    one: 'home-one',
    two: 'home-two',
    three: 'home-three',
    four: 'home-four',
    fourContainer: 'home-four-container',
    five: 'home-five',
    fiveContainer: 'home-five-container',
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
    {
        selector: `#${HomeStepIds.three}`,
        content: 'The highlighted area will track moving objects',
        track: true,
    },
    {
        selector: `#${HomeStepIds.four}`,
        anchorSelector: `#${HomeStepIds.fourContainer}`,
        content:
            'The highlighted area will track moving objects, but the modal stays anchored to its container.',
        track: true,
    },
    {
        selector: `#${HomeStepIds.five}`,
        anchorSelector: `#${HomeStepIds.fiveContainer}`,
        content: 'The highlighted area will track the size of objects which change shape.',
        track: true,
    },
];
