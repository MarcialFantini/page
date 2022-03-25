import React from 'react'

import './style.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="icon" />
            <div className="title-navbar"><h1>MaricalFantini</h1></div>
            <nav className='nav'>
                <ul>
                    <li>Home</li>
                    <li>Abaut</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar