import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import ProjectForm from "../components/ProjectForm";

const Update = (props) => {
    const { id } = props;
    const [errors, setErrors] = useState({});
    const [dataObj,setDataObj] = useState({
        projName : "",
        description : "",
        price : 0,
    });

    const updateObj = (e) => {
        setDataObj({
            ...dataObj,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/project/" + id).then((res) => {
            setDataObj(res.data.results)
        });
    }, []);

    const updateProject = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/project/" + id, dataObj)
            .then((res) => {
                if (res.data.results) {
                    navigate("/project/");
                } else {
                    setErrors(res.data);
                }
                console.log(res.data)
            });
    };

    return (
        <div>
            <h1>Update a Project</h1>
            <ProjectForm 
                form = {dataObj}
                errors={errors}
                handleChange={updateObj}
                handleSubmit={updateProject}
                submitValue="Update Project"
            />
            
        </div>
    );
};

export default Update;
