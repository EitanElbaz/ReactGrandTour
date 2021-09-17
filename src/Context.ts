import { createContext } from 'react';
import { ReactGrandTourContextType } from './types';

const ReactGrandTourContext = createContext<ReactGrandTourContextType>({
    openWith: (atStep, withSteps) => {},
    steps: [],
    close: () => {},
    isOpen: false,
});

export default ReactGrandTourContext;
