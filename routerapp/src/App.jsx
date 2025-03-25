import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';

import Home from './pages/Home';
import BootstrapPage from './pages/BootstrapPage';
import Calculator from './pages/Calculator';
import InfoCard from './pages/InfoCard';
import StudentsForm from './pages/StudentsForm';
import TodoList from './pages/TodoList';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bootstrap" element={<BootstrapPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/info-card" element={<InfoCard />} />
          <Route path="/students-form" element={<StudentsForm />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
