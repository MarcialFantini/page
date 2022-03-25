import React, { useEffect, useRef, useState } from 'react'
import ContainerCars from '../components/ContainerCars'
import Header from '../components/Header'
import MosiacoImgCode from '../components/MosaicoImgCode'

import './style.css'



const HomePage = () => {



    return (
        <div className='homePage'>

            <Header />
            <ContainerCars />
            <MosiacoImgCode />
        </div>
    )
}

export default HomePage