import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import "./SubMenu.css";

import {SubMenuItems, ISubMenuItem, ISubMenuLink} from './interfaces';

const toggleSubmenuItems = (title:string):void => {
    let submenuItems:HTMLElement[] = 
        Array.from(document.querySelectorAll(`.submenu-items.${title} .submenu-item`));

    submenuItems.forEach( (item:HTMLElement):void => {
        item.classList.toggle("hidden-menu");
    })
}


const SubMenu:React.FC = () =>   
    <Fragment>
        {SubMenuItems.map( (subMenuItem:ISubMenuItem) => 

            <Fragment>
                <ul className={`submenu-items ${subMenuItem.title}`} 
                    onClick={() => toggleSubmenuItems(subMenuItem.title)}>
                    
                    <a><subMenuItem.icon/> {subMenuItem.title}</a>

                    {subMenuItem.items.map((subMenuLink:ISubMenuLink) => 
                        <li className="submenu-item hidden-menu">
                            <Link to={subMenuLink.url}>
                                <subMenuLink.icon/> {subMenuLink.label}
                            </Link>
                        </li>
                    )}
                </ul>
            </Fragment>
            
        )}
    </Fragment>

export default SubMenu;

    