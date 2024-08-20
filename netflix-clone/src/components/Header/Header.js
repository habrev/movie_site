import React from 'react'
import "./header.css"
import netflix from "../../assets/images/netflix.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li><img src={netflix} alt="netflix logo" width="100" /></li>
                    <li>home</li>
                    <li>tvshows</li>
                    <li>movies</li>
                    <li>latest</li>
                    <li>my list</li>
                    <li>browse</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><SearchIcon  /></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><ArrowDropDownIcon /></li>
                    <li><AccountBoxIcon /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
