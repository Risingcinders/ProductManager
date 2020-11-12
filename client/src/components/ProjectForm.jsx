import React, { useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'

const ProjectForm = (props) => {
    const {form,errors,handleChange,submitValue,handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
                <p>
                    <label>Project Name</label>
                    <br />
                    <input
                        type="text"
                        name="projName"
                        value={form.projName}
                        onChange={handleChange}
                    />
                    <br />
                    <span>
                        {errors.projName ? errors.projName.message : null}
                    </span>
                </p>
                <p>
                    <label>Description</label>
                    <br />
                    <input
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                    />
                    <br />
                    <span>
                        {errors.description ? errors.description.message : null}
                    </span>
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input
                        type="Number"
                        min="0"
                        step="1"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                    />
                    <br />
                    <span>{errors.price ? errors.price.message : null}</span>
                </p>
                <input type="submit" value={submitValue} />
            </form>
    )
}

export default ProjectForm