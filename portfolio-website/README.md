# Portfolio Website - Ashika Jaiswal

A modern, responsive portfolio website built with React.js showcasing professional experience, projects, and skills as a Java Backend Developer.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build



📁 Project Structure
text
portfolio-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # ✅ COMPLETED - Navigation bar with mobile menu
│   │   ├── Header.css
│   │   ├── Hero.jsx         # 🔄 NEXT - Landing section with intro
│   │   ├── Hero.css
│   │   ├── About.jsx        # ⏳ TODO - About/Summary section
│   │   ├── About.css
│   │   ├── Skills.jsx       # ⏳ TODO - Skills showcase
│   │   ├── Skills.css
│   │   ├── Experience.jsx   # ⏳ TODO - Work experience timeline
│   │   ├── Experience.css
│   │   ├── Projects.jsx     # ⏳ TODO - Projects showcase with cards
│   │   ├── Projects.css
│   │   ├── Education.jsx    # ⏳ TODO - Education section
│   │   ├── Education.css
│   │   ├── Contact.jsx      # ⏳ TODO - Contact form & social links
│   │   ├── Contact.css
│   │   └── Footer.jsx       # ⏳ TODO - Footer with copyright
│   ├── data/
│   │   └── portfolioData.js # ✅ COMPLETED - All portfolio content
│   ├── styles/
│   │   └── App.css          # Main component styles
│   ├── assets/              # Images, icons, resume PDF
│   │   ├── images/
│   │   └── resume.pdf
│   ├── App.js               # Main App component
│   ├── index.css            # ✅ COMPLETED - Global styles & CSS variables
│   └── index.js
├── package.json
└── README.md
🎨 Design System
Color Palette
css
--primary-color: #2563eb;      /* Blue - main brand color */
--secondary-color: #1e40af;    /* Dark blue - hover states */
--accent-color: #3b82f6;       /* Light blue - highlights */
--text-primary: #1f2937;       /* Dark gray - main text */
--text-secondary: #6b7280;     /* Medium gray - secondary text */
--background: #ffffff;         /* White - main background */
--background-alt: #f9fafb;     /* Light gray - alternate sections */
--border-color: #e5e7eb;       /* Light gray - borders */
Typography
Font Family: 'Inter', system fonts
Headings: Bold (700)
Body: Regular (400-500)
Spacing
Section padding: 80px (desktop) / 60px (mobile)
Container max-width: 1200px
Gap between elements: 1rem, 1.5rem, 2rem
Breakpoints
css
/* Mobile First Approach */
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
📋 Completed Components
✅ Step 1-3: Project Setup & Global Styles
Created React app with necessary dependencies
Set up CSS variables for consistent theming
Implemented responsive base styles
✅ Step 4: Data Layer
File: src/data/portfolioData.js

Centralized all portfolio content
Easy to update personal information
Structured data for all sections
What's Included:

Personal info (name, contact, links)
Professional summary
Skills (categorized by technology)
Work experience (MobiKwik, CSIR-CMERI)
Projects (URL Shortener, Digital Wallet)
Education
✅ Step 5: Header Component
Features:

Fixed navigation bar with smooth scroll
Changes appearance on scroll
Fully responsive mobile menu
Smooth transitions and hover effects
Active section highlighting (to be added)
🔄 Next Steps (In Order)
Step 6: Hero/Landing Section
Components to create:

Hero.jsx & Hero.css
Features to implement:

Name and title with animated text
Professional tagline
CTA buttons (Download Resume, Contact)
Social media icons
Background gradient or animation
Example Structure:

jsx
<section id="home" className="hero">
  <h1>Ashika Jaiswal</h1>
  <h2>Java Backend Developer</h2>
  <p>Spring Boot · REST APIs · Microservices</p>
  <div className="cta-buttons">
    <button>Download Resume</button>
    <button>Contact Me</button>
  </div>
  <div className="social-links">
    {/* GitHub, LinkedIn, etc. */}
  </div>
</section>
Step 7: About Section
Components: About.jsx & About.css

Professional summary
Profile image
Quick stats (experience, projects, GPA)
Step 8: Skills Section
Components: Skills.jsx & Skills.css

Skill categories with tags/chips
Possibly skill bars or icons
Grid layout for categories
Step 9: Experience Section
Components: Experience.jsx & Experience.css

Timeline layout
Company logos/icons
Expandable descriptions
Achievement metrics highlighted
Step 10: Projects Section
Components: Projects.jsx & Projects.css

Project cards with images
Technology tags
Links to GitHub/live demo
Filter by technology (optional)
Step 11: Education Section
Components: Education.jsx & Education.css

Degree cards
GPA display
Timeline format
Step 12: Contact Section
Components: Contact.jsx & Contact.css

Contact form (using EmailJS)
Social media links
Email, phone display
Location
Step 13: Footer
Components: Footer.jsx & Footer.css

Copyright notice
Quick links
Social icons
Step 14: Animations & Polish
Add Framer Motion animations
Scroll reveal effects
Smooth transitions
Loading states
Step 15: SEO & Performance
Meta tags
Open Graph tags
Performance optimization
Lazy loading images

