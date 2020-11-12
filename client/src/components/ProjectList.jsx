import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteBtn from '../components/Deletebtn'

export default (props) => {

    return (
        <>
            {props.projects.map((projObj, index) => { return(
                <tr key={index}>
                    <td><Link to={"/project/" + projObj._id}>{projObj.projName}</Link></td>
                    <td>{projObj.price}</td>
                    <td>{projObj.description}</td>
                    <td> <DeleteBtn id={projObj._id} /> </td>
                </tr>
            )})}
        </>
    );
};
