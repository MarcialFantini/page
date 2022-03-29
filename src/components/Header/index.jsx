import React from 'react'
import Typewriter from 'typewriter-effect'

import imgPortada from './imgPortada.jpg'


import './style.css'



const Header = () => {

    return (
        <div className='header'>

            <div className="container-writter">

                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        strings: ["Hola soy Marcial Fantini", "Front-end Jr"]
                    }}

                    onInit={(typewriter) => {
                        typewriter

                            .pauseFor(2500)
                            .deleteAll()
                            .pauseFor(2500)
                            .start();
                    }}
                />
            </div>
            <picture>
                <img src={imgPortada} alt="Header" />
            </picture>
        </div>
    )
}

export default Header