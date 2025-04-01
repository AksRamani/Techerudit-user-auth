import React, { useState } from 'react';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('0'); // Default to 'customer' (0)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password) {
            setError('All fields are required!');
            return;
        }

        setLoading(true);
        setError('');

        const formData = new FormData();
        // formData.append('firstName', firstName);
        formData.append('username', firstName + lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                alert('Sign Up Successful!');
                // Handle successful sign-up, like redirecting
            } else {
                setError(data.message || 'Sign Up Failed');
            }
        } catch (err) {
            setError('Error connecting to the server');
            console.error(err)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sign-up-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
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
                <div>
                    <label htmlFor="role">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="0">Customer</option>
                        <option value="1">Admin</option>
                    </select>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Signup