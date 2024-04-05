import React, { useState } from "react";

function Home() {
    // State to store credentials
    const [credentials, setCredentials] = useState([]);
    // State to store new credential input
    const [newCredential, setNewCredential] = useState({});
    // State to store uploaded image
    const [uploadedImage, setUploadedImage] = useState(null);

    // Handle input change for new credential
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCredential(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // Store uploaded image
            setUploadedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Handle submission of new credential
    const handleSubmit = (e) => {
        e.preventDefault();
        // Combine new credential with uploaded image
        const credentialWithImage = { ...newCredential, image: uploadedImage };
        // Update credentials array
        setCredentials(prevState => [...prevState, credentialWithImage]);
        // Clear input fields after submission
        setNewCredential({});
        // Clear uploaded image
        setUploadedImage(null);
    };

    return (
        <div className="container mt-4" style={{ maxWidth: "780px" }}>
            <h1 className="text-center mb-4">Education Credentials Storing Platform</h1>

            {/* Form to add new credential */}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" name="firstName" className="form-control" value={newCredential.firstName || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input type="text" name="lastName" className="form-control" value={newCredential.lastName || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                    <input type="date" name="dateOfBirth" className="form-control" value={newCredential.dateOfBirth || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="institution" className="form-label">Institution:</label>
                    <input type="text" name="institution" className="form-control" value={newCredential.institution || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="course" className="form-label">Course:</label>
                    <input type="text" name="course" className="form-control" value={newCredential.course || ""} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Upload NFT:</label>
                    <input type="file" name="image" className="form-control" onChange={handleImageChange} accept="image/*" />
                </div>
                <button type="submit" className="btn btn-dark">Save Credential</button>
            </form>

            {/* Display stored credentials */}
            <div className="mt-5">
                <h2 className="text-center mb-4">Stored Credentials</h2>
                {credentials.length > 0 ? (
                    <ul className="list-group">
                        {credentials.map((credential, index) => (
                            <li key={index} className="list-group-item">
                                <strong>First Name:</strong> {credential.firstName}, <strong>Last Name:</strong> {credential.lastName}, <strong>Date of Birth:</strong> {credential.dateOfBirth}, <strong>Institution:</strong> {credential.institution}, <strong>Course:</strong> {credential.course}
                                {credential.image && ( // Display uploaded image if available
                                    <div className="mt-2">
                                        <img src={credential.image} alt="NFT" className="img-fluid" style={{ maxWidth: "200px" }} />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center">No credentials stored yet.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
