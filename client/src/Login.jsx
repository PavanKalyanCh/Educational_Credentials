import React, { useState } from "react"; // Import React and useState hook for state management
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import axios from 'axios'; // Import axios for HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for programmatic navigation

function Login() { // Define the Login component
    const [email, setEmail] = useState(); // State for storing email input
    const [password, setPassword] = useState(); // State for storing password input
    const navigate = useNavigate(); // Function for programmatic navigation

    const handleSubmit = (e) => { // Function to handle form submission
        e.preventDefault(); // Prevent default form submission behavior
        axios.post("http://localhost:3001/login", { email, password }) // Send POST request to login endpoint
        .then(result => { // Handle response from the server
            console.log(result); // Log the response
            if(result.data === "Success"){ // If login is successful
                navigate("/home"); // Redirect to the home page
            } else { // If login is unsuccessful
                navigate("/register"); // Redirect to the registration page
                alert("You are not registered to this service"); // Show alert message
            }
        })
        .catch(err => console.log(err)); // Handle errors
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundImage: "url('src/login.jpg')", backgroundSize: "cover"}}>
            <div className="p-5 rounded w-50" style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}> {/* Login container */}
                <h2 className="text-center mb-4">Login</h2> {/* Login header */}
                <form onSubmit={handleSubmit}> {/* Login form */}
                    <div className="mb-3"> {/* Email input */}
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="text" 
                            placeholder='Enter Email' 
                            autoComplete='off' 
                            name='email' 
                            className='form-control rounded-0' 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3"> {/* Password input */}
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            placeholder='Enter Password' 
                            name='password' 
                            className='form-control rounded-0' 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100 rounded-10">Login</button> {/* Login button */}
                </form>
                <p className="mt-3 text-center" style={{ color: "black" }}> {/* Sign up link */}
                    Don't have an account? <Link to="/register" style={{ color: "black" }}>Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login; // Export the Login component
