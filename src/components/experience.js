import React from "react";
import SectionHeader from "./SectionHeader";

const experiences = [
    {
        company: "D Ace Academy Uk",
        role: "Fullstack Software Engineer (Contract)",
        duration: "January 2025 – present",
        location: "Remote",
        responsibilities: [
            "Designed, developed, and deployed the backend infrastructure for D Ace Academy, enabling UK-based IMGs to purchase and access online exam preparation courses.",
            "Collaborated closely with the frontend engineer to deliver a cohesive, responsive, and user-friendly web application.",
            "Spearheaded the design and implementation of a CI/CD pipeline to automate deployments and streamline the development workflow.",
            "Integrated payment processing via PayPal and Stripe, resulting in a secure, efficient, and resilient Payments API.",
            "Provisioned and configured the production environment, including DigitalOcean droplets, Nginx web servers, backend/frontend servers, and databases ensuring full system readiness.",
            "Applied Agile methodologies to improve team velocity and delivery efficiency by 90%.",
            "Conducted code reviews to enforce coding standards and ensure comprehensive test coverage.",
        ],
    },
    {
        company: "Byteworks Technology Solutions Ltd.",
        role: "Software Engineer (Full-time)",
        duration: "December 2023 – Present",
        location: "FCT, Abuja",
        responsibilities: [
            "Collaborated as part of a development team, to design and implement solutions for complex business problems using Spring Boot and microservices architecture.",
            "Contributed to the successful development of a biometric verification service for NIMC.",
            "Specifically, implemented WebAuthn integration using the Swissbit hardware device for the Expira Invoicing application, enabling secure, device-based passwordless authentication with FIDO2 technology",
            "Built and maintained interactive, secure front-end interfaces using Angular, ensuring seamless user experience and responsiveness",
            "Worked closely with cross-functional teams to define project requirements, implement innovative features, and optimize the performance and scalability of the solutions.",
            "Played a key role in enhancing user experience, driving customer engagement, and solving complex business challenges by leveraging microservices architecture principles.",
            "Improved data synchronization of NIN records by migrating structured data from PostgreSQL to MongoDB, reducing file syncing time by 35% and improving NoSQL read performance.",
            "Contributed to maintaining high-quality code through diligent testing and code review practices.",
            "Managed remote server access and deployment using SSH, performing server-side configurations, deployments, optimization and automation with shell scripting",
        ],
    },
    {
        company: "UK Nigeria Tech Hub / Dev Career",
        role: "Trainee Software Engineer",
        duration: "January 2022 – February 2023",
        location: "",
        responsibilities: [
            "Led frontend development for SettL, an escrow platform that placed in the top 3 out of over 1,500 participants in a competitive tech challenge.",
            "Coordinated effectively with engineers and project managers to ensure the efficient and timely delivery of high-impact features.",
            "Collaborated closely with designers and backend developers to maintain product consistency and enhanced security, alignment with business goals, and adherence to delivery timelines.",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <SectionHeader
                    subheader="WORK EXPERIENCE"
                    header="Experience"
                    description="A summary of my professional experience"
                    gradient="blue"
                />

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                                {index < experiences.length - 1 && <div className="timeline-line"></div>}
                            </div>

                            <div className="timeline-content">
                                <div className="experience-card">
                                    <div className="experience-header">
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <h4 className="experience-company">{exp.company}</h4>
                                        <div className="experience-meta">
                                            <span className="experience-duration">{exp.duration}</span>
                                            {exp.location && (
                                                <>
                                                    <span className="meta-separator">•</span>
                                                    <span className="experience-location">{exp.location}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <ul className="experience-responsibilities">
                                        {exp.responsibilities.map((res, i) => (
                                            <li key={i} className="responsibility-item">
                                                <span className="bullet"></span>
                                                {res}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;