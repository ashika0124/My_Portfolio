import React from 'react';
import { 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaStar,
  FaAward,
  FaCode,
  FaTrophy
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import './Education.css';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  const achievements = [
    {
      icon: <FaTrophy />,
      title: '5-star coder',
      platform: 'HackerRank',
      description: 'Demonstrating strong problem-solving and algorithmic skills',
      color: '#00EA64'
    },
    {
      icon: <SiLeetcode />,
      title: '300+ Problems Solved',
      platform: 'LeetCode & GeeksforGeeks',
      description: 'Coding challenges across multiple platforms',
      color: '#FFA116'
    },
    {
      icon: <FaCode />,
      title: 'Competitive Programming',
      platform: 'Multiple Platforms',
      description: 'Regular participation in coding contests and challenges',
      color: '#2563eb'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle">
            Academic background and competitive programming accomplishments
          </p>
        </div>

        <div className="education-content">
          {/* Education Cards */}
          <div className="education-cards">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="education-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-header">
                  <div className="edu-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="gpa-badge">
                    <FaStar className="star-icon" />
                    <span>{edu.gpa}</span>
                  </div>
                </div>

                <div className="card-body">
                  <h3 className="degree">{edu.degree}</h3>
                  <h4 className="institution">{edu.institution}</h4>
                  
                  <div className="edu-meta">
                    <span className="duration">
                      <FaCalendarAlt />
                      {edu.duration}
                    </span>
                  </div>

                  <div className="gpa-display">
                    <div className="gpa-label">CGPA</div>
                    <div className="gpa-value">{edu.gpa}</div>
                    <div className="gpa-bar">
                      <div 
                        className="gpa-fill"
                        style={{ width: `${(parseFloat(edu.gpa) / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <h3 className="achievements-title">
              <FaAward />
              Coding Achievements
            </h3>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="achievement-card"
                  style={{ 
                    animationDelay: `${(index + 2) * 0.2}s`,
                    '--achievement-color': achievement.color 
                  }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h4>{achievement.title}</h4>
                  <p className="achievement-platform">{achievement.platform}</p>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="education-stats">
            <div className="stat-box">
              <div className="stat-number">8.2</div>
              <div className="stat-label">Overall CGPA</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">4</div>
              <div className="stat-label">Years of Study</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">5★</div>
              <div className="stat-label">HackerRank</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">300+</div>
              <div className="stat-label">Problems Solved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;