import React, { useEffect, useRef, useState } from 'react'

import img1 from './imgCarrucel/i1.png'
import img2 from './imgCarrucel/i2.png'
import img3 from './imgCarrucel/i3.png'
import img4 from './imgCarrucel/i4.png'

import { motion } from 'framer-motion'

import './style.css'

const arrayCarrucel = [img1, img2, img3, img4]

const CarrucelSkills = () => {

    const [contador, setContador] = useState(0)

    const [posicion, setPosicion] = useState(0)

    const aumentar = () => {
        if (posicion !== 3) {
            setPosicion(posicion + 1)
        } else (
            setPosicion(0)
        )
    }
    const decrementar = () => {
        if (posicion !== 0) {
            setPosicion(posicion - 1)
        } else {
            setPosicion(3)
        }

    }

    useEffect(() => {
        setInterval(() => {
            setContador(prev => prev + 1)
        }, 2500)
    }, [])

    useEffect(() => {
        aumentar()
    }, [contador])
    return (
        <div className="container-return">
            <div className="actions">
                <button
                    onClick={decrementar}
                    className="btn-decrement"
                >{"<-"}</button>

                <button
                    onClick={aumentar}
                    className="btn-increase"
                >{"->"}</button>
            </div>
            <motion.div className='carrucel-container'

                animate={{
                    x: `-${posicion * 25}%`,

                    transition: {

                        duration: 1,
                        ease: 'easeOut'
                    }
                }}

            >
                <picture className="img-carrucel">
                    <img src={img1} alt="img" />
                </picture>
                <picture className="img-carrucel">
                    <img src={img2} alt="img" />
                </picture>
                <picture className="img-carrucel">
                    <img src={img3} alt="img" />
                </picture>
                <picture className="img-carrucel">
                    <img src={img4} alt="img" />
                </picture>

            </motion.div>
        </div>
    )
}

export default CarrucelSkills;