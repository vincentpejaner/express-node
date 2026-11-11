import { useState } from 'react';

export default function Login() {

    const [isSignin, setIsSignin] = useState(true);


    return (
        <>
            {isSignin ? <Signin /> : <Signup />}

            <button onClick={() => setIsSignin(!isSignin)}>
                {isSignin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
        </>
    )
}


function Signin() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }


    function handleSubmit(e) {
        e.preventDefault();

    }

    return (


        <>
            <h1>Signin</h1>

            <form onSubmit={handleSubmit}>
                <label>Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />

                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />

                <button type="submit">Sign in</button>
            </form>
        </>
    )
}


function Signup() {


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }


    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <>

            <h1>Signup</h1>

            <form onSubmit={handleSubmit}>
                <label>Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />

                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />

                <button type="submit">Sign up</button>
            </form>
        </>
    )
}