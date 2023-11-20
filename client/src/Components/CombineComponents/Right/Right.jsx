import Stats from "./Statics/MonthlyStats/Stats.jsx";
import {useEffect, useState} from "react";
import {getCurrentUser} from "../../../api/auth/auth.js";
import {useSelector} from "react-redux";
import stats from "./Statics/MonthlyStats/Stats.jsx";

const Right = () => {
    const [userName, setUserName] = useState('')
    const [userStats, setUserStats] = useState('')
    const tasks = useSelector(state => state.allTasks.tasks)
    const restTasks = tasks.filter(task => task.isDone === false)
    console.log()
    const count = restTasks.length;
    console.log(count)
    const username = localStorage.getItem('username')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCurrentUser(username);
                setUserName(response.user.username)
                setUserStats(response.user.stats)
                console.log(userName)
                console.log(userStats)
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, [username]);
    const {lateTaskCount,doneTaskCount,generalTaskCount} = userStats
    return (
        <div>
            <Stats count={count} doneTaskCount={doneTaskCount} lateTaskCount={lateTaskCount} general={generalTaskCount}/>
            <Stats count={count} doneTaskCount={doneTaskCount} lateTaskCount={lateTaskCount} general={generalTaskCount}/>
        </div>
    );
};

export default Right;