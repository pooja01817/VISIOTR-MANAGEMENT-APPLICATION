import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ height: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: 'white' }}>
      <div style={{
        width: '100%',
        backgroundColor: 'hsl(193, 58%, 42%)',
        color: 'white',
        padding: '10px 0',
        display: 'flex',
        alignItems: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        position: 'relative'
      }}>
        <div onClick={toggleMenu} style={{
          cursor: 'pointer',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', margin: '2px 0' }}></div>
          <div style={{ width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', margin: '2px 0' }}></div>
          <div style={{ width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', margin: '2px 0' }}></div>
        </div>
        <div style={{ flexGrow: 1, textAlign: 'left' }}>
          Menu
        </div>
        <div style={{ marginRight: '20px', display: 'flex' }}>
          <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
          <Link to="/AboutUs" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>About Us</Link>
          <Link to="/Contact" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Contact</Link>
        </div>
        
      </div>
    
      <div style={{ display: 'flex', height: 'calc(100% - 50px)' }}>
        {menuOpen && (
          <div style={{
            width: '250px',
            backgroundColor: 'white',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px'
          }}>
            <Link to="/HostForm" style={{ textDecoration: 'none', width: '100%' }}>
              <button style={{
                backgroundColor: 'white',
                color: 'hsl(193, 58%, 42%)',
                padding: '15px',
                margin: '10px 0',
                border: '2px solid hsl(193, 58%, 42%)',
                borderRadius: '5px',
                fontSize: '18px',
                width: '100%',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}>RESIDENT</button>
            </Link>
            <Link to="/VisitorForm" style={{ textDecoration: 'none', width: '100%' }}>
              <button style={{
                backgroundColor: 'white',
                color: 'hsl(193, 58%, 42%)',
                padding: '15px',
                margin: '10px 0',
                border: '2px solid hsl(193, 58%, 42%)',
                borderRadius: '5px',
                fontSize: '18px',
                width: '100%',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}>VISITOR</button>
            </Link>
            <Link to="/HostList" style={{ textDecoration: 'none', width: '100%' }}>
              <button style={{
                backgroundColor: 'white',
                color: 'hsl(193, 58%, 42%)',
                padding: '15px',
                margin: '10px 0',
                border: '2px solid hsl(193, 58%, 42%)',
                borderRadius: '5px',
                fontSize: '18px',
                width: '100%',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}>RESIDENTS LIST</button>
            </Link>
            <Link to="/VisitorList" style={{ textDecoration: 'none', width: '100%' }}>
              <button style={{
                backgroundColor: 'white',
                color: 'hsl(193, 58%, 42%)',
                padding: '15px',
                margin: '10px 0',
                border: '2px solid hsl(193, 58%, 42%)',
                borderRadius: '5px',
                fontSize: '18px',
                width: '100%',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}>VISITOR LIST</button>
            </Link>
          </div>
        )}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '20px',
            border: '1px solid',
            borderRadius: '8px',
            backgroundColor: 'white',
            color: 'hsl(193, 58%, 42%)',
          }}>
            <h1>SAFE STAY</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
