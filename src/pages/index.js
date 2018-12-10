import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>I am a multidisciplinary designer based in Vietnam, focused on UI and UX Design, Web Design and Development.</h1>
        <p>Now go build something great.</p>
        {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div> */}
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>

  </Layout>
)

export default IndexPage
