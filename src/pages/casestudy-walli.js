import React from 'react'

import Img from "gatsby-image"
import { graphql } from "gatsby"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Fade from 'react-reveal/Fade'


const WalliPage  = ({ data }) => (
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
                    <section>
                        <Img fluid={data.img06.childImageSharp.fluid} />
                    </section>
                </Fade> 
            </div>
            
        </div>
    </div>
)

export default WalliPage


export const query = graphql`
    query {
        img01: file(
            relativePath: { regex: "/01_walli/01_header/" }
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
            relativePath: { regex: "/01_walli/02_color/" }
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
            relativePath: { regex: "/01_walli/03_icons/" }
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
            relativePath: { regex: "/01_walli/04_onboarding/" }
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
            relativePath: { regex: "/01_walli/05_main/" }
        ) {
            childImageSharp {
                fluid(
                    maxWidth: 1920

                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        img06: file(
            relativePath: { regex: "/01_walli/06_all screens/" }
        ) {
            childImageSharp {
                fluid(
                    maxWidth: 1920

                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }


        imgcase01: file(
            relativePath: { regex: "/walli_header/" }
        ) {
            childImageSharp {
                fluid(
                    maxWidth: 1000
                ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`