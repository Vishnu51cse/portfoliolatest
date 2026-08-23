import { jsPDF } from "jspdf";
import fs from "fs";

const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4"
});

// Colors
const primaryColor = [15, 23, 42]; // Dark slate
const secondaryColor = [71, 85, 105]; // Slate 600
const accentColor = [124, 58, 237]; // Purple

let y = 12;

// Header
doc.setFont("helvetica", "bold");
doc.setFontSize(19);
doc.setTextColor(...primaryColor);
doc.text("Vishnu Prasad Seenivasa Kumar", 105, y, { align: "center" });

y += 5.5;
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(...secondaryColor);
doc.text("+91-637-999-3561  |  vishnuprasad.contact@gmail.com", 105, y, { align: "center" });

y += 4.5;
doc.text("linkedin.com/in/vishnuprasad5  |  github.com/Vishnu51cse", 105, y, { align: "center" });

// Line Separator
y += 4.5;
doc.setDrawColor(226, 232, 240);
doc.setLineWidth(0.5);
doc.line(15, y, 195, y);

// Section Header Function
function addSectionHeader(title) {
  y += 5.5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...primaryColor);
  doc.text(title.toUpperCase(), 15, y);
  
  y += 1.8;
  doc.setDrawColor(124, 58, 237);
  doc.setLineWidth(0.6);
  doc.line(15, y, 195, y);
  y += 3.8;
}

// Professional Summary
addSectionHeader("Professional Summary");
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
const summaryText = "Software Developer (.NET) with 1+ year of experience in C#, ASP.NET Core, Web API, MVC, SQL Server, and ADO.NET. Experienced in developing enterprise FinTech applications, REST APIs, SQL optimization, and AWS deployment. Seeking a growth-oriented opportunity to build a successful career while contributing to organizational goals and continuously enhancing my technical skills.";
const splitSummary = doc.splitTextToSize(summaryText, 180);
doc.text(splitSummary, 15, y);
y += splitSummary.length * 3.8;

// Skills
addSectionHeader("Skills");
const skillsData = [
  { cat: "Programming", list: "C#, Java" },
  { cat: "Frontend", list: "HTML, CSS, JavaScript, React, Bootstrap, Razor Views" },
  { cat: "Backend", list: "ASP.NET Core MVC, ASP.NET CORE Web API, ADO.NET, Node.js, Express.js" },
  { cat: "Database", list: "SQL Server, MongoDB, MySQL" },
  { cat: "Tools", list: "Git, GitHub, Bitbucket, Postman, Visual Studio, SQL Workbench, AWS EC2, Swagger, Vite, Jenkins" },
  { cat: "Concepts", list: "OOPS, MVC, REST APIs, Query Optimization, Cloud Scalability, SDLC, Windows Service" }
];

skillsData.forEach(item => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.2);
  doc.setTextColor(...primaryColor);
  doc.text(`•  ${item.cat}: `, 15, y);
  
  const catWidth = doc.getTextWidth(`•  ${item.cat}: `);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  doc.text(item.list, 15 + catWidth, y);
  y += 3.8;
});

// Work Experience
addSectionHeader("Work Experience");
doc.setFont("helvetica", "bold");
doc.setFontSize(9.2);
doc.setTextColor(...primaryColor);
doc.text("Software Engineer", 15, y);
doc.text("June 2025 – Present", 195, y, { align: "right" });

y += 3.8;
doc.setFont("helvetica", "italic");
doc.setFontSize(8.5);
doc.setTextColor(...secondaryColor);
doc.text("Novac Technology Solutions, Chennai", 15, y);

y += 4;
doc.setFont("helvetica", "bold");
doc.setFontSize(8.2);
doc.setTextColor(...primaryColor);
doc.text("Projects:", 15, y);
y += 3.5;

doc.setFont("helvetica", "normal");
doc.setFontSize(8.2);
doc.setTextColor(51, 65, 85);
doc.text("–  Loan Management System (LMS) is a FinTech application for managing loan-related operations.", 18, y);
y += 3.5;
doc.text("–  Supports business processes including asset management, loan expenses, logistics, and dealer operations.", 18, y);
y += 4;

doc.setFont("helvetica", "bold");
doc.setFontSize(8.2);
doc.setTextColor(...primaryColor);
doc.text("Responsibilities:", 15, y);
y += 3.5;

const expBullets = [
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
];

doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.setTextColor(51, 65, 85);
expBullets.forEach(bullet => {
  const bulletText = `–  ${bullet}`;
  const splitBullet = doc.splitTextToSize(bulletText, 175);
  doc.text(splitBullet, 18, y);
  y += splitBullet.length * 3.4;
});

// Academic Projects
addSectionHeader("Academic Projects");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.8);
doc.setTextColor(...primaryColor);
doc.text("Ensemble Based Approach for Bitcoin Price Prediction", 15, y);
doc.text("IEEE Xplore, 2025", 195, y, { align: "right" });
y += 3.8;

doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.setTextColor(51, 65, 85);

const academicBullets = [
  "Designed and trained an ensemble deep learning model combining LSTM and GRU networks to forecast Bitcoin prices, achieving an R-squared score of 0.986.",
  "Preprocessed historical price data, engineered time-series features, and evaluated model performance to improve forecasting accuracy.",
  "Published findings as an IEEE research paper in IEEE Xplore, 2025. (DOI: 10.1109/ICCCI64711.2025.11086125)"
];

academicBullets.forEach(bullet => {
  const bulletText = `•  ${bullet}`;
  const splitBullet = doc.splitTextToSize(bulletText, 175);
  doc.text(splitBullet, 15, y);
  y += splitBullet.length * 3.4;
});

// Certifications
addSectionHeader("Certifications");
doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.setTextColor(51, 65, 85);

doc.setFont("helvetica", "bold");
doc.text("•  Foundational C# with Microsoft", 15, y);
doc.setFont("helvetica", "normal");
doc.text("Feb 2026 – Mar 2026", 195, y, { align: "right" });
y += 3.8;

doc.setFont("helvetica", "bold");
doc.text("•  Online MERN Stack Internship", 15, y);
doc.setFont("helvetica", "normal");
doc.text("Jul 2024 – Sep 2024", 195, y, { align: "right" });
y += 4;

// Education
addSectionHeader("Education");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.8);
doc.setTextColor(...primaryColor);
doc.text("Bachelor of Engineering in Computer Science", 15, y);
doc.text("2021 – 2025", 195, y, { align: "right" });
y += 3.8;

doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.setTextColor(51, 65, 85);
doc.text("Kongu Engineering College", 15, y);
doc.setFont("helvetica", "bold");
doc.text("CGPA: 7.44", 195, y, { align: "right" });

// Output PDF to public directory
const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
fs.writeFileSync("public/Vishnu_Prasad_Resume.pdf", pdfBuffer);
console.log("PDF updated successfully at public/Vishnu_Prasad_Resume.pdf");
