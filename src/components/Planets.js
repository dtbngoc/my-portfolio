
import '../planets-style/planets-style.scss'

import React from 'react'

const Planets = props => (
    <div className='Planets'>
        <div className='view-3D'>
            <div id='solar-system'>
                <div id='sun'/>
                <div id='mercury' className='orbit'>
                    <div className='pos'>
                        <div className='planet' />
                    </div>
                </div>
                <div id='venus' className='orbit'>
                    <div className='pos'>
                        <div className='planet' />
                    </div>
                </div>
                <div id='earth' className='orbit'>
                    <div className='pos'>
                        <div className='orbit'>
                            <div className='pos'>
                                <div className='moon' />
                            </div>
                        </div>
                        <div className='planet' />
                    </div>
                </div>
                <div id='mars' className='orbit'>
                    <div className='pos'>
                        <div className='planet' />
                    </div>
                </div>
                <div id='jupiter' className='orbit'>
                    <div className='pos'>
                        <div className='planet' />
                    </div>
                </div>
                <div id='saturn' className='orbit'>
                    <div className='pos'>
                        <div className='planet' />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Planets