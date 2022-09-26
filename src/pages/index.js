import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


const BLIND_75_URL =
  'https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU';
const BLIND_OFFER_NUMBERS_URL =
  'https://www.teamblind.com/post/Sharing-my-offer-numbers-from-big-companies-for-your-reference-yNgqUPQR';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            Start Reading ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const {siteConfig = {}} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img
          alt={siteConfig.title}
          className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
          src={useBaseUrl('img/logo.svg')}
        />
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome from ${siteConfig.title}`}
      description="DemonKiller's Portfolio & Project Documentation Website">
      
      <main>
        <HeroSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}