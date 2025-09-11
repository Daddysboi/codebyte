import React from "react";

const SectionHeader = ({ subheader, header, description, gradient = "blue" }) => {
    const gradientMap = {
        blue: "linear-gradient(90deg, #EAF7FF, #5BC2FF, #8E6CF9)",
        green: "linear-gradient(90deg, #C2E8FF, #9AF772)",
        purple: "linear-gradient(90deg, #EAF7FF, #a076cb, #740463)",
        pink: "linear-gradient(90deg, #DD5F8C, #7376FF)"
    };

    const headerStyle = {
        textAlign: "center",
        marginBottom: "4rem"
    };

    const subheaderStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
        color: "#5BC2FF",
        fontWeight: "500",
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontSize: "0.9rem"
    };

    const titleStyle = {
        fontSize: "2.5rem",
        marginBottom: "1rem",
        backgroundImage: gradientMap[gradient],
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block"
    };

    const descriptionStyle = {
        color: "#a0a6b6",
        maxWidth: "600px",
        margin: "0 auto",
        lineHeight: "1.6"
    };

    // Create pseudo-elements for the subheader lines
    const SubheaderWithLines = () => (
        <div style={subheaderStyle}>
            <div style={{
                height: "2px",
                width: "40px",
                background: "linear-gradient(90deg, #5BC2FF, #8E6CF9)",
                margin: "0 1rem"
            }} />
            <div>{subheader}</div>
            <div style={{
                height: "2px",
                width: "40px",
                background: "linear-gradient(90deg, #8E6CF9, #5BC2FF)",
                margin: "0 1rem"
            }} />
        </div>
    );

    return (
        <div style={headerStyle}>
            <SubheaderWithLines />
            <h2 style={titleStyle}>
                {header}
            </h2>
            <p style={descriptionStyle}>{description}</p>
        </div>
    );
};

export default SectionHeader;