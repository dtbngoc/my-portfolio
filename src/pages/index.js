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
import LandingPicture from '../components/LandingPicture'


const anchors = ['home', 'case01', 'case02'];


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
        <h3>
          I'm a designer based in Vietnam, <br />focused on UI/UX Design, Web Design and Development.
        </h3>
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
                  <LandingPicture />
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
      }
`