import React from 'react'

import Img from "gatsby-image"
import { graphql } from "gatsby"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Fade from 'react-reveal/Fade'


const TheguidePage  = ({ data }) => (
    <div className='TheguidePage'>
        <div id='noise-background' className='page-container'>
            <AniLink cover to='/#case03' direction='right' bg='#111421'>
                <div className='back-button'>
                    <svg width="30" height="11" viewBox="0 0 30 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.1992 9.69629H1.64449L9.64423 1.69629" />
                    </svg>
                    <span>Back</span>
                </div>
            </AniLink>

            <div className='content-container'>
                <Fade bottom>
                    <section>
                        <Img fluid={data.img01.childImageSharp.fluid} />
                    </section>
                </Fade> 
                <Fade bottom>
                    <section>
                        <Img fluid={data.img02.childImageSharp.fluid} />
                    </section>
                </Fade> 
                <Fade bottom>
                    <section>
                        <Img fluid={data.img03.childImageSharp.fluid} />
                    </section>
                </Fade> 
                <Fade bottom>
                    <section>
                        <Img fluid={data.img04.childImageSharp.fluid} />
                    </section>
                </Fade> 
                <Fade bottom>
                    <section>
                        <Img fluid={data.img05.childImageSharp.fluid} />
                    </section>
                </Fade> 
                <Fade bottom>
                    <div className='vimeo-video'>
                        <iframe title='onboarding' src="https://player.vimeo.com/video/345323714?autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div> 
                </Fade>
                <Fade bottom>
                    <div className='vimeo-video'>
                        <iframe title='onboarding' src="https://player.vimeo.com/video/345323697?autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div> 
                </Fade>
            </div>
            
        </div>
    </div>
)

export default TheguidePage


export const query = graphql`
    query {
        img01: file(
            relativePath: { regex: "/03_theguide/01/" }
        ) {
            childImageSharp {
                fluid(
                    maxWidth: 1920
                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        img02: file(
            relativePath: { regex: "/03_theguide/02/" }
        ) {
            childImageSharp {
                fluid(
                    maxWidth: 1920
                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        img03: file(
            relativePath: { regex: "/03_theguide/03/" }
        ) {
            childImageSharp {
                fluid(
                    maxWidth: 1920
                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        img04: file(
            relativePath: { regex: "/03_theguide/04/" }
        ) {
            childImageSharp {
                fluid(
                    maxWidth: 1920
                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        img05: file(
            relativePath: { regex: "/03_theguide/05/" }
        ) {
            childImageSharp {
                fluid(
                    maxWidth: 1920
                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`


