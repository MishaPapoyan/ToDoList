import axios from 'axios';

export async function registration(username, lastname, email, dateOfBirth, country, city,profession, phoneNumber,gender, password, repeatPassword, navigate) {
    try {
        const response = await axios.post('http://localhost:8000/auth/registration', {
            username, lastname, email, dateOfBirth, country, city,profession, phoneNumber,gender, password, repeatPassword, navigate
        });
        console.log(response);
        navigate('/')
    } catch (error) {
        console.error('An error occurred during registration:', error);
    }
}

export async function logIn(username, password, navigate) {
    try {
        const response = await axios.post('http://localhost:8000/auth/login', {
            username,
            password,
        });

        if (response.status === 200) {
            const userData = response.data; // Assuming the user data is in the response's data field
            const currentUser = userData.user.username;
            const currentLastname = userData.user.lastname;
            console.log(currentLastname)
            localStorage.setItem('username', currentUser);
            localStorage.setItem('lastname', currentLastname);
            localStorage.setItem('token', userData.token);
            localStorage.setItem('ObjectId', userData.user._id);
            navigate('/page');
        } else {
            console.error('Login failed:', response);
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
    }
}

export async function log__Out(navigate) {
    try {
        const deleteUserName = localStorage.getItem('username');
        if (deleteUserName) {
            localStorage.removeItem('username');
            localStorage.removeItem('lastname');
            localStorage.removeItem('token');
            localStorage.removeItem('ObjectId');
            navigate('/')
        } else {
            console.log('Username not found in localStorage.');
        }
    } catch (error) {
        console.error('An error occurred during logout:', error);
    }
}

export async function getCurrentUser(username) {
    try {
        console.log(username);
        const response = await axios.post(`http://localhost:8000/auth/get_current_user`, {username});
        return response.data;
    } catch (error) {
        console.error('An error occurred during get current user:', error);
        // Handle the error appropriately, e.g., return null or throw an error
        throw error;
    }
}