import { useEffect, useState } from "react";
import { API_URL } from "./config"; // Gets the API_URL from the config.js file

function App() {
    const [message, setMessage] = useState(""); // Will hold the message from the backend

    // "useEffect" is a React hook that runs after the component is mounted
    useEffect(() => {
        const fetchMessage = async () => {
                const response = await fetch(`${API_URL}/hello/personalized`, {
                    method: "POST", // POST request
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ firstName: "Ensign", lastName: "Student" }), // JSON body with attributes for a Person
                });
                const text = await response.text(); // Waits for the response and then converts it to text
                setMessage(text); // Sets the message with the text from the response
        };
        fetchMessage();
    }, []); // Dependency array ensures this runs only once when the component mounts

    return (
        <div>
            <h1>Message from the Backend:</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
