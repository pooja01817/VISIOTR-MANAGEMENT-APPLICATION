const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./models/users');
const HostModel = require('./models/host');
const VisitorModel = require('./models/visitor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookiesParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));
app.use(cookiesParser());

const port = 3001;
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://poojamandadapu:Pooja123@cluster0.cqavb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            const token = jwt.sign({ email: user.email },
              "jwt-secret-key", { expiresIn: '1d' })
            res.cookie('token', token)
            return res.json("success")
          } else {
            return res.json("The password is incorrect")
          }
        })
      } else {
        return res.json("No record is exist")
      }
    })
    .catch(err => {
      console.error('Error during login:', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    });
})

app.post('/register', (req, res) => {
  const { name, email, password, mobile } = req.body;

  UserModel.findOne({ email: email })
    .then(existingUser => {
      if (existingUser) {
        return res.status(409).json({ error: 'User with this email already exists.' });
      }

      bcrypt.hash(password, 10)
        .then(hash => {
          UserModel.create({ name, email, password: hash, mobile })
            .then(user => res.json("success"))
            .catch(err => {
              console.error('Error creating user:', err);
              res.status(500).json({ success: false, error: 'Internal Server Error' });
            });
        })
        .catch(err => {
          console.error('Error hashing password:', err);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
        });
    })
    .catch(err => {
      console.error('Error finding user:', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    });
});

app.post('/send-otp', async (req, res) => {
  try {
    const decodedEmail = decodeURIComponent(req.body.email);
    const { email, otp } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: 'Email is required.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "vrproject6300@gmail.com",
        pass: "xcpz kjal nusv yufc"
      }
    });
    const mailOptions = {
      from: "vrproject6300@gmail.com",
      to: decodedEmail,
      subject: 'Verification Code for Registration',
      text: `Your OTP for registration is: ${otp}`
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return res.json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    res.status(500).json({ success: false, error: 'Failed to send OTP email.' });
  }
});

// Endpoint to handle saving host details
app.post('/HostForm', (req, res) => {
  const { name, age, phone, email, aadharNo, flatNo, gender } = req.body;

  HostModel.create({ name, age, phone, email, aadharNo, flatNo, gender })
    .then(host => {
      console.log('Host details saved:', host);
      res.json({ success: true, message: 'Host details saved successfully' });
    })
    .catch(err => {
      console.error('Error saving host details:', err);
      res.status(500).json({ success: false, error: 'Failed to save host details' });
    });
});

// Endpoint to handle saving visitor details
app.post('/VisitorForm', (req, res) => {
  const { name, phoneNo, email, gender, hostName, entryTime, exitTime, Purpose } = req.body;

  VisitorModel.create({ name, phoneNo, email, gender, hostName, entryTime, exitTime, Purpose })
    .then(visitor => {
      console.log('Visitor details saved:', visitor);
      res.json({ success: true, message: 'Visitor details saved successfully' });
    })
    .catch(err => {
      console.error('Error saving visitor details:', err);
      res.status(500).json({ success: false, error: 'Failed to save visitor details' });
    });
});

app.get('/VisitorList', (req, res) => {
  VisitorModel.find()
    .then(visitors => res.json(visitors))
    .catch(err => {
      console.error('Error retrieving visitor list:', err);
      res.status(500).json({ success: false, error: 'Failed to retrieve visitor list' });
    });
});

app.get('/HostList', (req, res) => {
  HostModel.find()
    .then(hosts => res.json(hosts))
    .catch(err => {
      console.error('Error retrieving host list:', err);
      res.status(500).json({ success: false, error: 'Failed to retrieve host list' });
    });
});

app.post('/api/send-email', async (req, res) => {
  const { email, data } = req.body;

  try {
    // Create reusable transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com', // Your Gmail account
        pass: 'your-password', // Your Gmail password (make sure to use environment variables for security)
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'your-email@gmail.com', // Sender address
      to: email, // List of receivers
      subject: 'Visitor QR Code', // Subject line
      text: 'Here is your QR Code:', // Plain text body
      html: `<p>Here is your QR Code:</p><br/><img src="cid:qrcode" alt="QR Code"/>`, // HTML body with embedded QR Code
      attachments: [{
        filename: 'qrcode.png',
        path: `data:image/png;base64,${data}`, // Assuming you pass base64 encoded image data in 'data'
        cid: 'qrcode' // Same cid value as in the HTML img src
      }],
    });

    console.log('Email sent:', info.messageId);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error sending email:', error);
    res.sendStatus(500);
  }
});





app.listen(port, () => {
  console.log('Server is running on port', port);
});
