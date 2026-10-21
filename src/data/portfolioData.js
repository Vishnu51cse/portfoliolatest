export const personalInfo = {
  name: "Vishnu Prasad Seenivasa Kumar",
  shortName: "Vishnu Prasad",
  title: "Software Engineer | .NET Full-Stack Developer",
  roles: [
    ".NET Full-Stack Developer",
    "ASP.NET Core Developer",
    "SQL Server Specialist",
    "React & Web API Developer"
  ],
  summary: "Software Engineer with 1+ year of experience building enterprise FinTech applications in C#, ASP.NET Core and SQL Server. Reduced production errors by 90% and improved SQL performance by 20% on the Loan Management System for Shriram Finance Group. Full-stack across REST APIs, Entity Framework Core, React, AWS EC2 and Jenkins.",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91-637-999-3561",
  email: "vishnuprasad.contact@gmail.com",
  linkedin: "https://linkedin.com/in/vishnuprasad5",
  github: "https://github.com/Vishnu51cse",
  portfolio: "https://vishnuprasadportfolio.netlify.app",
  resumeUrl: "/Vishnu_Prasad_Resume.pdf",
};

export const stats = [
  { label: "Year Experience", value: "1+", suffix: "Year" },
  { label: "Production Errors Reduced", value: "90%", suffix: "Fix Rate" },
  { label: "SQL Performance Improved", value: "20%", suffix: "Faster" },
  { label: "Vulnerabilities Fixed", value: "100+", suffix: "Secured" }
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "Cloud & DevOps" },
  { id: "security", label: "Security" },
  { id: "concepts", label: "Concepts" },
  { id: "tools", label: "Tools" }
];

export const skills = [
  // Backend
  { name: "C#", category: "backend", color: "#A179DC", iconName: "SiCsharp" },
  { name: "ASP.NET Core", category: "backend", color: "#512BD4", iconName: "SiDotnet" },
  { name: "Web API", category: "backend", color: "#512BD4", iconName: "SiDotnet" },
  { name: "Entity Framework Core", category: "backend", color: "#512BD4", iconName: "SiDotnet" },
  { name: "ASP.NET Web Forms", category: "backend", color: "#512BD4", iconName: "SiDotnet" },
  { name: "LINQ", category: "backend", color: "#A179DC", iconName: "SiCsharp" },
  { name: "ADO.NET", category: "backend", color: "#0078D4", iconName: "SiMicrosoft" },
  { name: "Windows Services", category: "backend", color: "#0078D4", iconName: "FaCogs" },

  // Frontend
  { name: "React", category: "frontend", color: "#61DAFB", iconName: "FaReact" },
  { name: "JavaScript", category: "frontend", color: "#F7DF1E", iconName: "FaJsSquare" },
  { name: "HTML", category: "frontend", color: "#E34F26", iconName: "FaHtml5" },
  { name: "CSS", category: "frontend", color: "#1572B6", iconName: "FaCss3Alt" },
  { name: "Bootstrap", category: "frontend", color: "#7952B3", iconName: "FaBootstrap" },
  { name: "Razor Views", category: "frontend", color: "#512BD4", iconName: "SiDotnet" },

  // Database
  { name: "SQL Server", category: "database", color: "#CC292B", iconName: "SiMicrosoftsqlserver" },
  { name: "MySQL", category: "database", color: "#4479A1", iconName: "SiMysql" },

  // Cloud & DevOps
  { name: "AWS EC2", category: "devops", color: "#FF9900", iconName: "FaAws" },
  { name: "Jenkins", category: "devops", color: "#D24939", iconName: "SiJenkins" },
  { name: "Git", category: "devops", color: "#F05032", iconName: "FaGitAlt" },
  { name: "GitHub", category: "devops", color: "#181717", iconName: "FaGithub" },
  { name: "Bitbucket", category: "devops", color: "#0052CC", iconName: "FaBitbucket" },

  // Security
  { name: "JWT Authentication", category: "security", color: "#D63031", iconName: "FaLock" },
  { name: "Vulnerability Remediation", category: "security", color: "#E17055", iconName: "FaShieldAlt" },
  { name: "SAST (Checkmarx)", category: "security", color: "#6C5CE7", iconName: "FaShieldAlt" },

  // Concepts
  { name: "OOP", category: "concepts", color: "#7C3AED", iconName: "FaCube" },
  { name: "MVC", category: "concepts", color: "#06B6D4", iconName: "FaSitemap" },
  { name: "REST APIs", category: "concepts", color: "#10B981", iconName: "FaExchangeAlt" },
  { name: "Dependency Injection", category: "concepts", color: "#F59E0B", iconName: "FaLayerGroup" },
  { name: "Layered Architecture", category: "concepts", color: "#6366F1", iconName: "FaLayerGroup" },
  { name: "Agile / SDLC", category: "concepts", color: "#EC4899", iconName: "FaTasks" },

  // Tools
  { name: "Postman", category: "tools", color: "#FF6C37", iconName: "SiPostman" },
  { name: "Swagger", category: "tools", color: "#85EA2D", iconName: "SiSwagger" },
  { name: "Visual Studio", category: "tools", color: "#5C2D91", iconName: "SiVisualstudio" },
  { name: "Jira", category: "tools", color: "#0052CC", iconName: "SiJira" }
];

export const experienceData = [
  {
    company: "Novac Technology Solutions",
    role: "Software Engineer",
    period: "June 2025 – Present",
    location: "Chennai, India",
    type: "Full-Time",
    projectName: "Loan Management System (LMS)",
    projectDescription: "Enterprise FinTech application for Shriram Finance Group managing loan-related operations including asset management, loan expenses, logistics, and dealer operations.",
    description: "Building enterprise FinTech solutions using 3-tier architecture, C#, ASP.NET Core, REST APIs, SQL Server, and Jenkins CI/CD deployment pipelines.",
    responsibilities: [
      "Implemented ASP.NET Core Web API endpoints using dependency injection for service and data-access layers, with Entity Framework Core for entity mapping and CRUD operations.",
      "Optimized SQL Server stored procedures through indexing and query tuning, improving performance by 20%.",
      "Diagnosed and resolved production issues, reducing system errors by 90%.",
      "Built 20+ responsive screens using ASP.NET Core MVC, Razor Views and React.",
      "Implemented ASP.NET Web Forms modules for asset management, loan expenses, logistics and dealer operations.",
      "Automated email notifications through Windows Services, handling 10,000+ emails per day for clients and source branches.",
      "Deployed and maintained the application on AWS EC2 using separate instances for the application and SQL Server.",
      "Managed Git/Bitbucket merges and used Jenkins CI/CD pipelines to build and deploy production patches in an Agile team.",
      "Remediated 100+ application vulnerabilities and SAST findings identified by Checkmarx and security assessments.",
      "Executed manual functional and regression checks across LMS modules to validate new features, verify bug fixes and identify unintended changes before production releases."
    ],
    techStack: ["C#", "ASP.NET Core Web API", "ASP.NET Core MVC", "ASP.NET Web Forms", "Entity Framework Core", "ADO.NET", "SQL Server", "React", "Razor Views", "Windows Services", "Jenkins CI/CD", "AWS EC2", "Checkmarx / SAST", "Git", "Bitbucket", "Jira", "Agile"]
  }
];

export const publicationsData = [
  {
    id: 1,
    title: "Ensemble Based Approach for Bitcoin Price Prediction",
    publisher: "IEEE Xplore",
    year: "2025",
    doi: "10.1109/ICCCI64711.2025.11086125",
    doiUrl: "https://ieeexplore.ieee.org/document/11086125/",
    summary: "LSTM and GRU ensemble deep learning model for Bitcoin price forecasting, achieving an R-squared score of 0.986.",
    highlights: [
      "Designed and trained an ensemble deep learning model combining LSTM and GRU networks to forecast Bitcoin prices, achieving an R-squared score of 0.986.",
      "Preprocessed historical price data, engineered time-series features, and evaluated model performance to improve forecasting accuracy.",
      "Published findings as an IEEE research paper in IEEE Xplore, 2025. (DOI: 10.1109/ICCCI64711.2025.11086125)"
    ],
    metrics: "R² Score: 0.986",
    technologies: ["LSTM Networks", "GRU Networks", "Ensemble Learning", "Time-Series Features", "Bitcoin Forecasting", "Python"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Customer Contact Management System",
    subtitle: "React, ASP.NET Core, SQL Server, JWT",
    technologies: ["React", "ASP.NET Core Web API", "SQL Server", "Entity Framework Core", "JWT Authentication"],
    description: "Full-stack application with secure JWT authentication, REST APIs for record management, and user-specific data access controls.",
    highlights: [
      "Built a full-stack application using React, ASP.NET Core Web API, SQL Server and Entity Framework Core, with dependency injection for application services.",
      "Implemented user registration, login and JWT authentication, with REST APIs for record management and search, restricting access to each user's own records."
    ],
    gradient: "from-purple-600/30 via-blue-600/20 to-transparent",
    iconColor: "#7C3AED",
    github: "https://github.com/Vishnu51cse/customer-contact-system"
  },
  {
    id: 2,
    title: "Personal Expense Tracker System",
    subtitle: "ASP.NET Core MVC, SQL Server, JWT",
    technologies: ["ASP.NET Core MVC", "Razor Views", "SQL Server", "Entity Framework Core", "JWT Authentication"],
    description: "Expense tracking application with JWT-secured access, dependency injection, and clean separation of application and presentation layers.",
    highlights: [
      "Built an expense tracking application with ASP.NET Core MVC, Razor Views and SQL Server to manage personal expenses.",
      "Integrated JWT authentication, dependency injection and Entity Framework Core, separating application logic from the presentation layer."
    ],
    gradient: "from-cyan-600/30 via-teal-600/20 to-transparent",
    iconColor: "#06B6D4",
    github: "https://github.com/Vishnu51cse/personal-expense-tracker"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    field: "Computer Science and Engineering",
    institution: "Kongu Engineering College",
    period: "2021 – 2025",
    gpa: "CGPA: 7.44",
    icon: "FaGraduationCap"
  }
];

export const certificationsData = [];
