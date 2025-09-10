import React from "react";

const SectionHeader = ({ subheader, header, description, gradient = "blue" }) => {
    const gradientMap = {
        blue: "linear-gradient(90deg, #EAF7FF, #5BC2FF, #8E6CF9)",
        green: "linear-gradient(90deg, #C2E8FF, #9AF772)",
        purple: "linear-gradient(90deg, #EAF7FF, #a076cb, #740463)",
        pink: "linear-gradient(90deg, #DD5F8C, #7376FF)"
    };

    return (
        <div className="section-header">
            <div className="section-subheader">
                {subheader}
            </div>
            <h2
                className="section-title"
                style={{ background: gradientMap[gradient] }}
            >
                {header}
            </h2>
            <p className="section-description">{description}</p>
        </div>
    );
};

export default SectionHeader;