import React from 'react'

import './style.css'

import { list } from './list.js'

const MosiacoImgCode = () => {

    const listMosaico = list.map(item => {
        return (<div className='itemMosaico'>
            <img src={item.src} alt="imgMosaico" />
        </div>)
    })

    return (
        <div className='mosaicoImg'>
            {listMosaico}
        </div>
    )
}

export default MosiacoImgCode