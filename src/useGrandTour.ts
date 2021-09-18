import { useContext } from 'react';
import { ReactGrandTourContextType } from './types';
import ReactGrandTourContext from './Context';

function useGrandTour(): ReactGrandTourContextType {
    return useContext(ReactGrandTourContext);
}

export default useGrandTour;
