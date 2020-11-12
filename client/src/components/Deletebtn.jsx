import React from "react"
import axios from "axios"
import {navigate} from "@reach/router"


const DeleteBtn = props => {
    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/project/" + id)
            .then(navigate("/project/"))
    }
    return (
        <button type="button" onClick={() => deleteHandler(props.id)}>Delete?</button>
    )
}

export default DeleteBtn