import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [projName, setProjName] = useState(""); 
    const [description, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/project', {
            projName,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Project Name: </label><br/>
                <input type="text" onChange = {(e)=>setProjName(e.target.value)}/>
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="number" step="1" min="10" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description:</label><br/>
                <input type="text" onChange = {(e)=>setDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
