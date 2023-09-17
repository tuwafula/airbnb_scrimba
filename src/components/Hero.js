import React from 'react'

import './Hero.css'

const Hero = () => {
    return (
    <section className='hero'>
        <img src={require('./images/gallery.png')} alt="airbnb-grid" className='hero--photo'/>
    <h1 className='hero--header'>Online Experiences</h1>
    <p className='hero--text'>Join uniqueinteractive activities led by one-of-a-kind hosts-all without leavin home.</p>
    </section>
    )
}

export default Hero