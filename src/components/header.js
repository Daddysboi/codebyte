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
    faEnvelope,
    faSun,
    faMoon
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo/logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

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
        setIsDarkMode(!isDarkMode);
        // You can add theme switching logic here
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="header-container">
                    <Link to="/" className="logo-link">
                        <div className="logo-container">
                            <img src={logo} alt="Temitope Yusuf Logo" className="logo" />
                            <span className="logo-text">Temi</span>
                        </div>
                    </Link>

                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <button onClick={() => scrollToSection('banner')} className="nav-link">
                                    Home
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => scrollToSection('availability')} className="nav-link">
                                    About
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => scrollToSection('experience')} className="nav-link">
                                    Experience
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => scrollToSection('projects')} className="nav-link">
                                    Projects
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => scrollToSection('skillset')} className="nav-link">
                                    Skills
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => scrollToSection('testimonials')} className="nav-link">
                                    Testimonials
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => scrollToSection('contact')} className="nav-link">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                        </button>

                        <div className="social-icons">
                            <a
                                href="https://github.com/daddysboi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href="https://linkedin.com/in/temitope-ahmed-yusuf/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a
                                href="https://twitter.com/tweetbytems"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Twitter"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
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