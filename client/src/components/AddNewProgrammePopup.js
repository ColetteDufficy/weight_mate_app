import React, {useState} from "react";
import './ExerciseDescriptionPopup.css';
import OutsideClickHandler from 'react-outside-click-handler'; 
import ProgrammeService from '../services/ProgrammeService'
import AddToProgramme from "./AddToProgramme";


const AddNewProgrammePopup = ({ closeProgrammeModal, exerciseName }) => {
    const [programme_name, setProgramme_Name] = useState(""); //for hen i want to add a new programme name
    const [notes, setNotes] = useState(""); //for when i want to add new notes with the new prgramme
    const [programmes, setProgrammes] = useState([]) // used in handleSubmitNewProgramme()




    // event handler for name update - function 
    const handleNameChange = (event) => {
        const nameChange = event.target.value;
        setProgramme_Name(nameChange);
    };


    // event handler for notes update - function 
    const handleNotesChange = (event) => {
        const notesChange = event.target.value;
        setNotes(notesChange);
    };



    // this event handler/function submits a new programe to the db
    const handleSubmitNewProgramme = (event) => {
        event.preventDefault();
        
        ProgrammeService.addNewProgramme(
            {
                programme_name: programme_name, 
                notes: notes,
                exerciseName: [] // adding an empty array so that exercises can be saved back
        })
        .then(savedProgramme => setProgrammes([...programmes, savedProgramme]));

        setProgramme_Name("");
        setNotes("");
    };




    return (
        <div className="modalBackground"> 
            <div className="modalContainer"> 

                <div className="modalProgrammeBody">
                    <OutsideClickHandler onOutsideClick={closeProgrammeModal}>

                    <AddToProgramme exerciseName={exerciseName} />


                         {/* this form submits a new programe to the db */}
                    <form onSubmit={handleSubmitNewProgramme}>
                        <h3>Create a new programme:</h3> 

                        <label>Programme Name: </label>
                        <input type="text" value={programme_name} placeholder="Programme name here" onChange={handleNameChange} style={{width: "290px"}} exerciseName={exerciseName}/>
                        <br></br>

                        <label> Notes: </label>
                        <input type="text" value={notes} placeholder="Add notes here"  onChange={handleNotesChange}style={{width: "370px"}}/>
                        <br></br>

                        <input type="submit" name="submit" value="Save new programme" />
                        </form>


                    <div className="modalFooter">
                            <button className="modalFooterButton" onClick={closeProgrammeModal}>close</button>
                    </div>
                    </OutsideClickHandler>
                </div>
            </div>
        </div>
    )



};

export default AddNewProgrammePopup;