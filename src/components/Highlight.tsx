import React from 'react';
import FadeIn from './FadeIn';

const Highlight: React.FC<{ track: boolean; anchorHighlight?: boolean }> = ({
    track,
    anchorHighlight,
}) => (
    <FadeIn>
        <>
            <div
                className={`__react-grand-tour__highlight ${
                    track && '__react-grand-tour__highlight-track'
                }`}
            />
            {anchorHighlight && (
                <div className="__react-grand-tour__highlight __react-grand-tour__highlight-anchor" />
            )}
        </>
    </FadeIn>
);

export default React.memo(Highlight);
