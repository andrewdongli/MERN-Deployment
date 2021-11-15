import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'

const New = () => {
    return (
        <div className="d-flex flex-column">
            <div>
                <h1>Add Pirate</h1>
                <Link to="/"><button className="btn btn-primary">Crew Board</button></Link>
            </div>
            <Form />
        </div>
    )
}

export default New
