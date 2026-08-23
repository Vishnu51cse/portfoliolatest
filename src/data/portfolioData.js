export const personalInfo = {
  name: "Vishnu Prasad Seenivasa Kumar",
  shortName: "Vishnu Prasad",
  title: "Software Developer (.NET)",
  roles: [
    "ASP.NET Core Developer",
    "Full Stack .NET Developer",
    "SQL Server Specialist",
    "React & Web API Developer"
  ],
  summary: "Software Developer (.NET) with 1+ year of experience in C#, ASP.NET Core, Web API, MVC, SQL Server, and ADO.NET. Experienced in developing enterprise FinTech applications, REST APIs, SQL optimization, and AWS deployment. Seeking a growth-oriented opportunity to build a successful career while contributing to organizational goals and continuously enhancing my technical skills.",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91-637-999-3561",
  email: "vishnuprasad.contact@gmail.com",
  linkedin: "https://linkedin.com/in/vishnuprasad5",
  github: "https://github.com/Vishnu51cse",
  resumeUrl: "/Vishnu_Prasad_Resume.pdf",
};

export const stats = [
  { label: "Year Experience", value: "1+", suffix: "Year" },
  { label: "Core Database", value: "SQL Server", suffix: "Expertise" },
  { label: "Architecture", value: "3-Tier", suffix: "Pattern" },
  { label: "Cloud Deployment", value: "AWS EC2", suffix: "Hosted" }
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "programming", label: "Programming" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & CI/CD" },
  { id: "concepts", label: "Concepts" }
];

export const skills = [
  // Programming
  { name: "C#", category: "programming", color: "#A179DC", iconName: "SiCsharp" },
  { name: "Java", category: "programming", color: "#E76F00", iconName: "FaJava" },

  // Backend
  { name: "ASP.NET Core MVC", category: "backend", color: "#512BD4", iconName: "SiDotnet" },
  { name: "ASP.NET Core Web API", category: "backend", color: "#512BD4", iconName: "SiDotnet" },
  { name: "ADO.NET", category: "backend", color: "#0078D4", iconName: "SiMicrosoft" },
  { name: "Node.js", category: "backend", color: "#339933", iconName: "FaNodeJs" },
  { name: "Express.js", category: "backend", color: "#000000", iconName: "SiExpress" },

  // Frontend
  { name: "HTML", category: "frontend", color: "#E34F26", iconName: "FaHtml5" },
  { name: "CSS", category: "frontend", color: "#1572B6", iconName: "FaCss3Alt" },
  { name: "JavaScript", category: "frontend", color: "#F7DF1E", iconName: "FaJsSquare" },
  { name: "React", category: "frontend", color: "#61DAFB", iconName: "FaReact" },
  { name: "Bootstrap", category: "frontend", color: "#7952B3", iconName: "FaBootstrap" },
  { name: "Razor Views", category: "frontend", color: "#512BD4", iconName: "SiDotnet" },

  // Database
  { name: "SQL Server", category: "database", color: "#CC292B", iconName: "SiMicrosoftsqlserver" },
  { name: "MongoDB", category: "database", color: "#47A248", iconName: "SiMongodb" },
  { name: "MySQL", category: "database", color: "#4479A1", iconName: "SiMysql" },

  // Tools
  { name: "Git", category: "tools", color: "#F05032", iconName: "FaGitAlt" },
  { name: "GitHub", category: "tools", color: "#181717", iconName: "FaGithub" },
  { name: "Bitbucket", category: "tools", color: "#0052CC", iconName: "FaBitbucket" },
  { name: "Postman", category: "tools", color: "#FF6C37", iconName: "SiPostman" },
  { name: "Visual Studio", category: "tools", color: "#5C2D91", iconName: "SiVisualstudio" },
  { name: "SQL Workbench", category: "tools", color: "#4479A1", iconName: "SiMysql" },
  { name: "AWS EC2", category: "tools", color: "#FF9900", iconName: "FaAws" },
  { name: "Swagger", category: "tools", color: "#85EA2D", iconName: "SiSwagger" },
  { name: "Vite", category: "tools", color: "#646CFF", iconName: "SiVite" },
  { name: "Jenkins", category: "tools", color: "#D24939", iconName: "SiJenkins" },

  // Concepts
  { name: "OOPS", category: "concepts", color: "#7C3AED", iconName: "FaCube" },
  { name: "MVC", category: "concepts", color: "#06B6D4", iconName: "FaSitemap" },
  { name: "REST APIs", category: "concepts", color: "#10B981", iconName: "FaExchangeAlt" },
  { name: "Query Optimization", category: "concepts", color: "#F59E0B", iconName: "FaTachometerAlt" },
  { name: "Cloud Scalability", category: "concepts", color: "#6366F1", iconName: "FaCloud" },
  { name: "SDLC", category: "concepts", color: "#EC4899", iconName: "FaTasks" },
  { name: "Windows Service", category: "concepts", color: "#0078D4", iconName: "FaCogs" }
];

export const experienceData = [
  {
    company: "Novac Technology Solutions",
    role: "Software Engineer",
    period: "June 2025 – Present",
    location: "Chennai, India",
    type: "Full-Time",
    projectName: "Loan Management System (LMS)",
    projectDescription: "A FinTech enterprise application for managing loan-related operations, supporting core business processes including asset management, loan expenses, logistics, and dealer operations.",
    description: "Developing and maintaining enterprise FinTech solutions using 3-tier architecture, C#, ASP.NET Core, REST APIs, SQL Server, and Jenkins CI/CD deployment pipelines.",
    responsibilities: [
      "Collaborated with Shriram Finance group to deliver solutions aligned with business requirements.",
      "Optimized SQL stored procedures by 20% through indexing and query tuning.",
      "Established new REST API endpoints using ASP.NET Core Web API.",
      "Developed user interfaces using ASP.NET Core MVC and Razor Views.",
      "Debugged and resolved production issues, reducing system errors by 30%.",
      "Implemented JavaScript validations to improve data accuracy and reduce input errors.",
      "Worked on data migration between different systems using SQL stored procedures.",
      "Collaborated in Agile environment using Jira for task tracking and Git/Bitbucket for version control.",
      "Hosted LMS on AWS EC2 using separate instances for C# and SQL Server.",
      "Developed Windows Services to trigger automated email notifications to clients and source branches.",
      "Performed unit tests and code coverage activities following development to ensure code quality.",
      "Merged code changes and triggered environment builds using Jenkins as part of the deployment process.",
      "Resolved application vulnerabilities identified through security assessment reports."
    ],
    techStack: ["C#", "ASP.NET Core Web API", "ASP.NET Core MVC", "SQL Server", "Windows Services", "Jenkins CI/CD", "Razor Views", "JavaScript", "AWS EC2", "Jira", "Git", "Bitbucket", "Unit Testing", "Security Assessment"]
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
    summary: "Designed and trained an ensemble deep learning model combining LSTM and GRU networks to forecast Bitcoin prices, achieving an R-squared score of 0.986. Preprocessed historical price data, engineered time-series features, and evaluated model performance to improve forecasting accuracy.",
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
    title: "Loan Management System (LMS)",
    subtitle: "Enterprise FinTech Application",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Windows Services", "AWS EC2", "Jenkins"],
    description: "FinTech application for managing loan-related operations, supporting business processes including asset management, loan expenses, logistics, and dealer operations.",
    highlights: [
      "Collaborated with Shriram Finance group to deliver solutions aligned with business requirements.",
      "Optimized SQL stored procedures by 20% through indexing and query tuning.",
      "Developed Windows Services for automated email notifications to clients and source branches.",
      "Merged code changes and triggered environment builds using Jenkins CI/CD deployment process."
    ],
    gradient: "from-purple-600/30 via-blue-600/20 to-transparent",
    iconColor: "#7C3AED",
    github: "https://github.com/Vishnu51cse"
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

export const certificationsData = [
  {
    title: "Foundational C# with Microsoft",
    issuer: "Microsoft / FreeCodeCamp",
    date: "Feb 2026 – Mar 2026",
    badgeColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    icon: "SiMicrosoft"
  },
  {
    title: "Online MERN Stack Internship",
    issuer: "Professional Web Development Program",
    date: "Jul 2024 – Sep 2024",
    badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    icon: "FaReact"
  }
];
