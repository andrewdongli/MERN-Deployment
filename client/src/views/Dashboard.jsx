import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';

const Dashboard = () => {
    
    const [allCrews, setAllCrews] = useState([]);

    const [deleted, setDeleted] = useState(true);
    const history = useHistory();

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pirates`)
            .then(res => {
                console.log(res.data)
                setAllCrews(sortByKey(res.data, "name"))
            })
            .catch(err => console.log(err))
    },[deleted])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/pirate/" + id)
            .then( res => {
                console.log(res.data)
                setDeleted(!deleted)
            })
            .catch( err => console.log(err))
    }

    function sortByKey(array,key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];
            if (x < y) {
                return -1
            } 
            if ( x > y) {
                return 1
            }
            return 0
        });
    }

    return (
        <div>
            <div className="d-flex">
                <h1>Pirate Crew</h1>
                <button className="btn btn-primary ms-3" onClick={()=> history.push("/pirate/new")}>Add Pirate</button>
            </div>
            {
                (allCrews) ? allCrews.map(crew => {
                    return (
                        <div className="d-flex">
                            <img src={crew.image} alt="image of pirate" height="100px" width="100px" />
                            <div className="ms-3">
                                <h5 className="text-center">{crew.name}</h5>
                                <div>
                                    <button className="btn btn-primary me-1" onClick={ () => history.push(`/pirate/${crew._id}`)}>View Pirate</button>
                                    <button className="btn btn-danger ms-1" onClick={ () => deleteHandler(crew._id)}>Walk the Plank</button>
                                </div>
                            </div>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default Dashboard
