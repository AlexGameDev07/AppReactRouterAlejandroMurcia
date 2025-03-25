import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ padding: '1rem', textAlign: 'center' }}>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/bootstrap">Bootstrap</Link></li>
                    <li><Link to="/calculator">Calculadora</Link></li>
                    <li><Link to="/info-card">Info Card</Link></li>
                    <li><Link to="/students-form">Formulario de estudiantes</Link></li>
                    <li><Link to="/todo-list">Todo List</Link></li>
                </ul>
            </nav>
            <p style={{ marginTop: '1rem' }}>© 2025 Alejandro Murcia. Ningún Izquierdo Reservado.</p>
        </footer>
    );
}

export default Footer;
