import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { SiPython, SiCplusplus, SiDocker, SiKubernetes, SiAnsible, SiLinux, SiGnubash, SiRedhat } from 'react-icons/si';
import { FaCogs, FaBolt, FaChartBar, FaServer, FaMicrochip, FaNetworkWired, FaDatabase, FaTerminal, FaGraduationCap, FaCertificate } from 'react-icons/fa';

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
              <span>🛠️ Infrastructure Engineer</span>
            </div>
            <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              Specializing in <span className={styles.highlight}>HPC</span>, <span className={styles.highlight}>AI/ML Infrastructure</span>, and <span className={styles.highlight}>Linux Systems</span>
            </p>
            <p className={styles.heroDescription}>
              MSc in High Performance Computing, EPCC, University of Edinburgh • Red Hat Certified System Administrator (RHCSA) • Slurm & Kubernetes • InfiniBand/RDMA & Lustre
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500K+</div>
                <div className={styles.statLabel}>Project Users Worldwide</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>6</div>
                <div className={styles.statLabel}>HPC Clusters worked on</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Years Open Source Experience</div>
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
                src={useBaseUrl('img/acf.png')}
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
      category: 'HPC & AI/ML Infrastructure',
      items: [
        { name: 'Slurm (QoS, Gres, Fairshare)', icon: <FaChartBar /> },
        { name: 'Kubernetes / Kueue', icon: <SiKubernetes /> },
        { name: 'MPI / OpenMP', icon: <FaBolt /> },
        { name: 'Lustre / GPFS', icon: <FaDatabase /> },
        { name: 'NVIDIA, AMD & Cerebras Accelerators', icon: <FaMicrochip /> },
        { name: 'Base Command Manager', icon: <FaServer /> }
      ]
    },
    {
      category: 'Linux System Administration',
      items: [
        { name: 'RHEL 9, Ubuntu, Arch Linux', icon: <SiRedhat /> },
        { name: 'systemd, SELinux', icon: <SiLinux /> },
        { name: 'LVM, GRUB, UEFI/GPT', icon: <FaCogs /> },
        { name: 'InfiniBand (RDMA, RoCE)', icon: <FaNetworkWired /> },
        { name: 'TCP/IP, DNS, DHCP, PXE', icon: <FaServer /> },
        { name: 'Troubleshooting: dmesg, strace, journalctl', icon: <FaTerminal /> }
      ]
    },
    {
      category: 'Development & Automation',
      items: [
        { name: 'C, C++17 (STL)', icon: <SiCplusplus /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'Bash Shell Scripting', icon: <SiGnubash /> },
        { name: 'Ansible', icon: <SiAnsible /> },
        { name: 'Docker,  Singularity, Podman', icon: <SiDocker /> },
        { name: 'CI/CD (GitHub Actions, GitLab CI)', icon: <FaBolt /> }
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
              <span className="badge badge--secondary">Operating HPC & AI Infrastructure at Scale</span>
            </h2>
            {/* <h3 className={styles.sectionTitle}>
              HPC & AI Infrastructure at Scale
            </h3> */}
            <p className={styles.sectionTagline}>
                Red Hat Certified System Administrator with an MSc in High Performance Computing from EPCC,
                University of Edinburgh. Focused on administering Linux HPC and GPU clusters — job scheduling,
                high-speed interconnects, parallel filesystems, and the operational tooling that keeps
                large-scale AI/ML workloads running.</p>
            <div className={styles.expertiseSection}>
              <h4>Core Expertise</h4>
              <ul>
                <li><strong>Cluster Operations:</strong> Slurm, Kubernetes GPU scheduling, Lmod, MPI/OpenMP workloads, Base Command Manager</li>
                <li><strong>Linux Engineering:</strong> RHEL 9, systemd, SELinux, LVM, kernel modules, root cause analysis</li>
                <li><strong>Systems Programming:</strong> C, C++17, and Python for automation and operational tooling</li>
                <li><strong>Open Source:</strong> Active contributor in the Linux ecosystem since 2020; maintainer of a distribution serving 500K+ users</li>
              </ul>
            </div>
            <div className={styles.hpcExperience}>
              <h4>HPC & Accelerator Infrastructure</h4>
              <p>
                Hands-on administration and operations across world-class supercomputing clusters:
                <strong> TeamEPCC H100 cluster, ARCHER2, Cirrus, PSC Bridges-2, DKRZ Levante, and the EIDF Kubernetes/Kueue GPU cluster</strong>.
              </p>
              <p>
                Practical benchmarking and optimization experience across diverse hardware accelerators including
                <strong> NVIDIA A100, H100, H200, AMD Instinct MI210, MI300X, and Cerebras CS-3</strong>.
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

function CredentialsSection() {
  const credentials = [
    {
      icon: <FaGraduationCap />,
      title: 'MSc, High Performance Computing',
      issuer: 'EPCC, University of Edinburgh',
      detail: 'Parallel programming (MPI, OpenMP), performance optimization, HPC architectures, and large-scale systems — at one of Europe’s leading supercomputing centres.',
    },
    {
      icon: <FaCertificate />,
      title: 'Red Hat Certified System Administrator (RHCSA)',
      issuer: 'Red Hat',
      detail: 'Package management (dnf/rpm), SELinux & firewalld, Podman containers, users & groups, storage (LVM, NFS, XFS, EXT4), networking, systemd, kernel modules.',
    },
    {
      icon: <FaCertificate />,
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'The Linux Foundation — in progress',
      detail: 'kubeadm, CRDs, cluster setup, networking, Ingress, Helm, Kustomize, storage (PV, PVCs), RBAC, troubleshooting.',
    },
    {
      icon: <FaCertificate />,
      title: 'NVIDIA Certified Professional — AI Operations (NCP-AIOL)',
      issuer: 'NVIDIA — in progress',
      detail: 'Base Command Manager, Slurm, Kubernetes/Kueue, InfiniBand, run:ai, MIG, GPU scheduling.',
    },
  ];

  return (
    <div className={clsx('padding-vert--xl', styles.section)}>
      <div className="container">
        <h2 className="text--center margin-bottom--xl">
          <span className="badge badge--primary">Education & Certifications</span>
        </h2>
        <div className="row">
          {credentials.map((cred, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <div className={styles.skillCard}>
                <h3><span className={styles.skillIcon}>{cred.icon}</span> {cred.title}</h3>
                <p><strong>{cred.issuer}</strong></p>
                <p>{cred.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: 'LLM LoRA Fine-Tuning & Performance Optimization',
      description: 'Distributed LoRA fine-tuning pipelines for large language models, optimized for performance across heterogeneous accelerator clusters. Focused on scalable training, reproducibility, and benchmarking across GPU and wafer-scale systems.',
      tags: ['PyTorch', 'Distributed Systems', 'Slurm', 'Kubernetes', 'Docker'],
      link: '/docs/introduction'
    },
    {
      title: 'Arka Linux GUI - Open Source OS',
      description: 'Open-source Linux operating system and GUI stack used by 500,000+ users globally as a daily driver. Focused on system reliability, modular build pipelines, and long-term maintainability across diverse hardware. Features a vibrant community on our support platforms.',
      tags: ['C++', 'Qt/QML', 'Python', 'Systems Engineering', 'Open Source'],
      link: ALG_URL,
      external: true
    },
    {
      title: 'Scholar Sense - RAG System',
      description: 'Production-grade Retrieval-Augmented Generation (RAG) system for large-scale document analysis. Built scalable NLP pipelines for embedding, indexing, and LLM-based inference using containerized microservices.',
      tags: ['Python', 'RAG', 'ChromaDB', 'Flask', 'Kubernetes'],
      link: '/docs/introduction'
    },
    {
      title: 'oschat - Real-Time Communication Platform',
      description: 'High-performance real-time communication platform supporting thousands of concurrent WebSocket connections. Designed for low-latency messaging, horizontal scalability, and production cloud deployment.',
      tags: ['TypeScript', 'Next.js', 'WebSocket', 'Kubernetes', 'GCP'],
      link: '/docs/introduction'
    }
  ];

  return (
    <div className={clsx('padding-vert--xl', styles.sectionAlt)}>
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
    <div className={clsx('padding-vert--xl', styles.section)}>
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
      description={siteConfig.tagline}>
      <HeroSection />
      <SkillsSection />
      <CurrentWork />
      <CredentialsSection />
      <ProjectsSection />
      <DrummerSection />
    </Layout>
  );
}

export default Home;
