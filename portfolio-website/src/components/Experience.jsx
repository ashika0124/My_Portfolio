import React, { useState } from 'react';
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import './Experience.css';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  // Company logos/colors (you can replace with actual logos later)
  const companyColors = {
    'MobiKwik': '#0066CC',
    'CSIR-CMERI': '#D71E28'
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and key contributions
          </p>
        </div>

        <div className="experience-content">
          {/* Timeline */}
          <div className="timeline">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className={`timeline-item ${expandedIndex === index ? 'expanded' : ''}`}
              >
                {/* Timeline Dot */}
                <div 
                  className="timeline-dot"
                  style={{ backgroundColor: companyColors[exp.company] || '#2563eb' }}
                >
                  <FaBriefcase />
                </div>

                {/* Timeline Content */}
                <div className="timeline-content">
                  <div className="experience-card">
                    {/* Header */}
                    <div 
                      className="experience-header"
                      onClick={() => toggleExpand(index)}
                    >
                      <div className="header-left">
                        <div 
                          className="company-logo"
                          style={{ backgroundColor: companyColors[exp.company] || '#2563eb' }}
                        >
                          {exp.company.substring(0, 2)}
                        </div>
                        <div className="header-info">
                          <h3 className="role">{exp.role}</h3>
                          <h4 className="company">{exp.company}</h4>
                          <div className="meta-info">
                            <span className="location">
                              <FaMapMarkerAlt />
                              {exp.location}
                            </span>
                            <span className="duration">
                              <FaCalendarAlt />
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="expand-btn" aria-label="Toggle details">
                        {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>

                    {/* Description - Expandable */}
                    <div className={`experience-description ${expandedIndex === index ? 'show' : ''}`}>
                      <ul className="achievements-list">
                        {exp.description.map((achievement, i) => (
                          <li key={i} className="achievement-item">
                            <FaCheckCircle className="check-icon" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags/Keywords */}
                    <div className="experience-tags">
                      {extractKeywords(exp.description).map((keyword, i) => (
                        <span key={i} className="tag">{keyword}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="experience-summary">
            <div className="summary-card">
              <div className="summary-item">
                <div className="summary-number">2+</div>
                <div className="summary-label">Companies</div>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-item">
                <div className="summary-number">12+</div>
                <div className="summary-label">Months</div>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-item">
                <div className="summary-number">10K+</div>
                <div className="summary-label">Transactions/Day</div>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-item">
                <div className="summary-number">58%</div>
                <div className="summary-label">Performance Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to extract keywords from descriptions
const extractKeywords = (descriptions) => {
  const keywords = new Set();
  const techKeywords = [
    'Spring Boot', 'MySQL', 'REST', 'API', 'Docker', 'AWS', 
    'JUnit', 'Mockito', 'GitHub Actions', 'Flask', 'Redis',
    'EXPLAIN', 'CI/CD', 'EC2', 'Microservices'
  ];

  descriptions.forEach(desc => {
    techKeywords.forEach(keyword => {
      if (desc.includes(keyword)) {
        keywords.add(keyword);
      }
    });
  });

  return Array.from(keywords).slice(0, 6); // Limit to 6 tags
};

export default Experience;