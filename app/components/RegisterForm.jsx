// components/RegisterForm.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function RegisterForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleRegister = async () => {
        // Perform registration logic here
        // For example, you can send the form data to your server
        // and handle the registration process

        // After successful registration, navigate to another page
        router.push('/'); // Redirect to the home page
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
}
