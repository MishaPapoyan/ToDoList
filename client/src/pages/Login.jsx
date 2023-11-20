import { useState } from 'react';
import { logIn } from '../api/auth/auth.js';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.scss'

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const logInToSys = async (e) => {
        e.preventDefault();

        try {
            await logIn(username, password, navigate);
            // If login is successful, you can optionally resolve with some data.
            // resolve(result);
        } catch (error) {
            // If there's an error during login, the catch block will be executed.
            setError('Invalid username or password');
            // You can optionally reject the promise here if needed.
            // reject(error);
        }
    };


    return (
        <form className='form'>
            <h1>Login</h1>
            <input type="text" placeholder="username" onChange={(e) => {setUserName(e.target.value)}} name="username" />
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} name="password" />
            <button onClick={logInToSys}>Login</button>
            <p>---{error}</p>
        </form>

    );
};

export default Login;