import React, { PropsWithChildren } from 'react';

const CloseButtonPositionalWrapper: React.FC<PropsWithChildren<any>> = ({ children }) => (
    <div className="__react-grand-tour__close-button-position">{children}</div>
);

export default CloseButtonPositionalWrapper;
