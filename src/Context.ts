import { createContext } from 'react';
import { ReactGrandTourContextType } from './types';

const ReactGrandTourContext = createContext<ReactGrandTourContextType>({
    open: () => {},
    openWith: () => {},
    steps: [],
    close: () => {},
    isOpen: false,
    goToStep: () => {},
    goBack: () => {},
    goNext: () => {},
});

export default ReactGrandTourContext;
