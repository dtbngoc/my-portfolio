import React from 'react'
import './CaseStudy.scss'
import TiltImage from './TiltImage';

const CaseStudy = props => (
    <div className='CaseStudy'>
        
        <div className='title-container'>
            <h4>{props.text}</h4>
            <h1>{props.children}</h1>
        </div>

       
        <TiltImage image={props.image}/>


       
        
        

       
    </div>
)

export default CaseStudy