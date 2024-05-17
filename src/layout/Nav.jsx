import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from '../images/logo.svg';
import calculationIcon from '../images/calculation.svg';
import measuringIcon from '../images/measering.svg';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="ОКНА ХАУС" className={styles.logo} />
            </div>
            <ul className={styles.navLinks}>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
            <div className={styles.buttons}>
                <Link to="/make-request" className={`${styles.button} ${styles.requestButton}`}>
                    <img src={measuringIcon} alt="Measuring" />
                    Make Request
                </Link>
                <Link to="/calculation" className={`${styles.button} ${styles.calculationButton}`}>
                    <img src={calculationIcon} alt="Calculation" />
                    Calculation
                </Link>
            </div>
        </nav>
    );
};

export default Nav;