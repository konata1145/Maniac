import React, {useState} from 'react'
import * as IoIcons from "react-icons/io"
import * as AiIcons from "react-icons/ai"
import {Link} from 'react-router-dom'
import './Navbar.css'
import { IconContext } from 'react-icons/lib/cjs'
import FavName from './FavName'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
          <div className="navbar">
              <Link to="#" className = 'menu-bars'>
                <IoIcons.IoIosAddCircleOutline onClick = {showSidebar} color = {'#5CFFD1'}/>
              </Link>
            </div>
            <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className = 'nav-menu-items'>
                    <ul className ="navbar-toggle">
                        <Link to = "#" className = 'menu-bars'>
                            <AiIcons.AiOutlineCloseCircle onClick={showSidebar} color = {'#5CFFD1'}/>
                        </Link>
                    </ul>
                    <FavName/>
                </ul>
            </nav>  
        </>
    )
}

export default Navbar
