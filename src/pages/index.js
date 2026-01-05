import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { SiPytorch, SiPython, SiCplusplus, SiReact, SiJavascript, SiDocker, SiKubernetes, SiAnsible, SiLinux, SiGnubash } from 'react-icons/si';
import { FaRobot, FaCogs, FaBook, FaBolt, FaChartBar, FaServer, FaMicrochip } from 'react-icons/fa';
import { MdAutoFixHigh } from 'react-icons/md';

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
            <div className={styles.roleTag}>
              <span>👨‍💻 Software Engineer</span>
            </div>
            <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              Specializing in <span className={styles.highlight}>ML Systems</span>, <span className={styles.highlight}>Distributed Systems</span>, and <span className={styles.highlight}>Infrastructure</span>
            </p>
            <p className={styles.heroDescription}>
              Production C++ & Python • Distributed LLM Training • Kubernetes & HPC • Open Source Systems at Scale
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500K+</div>
                <div className={styles.statLabel}>Users Worldwide</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>6</div>
                <div className={styles.statLabel}>HPC Clusters</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>4+</div>
                <div className={styles.statLabel}>Years Open Source</div>
              </div>
            </div>
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
            <div className={styles.imageWrapper}>
              <img
                alt={siteConfig.title}
                src={useBaseUrl('img/logo.svg')}
              />
            </div>
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
      items: [
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'LLMs', icon: <FaRobot /> },
        { name: 'LoRA', icon: <MdAutoFixHigh /> },
        { name: 'Fine-Tuning', icon: <FaCogs /> },
        { name: 'RAG', icon: <FaBook /> },
        { name: 'GPU Clusters', icon: <FaServer /> }
      ]
    },
    {
      category: 'HPC and System Tools',
      items: [
        { name: 'MPI', icon: <FaBolt /> },
        { name: 'Slurm', icon: <FaChartBar /> },
        { name: 'CUDA/ROCm', icon: <FaMicrochip /> },
        { name: 'Linux', icon: <SiLinux /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'Ansible', icon: <SiAnsible /> }
      ]
    },
    {
      category: 'Development',
      items: [
        { name: 'Modern C++', icon: <SiCplusplus /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'React/Next + JavaScript', icon: <><SiReact /> <SiJavascript /></> },
        { name: 'Bash Shell Scripting', icon: <SiGnubash /> },
        { name: 'CI/CD', icon: <FaBolt /> },
        { name: 'Docker/Singularity', icon: <SiDocker /> }
      ]
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
                    <li key={skillIdx}>
                      <span className={styles.skillIcon}>{skill.icon}</span> {skill.name}
                    </li>
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
              <span className="badge badge--secondary">Systems Engineering</span>
            </h2>
            <h3 className={styles.sectionTitle}>
              Building ML Systems at Scale
            </h3>
            <p className={styles.sectionTagline}>
              Focused on building and optimizing large-scale machine learning systems, distributed computing infrastructure,
              and production-grade tooling for high-performance workloads. Extensive experience with modern ML frameworks,
              container orchestration, and HPC cluster management.
            </p>
            <div className={styles.expertiseSection}>
              <h4>Core Expertise</h4>
              <ul>
                <li><strong>ML Systems:</strong> Distributed LLM training, LoRA fine-tuning, RAG architectures, PyTorch optimization</li>
                <li><strong>Infrastructure:</strong> Kubernetes, Docker, Slurm, Terraform, Ansible, CI/CD pipelines</li>
                <li><strong>Systems Programming:</strong> Production C++ and Python, Bash automation, performance optimization</li>
                <li><strong>Open Source Leadership:</strong> Maintainer of Linux distribution serving 500K+ users globally</li>
              </ul>
            </div>
            <div className={styles.hpcExperience}>
              <h4>HPC & Accelerator Infrastructure</h4>
              <p>
                Production experience across multiple world-class supercomputing clusters:
                <strong> ARCHER2, Cirrus, DKRZ Levante, PSC Bridges-2, EIDF GPU Cluster, EIDF Cerebras Cluster</strong>.
              </p>
              <p>
                Hands-on benchmarking and optimization across diverse hardware accelerators including
                <strong> NVIDIA A100, H100, H200, AMD MI210, MI300X, and Cerebras CS-3</strong>.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.epccImageContainer}>
              <img
                src={useBaseUrl('img/epcc.png')}
                alt="High Performance Computing Infrastructure"
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
  const projects = [
    {
      title: 'Distributed LLM LoRA Fine-Tuning & Performance Optimization',
      description: 'Designed and implemented distributed LoRA fine-tuning pipelines for LLaMA-3.1 8B using PyTorch. Orchestrated multi-node training workflows with Bash automation across Slurm and Kubernetes clusters. Containerized workloads with Docker and Singularity for reproducible execution across heterogeneous environments. Conducted comprehensive performance benchmarking across NVIDIA (A100/H100/H200), AMD (MI210/MI300X), and Cerebras CS-3 architectures, analyzing latency, throughput, and memory efficiency.',
      tags: ['PyTorch', 'Distributed Systems', 'Slurm', 'Kubernetes', 'Docker'],
      link: '/docs/introduction'
    },
    {
      title: 'Scholar Sense - RAG System',
      description: 'Built a production-grade Retrieval-Augmented Generation system using Python, Flask, and ChromaDB. Implemented efficient NLP pipelines for document embedding, vector indexing, and LLM-based inference. Deployed with containerized microservices architecture using Docker and Kubernetes for scalability and high availability. Optimized retrieval performance for large document corpora with distributed vector search.',
      tags: ['Python', 'RAG', 'ChromaDB', 'Flask', 'Kubernetes'],
      link: '/docs/introduction'
    },
    {
      title: 'Arka Linux GUI - Open Source OS',
      description: 'Led development and maintenance of a complete Linux distribution serving 500,000+ users worldwide. Built core system tooling and GUI components using C++, Qt/QML, Python, and Bash. Designed modular build and release pipelines with CMake and Arch Build System. Engineered robust system services and package management infrastructure. Extensive testing on bare-metal and virtualized environments (KVM/QEMU). Managed community contributions and release cycles.',
      tags: ['C++', 'Qt/QML', 'Python', 'Systems Engineering', 'Open Source'],
      link: ALG_URL,
      external: true
    },
    {
      title: 'oschat - Real-Time Communication Platform',
      description: 'Developed a high-performance chat application supporting 1,000+ concurrent WebSocket connections with sub-100ms latency. Built with TypeScript, Next.js, Node.js, and Express. Implemented real-time bidirectional communication using Socket.IO. Deployed on GCP with Kubernetes orchestration for horizontal scaling. Integrated OAuth2 authentication for secure user management. Optimized connection pooling and message delivery for production workloads.',
      tags: ['TypeScript', 'Next.js', 'WebSocket', 'Kubernetes', 'GCP'],
      link: '/docs/introduction'
    }
  ];

  return (
    <div className={clsx('padding-vert--xl', styles.section)}>
      <div className="container">
        <h2 className="text--center margin-bottom--xl">
          <span className="badge badge--primary">Featured Projects</span>
        </h2>
        <div className="row">
          {projects.map((project, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <div className={styles.projectCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
                {project.external ? (
                  <a href={project.link} className="button button--secondary button--sm" target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                ) : (
                  <Link to={project.link} className="button button--secondary button--sm">
                    Learn More →
                  </Link>
                )}
              </div>
            </div>
          ))}
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
    <div className={clsx('padding-vert--xl', styles.sectionAlt)}>
      <div className="container">
        <h2 className="text--center margin-bottom--lg">
          <span className="badge badge--secondary">Beyond Engineering</span>
        </h2>
        <div className={styles.drummerIntro}>
          <p>
            Outside of building distributed systems and optimizing ML pipelines,
            I'm a performing drummer with 30+ live shows across indoor venues and arenas.
            Music brings the same creative problem-solving and rhythm that drives great engineering.
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
