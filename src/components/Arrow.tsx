import React from 'react';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from './Icons';
import { ArrowDirection } from '../types';

const Arrow = ({ direction }: { direction: ArrowDirection }) =>
    !direction ? null : (
        <div className="__react-grand-tour__arrow">
            {(() => {
                switch (direction) {
                    case 'up':
                        return <UpArrow />;
                    case 'down':
                        return <DownArrow />;
                    case 'right':
                        return <RightArrow />;
                    case 'left':
                        return <LeftArrow />;
                    default:
                        return null;
                }
            })()}
        </div>
    );

export default React.memo(Arrow);
