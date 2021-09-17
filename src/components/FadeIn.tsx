import React, { useState, useEffect } from 'react';

const FadeIn = ({ children }: { children?: JSX.Element }) => {
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 0);
    }, []);
    return (
        <div
            className={`__react-grand-tour__fade-in ${
                hidden ? '' : '__react-grand-tour__fade-in-init'
            }`}
        >
            {children}
        </div>
    );
};

export default FadeIn;
