import React from 'react';
import { Link } from 'react-router-dom';

function Home1() {
  return (
    <div style={{ height: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0' }}>
      <div style={{
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        padding: '10px 0',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        HOME
      </div>
      <div style={{ display: 'flex', height: 'calc(100% - 50px)' }}>
        <div style={{
          width: '250px',
          backgroundColor: '#333',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px'
        }}>
          
          <Link to="/VisitorForm" style={{ textDecoration: 'none', width: '100%' }}>
            <button style={{
              backgroundColor: 'hsl(193, 58%, 42%)',
              color: 'white',
              padding: '15px',
              margin: '10px 0',
              border: 'none',
              borderRadius: '5px',
              fontSize: '18px',
              width: '100%',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}>GET VISITOR PASS</button>
          </Link>
          
          
        </div>
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
            backgroundColor: 'hsl(193, 58%, 42%)'
          }}>
            <h1>SAFE STAY</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
