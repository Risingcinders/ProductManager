import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

export default (props) => {

    console.log(props)

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/project/" + id)
            .then(navigate("/projects"))
    }

    return (
        <>
            {props.projects.map((projObj, index) => { return(
                <tr key={index}>
                    <td><Link to={"/project/" + projObj._id}>{projObj.projName}</Link></td>
                    <td>{projObj.price}</td>
                    <td>{projObj.description}</td>
                    <td> <button type="button" onClick={(e) => deleteHandler(projObj._id)}>Delete?</button></td>
                </tr>
            )})}
        </>
    );
};
