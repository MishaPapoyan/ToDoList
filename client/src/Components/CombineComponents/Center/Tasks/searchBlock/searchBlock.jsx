import  './SearchBlock.scss';
import {useState} from "react";
import Popup from "./Popup/Popup.jsx";
const SearchBlock = () => {
    const [isOpen, setIsOpen] = useState(false)
    const changeBtnStatus = () => {
        if (isOpen){
            setIsOpen(false)
        }else if(!isOpen){
            setIsOpen(!isOpen)
        }
    }
    return (
        <div className='searchBock__main'>
            <input type="text" placeholder='search tasks' />
            <button onClick={changeBtnStatus}> Add New </button>
            {isOpen ? <Popup isopen={isOpen} setisopen={setIsOpen}/>: null}

        </div>
    );
};

export default SearchBlock;