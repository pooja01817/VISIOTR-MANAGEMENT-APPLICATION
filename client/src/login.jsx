import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        if (result.data === "success") {
          navigate('/home');
        }
      })
      .catch((error) => {
        console.error(error);
        setError("No record exists");
      });
  };

  const isLoginButtonEnabled = email && password;

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0" style={{ backgroundColor: 'hsl(193, 58%, 42%)' }} disabled={!isLoginButtonEnabled}>
            Login
          </button>
        </form>
        <p>If you don't have an account</p>
        <Link to="/register" className="btn btn-default border w-100 rounded-0 text-decoration-none" style={{ backgroundColor: 'hsl(193, 58%, 42%)', color: 'white' }}>
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;
