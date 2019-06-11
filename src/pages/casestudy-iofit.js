//import Layout from '../components/layout'
//import "../components/layout.scss"
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Button from '../components/Button'

const IofitPage  = () => (
   // <Layout>
    <div className='Iofit'>
        <AniLink cover to='/' direction='right' bg='#ECEDFB'>
            <div className='Header'>
                <div className='link-container'>
                    <Button text='Back' id='on-black'/>
                    <Button text='Back' id='on-black'/>
                </div>
            </div>
            
        </AniLink>
            
    </div>
   // </Layout>
)

export default IofitPage
