import React, { useState } from 'react';
import axios from 'axios';

function HostForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    aadharNo: '',
    flatNo: '',
    gender: '', // Add gender field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/HostForm', formData);
      console.log(response.data);
      // Optionally, you can reset the form after successful submission
      setFormData({
        name: '',
        age: '',
        phone: '',
        email: '',
        aadharNo: '',
        flatNo: '',
        gender: '', // Reset gender field
      });
      alert('Host details saved successfully');
    } catch (error) {
      console.error('Error saving host details:', error);
      alert('Failed to save host details');
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
        <h1>Resident Details</h1>
        <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
        <br /><br />
        <label>Age: <input type="number" name="age" value={formData.age} onChange={handleChange} required /></label>
        <br /><br />
        <label>Phone: <input type="text" name="phone" value={formData.phone} onChange={handleChange} required /></label>
        <br /><br />
        <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
        <br /><br />
        <label>Aadhar No: <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} required /></label>
        <br /><br />
        <label>Flat No: <input type="text" name="flatNo" value={formData.flatNo} onChange={handleChange} required /></label>
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

export default HostForm;
