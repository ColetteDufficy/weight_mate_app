import React, { useState } from "react"
import ExerciseDescriptionPopup from "./ExerciseDescriptionPopup";
import AddNewProgrammePopup from "./AddNewProgrammePopup";



const SingleExercise = ({exercise}) => {
    // console.log(exercise);

        // usestate to control the display of the exercise description popup
        const [displayDescription, setDisplayDescription] = useState(false);
        const [displayProgramme, setDisplayProgramme] = useState(false);

        // popup always starts hidden. 
        const handleDisplayDescription = () => {
            setDisplayDescription(!displayDescription)
        }

        const handleDisplayProgramme = () => {
            setDisplayProgramme(!displayProgramme)
        }


    return (
        <div className="single-exercise">
            <h2> {exercise.name} </h2>
            
                <button className="modalButton" onClick={handleDisplayDescription}> How to </button> 
                {displayDescription && <ExerciseDescriptionPopup exerciseName={exercise.name} exerciseInstruction={exercise.instructions} closeModal={handleDisplayDescription}/>}


            <br></br>

            <button className="modalButton" onClick={handleDisplayProgramme}> Add to a programme </button>
            {displayProgramme && <AddNewProgrammePopup closeProgrammeModal={handleDisplayProgramme}/> }
        </div>
    )
}

export default SingleExercise;


