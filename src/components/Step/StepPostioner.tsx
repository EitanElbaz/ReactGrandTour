import React from 'react';
import { getModalPosition } from '../../lib';
import { styleObjectToCssStyleString } from '../../styles';

const StepPositioner = ({ boundaries }: { boundaries: DOMRect }) => {
    const modalContainer = document.querySelector(`#__react-grand-tour__modal-container`);
    const position = getModalPosition(boundaries, modalContainer?.clientHeight ?? 0);
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
                            padding: `24px ${position.width / 11}px`,
                        },
                    },
                    highlight: {
                        transform: `translate(${boundaries.left - 10}px, ${boundaries.top - 10}px)`,
                        height: `${boundaries.height + 20}px`,
                        width: `${boundaries.width + 20}px`,
                    },
                },
            })}
        </style>
    );
};

export default React.memo(StepPositioner);
