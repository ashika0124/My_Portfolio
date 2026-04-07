import React from 'react';
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaAward } from 'react-icons/fa';
import './About.css';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { summary } = portfolioData;

  const stats = [
    {
      icon: <FaBriefcase />,
      value: '2+',
      label: 'Internships',
      color: '#3b82f6'
    },
    {
      icon: <FaProjectDiagram />,
      value: '10+',
      label: 'Projects',
      color: '#8b5cf6'
    },
    {
      icon: <FaGraduationCap />,
      value: '8.2',
      label: 'CGPA',
      color: '#ec4899'
    },
    {
      icon: <FaAward />,
      value: '300+',
      label: 'Problems Solved',
      color: '#10b981'
    }
  ];

  const highlights = [
    {
      title: 'Backend Development',
      description: 'Expertise in Java, Spring Boot, and building scalable REST APIs with microservices architecture.'
    },
    {
      title: 'Database Optimization',
      description: 'Skilled in MySQL query optimization, achieving 58% latency reduction using EXPLAIN plans and indexing.'
    },
    {
      title: 'Production Experience',
      description: 'Worked on fintech applications at MobiKwik, handling 10,000+ daily transactions with high reliability.'
    },
    {
      title: 'DevOps & Cloud',
      description: 'Proficient in Docker containerization, CI/CD with GitHub Actions, and AWS EC2 deployments.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate Backend Developer building robust and scalable solutions
          </p>
        </div>

        <div className="about-content">
          {/* Left Side - Summary */}
          <div className="about-text">
            <div className="summary-card">
              <h3>Who I Am</h3>
              <p className="summary-text">{summary}</p>
              
              <div className="about-highlights">
                <h4>What I Bring</h4>
                <div className="highlights-grid">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <div className="highlight-icon">✓</div>
                      <div>
                        <h5>{highlight.title}</h5>
                        <p>{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-card"
                  style={{ '--stat-color': stat.color }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Additional Info Box */}
            <div className="info-box">
              <h4>Currently Seeking</h4>
              <p>SDE-1 / Java Backend Developer roles where I can contribute to building scalable systems and grow with cutting-edge technologies.</p>
              
              <div className="availability">
                <span className="status-dot"></span>
                <span>Available for immediate joining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;