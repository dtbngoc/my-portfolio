import React from 'react'

const SolarSystem = props => (
    <div className='SolarSystem'>
        <div className='OrbitRingGroup'>
          <div id='ring-1' className='OrbitRing' />
          <div id='ring-2' className='OrbitRing' />
          <div id='ring-3' className='OrbitRing' />
          <div id='ring-4' className='OrbitRing' />
          <div id='ring-5' className='OrbitRing' />
          <div id='ring-6' className='OrbitRing' />
          <div id='ring-7' className='OrbitRing' />
          
        </div>
        <div class='view-3D'>
            <div id='solar-system'>
                <div id='sun' class='no-clipping' />
                <div id='sun' class='no-clipping' />
            </div>
        </div>
        <div className='OrbitRingGroup'>
            <div id='ring-1' className='OrbitRingFront' />
            <div id='ring-2' className='OrbitRingFront' />
            <div id='ring-3' className='OrbitRingFront' />
            <div id='ring-4' className='OrbitRingFront' />
            <div id='ring-5' className='OrbitRingFront' />
        </div>


        <div class='view-3D'>
            <div id='solar-system'>
                <div id='sun' class='sun-clipping'/>
                <div id='mercury' class='orbit'>
                    <div class='pos'>
                        <div class='planet' />
                    </div>
                </div>
                <div id='venus' class='orbit'>
                    <div class='pos'>
                        <div class='planet' />
                    </div>
                </div>
                <div id='earth' class='orbit'>
                    <div class='pos'>
                        <div class='orbit'>
                            <div class='pos'>
                                <div class='moon' />
                            </div>
                        </div>
                        <div class='planet' />
                    </div>
                </div>
                <div id='mars' class='orbit'>
                    <div class='pos'>
                        <div class='planet' />
                    </div>
                </div>
                <div id='jupiter' class='orbit'>
                    <div class='pos'>
                        <div class='planet' />
                    </div>
                </div>
                <div id='saturn' class='orbit'>
                    <div class='pos'>
                        <div class='planet' />
                    </div>
                </div>
                <div id='uranus' class='orbit'>
                    <div class='pos'>
                        <div class='planet' />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SolarSystem