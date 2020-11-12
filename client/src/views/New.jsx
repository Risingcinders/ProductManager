import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import ProjectForm from "../components/ProjectForm";

const New = () => {
    const [dataObj, setDataObj] = useState({
        projName: "",
        description: "",
        price: 0,
    });
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/project", dataObj).then((res) => {
            console.log(res.data)
            if (res.data.results) {
                navigate("/project/");
            } else {
                setErrors(res.data);
            }
        });
    };

    const updateObj = (e) => {
        setDataObj({
            ...dataObj,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h3>Create a New Project</h3>
            <ProjectForm
                handleSubmit={onSubmitHandler}
                handleChange={updateObj}
                form={dataObj}
                errors={errors}
                submitValue="Add Project"
            />
        </div>
    );
};

export default New;
