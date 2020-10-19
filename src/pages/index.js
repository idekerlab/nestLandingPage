import React from 'react';

import SEO from '../components/seo';
import Panel from '../components/panel';
import LinkOut from '../components/LinkOut';
import Layout from '../components/layout';
import TopPanel from '../components/topPanel';
import ButtonLink from '../components/buttonLink';

import HorizontalTitle from '../components/horizontalTitle';
import HorizontalButtonsContainer from '../components/horizontalButtonsContainer';
import VerticalTitle from '../components/verticalTitle';
import VerticalButtonsContainer from '../components/verticalButtonsContainer';

import './pageStyles/index.module.css';

const contrastBackgroundColor = 'rgba(65,182,255, 0.25)';
const contrastTextColor = 'black';

const IndexPage = () => (
  <Layout backgroundColor={contrastBackgroundColor}>
    <SEO title='NeST' />
    <TopPanel>
      <VerticalTitle title='NeST' subtitle='Nested Systems in Tumors' />
      <VerticalButtonsContainer>
        <ButtonLink
          text='View NeST in NDEx'
          link='http://www.ndexbio.org/?#/network/9a8f5326-aa6e-11ea-aaef-0ac135e8bacf'
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
          text='View NeST in HiView'
          link='http://hiview.ucsd.edu/274fcd6c-1adc-11ea-a741-0660b7976219?type=test&server=http://test.ndexbio.edu'
          tooltip={true}
          tooltipPosition='top'
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
	<ButtonLink
          text='View the protein network in NDEx'
          link='http://www.ndexbio.org/?#/network/60112105-f853-11e9-bb65-0ac135e8bacf'
          tooltip={true}
          tooltipPosition='top'
          tooltipText={
            <span>
              {'An integrated network used to assemble the NeST hierarchy.'}
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
      </VerticalButtonsContainer>
    </TopPanel>

    <Panel backgroundColor='white' textColor='rgba(0, 0, 0, 0.8)'>
      <h2>What is NeST?</h2>
      <p>
        {
          'The NeST (Nested Systems in Tumors) is a hierarchical map of 371 protein systems recurrently mutated in 13 cancer types cancer. The map recapitulates or expands canonical cancer systems including protein complexes and pathways, and identifies systems on which mutations unexpectedly converge. The NeST map provides a resource of cancer mechanisms under selection for somatic mutations.'
        }
      </p>

      <p>
	{'The NeST model is assembled by first creating an integrated network ('}
	<LinkOut link='http://www.ndexbio.org/#/network/60112105-f853-11e9-bb65-0ac135e8bacf'>
         View in NDEx  
        </LinkOut>
        {'; '}
        <a href='/nest/files/IAS_CCMI.txt.gz' download='IAS_CCMI.txt.gz'>
         Download
        </a>	

        {')  combining the evidence of interactions of five major data types: physical, mRNA co-expression, protein co-expression, sequence similarity, genetic co-dependence. Multiscale community detection ('}
	<LinkOut link='https://github.com/fanzheng10/CliXO-1.0'>code</LinkOut>
	{') was then used to detect protein systems of different scales, and '}
	{'a statistical model ('}
        <LinkOut link='https://github.com/fanzheng10/HiSig'>code</LinkOut>
        {
          ') was developed to assess the convergence of cancer mutations in protein systems. This workflow serves as a template for hierarchical modeling of other diseases influenced by complex genetic alterations.'
        }
      </p>
    </Panel>
    <Panel
      backgroundColor={contrastBackgroundColor}
      textColor={contrastTextColor}
    >
      <a id='ndex'>
        <h2>What is NDEx?</h2>
      </a>
      <p>
        <LinkOut link='http://ndexbio.org'>NDEx</LinkOut>
	{' (the Network Data Exchange) is an online commons for biological networks where networks of many types and formats can be shared, accessed, and stored by users and applications ('}
	<LinkOut link='https://dx.doi.org/10.1158/0008-5472.CAN-17-0606'>
         Pratt et. al. 2017
        </LinkOut>
	{'). NDEx is tightly integrated with '}
        <LinkOut link='https://cytoscape.org/'>Cytoscape</LinkOut>
        {'. The NeST model can be downloaded to Cytoscape by clicking the “Open in Cytoscape” button at the bottom-right of its NDEx page.'
        }
      </p>
      <h2>
        What is HiView?
        <a id='hiview' />
      </h2>
      <p>
        {'The '}
        <LinkOut link='http://hiview.ucsd.edu/'>
         HiView 
        </LinkOut>
        {
          ' web application is an interactive visualization tool which supports exploration of the NeST and any similar hierarchical models. HiView allows the user to (1) interactively zoom across many scales in the model, from an expansive view of the entire hierarchy to more focused views of particular subsystems; (2) browse the network data supporting the inference of each subsystem; and (3) search genes and subsystems based on their names or metadata.'
        }
      </p>
    </Panel>
  </Layout>
);

export default IndexPage;
