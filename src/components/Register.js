import { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/registerUser', formData);
     if (res.status === 200 || res.status === 201) {
  alert('Registration successful');
}

    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister} className="p-4">
      <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
