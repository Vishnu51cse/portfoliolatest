export const personalInfo = {
  name: "Vishnu Prasad Seenivasa Kumar",
  shortName: "Vishnu Prasad",
  title: "Software Engineer",
  roles: [
    "ASP.NET Developer",
    "React Developer",
    "Full Stack Developer",
    "SQL Server Developer"
  ],
  summary: "Software Engineer with 1 year of experience in C#, ASP.NET, and SQL Server, specializing in backend development, API development, and database management. Experienced in building scalable 3-tier applications using ADO.NET, following SDLC practices, and deploying solutions on AWS EC2 with strong focus on query optimization.",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91-637-999-3561",
  email: "vishnuprasad.contact@gmail.com",
  linkedin: "https://linkedin.com/in/vishnuprasad5",
  github: "https://github.com/Vishnu51cse",
  resumeUrl: "/Vishnu_Prasad_Resume.pdf",
};

export const stats = [
  { label: "Year Experience", value: "1+", suffix: "Year" },
  { label: "Core Technologies", value: "15+", suffix: "Techs" },
  { label: "Architecture", value: "3-Tier", suffix: "Pattern" },
  { label: "Cloud Deployment", value: "AWS EC2", suffix: "Hosted" }
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "programming", label: "Programming" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & Cloud" },
  { id: "concepts", label: "Concepts" }
];

export const skills = [
  // Programming
  { name: "C#", category: "programming", color: "#A179DC", iconName: "SiCsharp" },
  { name: "Java", category: "programming", color: "#E76F00", iconName: "FaJava" },

  // Backend
  { name: "ASP.NET MVC", category: "backend", color: "#512BD4", iconName: "SiDotnet" },
  { name: "ASP.NET Web API", category: "backend", color: "#512BD4", iconName: "SiDotnet" },
  { name: "ADO.NET", category: "backend", color: "#0078D4", iconName: "SiMicrosoft" },
  { name: "Entity Framework", category: "backend", color: "#512BD4", iconName: "SiDotnet" },
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

  // Concepts
  { name: "3-Tier Architecture", category: "concepts", color: "#3B82F6", iconName: "FaLayerGroup" },
  { name: "OOPS", category: "concepts", color: "#7C3AED", iconName: "FaCube" },
  { name: "MVC", category: "concepts", color: "#06B6D4", iconName: "FaSitemap" },
  { name: "REST APIs", category: "concepts", color: "#10B981", iconName: "FaExchangeAlt" },
  { name: "Query Optimization", category: "concepts", color: "#F59E0B", iconName: "FaTachometerAlt" },
  { name: "Cloud Scalability", category: "concepts", color: "#6366F1", iconName: "FaCloud" },
  { name: "SDLC", category: "concepts", color: "#EC4899", iconName: "FaTasks" }
];

export const experienceData = [
  {
    company: "Novac Technology Solutions",
    role: "Software Engineer",
    period: "June 2025 – Present",
    location: "Chennai, India",
    type: "Full-Time",
    description: "Designing, building, and maintaining enterprise Loan Management Systems (LMS) with 3-tier architecture, C#, ASP.NET Core, and optimized SQL Server backends.",
    responsibilities: [
      "Designed and maintained Loan Management System (LMS) using C# and 3-tier architecture.",
      "Implemented modules for loan approval, document verification, and asset management.",
      "Optimized SQL stored procedures by 20% through indexing and query tuning.",
      "Established new REST API endpoints using ASP.NET Core Web API and Entity Framework Core.",
      "Developed user interfaces using ASP.NET Core MVC and Razor Views.",
      "Debugged and resolved production issues, reducing system errors by 30%.",
      "Implemented JavaScript validations to improve data accuracy and reduce input errors.",
      "Worked on data migration between different systems using SQL stored procedures.",
      "Collaborated in Agile environment using Jira for task tracking and Git/Bitbucket for version control.",
      "Hosted LMS on AWS EC2 using separate instances for C# and SQL Server."
    ],
    techStack: ["C#", "ASP.NET Core Web API", "ASP.NET MVC", "Entity Framework Core", "SQL Server", "Razor Views", "JavaScript", "AWS EC2", "Jira", "Git", "Bitbucket"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Event Management System",
    subtitle: "Enterprise Booking & Service Management Application",
    technologies: ["C#", "SQL Server", "ADO.NET", "3-Tier Architecture"],
    description: "Developed a scalable event management system enabling booking and service management workflows. Integrated SQL Server database using ADO.NET for authentication and data management.",
    highlights: [
      "Built multi-layer 3-Tier architecture separating UI, Data Access, and Business Logic.",
      "Implemented secure authentication and role-based authorization for booking services.",
      "Optimized database queries for fast event search, booking reservations, and real-time scheduling.",
      "Integrated SQL Server database using ADO.NET for high-throughput authentication and data management."
    ],
    gradient: "from-purple-600/30 via-blue-600/20 to-transparent",
    iconColor: "#7C3AED",
    github: "https://github.com/Vishnu51cse"
  },
  {
    id: 2,
    title: "Contact Management System",
    subtitle: "Full-Stack MERN Web Application",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    description: "Developed REST APIs and integrated frontend with backend services. Implemented features for create, update, delete, and search operations.",
    highlights: [
      "Designed interactive React UI featuring search, contact filtering, and dynamic forms.",
      "Created robust REST APIs with Express.js and Node.js for managing contact databases.",
      "Implemented features for full CRUD (create, update, delete, and search) operations.",
      "Integrated MongoDB database with backend service API endpoints."
    ],
    gradient: "from-cyan-600/30 via-teal-600/20 to-transparent",
    iconColor: "#06B6D4",
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
