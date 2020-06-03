import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ButtonLink from '../components/buttonLink';
import Title from '../components/title';
import './pageStyles/index.css';
import ButtonsContainer from '../components/buttonsContainer';
import TopPanel from '../components/topPanel';
import Panel from '../components/panel';

const contrastBackgroundColor = 'rgba(65,182,255, 0.25)';
const contrastTextColor = 'black';

const IndexPage = () => (
  <Layout backgroundColor={contrastBackgroundColor}>
    <SEO title='Title' />
    <TopPanel>
      <Title title='Title' subtitle='Subtitle' />
      <ButtonsContainer>
        <ButtonLink
          text='View in NDEx'
          link='http://ndexbio.org'
          tooltip={true}
          tooltipPosition='top'
          tooltipText={
            <span>
              {'NDEx is an online commons for biological networks. '}
              <span
                style={{
                  display: 'inline-block',
                }}
              >
                <a href='#ndex' style={{ color: 'rgb(0, 0, 0, 0.8)' }}>
                  Learn more
                </a>
              </span>
              {'.'}
            </span>
          }
        />
        <ButtonLink
          text='View in HiView'
          link='http://hiview.ucsd.edu/'
          tooltip={true}
          tooltipPosition='bottom'
          tooltipText={
            <span>
              {'HiView is a tool for viewing large hierarchical networks. '}
              <a href='#hiview' style={{ color: 'rgb(0, 0, 0, 0.8)' }}>
                Learn more
              </a>
              {'.'}
            </span>
          }
        />
      </ButtonsContainer>
    </TopPanel>

    <Panel backgroundColor='white' textColor='rgba(0, 0, 0, 0.8)'>
      <h2>What is Title?</h2>
      <p>{'Content'}</p>
    </Panel>
    <Panel
      backgroundColor={contrastBackgroundColor}
      textColor={contrastTextColor}
    >
      <h2>
        What is NDEx?
        <a id='ndex' />
      </h2>
      <p>
        {'NDEx, the Network Data Exchange ('}
        <a href='http://ndexbio.org' target='_blank' rel='noopener'>
          www.ndexbio.org
        </a>
        {', Pratt et. al. 2017 '}
        <a
          href='https://dx.doi.org/10.1158/0008-5472.CAN-17-0606'
          target='_blank'
          rel='noopener noreferrer'
        >
          DOI: 10.1158/0008-5472.CAN-17-0606
        </a>
        {
          '), is an online commons for biological networks where networks of many types and formats can be shared, accessed, and stored by users and applications. NDEx is tightly integrated with Cytoscape ('
        }
        <a
          href='https://cytoscape.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://cytoscape.org/
        </a>
        {'), and the '}
        <a href='http://ndexbio.org' target='_blank' rel='noopener noreferrer'>
          Title
        </a>
        {
          ' network can be downloaded to Cytoscape by clicking the “Open in Cytoscape” button at the bottom-right of the web page.'
        }
      </p>
      <h2>
        What is HiView?
        <a id='hiview' />
      </h2>
      <p>
        {'The HiView web application ('}
        <a
          href='http://hiview.ucsd.edu/'
          target='_blank'
          rel='noopener noreferrer'
        >
          http://hiview.ucsd.edu/
        </a>
        {
          ') is an interactive visualization tool which supports exploration of the Title and any similar hierarchical models. HiView allows the user to (1) interactively zoom across many scales in the model, from an expansive view of the entire hierarchy to more focused views of particular subsystems; (2) browse the network data supporting the inference of each subsystem; and (3) search genes and subsystems based on their names or metadata.'
        }
      </p>
    </Panel>
  </Layout>
);

export default IndexPage;
