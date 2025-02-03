import {useEffect, useState} from 'react';
import {API_URL} from "../config";

function App() {
    const [message, setMessage] = useState('');

    useEffect(()=> {
        const fetchMessage = async () => {
            const response = await fetch (`${API_URL}/hello/personalized`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({first: 'Ensign', last: 'Student'})
            });
            const text = await response.text();
            setMessage(text);
        };
        fetchMessage();
    }, []);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            height: "100vh",
            justifyContent: "center",
            background: "#74c69d"
        }}>

            <h1 style={{ fontSize: "84px" }}>RANDOM TASK APP</h1>
            <h2 style={{ fontSize: "56px" }}>Effortless Task Management</h2>
            <h3 style={{ fontSize: "36px" }}>Organize, Prioritize, and Conquer your To-Do List with Ease</h3>
            {/*<p>{message}</p>*/}

        </div>
    );
}

export default App;
