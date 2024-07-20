import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { useLocation } from 'react-router-dom';

function QRCodePage() {
  const location = useLocation();
  const visitorData = location.state;
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (visitorData) {
      // Assuming you have a backend API endpoint to send emails
      sendEmail(visitorData);
    }
  }, [visitorData]);

  const sendEmail = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'vrproject6300@gmail.com', data }),
      });

      if (response.ok) {
        setEmailSent(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Visitor QR Code</h1>
      {visitorData ? (
        <>
          <QRCode value={JSON.stringify(visitorData)} size={256} />
          {emailSent && <p>Email sent successfully!</p>}
        </>
      ) : (
        <p>No visitor data available</p>
      )}
    </div>
  );
}

export default QRCodePage;
