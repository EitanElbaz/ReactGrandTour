import React from 'react';
import { ReactGrandTourStep } from 'react-grand-tour';
import { Box } from '@material-ui/core';
import GitHubBtn from 'components/GitHubBtn';

export const HomeStepIds = {
    customOne: 'home-one-custom',
    one: 'home-one',
    two: 'home-two',
    three: 'home-three',
    four: 'home-four',
    fourContainer: 'home-four-container',
    expandCollapseContainer: 'home-expand-collapse-container',
    verticalOne: 'home-vertical-one',
    horizontalOne: 'home-horizontal-one',
    horVertOne: 'home-hotvert-one',
    expandCollapseContainerTwo: 'home-expand-collapse-container-two',
    verticalTwo: 'home-vertical-two',
    horizontalTwo: 'home-horizontal-two',
    horVertTwo: 'home-hotvert-two',
    bye: 'home-bye',
};

const Bye: React.FC = () => (
    <Box p={2}>
        <Box mb={1}>And that&apos;s it. I hope you liked the tour.</Box>
        <Box mb={1}>
            If you have any suggestions or find any bugs please do open an issue on GitHub.
        </Box>
        <Box mb={1}>While you&apos;re at it, drop me a star.</Box>
        <Box textAlign="center">
            <GitHubBtn />
        </Box>
    </Box>
);

export const HomeSteps: ReactGrandTourStep[] = [
    {
        selector: `#${HomeStepIds.one}`,
        content: 'Welcome to React Grand Tour!',
    },
    {
        selector: `#${HomeStepIds.two}`,
        content:
            "And this is a cool logo. Try scrolling down the page. You'll see an arrow appear. You can click anywhere in this modal to be taken back to the highlighted area.",
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
        selector: `#${HomeStepIds.verticalOne}`,
        content: 'The highlighted area will track the size of objects which change shape.',
        track: true,
    },
    {
        selector: `#${HomeStepIds.horizontalOne}`,
        content:
            "The highlighted area will track the size of objects which change shape. Even when it's their width!",
        track: true,
    },
    {
        selector: `#${HomeStepIds.horVertOne}`,
        content: 'And when they change in both directions.',
        track: true,
    },
    {
        selector: `#${HomeStepIds.verticalTwo}`,
        anchorSelector: `#${HomeStepIds.expandCollapseContainerTwo}`,
        content: 'The highlighted area will track the size of objects which change shape.',
        track: true,
    },
    {
        selector: `#${HomeStepIds.horizontalTwo}`,
        anchorSelector: `#${HomeStepIds.expandCollapseContainerTwo}`,
        content:
            "The highlighted area will track the size of objects which change shape. Even when it's their width!",
        track: true,
    },
    {
        selector: `#${HomeStepIds.horVertTwo}`,
        anchorSelector: `#${HomeStepIds.expandCollapseContainerTwo}`,
        content: 'And when they change in both directions.',
        track: true,
    },
    {
        selector: `#row-1-col-1`,
        content: 'I can even handle really wide scrolling content.',
    },
    {
        selector: `#row-4-col-20`,
        content: 'Just like that 😏',
    },
    {
        selector: `#row-1-col-1`,
        content: 'And that 😱',
    },
    {
        selector: `#${HomeStepIds.bye}`,
        content: '',
        component: Bye,
    },
];
