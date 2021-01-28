import { Avatar } from '@material-ui/core';
import '../Sass/Header.scss';
import ArrowDownIcon from '../assests/arrow-down-fill.svg';
import firebase from "./firebase"

const Header = (props) => {
    const logout = ()=>{
        firebase.logout()
    }
    return (
        <div className='header'>
            <form  className="header__search">
                <input type="text" placeholder='Search'/>
            </form>
            <div onClick={logout} aria-hidden="true" className="header__profile">
                <Avatar />
                <p>David Chapman</p>
                <img src={ArrowDownIcon} alt=""/>
            </div>
        </div>
    );
}

export default Header;
