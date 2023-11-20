import './Header.scss'
import logo from '../../assets/svg/header/circle-check-regular.svg'
import logOut from '../../assets/svg/header/arrow-right-from-bracket-solid.svg'
import settings from '../../assets/svg/header/settings-svgrepo-com.svg'
import {log__Out} from "../../api/auth/auth.js";
import {useNavigate} from "react-router-dom";
import UserSettingsPopup from "./UserSettingsPopup/UserSettingsPopup.jsx";
import {useState} from "react";

const Header = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const lastname = localStorage.getItem('lastname')
    const [isOpen, setIsOpen] = useState(false)
    const log_out = () =>{
        log__Out(navigate)
    }
    const changeStatus = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='navBar__main'>
            <div className="logo">
                <img src={logo} alt=""/>
                <span>Task Manager</span>
            </div>
            <div className="userProfile">
                <div className="avatar" >
                    <div className='userAvatar'></div>
                </div>
                <div className="profile"  >
                    <p  > {username} {lastname} </p>
                    <h6><em>Last Seen: today</em></h6>
                    {isOpen ? <UserSettingsPopup setisopen={setIsOpen}/>: null}

                </div>
                <img className='icon' src={logOut} onClick={log_out} alt=""/>
                <img className='icon' src={settings} onClick={changeStatus} alt=""/>
            </div>
        </nav>
    );
};

export default Header;