import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VisitorsList() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/VisitorList')
      .then(response => {
        setVisitors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the visitors data!', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Visitor List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Phone</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Gender</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Host Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Entry Time</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Exit Time</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map(visitor => (
            <tr key={visitor._id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{visitor._id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{visitor.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{visitor.phoneNo}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{visitor.email}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{visitor.gender}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{visitor.hostName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{new Date(visitor.entryTime).toLocaleString()}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{new Date(visitor.exitTime).toLocaleString()}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{visitor.Purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VisitorsList;
