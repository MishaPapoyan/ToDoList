import axios from "axios";

export async function getTasks(user, taskName, taskDescription, deadlineStart, deadlineEnd, priority, selectedTime, selectedTimeEnd, isDone) {
    try {

        const response = await axios.post('http://localhost:8000/auth/add_task',{user, taskName, taskDescription, deadlineStart, deadlineEnd, priority, selectedTime, selectedTimeEnd, isDone});
        return await response;
    } catch (error) {
        console.error('An error occurred during registration:', error);
    }
}

export async function saveTasks(userID){
    try {
        const response = await axios.post('http://localhost:8000/auth/get_and_save_task', {user:userID})
        console.log('response is', response)
        return await response
    }catch (err){
        console.log(err)
    }
}

export async function deleteTask(id) {
    try {
        const response = await axios.delete(`http://localhost:8000/auth/deleteTask/${id}`);
        return response.data; // Assuming you want to return the data
    } catch (err) {
        console.log(err);
        // Handle the error appropriately, e.g., return null or throw an error
        throw err;
    }
}

export async function changeStatus(id) {
    try {
        const response = await axios.put(`http://localhost:8000/auth/edit_task/${id}`);
        // Assuming you want to return the response data
        console.log(response.data);

        return response.data;
    } catch (err) {
        console.error(err);

        // Handle the error appropriately, e.g., return null or throw an error
        throw err;
    }
}
