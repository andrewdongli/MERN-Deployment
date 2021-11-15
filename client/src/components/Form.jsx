import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';

const Form = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [chests, setChests] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [position, setPosition] = useState("Captain");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    //form state for errors
    const [formState, setFormState] = useState({
        name: "",
        image: "",
        chests: "",
        catchPhrase: "",
    })

    //errors
    const[errors, setErrors] = useState([]);
    const [nameErr, setNameErr] = useState();
    const [imageErr, setImageErr] = useState();
    const [chestsErr, setChestsErr] = useState();
    const [catchPhraseErr, setCatchPhraseErr] = useState();


    const history = useHistory();


    const onChangeHandler = (e) => {
        const {name, value} = e.target 
        setFormState({
            ...formState,
            [name] : value
        })
        if (formState.name.length >=1){
            setNameErr("")
        }
        if (formState.image.length>=1){
            setImageErr("")
        }
        if (formState.chests.length>=0) {
            setChestsErr("")
        }
        if (formState.catchPhrase.length>=1){
            setCatchPhraseErr("")
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const postData = {
            name,
            image,
            chests,
            catchPhrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        }

        //front end validations
        // setFormState(postData);
        
        
        axios.post("http://localhost:8000/api/pirate/new", postData)
            .then(res => {
                console.log("SUCCESS!!!")
                console.log(res)
                setName("");
                setImage("");
                setChests("");
                setCatchPhrase("");
                history.push("/");
            })
            .catch( err => {
                console.log("FAIL!!!!")
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                console.log(errorArr)
                setErrors(errorArr);


                //front end validations
                if (formState.name.length<1){
                    setNameErr("Pirate must have a name")
                }
                if (formState.image.length<1){
                    setImageErr("Pirate must have an image")
                }
                if (formState.chests.length<1) {
                    setChestsErr("Please enter the number of chests you have")
                }
                if (formState.chests<0) {
                    setChestsErr("Cannot have negative treasure chests")
                }
                if (formState.catchPhrase.length<1){
                    setCatchPhraseErr("Pirate must have a catch phrase")
                }
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Pirate Name:</label>
                    <input type="text" name="name" onChange={(e)=> {setName(e.target.value); onChangeHandler(e);}} value={name} className="form-control"/>
                    {(nameErr) ? <p className="text-danger">{nameErr}</p>: null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Image Url:</label>
                    <input type="text" name="image" onChange={(e)=>{setImage(e.target.value); onChangeHandler(e)}} value={image} className="form-control"/>
                    {(imageErr) ? <p className="text-danger">{imageErr}</p>: null}
                </div>

                <div className="mb-3">
                    <label className="form-label"># of Teasure Chests</label>
                    <input type="number" name="chests" onChange={(e)=>{setChests(e.target.value); onChangeHandler(e)}} value={chests} className="form-control"/>
                    {(chestsErr) ? <p className="text-danger">{chestsErr}</p>: null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Pirate Catch Phrases:</label>
                    <input type="text" name="catchPhrase" onChange={(e)=>{setCatchPhrase(e.target.value); onChangeHandler(e)}} value={catchPhrase} className="form-control"/>
                    {(catchPhraseErr) ? <p className="text-danger">{catchPhraseErr}</p>: null}
                </div>

                <div>
                    <label className="form-label">Crew Position:</label>
                    <select name="position" onChange={(e)=>setPosition(e.target.value)} className="form-select mb-3">
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>

                <div>
                    <input type="checkbox" name="pegLeg" onChange={(e)=>setPegLeg(e.target.checked)} defaultChecked className="form-check-input mb-2 me-2"/>
                    <label className="form-check-label">Peg Leg</label>
                </div>

                <div>
                    <input type="checkbox" name="eyePatch" onChange={(e)=>setEyePatch(e.target.checked)} defaultChecked className="form-check-input mb-2 me-2"/>
                    <label className="form-check-label">Eye Patch</label>
                </div>

                <div>
                    <input type="checkbox" name="hookHand" onChange={(e)=>setHookHand(e.target.checked)} defaultChecked className="form-check-input mb-3 me-2"/>
                    <label className="form-check-label">Hook Hand</label>
                </div>

                <button className="btn btn-primary mb-3">Add Pirate</button>
            </form>
            {
                (errors) ? errors.map(err => <p className="text-danger">{err}</p>) : null
            }
        </div>
    )
}

export default Form
