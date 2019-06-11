import Layout from '../components/layout'
//import "../components/layout.scss"
import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Iofit  = () => (
    <Layout>
    <div className='Iofit'>
        <AniLink cover to='/' direction='left' duration='1' color='#111421'>
            <div className='Header'>
                Close
            </div>       
        </AniLink>
    </div>
    </Layout>
)

export default Iofit
