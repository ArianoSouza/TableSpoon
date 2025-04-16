// src/pages/Login.tsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (err) {
      alert('Login inválido');
    }

    console.log(email, password)
  }

  return (
    <form onSubmit={handleLogin}>
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      <button type="submit">Entrar</button>
    </form>
  );
}