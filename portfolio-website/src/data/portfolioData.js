export const portfolioData = {
  personal: {
    name: "Ashika Jaiswal",
    title: "Java Backend Developer",
    tagline: "Spring Boot · REST APIs · Microservices · 8.2 CGPA",
    location: "Gurugram, India",
    phone: "9830348499",
    email: "ashika8482@gmail.com",
    linkedin: "linkedin.com/in/ashika0124",
    github: "github.com/ashika0124",
    leetcode: "leetcode.com/ashika_0124",
    hackerrank: "hackerrank.com/ashika8482"
  },

  summary: "Backend Software Engineer with production experience in Java, Spring Boot, REST APIs, and Microservices at MobiKwik (fintech) and CSIR-CMERI. Skilled in MySQL optimization, API security (JWT/RBAC), CI/CD, and scalable system design. Targeting SDE-1 / Java Backend Developer roles.",

  skills: {
    "Core Java": ["Java 8+", "OOP", "Collections", "Multithreading", "Exception Handling", "Streams", "Lambdas"],
    "Spring Ecosystem": ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate"],
    "Database": ["MySQL", "MongoDB", "PostgreSQL", "JDBC", "JPA", "Query Optimization"],
    "Testing": ["JUnit 5", "Mockito", "Postman", "Swagger"],
    "DevOps & Tools": ["Docker", "Jenkins", "AWS (S3, EC2)", "Maven", "Git", "GitHub", "Railway"],
    "Concepts": ["REST API", "Microservices", "RBAC", "JWT", "SOLID", "Design Patterns", "Agile", "CI/CD"]
  },

  experience: [
    {
      role: "Software Development Intern",
      company: "MobiKwik",
      location: "Gurugram, India",
      duration: "08/2025 – Present",
      description: [
        "Designed and deployed 6+ Spring Boot REST endpoints for merchant payment workflows handling 10,000+ transactions/day.",
        "Optimized 12 MySQL queries using EXPLAIN plans and composite indexes — reduced p95 latency from 450ms to 190ms (58% improvement).",
        "Wrote 80+ JUnit/Mockito tests achieving 90% code coverage; configured GitHub Actions CI pipeline cutting build time to 4 minutes.",
        "Resolved 5+ production incidents through debugging and root cause analysis."
      ]
    },
    {
      role: "Project Intern — Backend & Applied ML",
      company: "CSIR-CMERI",
      location: "Durgapur, India",
      duration: "02/2025 – 07/2025",
      description: [
        "Built Flask REST API serving Random Forest ML model for real-time crop prediction from IoT soil data; achieved F1-score of 0.92.",
        "Dockerized 3-container application stack and deployed on AWS EC2 for reliable cloud hosting.",
        "Designed modular architecture supporting easy addition of new prediction models with minimal code changes."
      ]
    }
  ],

  projects: [
    {
      title: "URL Shortener Microservice",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis"],
      duration: "03/2026",
      github: "github.com/ashika0124/url-shortener",
      description: [
        "Built URL shortening REST API using Spring Boot, handling 1,000+ req/day with Base62 encoding and MySQL persistence.",
        "Implemented Redis caching layer reducing database hits by 70%; achieved average response time under 50ms.",
        "Achieved 85% code coverage with JUnit 5 and Mockito; containerized with Docker and deployed on Railway.",
        "Secured REST APIs with Spring Security (RBAC); implemented API versioning and centralized exception handling."
      ]
    },
    {
      title: "Digital Wallet API",
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL"],
      duration: "04/2026",
      github: "github.com/ashika0124/digital-wallet",
      description: [
        "Developed secure wallet management REST API using Spring Boot with JWT authentication and RBAC.",
        "Implemented P2P money transfer with ACID-compliant transactions, handling Rs.10L+ simulated transaction volume.",
        "Built transaction history module with pagination, filtering, and sorting using Spring Data JPA Specifications.",
        "Secured 12+ API endpoints with Spring Security; documented with Swagger, achieving 100% API coverage."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech - Computer Science & Engg.",
      institution: "Durgapur Inst. of Advanced Technology and Management",
      duration: "2021-2025",
      gpa: "8.2/10"
    },
    {
      degree: "Higher Secondary Education",
      institution: "North Point Senior Secondary Boarding School",
      duration: "2020-2021",
      gpa: "9/10"
    }
  ]
};