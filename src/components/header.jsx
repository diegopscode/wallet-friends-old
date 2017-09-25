import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './icons'

const Header = () => (
    <header>
        <nav className="container">
            <ul>
                <li className="logo"><Link to="/"><Logo />ALLET</Link></li>
                <li><Link to="/friends">Friends</Link></li>
                <li><Link to="/history">History</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;