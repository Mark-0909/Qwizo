'use client';

import { useState } from 'react';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student'); // Default to student
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    // Submit the form data (to your API or database)
    console.log({
      email,
      password,
      userType,
    });

    // Reset fields after submission
    setEmail('');
    setPassword('');
    setUserType('student');
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Create Account</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="text-gray-400 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="text-gray-400 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Role:</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="userType" value="student" checked={userType === 'student'} onChange={() => setUserType('student')} className="form-radio" />
                <span className='text-gray-400'>Student</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="radio" name="userType" value="teacher" checked={userType === 'teacher'} onChange={() => setUserType('teacher')} className="form-radio"/>
                <span className='text-gray-400'>Teacher/Professor</span>
              </label>
            </div>
          </div>


          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
