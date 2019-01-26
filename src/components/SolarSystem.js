import React from 'react'

const SolarSystem = props => (
    <div className='SolarSystem'>
         <div class="view-3D">
            <div id="universe" class="scale-stretched">
                <div id="galaxy">
                    <div id="solar-system" class="earth">
                    <div id="mercury" class="orbit">
                        <div class="pos">
                        <div class="planet">
                            <dl class="infos">
                            <dt>Mercury</dt>
                            <dd><span></span></dd>
                            </dl>
                        </div>
                        </div>
                    </div>
                    <div id="venus" class="orbit">
                        <div class="pos">
                        <div class="planet">
                            <dl class="infos">
                            <dt>Venus</dt>
                            <dd><span></span></dd>
                            </dl>
                        </div>
                        </div>
                    </div>
                    


                        <div id="earth" class="orbit">
                            <div class="pos">
                                <div class="orbit">
                                    <div class="pos">
                                        <div class="moon" />
                                    </div>
                                </div>
                            <div class="planet">
                                <dl class="infos">
                                    <dt>Earth</dt>
                                </dl>
                            </div>
                            </div>
                        </div>


                        <div id="mars" class="orbit">
                            <div class="pos">
                            <div class="planet">
                                <dl class="infos">
                                <dt>Mars</dt>
                                <dd><span></span></dd>
                                </dl>
                            </div>
                            </div>
                        </div>
                        <div id="jupiter" class="orbit">
                            <div class="pos">
                            <div class="planet">
                                <dl class="infos">
                                <dt>Jupiter</dt>
                                <dd><span></span></dd>
                                </dl>
                            </div>
                            </div>
                        </div>
                        <div id="saturn" class="orbit">
                            <div class="pos">
                            <div class="planet">
                               
                                <dl class="infos">
                                <dt>Saturn</dt>
                                <dd><span></span></dd>
                                </dl>
                            </div>
                            </div>
                        </div>
                        <div id="uranus" class="orbit">
                            <div class="pos">
                            <div class="planet">
                                <dl class="infos">
                                <dt>Uranus</dt>
                                <dd><span></span></dd>
                                </dl>
                            </div>
                            </div>
                        </div>


                        <div id="neptune" class="orbit">
                            <div class="pos">
                            <div class="planet">
                                <dl class="infos">
                                <dt>Neptune</dt>
                                <dd><span></span></dd>
                                </dl>
                            </div>
                            </div>
                        </div>

                        
                  
                   
                        <div id="sun" />
                    </div>
                </div>
                </div>
        </div>
    </div>
)

export default SolarSystem