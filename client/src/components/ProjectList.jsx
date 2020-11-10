import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default (props) => {

    console.log(props)

    return (
        <>
            {props.projects.map((projObj, index) => { return(
                <tr key={index}>
                    <td><Link to={"/project/" + projObj._id}>{projObj.projName}</Link></td>
                    <td>{projObj.price}</td>
                    <td>{projObj.description}</td>
                </tr>
            )})}
        </>
    );
};
