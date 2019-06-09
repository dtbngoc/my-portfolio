import React from 'react'


import Layout from '../components/layout'

import Stars from '../components/Stars';
import Planets from '../components/Planets';
import CaseStudy from '../components/CaseStudy';

import ReactFullpage from '@fullpage/react-fullpage';


import "../components/overrides.scss";
import Nav from '../components/Nav';

//const anchors = ["firstPage", "secondPage", "thirdPage"];


class MySection extends React.Component {
  render() {
    return (
      <div className="section">
      {this.props.children}
      </div>
    );
  }
}

const IndexPage = () => (
  <Layout>
    
    <div className='Header'>
      Ngoc Dang
    </div>
    
    <Nav name='About' align='right'>
      <h2>
        I'm a designer based in Vietnam, <br />focused on UI/UX Design, Web Design and Development.
      </h2>
    </Nav>
    

   

    <ReactFullpage
      //anchors={anchors}
      navigation
      
      //navigationTooltips={anchors}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <MySection>
              <section id='noise-background' className="Landing">
                <div className="Intro">
                  <h1>I create <br /> products <br />not just art</h1>
                    <p>I design smart experiences that are beautiful, <br />simple and just make sense!</p>
                </div>
                <div className='Gramophone'>
                  <div className='GramophoneGroup'>
                    <div id='shadow' />
                    <div id='gramophone-img' />
                    <div className="star-container-top">
                      <Stars />
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
                    <div className='PlanetsGroup'>
                      <Planets />
                    </div>
                  </div>
                </div>
              </section>
            </MySection>
            <MySection>
              <section id='noise-background' className='casestudy-container'>
                <CaseStudy 
                  image={require('../images/Header.png')}
                  text='Case study I:' >

                  Take me <br />
                  to the moon

                </CaseStudy>
                
              </section>
            </MySection>
            
          </ReactFullpage.Wrapper>
        );
      }}
    />
  
  

  
  
  </Layout>
)

export default IndexPage

