import React, {useState, useEffect} from "react";
import './ExerciseDescriptionPopup.css';
import OutsideClickHandler from 'react-outside-click-handler'; 
import ProgrammeService from '../services/ProgrammeService'


const AddNewProgrammePopup = ({ closeProgrammeModal, exerciseName }) => {
    const [programme_name, setProgramme_Name] = useState("");
    const [notes, setNotes] = useState("");
    const [selectedProgramme, setselectedProgramme] = useState('');
    const [allDropdownProgrammes, setAllDropdownProgrammes] = useState([]);
    const [programmes, setProgrammes] = useState([])



    // need to set up the useeffect forst because its asynchnois and ive only been given a promise rather than the array that i wanted to map over
    useEffect(() => {
        ProgrammeService.getProgrammesNames()
            .then(programmes => setAllDropdownProgrammes(programmes))
            .catch(error => {
                console.error(error);
            });
    }, []);


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

    
    // handler event that handles the chnage of programme based on the users selection from the downdown menu
    const handleProgrammeSelected = (event) => {
        const programmeChange = event.target.value;
        setselectedProgramme(programmeChange);
    };


    // this event handler/function submits a new programe to the db
    const handleSubmitNewProgramme = (event) => {
        event.preventDefault();
        
        ProgrammeService.addNewProgramme(
            {programme_name: programme_name, 
            notes: notes
        })

        .then(savedProgramme => setProgrammes([...programmes, savedProgramme]));

        setProgramme_Name("");
        setNotes("");
    };


    const handleAddingExerciseToProgramme = (event) => {
        event.preventDefault();
        
        ProgrammeService.updateProgramme(
            {programme_name})

        .then(savedProgramme => setProgrammes([...programmes, savedProgramme]));
    };




    return (
        <div className="modalBackground"> 
            <div className="modalContainer"> 

                <div className="modalProgrammeBody">
                    <OutsideClickHandler onOutsideClick={closeProgrammeModal}>

                        {/* this form saves a exercise to an exisiting programme on the db */}
                        <form onSubmit={handleAddingExerciseToProgramme}>
                        <h2>Add {exerciseName} <br></br>to an exisiting programme</h2>

                        <select value={selectedProgramme} onChange={handleProgrammeSelected}>
                            <option value="">Select an exisiting programme</option>
                            {allDropdownProgrammes.map((programme_name) => (
                                    <option key={programme_name} value={programme_name}>   
                                    {programme_name}      </option>
                                ))}
                        </select>


                        <br></br>
                        <br></br>
                        <input type="submit" name="submit" value="Save" />
                        </form>



                         {/* this form submits a new programe to the db */}
                    <form onSubmit={handleSubmitNewProgramme}>
                        <h2>Create a new programme:</h2> 

                        <label>Programme Name: </label>
                        <input type="text" value={programme_name} placeholder="Programme name here" onChange={handleNameChange} style={{width: "290px"}}/>
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