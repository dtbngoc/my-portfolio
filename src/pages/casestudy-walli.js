//import Layout from '../components/layout'
//import '../components/layout.scss'
import '../components/casestudy-detail.scss'
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Fade from 'react-reveal/Fade'
//import Slide from 'react-reveal/Slide'
//import Zoom from 'react-reveal/Zoom'
//import Button from '../components/Button'

const WalliPage  = () => (
    <div className='WalliPage'>
        <div id='noise-background' className='page-container'>
            <AniLink cover to='/#case01' direction='right' bg='#111421'>
                <div className='back-button'>
                    <svg width="30" height="11" viewBox="0 0 30 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.1992 9.69629H1.64449L9.64423 1.69629" />
                    </svg>
                    <span>Back</span>
                </div>
            </AniLink>
            <div className='content-container'>

               <div><Fade bottom><img width='100%' src={require('../images/01_walli/01_header.jpg')} alt='mockup' /></Fade> </div>
               <div><Fade bottom><img width='100%' src={require('../images/01_walli/02_color.jpg')} alt='mockup' /></Fade> </div>
               <div><Fade bottom><img width='100%' src={require('../images/01_walli/03_icons.jpg')} alt='mockup' /></Fade> </div>
               <div><Fade bottom><img width='100%' src={require('../images/01_walli/04_onboarding.jpg')} alt='mockup' /></Fade> </div>
               <div><Fade bottom><img width='100%' src={require('../images/01_walli/05_main.jpg')} alt='mockup' /></Fade> </div>
               <div><Fade bottom><img width='100%' src={require('../images/01_walli/07_all screens.jpg')} alt='mockup' /></Fade> </div>
            </div>
        </div>
    </div>
)

export default WalliPage
