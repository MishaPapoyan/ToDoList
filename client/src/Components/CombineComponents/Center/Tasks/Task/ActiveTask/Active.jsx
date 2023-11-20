import React from 'react';
import {useSelector} from "react-redux";
import Point from "../Point/Point.jsx";
import done from "../../../../../../assets/svg/header/circle-check-regular.svg";
import Button from "../../../../../Button/Button.jsx";
import edit from "../../../../../../assets/svg/tasks/pencil-solid.svg";
import imgdeleteTask from "../../../../../../assets/svg/tasks/trash-solid.svg";
import {deleteTask} from "../../../../../../api/task/task.js";

const Active = () => {
    const state = useSelector(state => state.allTasks.tasks);
    const completedTasks = Array.isArray(state) ? state.filter(task => task.isDone === false) : [];

    console.log(completedTasks);
    const updateTaskStatusInDB = (id) => {
        deleteTask(id);
    }
    // Now 'completedTasks' contains an array of tasks where isDone is true
    return (
        <div>
            {

                    completedTasks.map((item,index) => {
                        return(
                            <div className="aboutToday" key={index}>
                                <div className="description"  style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                                    <Point color={item.priority === 'high' ? 'red' : item.priority === 'middle' ? 'green' : 'yellow'}/>
                                    <h2>{item.taskName}</h2>
                                    <img src={done} width='50px' height='100px' alt="" />
                                </div>
                                <hr/>
                                <p>
                                    {item.taskDescription}
                                </p>
                                <div className="about" style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                                    <div className="deadline">
                                        <Button value={item.deadlineStart}/>
                                        -
                                        <Button value={item.deadlineEnd}/>

                                        <Button value={item.selectedTime}/>
                                        -
                                        <Button value={item.selectedTimeEnd}/>

                                    </div>
                                    <div className="edit" style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                                        <img src={edit} alt="" width='45px' height='25px' />
                                        <img src={imgdeleteTask} alt="" width='45px' height='25px' onClick={( ) => updateTaskStatusInDB(item._id)} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    );
};

export default Active;