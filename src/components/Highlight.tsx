import React from 'react';
import FadeIn from './FadeIn';

const Highlight = () => (
    <FadeIn>
        <div className="__react-grand-tour__highlight" />
    </FadeIn>
);

export default React.memo(Highlight);
