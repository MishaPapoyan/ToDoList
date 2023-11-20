import  './Stats.scss';
import {useState} from "react";


const Stats = ({count,lateTaskCount,doneTaskCount,general}) => {
    console.log(count)
    return (
        <div className='stats__main'>
            <div className="progress">
                <p className='WeeklyStats__header'>Weekly stats</p>
                <div className='border__radius'>
                    <p className='left'>
                        {general} <br/>
                        <span>tasks</span>
                    </p>
                </div>
            </div>
            <div className="statics">
                <p>{count} <br/> To Do</p>
                <p>{lateTaskCount} <br/> late</p>
                <p>{doneTaskCount} <br/> done</p>
            </div>
        </div>
    );
};

export default Stats;