import { Link } from "react-router-dom";
import '../Sass/SidebarLinks.scss'


const SidebarLinks = ({ title , image, href}) => {
    return (
        <li>
             <Link to={href}>
                <img src={image} alt=""/>
                <p>{ title }</p>
            </Link>
        </li>       
    );
}

export default SidebarLinks;
