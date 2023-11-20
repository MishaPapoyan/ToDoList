import  './AboutTodayTasks.scss';
import {useEffect, useState} from "react";
import {getCurrentUser} from "../../../../../api/auth/auth.js";
const AboutTodayTasks = () => {
    const [userName, setUserName] = useState('')
    const [userStats, setUserStats] = useState('')
    const username = localStorage.getItem('username');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCurrentUser(username);
                setUserName(response.user.username)
                setUserStats(response.user.stats)
                console.log('the username is' , userName);
                console.log('the user statss is' , userStats);
                console.log(response.user.stats);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, [username]);


    return (
        <div className='AboutTodayTasks__main'>
            <div className="content">
                <h1 className='heading'>Hi {username}</h1>
                <p className='text'>
                    You have <b>{userStats.generalTaskCount} tasks</b> {userStats.restCount},late tasks <br/>
                    <b>{userStats.highPriority} high Priority</b>   and <b>{userStats.slowPriority} slow Priority</b> <br/>
                    {userStats.doneTaskCount} Already completed <b> {userStats.todayTaskCount}  tasks today</b>
                </p>
            </div>
        </div>
    );
};

export default AboutTodayTasks;