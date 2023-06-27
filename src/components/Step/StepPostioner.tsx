import React from 'react';
import useThrottle from 'react-use/esm/useThrottle';
import { getModalPosition, isSafari } from '../../lib';
import { styleObjectToCssStyleString } from '../../styles';
import { ReactGrandTourStep } from '../../types';

const StepPositioner: React.FC<{
    boundaries: DOMRect;
    anchorBoundaries: DOMRect;
    differentAnchor: boolean;
    preferredPosition: ReactGrandTourStep['preferredModalPosition'];
    hideStepElementHighlight: boolean;
}> = ({
    boundaries,
    anchorBoundaries,
    differentAnchor,
    preferredPosition,
    hideStepElementHighlight,
}) => {
    const modalContainer = document.querySelector('.__react-grand-tour__modal-container');
    const modalPos = getModalPosition(
        anchorBoundaries,
        modalContainer?.clientHeight ?? 0,
        preferredPosition,
    );
    const position = useThrottle(modalPos, isSafari ? 450 : 50);

    return (
        <style>
            {styleObjectToCssStyleString({
                '.__react-grand-tour__': {
                    modal: {
                        '-position': {
                            transform: `translate(${
                                position.right
                                    ? `calc(${document.body.clientWidth - position.right}px - 100%)`
                                    : `${position.left}px`
                            }, ${
                                position.bottom
                                    ? `calc(${position.bottom}px - 100%)`
                                    : `${position.top}px`
                            })`,
                            width: `${position.width}px`,
                            height: `${position.height}px`,
                        },
                        '-content': {
                            padding: `24px ${position.width / 12}px`,
                        },
                    },
                    highlight: {
                        transform: `translate(${boundaries.left - 10}px, ${boundaries.top - 10}px)`,
                        height: `${!hideStepElementHighlight ? boundaries.height + 20 : 0}px`,
                        width: `${!hideStepElementHighlight ? boundaries.width + 20 : 0}px`,
                        'box-shadow': `0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, ${
                            differentAnchor ? '.58' : '.7'
                        })`,
                    },
                    'highlight-anchor': {
                        transform: `translate(${anchorBoundaries.left}px, ${anchorBoundaries.top}px)`,
                        height: `${anchorBoundaries.height}px`,
                        width: `${anchorBoundaries.width}px`,
                        'box-shadow': '0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, .3)',
                    },
                },
            })}
        </style>
    );
};

export default React.memo(StepPositioner);
