import React from 'react'

import './style.css'

const Cards = ({ item }) => {
    const {
        text,
        img,
        title,
        color
    } = item
    console.log(item)



    const cardBacgraund = {
        background: color
    }
    return (
        <div className='card'
            style={cardBacgraund}
        >
            <div className="text-card">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <picture className='card-img'>
                <img

                    src={img} alt={title} />
            </picture>
        </div>
    )
}

export default Cards