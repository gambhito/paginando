import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Upload from './pages/Upload';
import Home from './pages/Home';

function App() {
    return (
        <div className="container">
            <Router>
                <nav className="nav">
                    <div className="nav-brand">Club-Thai</div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link to="/">Galeria</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/upload">Subir</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route component={Upload} path="/upload" />
                    <Route component={Home} path="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
