import { createContext } from 'react';
import { ReactGrandTourContextType } from './types';

const ReactGrandTourContext = createContext<ReactGrandTourContextType>({
    open: () => {},
    openWith: () => {},
    steps: [],
    close: () => true,
    isOpen: false,
    goToStep: () => {},
    goBack: () => {},
    goNext: () => {},
});

export default ReactGrandTourContext;
