import { FaBars} from "react-icons/fa";
import { AiOutlineCloseCircle} from "react-icons/ai";
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {SidebarData} from './SidebarData'
import "./navBar.css";
import { IconContext } from "react-icons/lib";

function Navbar(){
    const[sidebar,setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sidebar); 
    return (  
        <>
            <IconContext.Provider value = {{color:"#f5f5f5"}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={showSideBar}/>
                    </Link>
                    <h1>Finance Tracker</h1>
                </div>
                <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
                    < ul className='nav-menu-items' onClick={showSideBar}>
                        <li className ='navbar-toggle'>
                            <Link to ="#" className='menu-bars'>
                                <AiOutlineCloseCircle/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index)=>{
                            return(
                                <li key={index} className = {item.cName}>
                                    <Link to={item.path} classname ={item.cName}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
             </IconContext.Provider>
        </>
    );
}
 
export default Navbar;