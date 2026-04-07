import React, { useState } from 'react';
import { 
  FaJava, 
  FaDatabase, 
  FaDocker, 
  FaAws, 
  FaGitAlt,
  FaReact,
  FaCode
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiPostgresql,
  SiRedis,
  SiJenkins,
  SiPostman,
  SiSwagger
} from 'react-icons/si';
import './Skills.css';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('Core Java');

  const skillIcons = {
    'Java 8+': <FaJava />,
    'Spring Boot': <SiSpringboot />,
    'MySQL': <SiMysql />,
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'Redis': <SiRedis />,
    'Docker': <FaDocker />,
    'AWS (S3, EC2)': <FaAws />,
    'Git': <FaGitAlt />,
    'GitHub': <FaGitAlt />,
    'Jenkins': <SiJenkins />,
    'Postman': <SiPostman />,
    'Swagger': <SiSwagger />,
  };

  const categoryIcons = {
    'Core Java': <FaJava />,
    'Spring Ecosystem': <SiSpringboot />,
    'Database': <FaDatabase />,
    'Testing': <FaCode />,
    'DevOps & Tools': <FaDocker />,
    'Concepts': <FaReact />
  };

  const skillLevels = {
    'Core Java': 'Expert',
    'Spring Ecosystem': 'Advanced',
    'Database': 'Advanced',
    'Testing': 'Intermediate',
    'DevOps & Tools': 'Intermediate',
    'Concepts': 'Advanced'
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build scalable applications
          </p>
        </div>

        <div className="skills-content">
          {/* Category Tabs */}
          <div className="skills-categories">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <span className="category-icon">
                  {categoryIcons[category]}
                </span>
                <span className="category-name">{category}</span>
                <span className="skill-level">{skillLevels[category]}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-display">
            <div className="skills-header">
              <h3>
                {categoryIcons[activeCategory]}
                {activeCategory}
              </h3>
              <span className="level-badge">{skillLevels[activeCategory]}</span>
            </div>

            <div className="skills-grid">
              {skills[activeCategory].map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-icon">
                    {skillIcons[skill] || <FaCode />}
                  </div>
                  <div className="skill-name">{skill}</div>
                </div>
              ))}
            </div>
          </div>

          {/* All Skills Overview */}
          <div className="all-skills-section">
            <h3>Complete Tech Stack</h3>
            <div className="all-skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category-card">
                  <div className="category-header">
                    <span className="category-icon-small">
                      {categoryIcons[category]}
                    </span>
                    <h4>{category}</h4>
                  </div>
                  <div className="skill-tags">
                    {skillList.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;