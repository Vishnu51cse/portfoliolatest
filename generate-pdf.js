import { jsPDF } from "jspdf";
import fs from "fs";

const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4"
});

// Colors
const darkBlue = [0, 51, 102];
const bodyColor = [51, 65, 85];
const labelColor = [71, 85, 105];

let y = 12;

// ---- Header ----
doc.setFont("helvetica", "bold");
doc.setFontSize(18);
doc.setTextColor(...darkBlue);
doc.text("Vishnu Prasad Seenivasa Kumar", 105, y, { align: "center" });

y += 5.5;
doc.setFont("helvetica", "bold");
doc.setFontSize(9.5);
doc.setTextColor(...darkBlue);
doc.text("Software Engineer | .NET Full-Stack Developer", 105, y, { align: "center" });

y += 5;
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(...labelColor);
doc.text("+91-637-999-3561  |  vishnuprasad.contact@gmail.com", 105, y, { align: "center" });

y += 4.5;
doc.text("linkedin.com/in/vishnuprasad5  |  github.com/Vishnu51cse  |  vishnuprasadportfolio.netlify.app", 105, y, { align: "center" });

// Line Separator
y += 5;
doc.setDrawColor(180, 180, 200);
doc.setLineWidth(0.4);
doc.line(15, y, 195, y);

// ---- Section Header Function ----
function addSectionHeader(title) {
  y += 6;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...darkBlue);
  doc.text(title.toUpperCase(), 15, y);
  y += 2;
  doc.setDrawColor(...darkBlue);
  doc.setLineWidth(0.5);
  doc.line(15, y, 195, y);
  y += 4;
}

// ---- Professional Summary ----
addSectionHeader("Professional Summary");
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(...bodyColor);
const summaryText = "Software Engineer with 1+ year of experience building enterprise FinTech applications in C#, ASP.NET Core and SQL Server. Reduced production errors by 90% and improved SQL performance by 20% on the Loan Management System for Shriram Finance Group. Full-stack across REST APIs, Entity Framework Core, React, AWS EC2 and Jenkins.";
const splitSummary = doc.splitTextToSize(summaryText, 180);
doc.text(splitSummary, 15, y);
y += splitSummary.length * 4;

// ---- Core Competencies ----
addSectionHeader("Core Competencies");
const skillsData = [
  { cat: "Backend", list: "C#, .NET, ASP.NET Core, ASP.NET Web Forms, Web API, LINQ, Entity Framework Core, ADO.NET, Windows Services" },
  { cat: "Frontend", list: "React, JavaScript, HTML, CSS, Bootstrap, Razor Views" },
  { cat: "Databases", list: "SQL Server (stored procedures, indexing, query optimization, T-SQL), MySQL" },
  { cat: "Cloud & DevOps", list: "AWS EC2, Jenkins, Git, GitHub, Bitbucket" },
  { cat: "Security", list: "Vulnerability Remediation, JWT Authentication, SAST (Checkmarx)" },
  { cat: "Concepts", list: "OOP, MVC, REST APIs, Dependency Injection, SDLC, Agile, Layered Architecture" },
  { cat: "Tools", list: "Postman, Swagger, Visual Studio, Jira" }
];

skillsData.forEach(item => {
  const label = `•  ${item.cat}: `;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...darkBlue);
  const labelWidth = doc.getTextWidth(label);
  doc.text(label, 15, y);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...bodyColor);
  const valueLines = doc.splitTextToSize(item.list, 180 - labelWidth);
  doc.text(valueLines[0], 15 + labelWidth, y);
  if (valueLines.length > 1) {
    for (let i = 1; i < valueLines.length; i++) {
      y += 3.8;
      doc.text(valueLines[i], 15 + labelWidth, y);
    }
  }
  y += 4;
});

// ---- Work Experience ----
addSectionHeader("Work Experience");

doc.setFont("helvetica", "bold");
doc.setFontSize(9.5);
doc.setTextColor(...darkBlue);
doc.text("Software Engineer", 15, y);
doc.text("June 2025 – Present", 195, y, { align: "right" });

y += 4;
doc.setFont("helvetica", "italic");
doc.setFontSize(8.5);
doc.setTextColor(...labelColor);
doc.text("Novac Technology Solutions, Chennai", 15, y);

y += 4.5;
doc.setFont("helvetica", "italic");
doc.setFontSize(8.2);
doc.setTextColor(...bodyColor);
doc.text("Loan Management System (LMS) – Enterprise FinTech Application for Shriram Finance Group", 15, y);
y += 4.5;

const expBullets = [
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
];

doc.setFont("helvetica", "normal");
doc.setFontSize(8.2);
doc.setTextColor(...bodyColor);
expBullets.forEach(bullet => {
  const text = `•  ${bullet}`;
  const split = doc.splitTextToSize(text, 177);
  doc.text(split, 15, y);
  y += split.length * 3.6;
});

// ---- Projects ----
addSectionHeader("Projects");

// Project 1
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.setTextColor(...darkBlue);
doc.text("Customer Contact Management System", 15, y);
doc.setFont("helvetica", "italic");
doc.setFontSize(8.2);
doc.setTextColor(...labelColor);
doc.text("React, ASP.NET Core, SQL Server, JWT", 195, y, { align: "right" });

y += 4;
doc.setFont("helvetica", "normal");
doc.setFontSize(7.8);
doc.setTextColor(0, 102, 204);
doc.text("github.com/Vishnu51cse/customer-contact-system", 15, y);

y += 4.5;
const proj1Bullets = [
  "Built a full-stack application using React, ASP.NET Core Web API, SQL Server and Entity Framework Core, with dependency injection for application services.",
  "Implemented user registration, login and JWT authentication, with REST APIs for record management and search, restricting access to each user's own records."
];

doc.setFont("helvetica", "normal");
doc.setFontSize(8.2);
doc.setTextColor(...bodyColor);
proj1Bullets.forEach(bullet => {
  const text = `•  ${bullet}`;
  const split = doc.splitTextToSize(text, 177);
  doc.text(split, 15, y);
  y += split.length * 3.6;
});

y += 2;

// Project 2
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.setTextColor(...darkBlue);
doc.text("Personal Expense Tracker System", 15, y);
doc.setFont("helvetica", "italic");
doc.setFontSize(8.2);
doc.setTextColor(...labelColor);
doc.text("ASP.NET Core MVC, SQL Server, JWT", 195, y, { align: "right" });

y += 4;
doc.setFont("helvetica", "normal");
doc.setFontSize(7.8);
doc.setTextColor(0, 102, 204);
doc.text("github.com/Vishnu51cse/personal-expense-tracker", 15, y);

y += 4.5;
const proj2Bullets = [
  "Built an expense tracking application with ASP.NET Core MVC, Razor Views and SQL Server to manage personal expenses.",
  "Integrated JWT authentication, dependency injection and Entity Framework Core, separating application logic from the presentation layer."
];

doc.setFont("helvetica", "normal");
doc.setFontSize(8.2);
doc.setTextColor(...bodyColor);
proj2Bullets.forEach(bullet => {
  const text = `•  ${bullet}`;
  const split = doc.splitTextToSize(text, 177);
  doc.text(split, 15, y);
  y += split.length * 3.6;
});

// ---- Publication ----
addSectionHeader("Publication");
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.setTextColor(...darkBlue);
doc.text("Ensemble Based Approach for Bitcoin Price Prediction", 15, y);
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(...labelColor);
doc.text("IEEE Xplore, 2025", 195, y, { align: "right" });

y += 4.5;
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(...bodyColor);
const pubText = "LSTM and GRU ensemble model for Bitcoin price forecasting (R-squared 0.986). DOI: 10.1109/ICCCI64711.2025.11086125";
const splitPub = doc.splitTextToSize(pubText, 180);
doc.text(splitPub, 15, y);
y += splitPub.length * 4;

// ---- Education ----
addSectionHeader("Education");
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.setTextColor(...darkBlue);
doc.text("Kongu Engineering College", 15, y);
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(...labelColor);
doc.text("2021 – 2025", 195, y, { align: "right" });

y += 4.5;
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(...bodyColor);
doc.text("Bachelor of Engineering in Computer Science", 15, y);

// ---- Output PDF ----
const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
fs.writeFileSync("public/Vishnu_Prasad_Resume.pdf", pdfBuffer);
console.log("✅ PDF generated successfully at public/Vishnu_Prasad_Resume.pdf");
