import React from 'react';
import FadeIn from './FadeIn';

const Highlight: React.FC<{ track: boolean }> = ({ track }) => (
    <FadeIn>
        <div
            className={`__react-grand-tour__highlight ${
                track && '__react-grand-tour__highlight-track'
            }`}
        />
    </FadeIn>
);

export default React.memo(Highlight);
