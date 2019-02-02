import React from 'react'
import './CaseStudy.scss'

const CaseStudy = props => (
    <div className='CaseStudy'>
        <div className='title-container'>
            <h4>{props.text}</h4>
            <h1>{props.title}</h1>
        </div>
        
        <div className='image-container'>
            
            image here

        </div>

        {/* <section>
        <div class='wrapper'>
            <a class='cell cell-1' href='#'></a>
            <a class='cell cell-2' href='#'></a>
            <a class='cell cell-3' href='#'></a>
            <a class='cell cell-4' href='#'></a>
            <div class='content'></div>
        </div>
        </section> */}
    </div>
)

export default CaseStudy