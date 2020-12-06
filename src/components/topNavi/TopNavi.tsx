import React from 'react'
import { NavLink } from 'react-router-dom'


const TopNavi = () => (
    <header className="top-navi">
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/bio">Bio</NavLink></li>
                <li><NavLink to="/cv">Cv</NavLink></li>
                <li><NavLink to="/expertise">Experise</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
            </ul>
        </nav>
    </header>
)

export default TopNavi