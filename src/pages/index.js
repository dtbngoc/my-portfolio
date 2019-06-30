import React from 'react'
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from '../components/layout'

import Nav from '../components/Nav'
import TiltImage from '../components/TiltImage'
import Button from '../components/Button'

import ReactFullpage from '@fullpage/react-fullpage'
import "../components/overrides.scss"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Stars from '../components/Stars'
import Planets from '../components/Planets'


const anchors = ['home', 'case01', 'case02', 'case03'];


class MySection extends React.Component {
  render() {
    return (
      <div className="section">
      {this.props.children}
      </div>
    );
  }
}

const IndexPage  = ( {data} ) => (
  <Layout>
    <div className='header'>
      Ngoc Dang
    </div>
   
    <Nav name='About' align='right'>
      <div className='about-me'>
        <div className='about-right'>
          <h4>Hello,</h4>
          <h5>it is nice to meet you</h5>
          <p>I'm Ngoc Dang, a visual and UI/UX designer based in Vietnam. I also cover a little bit of coding.</p>
          <p>I'm a problem solver. I enjoy learning new stuff and working on interesting ideas.</p>
          <p>See more high quality designs and check me out at belows:</p>
          <a href="https://dribbble.com/ngocdangtb" target="_blank" rel="noopener noreferrer">dribble</a>
          &nbsp
          <a href="https://www.behance.net/dangtbngoc9dd3" target="_blank" rel="noopener noreferrer">behance</a>
          &nbsp
          <a href="https://github.com/dtbngoc" target="_blank" rel="noopener noreferrer">github</a>
          &nbsp
          <a href="mailto:dangtb.ngoc@gmail.com?Subject=Hello" target="_top">e-mail</a>
          
        </div>
      </div>
    </Nav>
  

    <ReactFullpage
      anchors={anchors}
      navigation
      scrollingSpeed={700}
      //touchSensitivity={5}
      animateAnchor={false}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <MySection>
              <section id='noise-background' className="landing">
                
                <div className="intro">
                  <h2>I create <br /> products <br />not just art</h2>
                  <p>I design smart interface and experiences that are beautiful, simple and just make sense!</p>
                </div>
                <div className='landing-picture'>
                  <div className='gramophone-container'>
                    <div id='shadow' />
                    <div id='gramophone-img' />
                    <div className="star-container-top">
                        <Stars />
                    </div>
                    <div className='PlanetsGroup'>
                        <Planets />
                    </div>
                    <div className='star-container-bottom'>
                        <Stars />
                    </div>
                    <svg>
                        <defs>
                        <clipPath id="clip0">
                            <path d="M251.401 247.776C233.43 289.52 205.472 320.301 162.711 334.857C135.355 358.592 107.101 364.069 77.8398 350.282C46.2401 349.335 25.2197 333.92 18.43 299.004C-1.31736 270.809 -5.91619 239.397 8.14676 204.067C4.05123 164.73 18.9037 131.305 48.6086 102.528C62.0399 67.3358 86.6328 43.3153 120.265 28.295C143.102 0.968504 172.145 -5.16985 205.768 3.92913C240.99 -0.511806 262.513 14.39 274.218 43.0784C297.064 67.3358 300.449 99.4289 291.251 136.595C293.255 186.738 278.599 222.62 251.401 247.776Z" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                  </div>
                </div>
              </section>
            </MySection>
            
            <MySection>
              <section id='noise-background' className='walli'> 
                <div className='casestudy-container'>
                  <div className='casestudy-left'>
                    <div className='tools'>
                      <h5>UI Design</h5>
                      
                      <div className='icon-container'><Img fluid={data.sketch.childImageSharp.fluid} /></div>
                      <div className='icon-container'><Img fluid={data.ai.childImageSharp.fluid} /></div>
                      <div className='icon-container'><Img fluid={data.ps.childImageSharp.fluid} /></div>
                    </div>

                   
                    
                    <div className='tilt-image'>
                      <TiltImage imagetilt={data.imgcase01.childImageSharp.fluid} />
                    </div>
                  
                    
                  </div>

                  <div className='casestudy-right'>
                    <h4><hr/> 01</h4>
                    <h1>Walli</h1>
                    <p>
                      Interface designs for a new electronic wallet app
                    </p>
                    <AniLink cover to='/casestudy-walli' direction='left' bg='#111421'>
                      <div className='button-container'>
                        <div className='link-container'>
                          <Button text=' View case' id='on-black' />
                          <Button text=' View case' id='on-black'/>
                        </div>
                      </div>
                    </AniLink>
                  </div>
                </div>
              </section>
            </MySection>

            <MySection>
              <section id='noise-background' className='iofit'> 
                <div className='casestudy-container'>
                  <div className='casestudy-left'>
                    <div className='tools'>
                      <h5>UI/Interaction Design</h5>
                      
                      <div className='icon-container'><Img fluid={data.sketch.childImageSharp.fluid} /></div>
                      <div className='icon-container'><Img fluid={data.ai.childImageSharp.fluid} /></div>
                      <div className='icon-container'><Img fluid={data.ps.childImageSharp.fluid} /></div>
                      <div className='icon-container'><Img fluid={data.ae.childImageSharp.fluid} /></div>
                    </div>

                   
                    <div className='tilt-image'>
                    <TiltImage imagetilt={data.imgcase02.childImageSharp.fluid} />
                    </div>
                  </div>

                  <div className='casestudy-right'>
                    <h4><hr/> 02</h4>
                    <h1>iofit</h1>
                    <p>
                      A diet tracking and workout planning app, casestudy includes visual interface design as well as interaction design for some flows.
                    </p>
                    <AniLink cover to='/casestudy-iofit' direction='left' bg='#ECEDFB'>
                      <div className='button-container'>
                        <div className='link-container'>
                          <Button text=' View case' id='on-white' />
                          <Button text=' View case' id='on-white'/>
                        </div>
                      </div>
                    </AniLink>
                  </div>
                </div>
              </section>
            </MySection>
          
            <MySection>
              <section id='noise-background' className='theguide'> 
                <div className='casestudy-container'>
                  <div className='casestudy-left'>
                    <div className='tools'>
                      <h5>Web UI/Interaction Design</h5>
                      
                      <div className='icon-container'><Img fluid={data.sketch.childImageSharp.fluid} /></div>
                      <div className='icon-container'><Img fluid={data.ps.childImageSharp.fluid} /></div>
                      <div className='icon-container'><Img fluid={data.ae.childImageSharp.fluid} /></div>
                    </div>

                   
                    <div className='tilt-image'>
                    <TiltImage imagetilt={data.imgcase03.childImageSharp.fluid} />
                    </div>
                  </div>

                  <div className='casestudy-right'>
                    <h4><hr/> 03</h4>
                    <h1>theguide</h1>
                    <p>
                    A website made for those who wish to visit Vietnam, aiming to guide the visitors through some of the land's magicals and secrets.
                    </p>
                    <AniLink cover to='/casestudy-theguide' direction='left' bg='#ECEDFB'>
                      <div className='button-container'>
                      <div className='link-container'>
                          <Button text=' View case' id='on-black' />
                          <Button text=' View case' id='on-black'/>
                        </div>
                      </div>
                    </AniLink>
                  </div>
                </div>
              </section>
            </MySection>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </Layout>
)

export default IndexPage

export const query = graphql`
    query {
      ai: file(
        relativePath: { regex: "/ai/" }
      ) {
          childImageSharp {
              fluid(
                  maxWidth: 36
              ) {
                  ...GatsbyImageSharpFluid
              }
          }
      }

      ae: file(
        relativePath: { regex: "/ae/" }
      ) {
          childImageSharp {
              fluid(
                  maxWidth: 36
              ) {
                  ...GatsbyImageSharpFluid
              }
          }
      }

      ps: file(
        relativePath: { regex: "/ps/" }
      ) {
          childImageSharp {
              fluid(
                  maxWidth: 36
              ) {
                  ...GatsbyImageSharpFluid
              }
          }
      }

      sketch: file(
        relativePath: { regex: "/sketch/" }
      ) {
          childImageSharp {
              fluid(
                  maxWidth: 36
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


        imgcase02: file(
          relativePath: { regex: "/iofit_header/" }
      ) {
          childImageSharp {
              fluid(
                  maxWidth: 1000
              ) {
                  ...GatsbyImageSharpFluid
              }
          }
      }

      imgcase03: file(
        relativePath: { regex: "/theguide_header/" }
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