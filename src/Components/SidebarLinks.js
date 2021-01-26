import { NavLink } from "react-router-dom";
import '../Sass/SidebarLinks.scss'


const SidebarLinks = ({ title , image, href}) => {
    return (
        <li>
             <NavLink activeClassName='is-active' to={href}>
                <img src={image} alt=""/>
                <p>{ title }</p>
            </NavLink>
        </li>       
    );
}

export default SidebarLinks;
