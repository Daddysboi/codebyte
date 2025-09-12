import React from "react";

const SectionHeader = ({ subheader, header, description, gradient = "blue" }) => {
    const gradientMap = {
        blue: "linear-gradient(90deg, #007bff, #0056b3, #003f80)", // Darker blue
        green: "linear-gradient(90deg, #28a745, #1e7e34)", // Darker green
        purple: "linear-gradient(90deg, #6f42c1, #563d7c)", // Darker purple
        pink: "linear-gradient(90deg, #e83e8c, #ad1457)" // Darker pink
    };

    const headerStyle = {
        textAlign: "center",
        marginBottom: "2rem"
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