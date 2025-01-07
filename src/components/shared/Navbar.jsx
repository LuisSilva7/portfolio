import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import logoImage from "../../assets/images/LS-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logoImage} alt="Logo" className={styles.logoImage} />
          </Link>
        </div>
        <button
          className={`${styles.hamburger} ${
            isMenuOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={`${styles.navLink} ${
                  location.pathname === "/" ? styles.activeLink : ""
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${styles.navLink} ${
                  location.pathname === "/projects" ? styles.activeLink : ""
                }`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`${styles.navLink} ${
                  location.pathname === "/skills" ? styles.activeLink : ""
                }`}
              >
                SKILLS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
