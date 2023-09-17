import React from 'react' 

import './Card.css'

const Card = (props) => {
    let badgeText;

    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <div className='card'>
            {badgeText &&  <div className='card--badge'>{badgeText}</div>}
            <div>
                <img src={require(`./images/${props.data.coverImg}`)} alt="swimmer-guy" className='card--image'/>
                <div className='card--stats'>
                    <img src={require('./images/star.png')} alt='star'className='card--star'/>
                    <span>{props.data.stats.rating}</span>
                    <span className='grey'>({props.data.stats.reviewCount}) • </span>
                    <span className='grey'>{props.data.location}</span>
                </div>
                <p>{props.data.title}</p>
                <p><span className='bold'>From ${props.data.price} </span> / person</p>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    ) 
}

export default Card