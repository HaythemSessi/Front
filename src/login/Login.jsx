import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make the POST request to the backend login route
      const response = await axios.post('/login', { mail: email, password: password });

      // Handle the response (e.g., store the access token in localStorage)
      const accessToken = response.data.accessToken;
      localStorage.setItem('accessToken', accessToken);

      // Redirect the user to the desired page after successful login
      // Replace '/dashboard' with your desired destination
     // window.location.href = '/dashboard';
     console.log("login succesfuly");
    } catch (error) {
      // Handle login error (e.g., show error message)
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
