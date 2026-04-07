import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaUser,
  FaComment
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import './Contact.css';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    // Simulate form submission (replace with actual API call or EmailJS)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({ submitted: true, submitting: false, error: false });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus({ submitted: false, submitting: false, error: false });
      }, 3000);
    }, 1500);

    // For actual email sending, use EmailJS:
    /*
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      setFormStatus({ submitted: true, submitting: false, error: false });
    } catch (error) {
      setFormStatus({ submitted: false, submitting: false, error: true });
    }
    */
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: personal.email,
      link: `mailto:${personal.email}`,
      color: '#ea4335'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: personal.phone,
      link: `tel:${personal.phone}`,
      color: '#34a853'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: personal.location,
      link: '#',
      color: '#4285f4'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      username: '@ashika0124',
      url: `https://${personal.github}`,
      color: '#333333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      username: '@ashika0124',
      url: `https://${personal.linkedin}`,
      color: '#0077b5'
    },
    {
      icon: <SiLeetcode />,
      name: 'LeetCode',
      username: '@ashika_0124',
      url: `https://${personal.leetcode}`,
      color: '#ffa116'
    },
    {
      icon: <SiHackerrank />,
      name: 'HackerRank',
      username: '@ashika8482',
      url: `https://${personal.hackerrank}`,
      color: '#00ea64'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss opportunities, projects, or just connect!
          </p>
        </div>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info-section">
            <div className="info-card">
              <h3>Let's Connect</h3>
              <p>
                I'm currently seeking <strong>SDE-1 / Java Backend Developer</strong> roles. 
                Feel free to reach out for opportunities, collaborations, or just to say hi!
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-method"
                    style={{ '--method-color': info.color }}
                  >
                    <div className="method-icon">{info.icon}</div>
                    <div className="method-details">
                      <div className="method-title">{info.title}</div>
                      <div className="method-value">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="availability-status">
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span>Available for immediate joining</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-card">
              <h3>Follow Me</h3>
              <div className="social-links-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card"
                    style={{ '--social-color': social.color }}
                  >
                    <div className="social-icon">{social.icon}</div>
                    <div className="social-details">
                      <div className="social-name">{social.name}</div>
                      <div className="social-username">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-section">
            <div className="form-card">
              <h3>Send me a message</h3>
              <p className="form-description">
                Have a question or want to work together? Fill out the form below.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FaComment />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Collaboration"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FaComment />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                {formStatus.submitted && (
                  <div className="form-message success">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {formStatus.error && (
                  <div className="form-message error">
                    ✗ Something went wrong. Please try again or email me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;