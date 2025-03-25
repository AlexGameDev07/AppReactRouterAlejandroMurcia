import React from 'react';
import { Link } from 'react-router'; // Cambié 'react-router' a 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/bootstrap">Bootstrap</Link></li>
                    <li><Link to="/calculator">Calculadora</Link></li>
                    <li><Link to="/info-card">Info Card</Link></li>
                    <li><Link to="/students-form">Formulario de estudiantes</Link></li>
                    <li><Link to="/todo-list">Todo List</Link></li>
                </ul>
            </nav>
            <p className="footer-text">© 2025 Alejandro Murcia. Ningún Izquierdo Reservado.</p>
        </footer>
    );
}

export default Footer;
