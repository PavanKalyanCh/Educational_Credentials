import React, { useState } from "react"; // Import React and useState hook for state management
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom for navigation
import axios from 'axios'; // Import axios for HTTP requests

function Signup() { // Define the Signup component
    const [name, setName] = useState(""); // State for storing name input
    const [email, setEmail] = useState(""); // State for storing email input
    const [password, setPassword] = useState(""); // State for storing password input
    const navigate = useNavigate(); // Function for programmatic navigation

    const handleSubmit = (e) => { // Function to handle form submission
        e.preventDefault(); // Prevent default form submission behavior
        axios.post("http://localhost:3001/register", { name, email, password }) // Send POST request to register endpoint
        .then(result => { // Handle response from the server
            console.log(result); // Log the response
            navigate("/login"); // Redirect to the login page after successful registration
        })
        .catch(err => console.log(err)); // Handle errors
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundImage: "url('src/signup.jpg')", backgroundSize: "cover"}}>
            <div className="p-5 rounded w-50" style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}> {/* Signup container */}
                <h2 className="text-center mb-4">Sign Up</h2> {/* Signup header */}
                <form onSubmit={handleSubmit}> {/* Signup form */}
                    <div className="mb-3"> {/* Name input */}
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input type="text" 
                            placeholder="Enter Name" 
                            autoComplete="off" 
                            name="name" 
                            className="form-control rounded-0"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3"> {/* Email input */}
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input type="text" 
                            placeholder="Enter Email" 
                            autoComplete="off" 
                            name="email" 
                            className="form-control rounded-0" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3"> {/* Password input */}
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input type="password" 
                            placeholder="Enter Password" 
                            name="password" 
                            className="form-control rounded-0" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100 rounded-10">Sign Up</button> {/* Signup button */}
                </form>
                <p className="mt-3 text-center" style={{ color: "black" }}> {/* Login link */}
                    Already have an account? <Link to="/login" style={{ color: "black" }}>Login</Link>
                </p>
                <div className="mt-3"> {/* Link to homepage */}
                    <Link to="/homepage" className="btn btn-dark w-100 rounded-10">Go to Homepage</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup; // Export the Signup component
