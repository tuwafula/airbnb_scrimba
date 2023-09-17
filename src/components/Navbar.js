import React from 'react'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <img src={require('./images/airbnb-logo.png')} className='nav--logo' alt='airbnb-logo'/>
        </nav>
    )
}

export default Navbar