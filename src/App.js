import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
