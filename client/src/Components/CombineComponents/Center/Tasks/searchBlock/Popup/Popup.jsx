import {useEffect, useState} from "react";
import './Popup.scss'
import {getTasks} from "../../../../../../api/task/task.js";
const Popup = ({isopen, setisopen}) => {
    const [currentTime, setCurrentTime] = useState('');
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [currentDate, setCurrentDate] = useState('');
    const [deadlineStart, setDeadlineStart] = useState('');
    const [deadlineEnd, setDeadlineEnd] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedTimeEnd, setSelectedTimeEnd] = useState('');

    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        setCurrentDate(`${yyyy}-${mm}-${dd}`);
    }, []);


    const handleDateChange = (e, isStartDate) => {
        const selectedDate = new Date(e.target.value);

        if (isStartDate) {
            setDeadlineStart(selectedDate.toISOString().split('T')[0]);

            // Ensure the end date is greater than the start date
            if (selectedDate >= new Date(deadlineEnd)) {
                setDeadlineEnd(new Date(selectedDate.setDate(selectedDate.getDate() + 1)).toISOString().split('T')[0]);
            }
        } else {
            alert("End date must be greater than start date.");
            setDeadlineEnd(selectedDate.toISOString().split('T')[0]);

            // Ensure the end date is greater than the start date
            if (selectedDate <= new Date(deadlineStart)) {
                setDeadlineStart(new Date(selectedDate.setDate(selectedDate.getDate() - 1)).toISOString().split('T')[0]);
            }
        }
    };


    const sendData = (e) => {
        e.preventDefault();
        const user = localStorage.getItem('ObjectId');

        // Assuming getTasks returns a Promise
        getTasks(user, taskName, taskDescription, deadlineStart, deadlineEnd, priority, selectedTime, selectedTimeEnd)
            .then(response => {
                console.log(response);
                setisopen(!isopen);
            })
            .catch(error => {
                console.error("Error:", error);
                // Handle errors if necessary
            });
    };


    useEffect(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        setCurrentTime(`${hours}:${minutes}`);
    }, []);


    const handleTimeChange = (e, inputType) => {
        const newSelectedTime = e.target.value;
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Check if the selected date is today
        const selectedDate = new Date(deadlineStart);
        selectedDate.setHours(0, 0, 0, 0);

        const formatDate = (date) => {
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            return date.toLocaleDateString('en-GB', options).replace(/\//g, '.');
        };

        const today = new Date();
        today.setHours(0, 0, 0, 0);


        const isTodayOrTomorrow = formatDate(selectedDate) === formatDate(today);

        if (inputType === "start") {
            if (isTodayOrTomorrow) {
                // Check if the start time is greater than the current time
                if (newSelectedTime < currentTime) {
                    alert("Start time must be after the current time");
                    setSelectedTime('');
                } else {
                    setSelectedTime(newSelectedTime);
                }
            } else {
                setSelectedTime(newSelectedTime);
            }
        } else if (inputType === "end") {
            if (!isTodayOrTomorrow) {
                // Check if the end time is less than the start time or the current time
                if (newSelectedTime < selectedTime) {
                    setSelectedTimeEnd("");
                } else {
                    alert("End time must be after start time and after the current time");
                    setSelectedTimeEnd(newSelectedTime);
                }
            } else {
                setSelectedTimeEnd(newSelectedTime);
            }
        }

    };

    const handlePriorityChange = (e) => {
        const selectedPriority = e.target.value;

        // Only update state if the selectedPriority is one of the allowed values
        if (['high', 'middle', 'simple'].includes(selectedPriority)) {
            setPriority(selectedPriority);
        }
    };
    return (
        <form className='popup-overlay'>
            <div className={isopen ? 'popup__main' : 'displayNone'}>
                <div className="input__box">
                    <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="header"/>
                    <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder='description'/>
                </div>
                <div className="input__box">
                    <input
                        type="date"
                        id="selectedDateStart"
                        name="deadlineStart"
                        value={deadlineStart}
                        onChange={(e) => handleDateChange(e, true)}
                        min={currentDate}
                    />
                    <input
                        type="date"
                        id="selectedDateEnd"
                        name="deadlineEnd"
                        value={deadlineEnd}
                        onChange={(e) => handleDateChange(e, false)}
                        min={currentDate}
                    />
                </div>
                <div className="input__box">
                    <input type="time" id="selectedTime" name="selectedTime" value={selectedTime} onChange={(e) => handleTimeChange(e, "start")} min={currentTime}/>
                    <input type="time" id="selectedTimeEnd" name="selectedTimeEnd" value={selectedTimeEnd} onChange={(e) => handleTimeChange(e, "end")} min={currentTime}/>
                </div>
                <div className="priority__choose">
                    <label className='popup_label' htmlFor="high">
                        <input
                            type="checkbox"
                            id="high"
                            value="high"
                            checked={priority === 'high'}
                            onChange={handlePriorityChange}
                        />
                        <span>
                        <span className='priority'>choose</span>
                        <span className='priority_name'>High</span>
                    </span>
                        {priority === 'high' ? '✔️' : ''}
                    </label>

                    <label className='popup_label' htmlFor="middle">
                        <input
                            type="checkbox"
                            id="middle"
                            value="middle"
                            checked={priority === 'middle'}
                            onChange={handlePriorityChange}
                        />
                        <span>
                        <span className='priority'>choose</span>
                        <span className='priority_name'>middle</span>
                    </span>
                        {priority === 'middle' ? '✔️' : ''}

                    </label>

                    <label className='popup_label' htmlFor="simple">
                        <input
                            type="checkbox"
                            id="simple"
                            value="simple"
                            checked={priority === 'simple'}
                            onChange={handlePriorityChange}
                        />
                        <span>
                        <span className='priority'>choose</span>
                        <span className='priority_name'>simple</span>
                    </span>
                        {priority === 'simple' ? '✔️' : ''}
                    </label>
                </div>

                <div className='btns'>
                    <button type={"submit"} onClick={(e) => sendData(e)}>Add</button>
                    <button type={"submit"} onClick={() => setisopen(false)}>Close</button>
                </div>


            </div>

        </form>
    );
};

export default Popup;

