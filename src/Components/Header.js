import { Avatar } from '@material-ui/core';
import '../Sass/Header.scss';
import ArrowDownIcon from '../assests/arrow-down-fill.svg';

const Header = () => {
    return (
        <div className='header'>
            <form  className="header__search">
                <input type="text" placeholder='Search'/>
            </form>
            <div className="header__profile">
                <Avatar />
                <p>David Chapman</p>
                <img src={ArrowDownIcon} alt=""/>
            </div>
        </div>
    );
}

export default Header;
