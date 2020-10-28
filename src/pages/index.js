import React from 'react';

import SEO from '../components/seo';
import Panel from '../components/panel';
import LinkOut from '../components/LinkOut';
import Layout from '../components/layout';
import TopPanel from '../components/topPanel';
import ButtonLink from '../components/buttonLink';

import VerticalTitle from '../components/verticalTitle';
import VerticalButtonsContainer from '../components/verticalButtonsContainer';

import styles from './pageStyles/index.module.css';

import nestImage from '../images/NeST_main_map.png';
import hiviewImage from '../images/hiview_full.png';

const contrastBackgroundColor = 'rgba(65,182,255, 0.25)';
const contrastTextColor = 'black';

const IndexPage = () => (
  <Layout backgroundColor={contrastBackgroundColor}>
    <SEO title='NeST' />
    <TopPanel>
      <VerticalTitle title='NeST' subtitle='Nested Systems in Tumors' />
      <VerticalButtonsContainer topOffset={'0.75em'}>
        <ButtonLink
          text='Browse NeST Map (NDEx)'
          link='http://www.ndexbio.org/?#/network/9a8f5326-aa6e-11ea-aaef-0ac135e8bacf'
          backgroundImage='nest'
        />
        <ButtonLink
          text='Browse NeST Map (HiView)'
          link='http://hiview.ucsd.edu/274fcd6c-1adc-11ea-a741-0660b7976219?type=test&server=http://test.ndexbio.edu'
          backgroundImage='hiview'
        />
        <ButtonLink
          text='Browse Integrated Protein Network'
          link='http://www.ndexbio.org/?#/network/60112105-f853-11e9-bb65-0ac135e8bacf'
          backgroundImage='ias'
        />
      </VerticalButtonsContainer>
    </TopPanel>

    <Panel backgroundColor='white' textColor='rgba(0, 0, 0, 0.8)'>
      <h2>What is NeST?</h2>
      <p>
        The NeST (Nested Systems in Tumors) map is a hierarchy of 371 protein
        systems that are recurrently mutated in one or more cancer types. It
        provides a resource of cancer mechanisms under selection for somatic
        mutations and captures canonical cancer pathways and protein complexes,
        along with novel protein assemblies on which mutations unexpectedly
        converge.
      </p>

      <p>
        NeST was assembled by creating an{' '}
        <LinkOut link='http://www.ndexbio.org/?#/network/60112105-f853-11e9-bb65-0ac135e8bacf'>
          Integrated Protein Network
        </LinkOut>{' '}
        combining evidence of interactions of five major data types: physical
        protein-protein interactions (novel and previously known), mRNA
        co-expression, protein co-expression, sequence similarity, and genetic
        co-dependence. Multiscale community detection was then applied to the
        network to detect protein communities (a.k.a. "systems") at different
        size resolutions. Communities detected at small size resolutions can
        overlap with one another and nest within communities at larger size
        resolutions, resulting in a hierarchy of systems. Finally, a statistical
        model called HiSig was developed to identify the systems on which cancer
        mutations significantly converge, yielding the{' '}
        <LinkOut link='http://www.ndexbio.org/?#/network/9a8f5326-aa6e-11ea-aaef-0ac135e8bacf'>
          NeST Systems Map
        </LinkOut>{' '}
        of 371 systems.
      </p>
    </Panel>
    <Panel
      backgroundColor={contrastBackgroundColor}
      textColor={contrastTextColor}
    >
      <h2>Accessing NeST</h2>
      <div
        className={styles.flexContainer}
        style={{ flexWrap: 'wrap-reverse' }}
      >
        <div className={styles.flexChild}>
          <p>
            The NeST Systems Map is accessible via the{' '}
            <LinkOut link='http://www.ndexbio.org/?#/network/9a8f5326-aa6e-11ea-aaef-0ac135e8bacf'>
              NDEx (Network Data Exchange)
            </LinkOut>
            , an online commons for biological networks. In NDEx, the map
            appears as a hierarchical network of nodes (protein systems) and
            edges (hierarchical containment of one system by another). Node
            color corresponds to the number of tumor types in which a system is
            recurrently mutated, and node size is proportional to the system
            size (number of proteins). The map can also be directly downloaded
            to the <LinkOut link='https://cytoscape.org/'>Cytoscape</LinkOut>{' '}
            network visualization and analysis platform.
          </p>
        </div>
        <div className={styles.flexChildImage}>
          <img src={nestImage} className={styles.image} />
        </div>
      </div>

      <div className={styles.flexContainer} style={{ flexWrap: 'wrap' }}>
        <div className={styles.flexChildImage}>
          <img src={hiviewImage} className={styles.image} />
        </div>
        <div className={styles.flexChild}>
          <p>
            An alternative means of exploring the NeST map is provided by{' '}
            <LinkOut link='http://hiview.ucsd.edu/274fcd6c-1adc-11ea-a741-0660b7976219?type=test&server=http://test.ndexbio.edu'>
              HiView
            </LinkOut>
            , in which the hierarchical structure is represented as a
            kaleidoscopic collection of nested circles. Each circle represents a
            protein system. If one system contains another, the latter appears
            as a nested circle inside the former. HiView allows the user to (1)
            interactively zoom across many scales in the model, from an
            expansive view of the entire map to more focused views of particular
            subsystems; (2) browse the network data supporting the inference of
            each system; and (3) search for genes and systems based on their
            names.
          </p>
        </div>
      </div>
    </Panel>
    <Panel>
      <h2>Availability of Code</h2>
      <p>
        The bioinformatics tools used to create the NeST map are open-source and
        can be reused or adapted as a template for hierarchical modeling of
        other diseases influenced by complex genetic alterations:
      </p>
      <p>
        <strong>
          <LinkOut link='https://github.com/fanzheng10/CliXO-1.0'>
            CliXO: multiscale community detection
          </LinkOut>
          <br />
          <LinkOut link='https://github.com/fanzheng10/HiSig'>
            HiSig: identifying significantly mutated systems
          </LinkOut>
        </strong>
      </p>
    </Panel>
    <Panel
      backgroundColor={contrastBackgroundColor}
      textColor={contrastTextColor}
    >
      <h2>Publication</h2>
      <p>
        The NeST map is described in the publication by Zheng et al. Convergence
        of cancer mutations on a hierarchy of protein systems. (Submitted).
      </p>
    </Panel>
  </Layout>
);

export default IndexPage;
