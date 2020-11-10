import React, { useEffect, useState } from 'react'
import {Link} from '@reach/router'
import axios from 'axios';

export default props => {
    const [project, setProject] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/project/" + props.id)
            .then(res => setProject(res.data))
    }, [])
    return (
        <div>
            <h4>Project Name: {project.projName}</h4>
            <p>Description: {project.description}</p>
            <p>Cost: ${project.price}</p>
            <Link to={"/project/" + props.id + "/edit"}>Edit Project</Link>
        </div>
    )
}
