import React from 'react'

const Planets = () => (
    <div className='Planets'>
        <div id='solar-system'>
            <div className='sun'/>
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
)

export default Planets