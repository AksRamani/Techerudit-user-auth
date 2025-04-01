import React, { useState } from 'react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError('Both fields are required!');
            return;
        }

        setLoading(true);
        setError('');
        
        try {
            const response = await fetch('http://localhost:5000/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const res = await response.json();
            console.log(res)
            if (res.status && res.data) {
                alert('Sign In Successful!');
                // Handle successful sign-in, like storing token or redirecting
            } else {
                setError(res.message || 'Sign In Failed');
            }
        } catch (err) {
            setError('Error connecting to the server');
            console.error(err)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sign-in-form">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign in'}
                </button>
            </form>
        </div>
    );
};

export default Signin;
