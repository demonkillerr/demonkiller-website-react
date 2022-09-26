import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


const ALG_URL =
  'https://archlinuxgui.in/';
const DK_YT_URL =
  'https://www.youtube.com/c/demonkillerr';


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
          
          Website of the creater of{' '}
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
      title="My Portfolio"
      description={siteConfig.tagline}>
      <HeroSection />

    </Layout>
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