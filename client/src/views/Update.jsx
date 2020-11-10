import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
    const { id } = props;
    const [projName, setProjName] = useState(""); 
    const [description, setDesc] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/api/project/' + id)
            .then(res => {
                setProjName(res.data.projName);
                setDesc(res.data.description);
                setPrice(res.price);
            })
    }, [])
    const updateProject = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/project/' + id, {
            projName,
            price,
            description
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Project</h1>
            <form onSubmit={updateProject}>
                <p>
                    <label>Project Name</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={projName} 
                    onChange={(e) => { setProjName(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="lastName"
                    value={description} 
                    onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="Number" 
                    min="0"
                    step="1"
                    name="lastName"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
