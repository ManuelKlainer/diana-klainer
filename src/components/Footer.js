import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="App-footer">
            <div className="footer-left">
                Desarrollado por <a href="https://github.com/ManuelKlainer" target="_blank" rel="noopener noreferrer">Manuel Klainer</a>
            </div>
            <div className="footer-right">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaInstagram />
                </a>
            </div>
        </footer>
    )
}

export default Footer;