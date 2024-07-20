import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Home1 from './Home1';
import HostForm from './HostForm';
import VisitorForm from './VisitorForm';
import VisitorList from './VisitorList';
import HostList from './HostList';
import Signup from './signup';
import Login from './login';
import Login1 from './login1';
import Otp from './otp';
import './Welcome.css'; // Import your CSS file
import Navbar from './navbar';
import QRCodePage from './QRCodePage';


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Home1" element={<Home1 />} />
        <Route path="/HostForm" element={<HostForm />} />
        <Route path="/HostList" element={<HostList />} />
        <Route path="/VisitorForm" element={<VisitorForm />} />
        <Route path="/VisitorList" element={<VisitorList />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/otp/:email" element={<Otp />} />
        <Route path="/qr-code" element={<QRCodePage />} />
        
      </Routes>
    </Router>
  );
}

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="center-content">
        <h1 className="logo">Safe Stay</h1>
        <div className="button-container">
          <Link to="/login" className="button btn button-owner">Owner</Link>
          <Link to="/login1" className="button btn button-resident">Resident</Link>
          
        </div>
      </div>
    </div>
  );
};

export default App;
