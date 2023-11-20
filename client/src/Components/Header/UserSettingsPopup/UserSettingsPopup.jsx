import './userSettingsPopup.scss'
import svg from '../../../assets/svg/tasks/arrow-right-solid.svg'
const UserSettingsPopup = ({setisopen}) => {
    const close = () => {
        setisopen(false)
    }
    return (
        <div className='UserSettingsPopup__main'>
            <div className="about__user">
                <h2>Your profile and stats</h2>
                <div className="img">
                    <img src={svg} width='55px' alt=""/>
                </div>
                <div className="info__about__user">
                    <h2>Daniel Smith</h2>
                    <div className="stats">
                        <div className="tasks">
                            <p>86</p>
                            <span>posts</span>
                        </div>
                        <div className="done__tasks">
                            <p>50</p>
                            <span>done tasks</span>
                        </div>
                        <div className="late__tasks">
                            <p>50</p>
                            <span>late tasks</span>
                        </div>
                    </div>
                    <div className="btns">
                        <button>Upload your avatar</button>
                        <button>delete profile</button>
                    </div>
                </div>
            </div>
            <div className="change__info">
                <div className="input__box">
                    <input type="text" placeholder='password'/>
                    <input type="text" placeholder='profession'/>
                    <input type="text" placeholder='phone'/>
                    <input type="text" placeholder='mail'/>
                </div>
                <button className='save'>save changes</button>
                <button className='close' onClick={close}>❌ </button>
            </div>
        </div>
    );
};

export default UserSettingsPopup;