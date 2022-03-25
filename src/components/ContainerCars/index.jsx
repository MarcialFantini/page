import React from 'react'
import Cards from '../Cards'
import { valor } from './items'

import './style.css'

const ContainerCars = () => {



    const cardsList = valor.map(item => {
        return (<Cards item={item} key={item.id} />)
    })


    return (
        <div className='Container-cards'>
            {cardsList}
        </div>
    )
}

export default ContainerCars