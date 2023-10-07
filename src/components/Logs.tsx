import useSensorContext from "@/context/Sensor";
import Icon from "./Icon";
import { verboseTime } from "@/utils/time";


/* Logs basically reads all queries, and display records timestamps

Users look at log to see when last the information display to them was last fetched
*/

const RecordLogs = () => {

    const {records} = useSensorContext();

    return (
        <ul className='mt-1 log-list'>

            {
                records.length < 1 ?
                    <li className="grey text-s1 text-center mt-1">
                        No logs yet <br/>
                        Make sure you&#39;re connected to the internet <br/>
                        and your IoT device is online.
                    </li>
                :
                records.slice(0,30).map((item, index)=>(
                    <li key={index} className='d-flex align-center log-item'>
                        <Icon
                            name="server"
                        />
                        <div>
                            <small className='text-italic text-s1 grey text-bold'>Last updated: {item.value}%</small>
                            <br/>
                            <span className='mt-1'>{verboseTime(new Date(item.createdAt))}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}


export default RecordLogs;