import React, {useState, useEffect} from "react";
import './ExerciseDescriptionPopup.css';
import ProgrammeService from '../services/ProgrammeService'


const AddToProgramme = ({ exerciseName }) => {
    const [selectedProgramme, setselectedProgramme] = useState('');
    const [allDropdownProgrammes, setAllDropdownProgrammes] = useState([]);


    // need to set up the useeffect forst because its asynchnois and ive only been given a promise rather than the array that i wanted to map over
    useEffect(() => {
        ProgrammeService.getProgrammesNames()
            .then(programmes => setAllDropdownProgrammes(programmes))
            .catch(error => {
                console.error(error);
            });
    }, []);


    // handler event that handles the chnage of programme based on the users selection from the downdown menu
    const handleProgrammeSelected = (event) => {
        const programmeChange = event.target.value;
        setselectedProgramme(programmeChange);
    };


    // this event handler/function should save an exercise object to the DB under the KV of "exercise_name":[]
    const handleAddingExerciseToProgramme = (event) => {
        event.preventDefault();

        const selectedProgrammeName = selectedProgramme; // Get the selected programme name from useState state

        // Fetch existing programmes from the database
        ProgrammeService.getProgrammes()
            .then((data) => {
            // Find the specific programme that matches the selected programme name
            const selectedProgrammeData = data.find(
                (programme) => programme.programme_name === selectedProgrammeName
            );
            if (selectedProgrammeData.exercise_name.length !== 0){
                // Update the exercise list for the selected programme
                const updatedExerciseList = [...selectedProgrammeData.exercise_name, exerciseName];

                // Create a payload to update the programme in the database
                const payload = {
                    _id: selectedProgrammeData._id,
                    exercise_name: updatedExerciseList,
                };
    
                // Use ProgrammeService.updateProgramme to update the programme in the database
                ProgrammeService.updateProgramme(payload)
            };
        })

    }





    return (

        <div className="modalProgrammeBody">

            {/* this form saves a exercise to an exisiting programme on the db */}
            <form onSubmit={handleAddingExerciseToProgramme}>
            <h3>Add  <i>{exerciseName}</i> to an exisiting programme</h3>

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

        </div>
    )



};

export default AddToProgramme;