import  './Nav.scss';
import {Link, Outlet} from "react-router-dom";
import SearchBlock from "../searchBlock/searchBlock.jsx";


const Nav = () => {
    return (
        <>
            <nav className='tasks__nav__main'>
                <div className='header'>
                    <Link to='/page'>Tasks</Link>
                </div>
                <div className='spans'>
                    <Link to='active'>Active</Link>
                    <Link to='finished'>Finished</Link>
                </div>
            </nav>
            <SearchBlock />
            <Outlet />

        </>
    );
};

export default Nav;