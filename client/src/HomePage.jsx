import React, { useState } from "react"; // Importing React and useState hook from react library
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom library

function HomePage() { // Functional component named HomePage
  const [walletStatus, setWalletStatus] = useState("Not Connected"); // State variables for wallet status, address, and balance initialized with default values
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");
  const [loginEnabled, setLoginEnabled] = useState(false); // State variable to track if login button is enabled

  const connectWallet = () => { // Function to connect wallet
    if (window.ethereum) { // Checking if MetaMask is available
      window.ethereum.request({ method: 'eth_requestAccounts' }) // Requesting access to user's accounts
        .then((accounts) => { // If successful, update wallet status and address
          setWalletStatus("Connected");
          setWalletAddress(accounts[0]);
          // Fetch wallet balance if needed
          console.log('Wallet connected successfully.');
          setLoginEnabled(true); // Enable login button after connecting wallet
        })
        .catch((error) => { // If error occurs, log error and update wallet status
          console.error('Error connecting wallet:', error);
          setWalletStatus("Not Connected");
          setWalletAddress("");
          setWalletBalance("");
        });
    } else { // If MetaMask is not available, log message
      console.log('MetaMask not found.');
    }
  };

  return (
    <div className="bg-secondary min-vh-100 d-flex flex-column justify-content-center align-items-center p-3 position-relative" // Main container with styles and background image
         style={{ backgroundImage: "url('src/image.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <style> {/* Inline CSS for styling */}
        {`
        .bg-secondary {
          background-color: #f8f9fa;
        }
        .bg-white {
          background-color: #ffffff;
        }
        .rounded {
          border-radius: 0.5rem;
        }
        .btn {
          border-radius: 0.5rem;
        }
        .wallet-status {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .wallet-address,
        .wallet-balance {
          font-size: 1rem;
          margin-bottom: 0.3rem;
        }
        `}
      </style>
      <div className="bg-white p-3 rounded text-center"> {/* Div for content with white background */}
        
      </div>
      <div className="position-absolute top-0 start-0 m-3"> {/* Container for Login and Sign Up buttons */}
        <Link to="/login" className={`btn btn-primary me-2 ${loginEnabled ? "" : "disabled"}`}>Login</Link> {/* Login button */}
        <Link to="/register" className={`btn btn-success me-2 ${loginEnabled ? "" : "disabled"}`}>Sign Up</Link> {/* Sign Up button */}
      </div>
      <div className="position-absolute top-0 end-0 m-3"> {/* Container for Connect Wallet button */}
        <button className="btn btn-info" onClick={connectWallet}>Connect Wallet</button> {/* Connect Wallet button */}
      </div>
        <div className="mt-3 text-center" style={{ position: "absolute", bottom: "20px", right: "20px", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
          <p className="wallet-status" style={{ marginBottom: "10px", fontSize: "1.2rem", color: "#333" }}>Wallet Connection Status: {walletStatus}</p>
          {walletAddress && <p className="wallet-address" style={{ marginBottom: "5px", fontSize: "1rem", color: "#555" }}>Wallet Address: {walletAddress}</p>}
          {walletBalance && <p className="wallet-balance" style={{ fontSize: "1rem", color: "#555" }}>Wallet Balance: {walletBalance}</p>}
        </div>
      </div>
  );
}

export default HomePage; // Exporting HomePage component
