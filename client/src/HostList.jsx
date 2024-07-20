import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HostsList() {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/HostList')
      .then(response => {
        setHosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the hosts data!', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Residents List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Phone</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Aadhar No</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Flat No</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {hosts.map(host => (
            <tr key={host._id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{host._id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{host.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{host.age}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{host.phone}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{host.email}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{host.aadharNo}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{host.flatNo}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{host.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HostsList;
