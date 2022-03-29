import React from 'react'
import CarrucelSkills from '../components/CarrucelSkills'
import ContainerCars from '../components/ContainerCars'
import Header from '../components/Header'
import MosiacoImgCode from '../components/MosaicoImgCode'

import './style.css'



const HomePage = () => {



    return (
        <div className='homePage'>

            <Header />
            <CarrucelSkills />
            <ContainerCars />
            <MosiacoImgCode />
        </div>
    )
}

export default HomePage