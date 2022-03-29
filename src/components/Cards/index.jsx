
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

import './style.css'

const Cards = ({ item }) => {



    const ref = useRef(null)

    const [isVisible, setIsVisible] = useState()

    const [count, setCount] = useState('')

    const {
        text,
        img,
        title,
        color
    } = item

    useEffect(() => {

        const obtions = {
            threshold: 0.4
        }
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]

            console.log(entries)
            setIsVisible(entry.isIntersecting)
            console.log("intem:" + item.id + " " + isVisible)
        }, obtions)
        observer.observe(ref.current)
    }, [isVisible])


    useEffect(() => {
        if (isVisible) {
            setCount('0%')
        }
    }, [isVisible])


    const cardBacgraund = {
        background: color
    }



    return (
        <motion.div className='card'
            initial={{
                opacity: 0.01,
                x: '20%'
            }}
            transition={{ duration: 2 }}
            animate={{

                x: count,
                opacity: 1
            }}
            ref={ref}
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
        </motion.div>
    )
}

export default Cards