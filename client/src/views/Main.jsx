import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

export default () => {
    const [projArr, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/projects")
            .then((res) => {
                setProjects(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <ProjectForm />
            <table>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Project Price</th>
                        <th>Project Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{loaded ? <ProjectList projects={projArr} />: null}</tbody>
            </table>
        </div>
    );
};
