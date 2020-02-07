import React from 'react'

const Form = (props) => 
(
<div className="container"> 
    <form  className="white">
        <h5 className="grey-text text-darken-3">Create a new project</h5>
        <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
        </div>
        <div className="input-field">
            <label htmlFor="content">Project Contact</label>
            <input type="text" id="content" />
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create Project</button>
        </div>
    </form>
</div>
)
export default Form