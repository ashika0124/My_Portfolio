import React, { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaDocker,
  FaShieldAlt,
  FaChartLine
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiRedis, SiPostgresql } from 'react-icons/si';
import './Projects.css';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  // Extract all unique technologies
  const allTechnologies = new Set();
  projects.forEach(project => {
    project.technologies.forEach(tech => allTechnologies.add(tech));
  });
  const filters = ['All', ...Array.from(allTechnologies)];

  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  // Technology icons mapping
  const techIcons = {
    'Java': <FaCode />,
    'Spring Boot': <SiSpringboot />,
    'MySQL': <SiMysql />,
    'Redis': <SiRedis />,
    'PostgreSQL': <SiPostgresql />,
    'Spring Security': <FaShieldAlt />,
    'Docker': <FaDocker />,
  };

  // Project illustrations/colors
  const projectColors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications built with modern technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters">
          {filters.map((tech, index) => (
            <button
              key={index}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Illustration */}
              <div 
                className="project-image"
                style={{ background: projectColors[index % projectColors.length] }}
              >
                <div className="project-overlay">
                  <FaServer className="project-icon" />
                </div>
                <div className="project-duration">{project.duration}</div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {techIcons[tech] || <FaCode />}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <ul className="project-features">
                  {project.description.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-bullet">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Metrics/Highlights */}
                <div className="project-metrics">
                  {extractMetrics(project.description).map((metric, i) => (
                    <div key={i} className="metric-item">
                      <FaChartLine />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a 
                    href={`https://${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project btn-github"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  {/* Uncomment if you have live demos */}
                  {/* <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project btn-demo"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="github-cta">
          <div className="cta-content">
            <FaGithub className="cta-icon" />
            <div>
              <h3>Want to see more?</h3>
              <p>Check out my other projects and contributions on GitHub</p>
            </div>
          </div>
          <a 
            href="https://github.com/ashika0124"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Visit GitHub Profile
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

// Helper function to extract metrics/numbers from descriptions
const extractMetrics = (descriptions) => {
  const metrics = [];
  const metricPatterns = [
    /\d+[\+]?\s*req\/day/i,
    /\d+%\s*code coverage/i,
    /\d+%\s*improvement/i,
    /\d+\+\s*endpoints?/i,
    /response time under \d+ms/i,
    /\d+%\s*reduction/i,
    /F1-score of \d+\.\d+/i,
  ];

  descriptions.forEach(desc => {
    metricPatterns.forEach(pattern => {
      const match = desc.match(pattern);
      if (match && metrics.length < 3) {
        metrics.push(match[0]);
      }
    });
  });

  return metrics;
};

export default Projects;