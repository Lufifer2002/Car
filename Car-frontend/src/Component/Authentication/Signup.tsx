import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from './AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const result = signup(formData.fullName, formData.email, formData.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    setSuccess(result.message);
    setTimeout(() => navigate('/signin'), 1500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              Create Account
            </h1>

            <p className="text-white/60 mt-2">
              Join LuxAuto today
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-white/80 mb-2">
                Full Name
              </label>

              <div className="flex items-center bg-black border border-white/10 rounded-lg px-4">
                <FaUser className="text-white/50" />

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent px-3 py-3 text-white outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-white/80 mb-2">
                Email
              </label>

              <div className="flex items-center bg-black border border-white/10 rounded-lg px-4">
                <FaEnvelope className="text-white/50" />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent px-3 py-3 text-white outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-white/80 mb-2">
                Password
              </label>

              <div className="flex items-center bg-black border border-white/10 rounded-lg px-4">
                <FaLock className="text-white/50" />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-transparent px-3 py-3 text-white outline-none"
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-white/80 mb-2">
                Confirm Password
              </label>

              <div className="flex items-center bg-black border border-white/10 rounded-lg px-4">
                <FaLock className="text-white/50" />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-transparent px-3 py-3 text-white outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-white/90 transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-white/60 text-sm mt-6">
            Already have an account?{' '}
            <NavLink
              to="/signin"
              className="text-white hover:underline"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;