import React from "react";

const ProjectCard = ({ img, href, name, tools, text }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={img} alt={name} />
                <div className="project-overlay">
                    <a href={href} target="_blank" rel="noopener noreferrer" className="project-live-demo">
                        Live Demo
                    </a>
                </div>
            </div>

            <div className="project-content">
                <h3 className="project-title">{name}</h3>
                <p className="project-description">{text}</p>

                <div className="project-tools">
                    {tools.map((toolCategory, index) => (
                        <div key={index} className="tool-category">
                            {/*<div className="tool-label">{toolCategory.key}</div>*/}
                            <div className="tool-list">
                                {toolCategory.value.filter(tool => tool.trim()).map((tool, i) => (
                                    <span key={i} className="tool-tag">{tool}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;