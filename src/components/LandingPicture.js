import React from 'react'
import Stars from './Stars'
import Planets from './Planets'

const LandingPicture = props => (
    <div className='LandingPicture'>
        <div className='gramophone-container'>
            <div id='shadow' />
            <div id='gramophone-img' />
            <div className="star-container-top">
                <Stars />
            </div>
            <div className='star-container-bottom'>
                <Stars />
            </div>
            <svg>
                <defs>
                <clipPath id="clip0">
                    <path d="M251.401 247.776C233.43 289.52 205.472 320.301 162.711 334.857C135.355 358.592 107.101 364.069 77.8398 350.282C46.2401 349.335 25.2197 333.92 18.43 299.004C-1.31736 270.809 -5.91619 239.397 8.14676 204.067C4.05123 164.73 18.9037 131.305 48.6086 102.528C62.0399 67.3358 86.6328 43.3153 120.265 28.295C143.102 0.968504 172.145 -5.16985 205.768 3.92913C240.99 -0.511806 262.513 14.39 274.218 43.0784C297.064 67.3358 300.449 99.4289 291.251 136.595C293.255 186.738 278.599 222.62 251.401 247.776Z" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <div className='PlanetsGroup'>
                <Planets />
            </div>
        </div>
    </div>
)

export default LandingPicture