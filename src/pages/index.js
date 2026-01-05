import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const ALG_URL = 'https://arkalinuxgui.org';
const DK_YT_URL = 'https://www.youtube.com/demonkillerr';

function HeroSection() {
  const {siteConfig = {}} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">
              HPC Graduate Student @ University of Edinburgh<br />
              Open Source Enthusiast & Linux Developer
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/introduction">
                View My Work 🚀
              </Link>
              <a
                className="button button--secondary button--lg"
                href={DK_YT_URL}
                target="_blank"
                rel="noopener noreferrer">
                YouTube Channel 📺
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              alt={siteConfig.title}
              src={useBaseUrl('img/logo.svg')}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function SkillsSection() {
  const skills = [
    {
      category: 'AI and ML',
      items: ['PyTorch', 'LLMs', 'LoRA', 'Fine-Tuning', 'RAG', 'GPU Clusters']
    },
    {
      category: 'HPC and System Tools',
      items: ['MPI', 'Slurm', 'CUDA/ROCm', 'Linux', 'Kubernetes', 'Ansible']
    },
    {
      category: 'Development',
      items: ['Modern C++', 'Python', 'React/Next + JavaScript', 'Bash Shell Scripting', 'CI/CD', 'Docker/Singularity' ]
    }
  ];

  return (
    <div className={clsx('padding-vert--xl', styles.section)}>
      <div className="container">
        <h2 className="text--center margin-bottom--xl">
          <span className="badge badge--primary">Technical Skills</span>
        </h2>
        <div className="row">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.skillCard}>
                <h3>{skillGroup.category}</h3>
                <ul className={styles.skillList}>
                  {skillGroup.items.map((skill, skillIdx) => (
                    <li key={skillIdx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CurrentWork() {
  return (
    <div className={clsx('padding-vert--xl', styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h2 className="margin-bottom--lg">
              <span className="badge badge--secondary">Current Focus</span>
            </h2>
            <h3 className={styles.sectionTitle}>
              High Performance Computing at EPCC
            </h3>
            <p className={styles.sectionTagline}>
              Currently pursuing advanced studies in High Performance Computing at the University of Edinburgh's EPCC,
              focusing on parallel computing, distributed systems, and scientific computing applications.
              This builds upon my background in system development and open source contributions.
            </p>
            <p className={styles.sectionTagline}>
              My research interests include:
              <ul>
                <li>Parallel Computing Optimization</li>
                <li>Scientific Computing Applications</li>
                <li>Distributed Systems</li>
                <li>Linux System Integration</li>
              </ul>
            </p>
            <div className={styles.thesisSection}>
              <h4>Master's Thesis Research</h4>
              <p>
                Working on <strong>Cross-Architecture Analysis of Large Language Model Performance</strong>, 
                focusing on benchmarking LLaMA 3.1 8B model across diverse hardware architectures. The research 
                evaluates critical performance metrics such as latency, throughput, memory consumption, and computational cost.
              </p>
            </div>
            <div className={styles.hpcExperience}>
              <h4>HPC Infrastructure Experience</h4>
              <p>
                Through my academic work and research, I have gained hands-on experience with various 
                world-class supercomputing clusters including - EPCC ARCHER2, EPCC Cirrus, DKRZ Levante, and PSC Bridges-2.
              </p>
            </div>
            
          </div>
          <div className="col col--6">
            <div className={styles.epccImageContainer}>
              <img
                src={useBaseUrl('img/epcc.png')}
                alt="EPCC at University of Edinburgh"
                className={styles.epccImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className={clsx('padding-vert--xl', styles.section)}>
      <div className="container">
        <h2 className="text--center margin-bottom--lg">
          <span className="badge badge--primary">Featured Projects</span>
        </h2>
        <div className="row">
          <div className="col col--6">
            <div className={styles.projectCard}>
              <h3>Arch Linux GUI</h3>
              <p>
                Created an offline, graphical installer for Arch Linux, making the powerful
                distribution more accessible to new users while maintaining its core principles.
              </p>
              <a href={ALG_URL} className="button button--secondary button--sm" target="_blank" rel="noopener noreferrer">
                Learn More →
              </a>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.projectCard}>
              <h3>Open Source Contributions</h3>
              <p>
                Active contributor to various open source projects, focusing on system integration,
                Linux development, and educational content creation.
              </p>
              <Link to="/docs/introduction" className="button button--secondary button--sm">
                View Documentation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DrummerSection() {
  const drumImages = [
    {
      src: 'img/drum1.png',
      alt: 'Live drumming performance',
    },
    {
      src: 'img/drum3.png',
      alt: 'Live music show',
    },
    {
      src: 'img/drum4.png',
      alt: 'Stage performance',
    },
  ];

  return (
    <div className={clsx('padding-vert--xl', styles.section)}>
      <div className="container">
        <h2 className="text--center margin-bottom--lg">
          <span className="badge badge--secondary">Beyond Tech: The Drummer</span>
        </h2>
        <div className={styles.drummerIntro}>
          <p>
            When I'm not coding or working with high-performance computing systems,
            you'll find me behind the drum kit. With over 30 performances across
            indoor venues and arenas, drumming has been my creative outlet and passion.
          </p>
        </div>
        <div className={styles.drumGallery}>
          {drumImages.map((image, idx) => (
            <div key={idx} className={styles.drumImageContainer}>
              <img
                src={useBaseUrl(image.src)}
                alt={image.alt}
                className={styles.drumImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home() {
  const {siteConfig = {}} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome 👋"
      description={siteConfig.tagline}>
      <HeroSection />
      <SkillsSection />
      <CurrentWork />
      <ProjectsSection />
      <DrummerSection />
    </Layout>
  );
}

export default Home;
