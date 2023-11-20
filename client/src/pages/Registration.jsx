import '../styles/Registration.scss'
import {registration} from "../api/auth/auth.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Registration = () => {
    const [username,setUserName] = useState('')
    const [lastname,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [dateOfBirth,setDateOfBirth] = useState('')
    const [country,setCountry] = useState('')
    const [city,setCity] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [profession,setProfession] = useState('')
    const [password,setPassword] = useState('')
    const [repeatPassword,setRepeatPassword] = useState('')
    const [Gender, setSelectedGenders] = useState([]);

    const navigate = useNavigate()

    const handleGenderChange = (e) => {
        const gender = e.target.value;

        if (e.target.checked) {
            // If the checkbox is checked, add the gender to the selectedGenders array
            setSelectedGenders([...gender, gender]);
        } else {
            // If the checkbox is unchecked, remove the gender from the selectedGenders array
            setSelectedGenders(gender.filter((g) => g !== gender));
        }
    };

    const register= (e) =>{
        e.preventDefault()
        const gender = Gender[4];
        console.log(gender)
        if (password === repeatPassword){
            console.log('password -->'+ password + 'repeatPassword -->' + repeatPassword)
            registration(username, lastname, email, dateOfBirth, country, city,profession, phoneNumber,gender, password, repeatPassword, navigate)
        }else {
            alert('password is different')
        }
    }


    return (
        <form className="register__container">
            <div className="register__form">
                <div className="heading">
                    <h2>Account Signup</h2>
                    <p>Become a member and enjoy exclusive promotions.</p>
                    <hr/>
                </div>
                <div className="register__form__fileds">
                    <div className="input__box user_data">
                        <input className='username' type="text" placeholder='  your name' onChange={(e) => {setUserName(e.target.value)}}/>
                        <input className='lastname' type="text" placeholder='  your surname' onChange={(e) => {setLastName(e.target.value)}}/>
                    </div>
                    <input className='email' type="email" placeholder='  your email' onChange={(e) => {setEmail(e.target.value)}}/>
                    <div className="input__box user_data" >
                        <input className='dateOfBirth' type="date" placeholder='your date of birth' onChange={(e) => {setDateOfBirth(e.target.value)}}/>
                        <input className='country' type="text" placeholder='  your country' onChange={(e) => {setCountry(e.target.value)}}/>
                        <input className='city' type="text" placeholder='  your city`' onChange={(e) => {setCity(e.target.value)}}/>

                        <input type="tel" id="phone" name="phone" placeholder='+374 XX XX XX' pattern="\+374[0-9]{8}" required />
                        <input className='profession' type="text" placeholder='your profession' onChange={(e) => {setProfession(e.target.value)}} style={{width:"91.5%"}}/>
                    </div>
                    <p>choose your gender</p>
                    <div className="input__box gender">
                        <label>Male
                            <input type="checkbox" value="male" onChange={(e)=>handleGenderChange(e)} checked={Gender.includes("male")}/>
                        </label>
                        <label>Female
                            <input type="checkbox" value="female" onChange={handleGenderChange} checked={Gender.includes("female")}/>
                        </label>

                    </div>
                    <div className="input__box user_data" >
                        <input type="password" placeholder='  your password' onChange={(e) => {setPassword(e.target.value)}}/>
                        <input type="password" placeholder='confirm your password' onChange={(e) => {setRepeatPassword(e.target.value)}}/>
                    </div>
                    <button className='register' onClick={(e)=> register(e)}>Register</button>

                </div>
            </div>

        </form>
    );
};

export default Registration;