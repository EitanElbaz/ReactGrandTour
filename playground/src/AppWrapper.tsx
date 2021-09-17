import React from 'react';
import { Box } from '@material-ui/core';

const AppWrapper: React.FC = ({ children }) => {
    return <Box width="100%">{children}</Box>;
};

export default AppWrapper;
