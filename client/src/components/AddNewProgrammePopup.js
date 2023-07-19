import React, {useState} from "react";
import './ExerciseDescriptionPopup.css';
import OutsideClickHandler from 'react-outside-click-handler'; 


const AddNewProgrammePopup = ({addNewProgramme, closeProgrammeModal}) => {
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");
    const [selectedProgramme, setselectedProgramme] = useState('');

//************************************ */ need to create/acess the array of exisiting prgramme names in the db, in order to see them i the drop down list ******************************

// const dropdownProgrammes = [what goes here, so that we can map the array????]
                            // const ProgrammeService = {

                            //     // get all programmes
                            //     getProgrammes() {
                            //         return fetch(localhostURL)
                            //         .then(res => res.json());
                            //     },



    // event handler for name update - function 
    const handleNameChange = (event) => {
        const nameChange = event.target.value;
        setName(nameChange);
    };

    // event handler for notes update - function 
    const handleNotesChange = (event) => {
        const notesChange = event.target.value;
        setNotes(notesChange);
    };

    const handleSubmitNewProgramme = (event) => {
        event.preventDefault();
        addNewProgramme({
            name: name, 
            notes: notes
        });
        setName("");
        setNotes("");
    };


    const handleProgrammeSelected = (event) => {
        event.preventDefault()
// need to write the update 'programme' funciton on Programme Servoce lol
    };




    return (
        <form>
            <div className="modalBackground"> 
                <div className="modalContainer"> 

                    <div className="modalProgrammeBody">
                        <OutsideClickHandler onOutsideClick={closeProgrammeModal}>

                        {/* this form submits a new programe to the db */}
                        <form onSubmit={handleSubmitNewProgramme}>
                            <h2>Create a new programme</h2> 

                            <label>name: </label>
                            <input type="text" value={name} placeholder="Programme name here" onChange={handleNameChange} />

                            <label> notes: </label>
                            <input type="text" value={notes} placeholder="Add notes here"  onChange={handleNotesChange}style={{width: "370px"}}/>

                            <input type="submit" name="submit" value="Save new programme" />
                            </form>


                            {/* this form saves a programe to an exisiting programme on the db */}
                            <form onSubmit={handleAddingExerciseToProgramme}>
                            <h2>Add to an exisiting programme</h2>

                            <select value={selectedProgramme} onChange={handleProgrammeSelected}>
                                <option value="">Select an exisiting programme</option>
                                    {dropdownProgrammes.map((programme) => (
                                        <option key={programme} value={programme}>   
                                        {programme}    
                                        </option>
                                    ))}
                            </select>


                            <br></br>
                            <br></br>
                            <input type="submit" name="submit" value="Save" />
                            </form>


                        <div className="modalFooter">
                                <button className="modalFooterButton" onClick={closeProgrammeModal}>close</button>
                        </div>
                        </OutsideClickHandler>
                    </div>
                </div>
            </div>
         </form>
    )



};

export default AddNewProgrammePopup;