import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


const ALG_URL =
  'https://arch-linux-gui.github.io/web/';
const DK_YT_URL =
  'https://www.youtube.com/demonkillerr';


// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/introduction">
//             Start Reading ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

function HeroSection() {
  const {siteConfig = {}} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <a href={DK_YT_URL} rel="noopener" target="_blank">
          <h1 className="hero__title">{siteConfig.title}</h1>
        </a>
        <img
          alt={siteConfig.title}
          className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
          src={useBaseUrl('img/logo.svg')}
        />
        <p className="hero__subtitle">
          
          Website of the creator of{' '}
          <a href={ALG_URL} rel="noopener" target="_blank">
            Arch Linux GUI <br />
          </a>
          {siteConfig.tagline} 
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/introduction">
            Start Reading ⏱️
          </Link>
        </div>
       
        
      </div>
    </header>
  );
}

function Home() {
  const {siteConfig = {}} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome 👋 "
      description={siteConfig.tagline}>
      <HeroSection />
      <WhoAmI />
    </Layout>
  );
}

function WhoAmI() {
  return (
    <div className={clsx('padding-vert--xl', styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2 className="text--center margin-bottom--lg">
              <span className="badge badge--primary">Who Am I?</span>
            </h2>
            <h3
              className={clsx(
                'text--center',
                'margin-bottom--lg',
                styles.sectionTitle,
              )}>
              Open Source enthusiast having more than two years of experiance with 
              linux based operating systems
              
            </h3>
            <p className={clsx('margin-bottom--lg', styles.sectionTagline)}>
              I enjoy learning new technologies, 
              while tinkering with open-source software revolving around linux, and the web. 
              I also love to play with computer hardware. I have a small 
              {' '} <strong><a href={DK_YT_URL} rel="noopener" target="_blank">
                youtube</a></strong> channel, where you can find content regarding the same.
              <br />
              <br />
              For the past two years, I have been working on projects involving 
              operating systems. My biggest project to date is the {' '}
              <strong>ALG installer</strong>, an offline, graphical installer
              for{' '} <strong>Arch Linux</strong>. You can find relevant documentation 
              regarding it, as well as my other projects, here.
              <br />
              <br />
              Outside of tech, I find myself enjoying music. I can play the drums, and various
              indian percussion instruments with varying degrees of expertise. I also have been 
              teaching myself to play the electric guitar, so that I can jam to my favourite songs.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Welcome from ${siteConfig.title}`}
//       description="DemonKiller's Portfolio & Project Documentation Website">
      
//       <main>
//         <HeroSection />
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }


export default Home;
