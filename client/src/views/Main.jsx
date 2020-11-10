import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectForm from '../components/ProjectForm'

export default () => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        axios
            .get("http://localhost:8000/api")
            .then((res) => setMessage(res.data.message));
    }, []);
    
    return (
        <div>
            <ProjectForm />
            <h2>Message from the backend: {message}</h2>
        </div>
    );
};
