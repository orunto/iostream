'use client';
// Sensor context
import { ISoilMoisture } from '@/config/types';
import {createContext, useContext,useState, ReactNode} from 'react';

type Status = 'loading' | 'not-loading';
interface ISensorStateContext {
    records: ISoilMoisture[],
    status: Status,
}

interface ISensorContextProvider {
    children: ReactNode
}

interface ISensorContext extends ISensorStateContext {
    
}




const initialState:ISensorStateContext = {
    status: 'loading',
    records: []
}




const SensorContext = createContext<ISensorStateContext>(initialState);
const useSensorContext = ()=>useContext(SensorContext);

export default useSensorContext;



const SensorContextProvider = (props:ISensorContextProvider) => {

    const [records, setRecords] = useState<ISoilMoisture[]>([]);
    const [status, setStatus] = useState<Status>('not-loading');


    const context:ISensorContext = {
        records,
        status
    }

    return (
        <SensorContext.Provider value={context}>
        </SensorContext.Provider>
    )
}




