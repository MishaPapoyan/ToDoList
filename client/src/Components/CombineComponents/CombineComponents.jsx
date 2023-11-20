import './CombineComponents.scss'
import Left from "./Left/left.jsx";
import Center from "./Center/Center.jsx";
import Right from "./Right/Right.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {saveTasks} from "../../api/task/task.js";
import {saveTaskToStoreSuccess} from "../../Redux/actions/actions.js";


const CombineComponents = () => {
    const [tasks, setTasks] = useState([])
    const dispatch = useDispatch()
    const userID = localStorage.getItem('ObjectId')


    useEffect(() => {
        saveTasks(userID)
            .then(res => setTasks(res.data) )
            .catch(error => console.error(error));
    }, [userID]); // Add userID as a dependency

    useEffect(() => {
        dispatch(saveTaskToStoreSuccess(tasks))
    }, [tasks]);


    return (
        <div className='main'>
            <Left />
            <Center/>
            <Right/>
        </div>
    );
};

export default CombineComponents;