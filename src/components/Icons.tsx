import React from 'react';

const Icon = ({ path }: { path: string }) => (
    <svg className="__react-grand-tour__icon">
        <path d={path} />
    </svg>
);

export const LeftArrow = () => (
    <Icon path="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
);

export const RightArrow = () => (
    <Icon path="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
);

export const EmptyClose = () => <></>;

export const Close = () => (
    <Icon path="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
);

export const UpArrow = () => (
    <Icon path="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
);

export const DownArrow = () => (
    <Icon path="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
);
