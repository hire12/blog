'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate a server-side check
    if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      // Set a cookie
      document.cookie = `auth=true; path=/`;
      localStorage.setItem('auth', 'true'); 
      router.push('/admin');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 p-4 border rounded">
      <h1 className="text-xl font-bold mb-4">Admin Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full p-2 border rounded mb-4"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border rounded mb-4"
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
