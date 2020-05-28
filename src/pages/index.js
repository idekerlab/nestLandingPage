import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.css'
import ButtonLink from '../components/buttonLink'

const IndexPage = () => (
  <Layout>
    {/*Change me*/}
    <SEO title="TITLE" />
    <div id='topDivWrapper'>
      <div id='topDiv'>
        <div id='topDivContents'>
          <div id='titlesDiv'>
            <div id='titleDiv'>
              {/*Change me*/}
              TITLE
            </div>
            <div id='subtitleDiv'>
              {/*Change me*/}
              Subtitle
            </div>
          </div>
          <div id='buttonsContainer'>
            <div id='buttonsDiv'>
              <ButtonLink
                text='View in NDEx'
                link='http://ndexbio.org'
              />
              <ButtonLink
                text='View in HiView'
                link='http://hiview-test.ucsd.edu/'
              />  
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id='bottomDiv'>
      <div id='bottomTitle'>
        <div id='bottomTitleText'>
          {/*Change me*/}
          Blurb title
        </div>
      </div>
      <div id='bottomText'>
        {/*Change me*/}
        Blurb
      </div>
    </div>
  </Layout>
)

export default IndexPage
