import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Details = () => {

    const {id} = useParams();

    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [chests, setChests] = useState();
    const [catchPhrase, setCatchPhrase] = useState();
    const [position, setPosition] = useState("Captain");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    useEffect( () => {
        axios.get("http://localhost:8000/api/pirate/" + id)
            .then(res => {
                console.log(res.data)
                setName(res.data.name);
                setImage(res.data.image);
                setChests(res.data.chests);
                setCatchPhrase(res.data.catchPhrase);
                setPosition(res.data.position);
                setPegLeg(res.data.pegLeg);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHand);
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1 className="text-center">{name}</h1>
            <div className="d-flex justify-content-around">
                <div>
                    <img src={image} alt="image of pirate" height="300px" width="300px" />
                    <h2 className="text-center">" {catchPhrase} "</h2>
                </div>
                <div>
                    <h4 className="text-center">About</h4>
                    <h5>Position: {position}</h5>
                    <h5>Treasures: {chests}</h5>
                    <h5>Peg Leg: {(pegLeg) ? "Yes" : "No"}</h5>
                    <h5>Eye Patch: {(eyePatch) ? "Yes" : "No"}</h5>
                    <h5>Hook Hand: {(hookHand) ? "Yes" : "No"}</h5>
                </div>
            </div>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Details
