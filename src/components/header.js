import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
    faBars,
    faTimes,
    faSun,
    faMoon
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo/logo.png";

const Header = ({ isDarkMode, setIsDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with ID "${sectionId}" not found.`);
    }
    setIsMenuOpen(false);
};

    const navItems = [
        { name: "About", id: "availability" },
        { name: "Experience", id: "experience" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skillset" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
    ];

    const socialLinks = [
        { href: "https://github.com/daddysboi", icon: faGithub, label: "GitHub" },
        { href: "https://linkedin.com/in/temitope-ahmed-yusuf/", icon: faLinkedin, label: "LinkedIn" },
        { href: "https://twitter.com/tweetbytems", icon: faTwitter, label: "Twitter" },
    ];

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="header-container">
                    <Link to="/" className="logo-link">
                        <div className="logo-container">
                            <img src={logo} alt="Temitope Yusuf Logo" className="logo" />
                            <span className="logo-text logo-text-full">Temitope Yusuf</span>
                            <span className="logo-text logo-text-short">Temi</span>
                        </div>
                    </Link>

                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            {navItems.map((item) => (
                                <li className="nav-item" key={item.id}>
                                    <button onClick={() => scrollToSection(item.id)} className="nav-link">
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                        </button>

                        <div className="social-icons">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label={link.label}
                                >
                                    <FontAwesomeIcon icon={link.icon} />
                                </a>
                            ))}
                        </div>

                        <button
                            className="menu-toggle"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Backdrop */}
            {isMenuOpen && (
                <div className="menu-backdrop" onClick={toggleMenu}></div>
            )}
        </>
    );
};

export default Header;