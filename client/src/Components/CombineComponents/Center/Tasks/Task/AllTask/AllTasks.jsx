import Point from "../Point/Point.jsx";
import done from "../../../../../../assets/svg/header/circle-check-regular.svg";
import Button from "../../../../../Button/Button.jsx";
import edit from "../../../../../../assets/svg/tasks/pencil-solid.svg";
import imgdeleteTask from "../../../../../../assets/svg/tasks/trash-solid.svg";
import { useSelector } from "react-redux";
import { changeStatus, deleteTask } from "../../../../../../api/task/task.js";
import {useState} from "react";

const AllTasks = () => {
    const tasks = useSelector(state => state.allTasks.tasks);

    // Use an object to store the done status for each task
    const [taskDoneStatus, setTaskDoneStatus] = useState({});

    const updateTaskStatusInDB = (id) => {
        deleteTask(id);
    };

    const changeTaskStatus = (id) => {
        // Use the current state to avoid modifying it directly
        setTaskDoneStatus(prevStatus => ({
            ...prevStatus,
            [id]: !prevStatus[id], // Toggle the done status for the specific task
        }));

        // Perform your changeStatus logic here if needed
        changeStatus(id);
    };

    return (
        <div className='task__main' >
            {tasks.length > 1 ? (
                tasks.slice(1).map((item, index) => {
                    const isTaskDone = taskDoneStatus[item._id] || false; // Default to false if not in state
                    return (
                        <div  key={index} className={`aboutToday ${isTaskDone ? 'bgGreen' : ''}`}>
                            <div className="description" style={{display: 'flex', justifyContent:'space-between' , alignItems: 'center'}}>
                                <Point color={item.priority === 'high' ? 'red' : item.priority === 'middle' ? 'green' : 'yellow'}/>
                                <h2>{item.taskName}</h2>
                                {
                                    isTaskDone?
                                        <p onClick={() => changeTaskStatus(item._id)}>❌</p>
                                        :
                                        <img src={done} width='50px' height='100px' alt="" onClick={() => changeTaskStatus(item._id)}/>

                                }
                            </div>
                            <hr/>
                            <p>
                                {item.taskDescription}
                            </p>
                            <div className="about" style={{display: 'flex', justifyContent:'space-between' , alignItems: 'center'}}>
                                <div className="deadline">
                                    <Button value={item.deadlineStart}/>
                                    -
                                    <Button value={item.deadlineEnd}/>

                                    <Button value={item.selectedTime}/>
                                    -
                                    <Button value={item.selectedTimeEnd}/>

                                </div>
                                <div className="edit">
                                    <img src={edit} alt="" width='45px' height='25px' />
                                    <img src={imgdeleteTask} alt="" width='45px' height='25px' onClick={( ) => updateTaskStatusInDB(item._id)} />
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>Task is not found</p>
            )}
        </div>
    );
};

export default AllTasks;


