import AboutTodayTasks from "./AboutToday/AboutTodayTasks/AboutTodayTasks.jsx";
import PomodoroTimer from "./AboutToday/PomodorroTimer/PomodorroTimer.jsx";
import ReactCalendar from "./AboutToday/Calendar/Calendar.jsx";


const Left = () => {
    return (
        <div>
                <>
                    <AboutTodayTasks/>
                    <ReactCalendar />
                    <PomodoroTimer />
                </>
        </div>
    );
};

export default Left;