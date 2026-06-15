import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from './AuthContext';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const result = login(email, password);

        if (!result.success) {
            setError(result.message);
            return;
        }

        setSuccess(result.message);
        setTimeout(() => navigate('/'), 1000);
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <div className="w-full max-w-md">
                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-xl">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            Welcome Back
                        </h1>

                        <p className="text-white/60 mt-2">
                            Sign in to your LuxAuto account
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
                        <div>
                            <label className="block text-sm text-white/80 mb-2">
                                Email
                            </label>

                            <div className="flex items-center bg-black border border-white/10 rounded-lg px-4">
                                <FaEnvelope className="text-white/50" />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent px-3 py-3 text-white outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-white/80 mb-2">
                                Password
                            </label>

                            <div className="flex items-center bg-black border border-white/10 rounded-lg px-4">
                                <FaLock className="text-white/50" />

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-transparent px-3 py-3 text-white outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-white/70">
                                <input type="checkbox" className="accent-white" />
                                Remember me
                            </label>

                            <a
                                href="#"
                                className="text-white/70 hover:text-white"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-white/90 transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="my-6 flex items-center">
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="px-4 text-white/50 text-sm">OR</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    <p className="text-center text-white/60 text-sm">
                        Don't have an account?{' '}
                        <NavLink
                            to="/signup"
                            className="text-white hover:underline"
                        >
                            Create Account
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;