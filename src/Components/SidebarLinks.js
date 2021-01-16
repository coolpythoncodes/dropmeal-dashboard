import React from 'react';
import '../Sass/SidebarLinks.scss'


const SidebarLinks = ({ title , image}) => {
    return (
        <li>
             <a href='/'>
                <img src={image} alt=""/>
                <p>{ title }</p>
            </a>
        </li>       
    );
}

export default SidebarLinks;
