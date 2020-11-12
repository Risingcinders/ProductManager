import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectList from "../components/ProjectList";

export default () => {
    const [projArr, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/project")
            .then((res) => {
                setProjects(res.data.results);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
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
