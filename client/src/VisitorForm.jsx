import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function VisitorForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    email: '',
    gender: '',
    hostName: '',
    entryTime: '',
    exitTime: '',
    purpose: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/VisitorForm', formData);
      console.log(response.data);
      setFormData({
        name: '',
        phoneNo: '',
        email: '',
        gender: '',
        hostName: '',
        entryTime: '',
        exitTime: '',
        purpose: ''
      });
      alert('Visitor details saved successfully');
      navigate('/qr-code', { state: formData });
    } catch (error) {
      console.error('Error saving visitor details:', error);
      alert('Failed to save visitor details');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <form onSubmit={handleSubmit} style={{
        textAlign: 'center',
        padding: '20px',
        border: '1px solid',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        <h1>Visitor Details</h1>
        <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
        <br /><br />
        <label>Phone No: <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required /></label>
        <br /><br />
        <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
        <br /><br />
        <label>Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br /><br />
        <label>Host Name: <input type="text" name="hostName" value={formData.hostName} onChange={handleChange} required /></label>
        <br /><br />
        <label>Entry Time: <input type="datetime-local" name="entryTime" value={formData.entryTime} onChange={handleChange} required /></label>
        <br /><br />
        <label>Exit Time: <input type="datetime-local" name="exitTime" value={formData.exitTime} onChange={handleChange} /></label>
        <br /><br />
        <label>Purpose: <textarea name="purpose" value={formData.purpose} onChange={handleChange}></textarea></label>
        <br /><br />
        <input type="submit" value="Submit" style={{
          backgroundColor: 'hsl(193, 58%, 42%)',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }} />
      </form>
    </div>
  );
}

export default VisitorForm;
